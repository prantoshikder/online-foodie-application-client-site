import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        {/* Full-width app header — shared across every page and pinned to the top */}
        <div className="sticky top-0 z-30 bg-gray-50 px-6 pt-5 pb-4">
          <Header />
        </div>
        <div className="px-6 pb-5">{children}</div>
      </div>
    </div>
  );
}
