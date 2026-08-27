import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-100 px-4 pt-24">
        <h1 className="text-6xl font-bold text-navy">404</h1>
        <p className="text-xl text-gray-600 mt-4 text-center">
          The page you requested could not be found.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors"
        >
          Go Back Home
        </Link>
      </div>
      <Footer />
    </main>
  );
}
