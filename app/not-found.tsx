import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-6xl font-bold text-navy">404</h1>
      <p className="text-xl text-gray-600 mt-4">Page Not Found</p>
      <Link
        href="/"
        className="mt-6 inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
}