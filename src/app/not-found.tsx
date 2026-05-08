import Link from "next/link";
import DashboardLayout from "@/components/DashboardLayout";

export default function NotFound() {
  return (
    <DashboardLayout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <span className="text-8xl font-extrabold text-orange-500 leading-none">404</span>
        <h1 className="mt-4 text-2xl font-bold text-gray-800">Page not found</h1>
        <p className="mt-2 text-gray-500 max-w-sm">
          Looks like this page took a wrong turn. The page you&apos;re looking for doesn&apos;t
          exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-orange-600 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </DashboardLayout>
  );
}
