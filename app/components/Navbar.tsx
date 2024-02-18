"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "@/app/logo";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      <ul>
        <li>
          <div className="px-10 py-20 bg-green-500">
            <Link
              className={`link ${pathname === "/" ? "active" : ""}`}
              href="/"
            >
              <Logo />
            </Link>
          </div>
        </li>
        <li>
          <Link
            className={`link ${
              pathname === "/nextbase/dashboard" ? "active" : ""
            }`}
            href="/nextbase/dashboard"
          >
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
}
