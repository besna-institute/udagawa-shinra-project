import Link from "next/link";

export default function Header() {
  return (
    <div className="relative bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a className="text-3xl font-medium">森羅プロジェクト</a>
            </Link>
          </div>
          <div className="text-xl font-medium">
            <span>拡張固有表現</span>
          </div>
        </div>
      </div>
    </div>
  );
}
