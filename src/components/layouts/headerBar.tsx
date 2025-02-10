"use client";

import { Search } from "@mui/icons-material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const bars = [
  {
    label: "Top",
    url: "/",
  },
  {
    label: "Ask",
    url: "/ask",
  },
  {
    label: "Show",
    url: "/show",
  },
  {
    label: "Jobs",
    url: "/jobs",
  },
];

const HeaderBar = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="flex items-center justify-between p-6">
        <p className="text-[32px] font-semibold leading-8">Hacker News</p>
        <div className="flex items-center justify-end gap-2">
          <button className="h-8 rounded border border-black px-2 text-sm font-bold">
            Subscribe
          </button>
          <button className="h-8 w-8 rounded border border-black">
            <Search className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="flex h-10 items-center justify-start border-b border-t border-black text-sm font-medium">
        {bars.map((bar, key) => (
          <div key={key} className="h-full">
            <Link
              href={bar.url}
              className={`flex h-full items-center px-6 ${pathname === bar.url ? "bg-black text-white" : "bg-white text-black"}`}
            >
              {bar.label}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default HeaderBar;
