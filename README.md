# Card Play Quiz Template Website

Mô tả ngắn gọn  
Card Play Quiz Template Website là một ứng dụng web tương tác phát triển bằng Next.js, được thiết kế để hỗ trợ học sinh, sinh viên học và ghi nhớ kiến thức nhanh hơn thông qua các bài quiz, flashcard và các cơ chế lặp lại theo khoảng cách (spaced repetition). Giao diện được gamify nhằm tăng mức độ tương tác bằng cách sử dụng nhân vật, sự kiện văn hóa đại chúng hoặc trích đoạn phim để làm nội dung học tập hấp dẫn hơn.
**Author:** Nguyễn Phan Đức Minh  
**Role:** AI Researcher | Deep Learning, Machine Learning, Education Technology

---

## Mục lục

1. [Tổng quan](#tổng-quan)  
2. [Tính năng chính](#tính-năng-chính)  
3. [Cài đặt và chạy dự án](#cài-đặt-và-chạy-dự-án)  
4. [Cấu trúc thư mục dự án](#cấu-trúc-thư-mục-dự-án)  
5. [Mô tả các thành phần chính](#mô-tả-các-thành-phan-chính)  
6. [Biến môi trường (Environment Variables)](#biến-môi-trường-environment-variables)  
7. [Kịch bản NPM (Scripts)](#kịch-bản-npm-scripts)  
8. [Triển khai (Deployment)](#triển-khai-deployment)  
9. [Tối ưu hiệu năng và SEO](#tối-ưu-hiệu-năng-và-seo)  
10. [Accessibility và Testing](#accessibility-và-testing)  
11. [Góp phần & Phát triển](#góp-phan--phát-triển)  
12. [Gỡ lỗi & Các vấn đề thường gặp](#gỡ-lỗi--các-vấn-đề-thường-gặp)  
13. [Tác giả & Liên hệ](#tác-giả--liên-hệ)  
14. [License](#license)

---

## Tổng quan

Mục tiêu của dự án là cung cấp một template mạnh mẽ, dễ tùy chỉnh cho việc tạo các ứng dụng học tập dạng thẻ (flashcards) và quiz tương tác. Template phù hợp cho giáo viên, nhà phát triển EdTech, hoặc sinh viên muốn xây dựng ứng dụng ôn tập kiến thức, luyện thi, hoặc ứng dụng microlearning.

Đặc điểm nổi bật:
- Dễ mở rộng: logic quản lý nội dung được tách biệt (API / store) để dễ thay thế nguồn dữ liệu.
- Tối ưu cho hiệu năng: sử dụng khả năng SSR/SSG của Next.js kết hợp tách bundle, lazy-loading.
- TypeScript: giúp code an toàn hơn và dễ bảo trì.
- Tailwind CSS: tiện cho việc tùy biến giao diện nhanh.

---

## Tính năng chính

- Hệ thống flashcard (thẻ học) với nội dung text, hình ảnh và lựa chọn trả lời.  
- Cơ chế quiz theo nhiều dạng: trắc nghiệm (multiple-choice), điền từ, ghép đôi.  
- Hệ thống lặp nhắc nhớ (spaced repetition) cơ bản để ưu tiên ôn tập thẻ có điểm yếu.  
- Lưu kết quả, điểm số, và lịch sử học của người dùng cục bộ (localStorage) hoặc qua API nếu cấu hình backend.  
- Quản lý bộ thẻ (create / read / update / delete) cho admin hoặc người tạo nội dung.  
- Thiết kế phản hồi (responsive) cho desktop, tablet, mobile.  
- Hỗ trợ đa ngôn ngữ (internationalization) nếu cấu hình thêm thư viện i18n.  
- SEO cơ bản: meta tags, Open Graph, server-side rendering cho trang tĩnh.

---

## Cài đặt và chạy dự án

### Yêu cầu
- Node.js (phiên bản LTS, đề xuất >= 18)
- NPM / Yarn / pnpm / Bun (một trong các package manager)

### Các bước cơ bản
1. Clone repository:
```bash
git clone https://github.com/your-username/Card_Play_Quiz_Template_Website.git
cd Card_Play_Quiz_Template_Website
````

2. Cài đặt phụ thuộc:

```bash
npm install
# hoặc
yarn install
# hoặc
pnpm install
```

3. Chạy ở môi trường development:

```bash
npm run dev
```

4. Mở trình duyệt đến:

```
http://localhost:3000
```

5. Build cho production:

```bash
npm run build
npm start
```

---

## Cấu trúc thư mục dự án (ví dụ)

Đây là cấu trúc thư mục đề xuất — điều chỉnh tùy theo cách bạn tổ chức repository:

```
/
├─ app/                      # Next.js App Router (pages nếu dùng pages router)
│  ├─ page.tsx               # Landing page / Home
│  ├─ layout.tsx
│  └─ (routes)/
│     ├─ quiz/
│     ├─ cards/
│     └─ admin/
├─ components/               # Các component UI tái sử dụng
│  ├─ Card/
│  ├─ Quiz/
│  ├─ Header/
│  └─ Footer/
├─ lib/                      # Hàm tiện ích, API client, helpers
├─ hooks/                    # Custom React hooks
├─ styles/                   # CSS / Tailwind config nếu cần file css
├─ public/                   # Hình ảnh, fonts, assets tĩnh
├─ scripts/                  # Scripts hữu ích (seed DB, export)
├─ prisma/ or server/        # Nếu project dùng database / backend
├─ tests/                    # Unit / integration tests
├─ .env.example
├─ next.config.js
├─ tsconfig.json
└─ README.md
```

---

## Mô tả các thành phần chính

### Components (thành phần UI)

* `Card`

  * Hiển thị nội dung flashcard: câu hỏi, hình ảnh, gợi ý và đáp án.
  * Props: `question`, `answers`, `image`, `hints`, callbacks (`onFlip`, `onAnswer`).

* `Quiz`

  * Điều phối flow của một bài quiz: tải thẻ, hiển thị câu hỏi, ghi nhận đáp án, chuyển câu.
  * Hỗ trợ chế độ theo thời gian (timed) và không theo thời gian.

* `ResultPage`

  * Hiển thị kết quả cuối cùng, thống kê số câu đúng/sai, gợi ý ôn tập.

* `AdminPanel`

  * Giao diện CRUD cho bộ thẻ (thêm sửa xóa). Có thể tích hợp authentication.

### Hooks (logic)

* `useQuiz`

  * Quản lý trạng thái bài quiz: index câu hỏi hiện tại, điểm, thời gian, xử lý trả lời.

* `useSpacedRepetition`

  * Cơ chế đơn giản gợi ý thời điểm ôn lại thẻ dựa trên điểm số/độ khó.

### Lib / Services

* `apiClient`

  * Wrapper cho fetch/axios để gọi API backend (nếu có). Hỗ trợ retry, error handling.

* `storage`

  * Abstraction cho localStorage / sessionStorage để lưu lịch sử học và trạng thái người dùng.

---

## Biến môi trường (Environment Variables)

Tạo file `.env.local` từ `.env.example` và điền các biến phù hợp:

```
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_SITE_NAME=Card Play Quiz
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
NODE_ENV=development
```

Ghi chú: Các biến bắt đầu bằng `NEXT_PUBLIC_` sẽ được public cho client; những biến khác chỉ dùng ở server.

---

## Kịch bản NPM (Scripts) — ví dụ

Phần `package.json` có thể chứa các scripts sau:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "format": "prettier --write .",
    "test": "jest",
    "typecheck": "tsc --noEmit",
    "analyze": "ANALYZE=true next build"
  }
}
```

Mô tả:

* `dev`: chạy server dev với hot reload.
* `build`: build ứng dụng cho production.
* `start`: chạy bản build.
* `lint` / `format` / `typecheck` / `test`: các bước đảm bảo chất lượng code.
* `analyze`: build kèm phân tích bundle (webpack-bundle-analyzer).

---

## Triển khai (Deployment)

### Triển khai lên Vercel

* Vercel hỗ trợ Next.js nguyên bản, chỉ cần link repository và thiết lập biến môi trường.
* Thiết lập `Build Command`: `npm run build` và `Output Directory`: (mặc định Next.js không cần quy định).
* Kích hoạt Automatic Deploy từ branch `main` hoặc `master`.

### Các lưu ý khi deploy

* Kiểm tra các biến môi trường (đặc biệt API URL).
* Nếu dùng image optimization (`next/image`) với domain khác, thêm domain vào `next.config.js` `images.domains`.
* Cấu hình headers/caching nếu cần.

---

## Tối ưu hiệu năng và SEO

* Sử dụng SSG/ISR cho nội dung tĩnh: trang giới thiệu bộ thẻ, landing page.
* Sử dụng `next/head` để thêm meta tags, title, Open Graph tags cho SEO.
* Preload font quan trọng, tối ưu hình ảnh (định dạng WebP, lazy load).
* Tối ưu bundle: code splitting, dynamic import cho component lớn (ví dụ editor, statistics).
* Kiểm tra Lighthouse để cải thiện điểm performance / accessibility / best practices / SEO.

---

## Accessibility và Testing

* Tuân thủ các tiêu chuẩn ARIA cho các element interactive (button, form control, dialog).
* Keyboard navigation: đảm bảo có thể dùng bàn phím để flip card, chọn đáp án.
* Colors contrast: đảm bảo độ tương phản phù hợp theo WCAG.
* Unit tests: Jest + React Testing Library cho component logic.
* End-to-end tests: Playwright hoặc Cypress cho flow chính (tạo quiz, chơi quiz, xem kết quả).

---

## Góp phần & Phát triển

Nếu bạn muốn đóng góp vào dự án:

1. Fork repository.
2. Tạo branch feature: `git checkout -b feature/ten-tinh-nang`.
3. Commit các thay đổi rõ ràng và có message mô tả.
4. Tạo Pull Request (PR) mô tả mục đích, thay đổi chính và cách kiểm thử.

Quy tắc code:

* Tuân theo ESLint + Prettier config.
* Viết test cho các logic quan trọng.
* Document API changes và migration nếu có.

---

## Gỡ lỗi & Các vấn đề thường gặp

* Lỗi: trang trắng hoặc build fail

  * Kiểm tra log `npm run build` để biết lỗi cụ thể (thường do TypeScript hoặc import sai đường dẫn).
* Lỗi asset không load trên production

  * Kiểm tra `public/` paths và `next.config.js` cấu hình basePath nếu dùng.
* Lỗi CORS khi gọi API

  * Cấu hình backend cho phép origin của app hoặc dùng proxy trong dev.

---

## FAQs (Câu hỏi thường gặp)

**1. Tôi có thể dùng database để lưu người dùng và kết quả không?**
Có. Bạn có thể tích hợp bất kỳ backend nào (Firebase, Supabase, Node + Express + PostgreSQL, v.v.). Mẫu cấu trúc API được tách trong `lib/apiClient` để dễ thay đổi.

**2. Dự án có hỗ trợ đa ngôn ngữ không?**
Có thể dễ dàng thêm i18n bằng `next-i18next` hoặc `next-translate`. Cần chuẩn hóa text trong file ngôn ngữ.

**3. Tôi muốn thêm authentication (đăng nhập) thì làm thế nào?**
Có thể sử dụng NextAuth.js để cấu hình OAuth hoặc email/password. Sau đó gắn quyền cho routes admin.

---

## Tác giả & Liên hệ

Tác giả: Nguyễn Phan Đức Minh
Email: [your-email@example.com](mailto:your-email@example.com)
LinkedIn: [https://www.linkedin.com/in/minhphannguyen/](https://www.linkedin.com/in/minhphannguyen/)
Portfolio: [https://your-portfolio-link.com](https://your-portfolio-link.com)

---

## License

Dự án này được phát hành theo giấy phép MIT. Xem file `LICENSE` để biết chi tiết.
