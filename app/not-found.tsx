import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-notfound flex">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <button><Link href="/">Go to homepage</Link></button>
    </div>
  );
}
