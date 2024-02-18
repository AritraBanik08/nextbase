"use client";

import { Navbar } from "@/app/components";
import DataTable from "@/app/nextbase/dashboard/components/DataTable";
import { PlusIcon } from "@heroicons/react/24/outline";
import SlidePage from "./components/SlidePage";
import { useState } from "react";


export default function Home() {
    const [showSlidePage, setSlideShowPage] = useState<boolean>(false);
    const handleClick = () => {
        setSlideShowPage(true);
    };

    return (
      <main>
        <DataTable />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 bg-blue-500 rounded-full"
          onClick={handleClick}
        >
          {" "}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />{" "}
        </svg>
        {/* <PlusIcon onClick={handleClick} /> */}
        {showSlidePage && <SlidePage onClose={() => setSlideShowPage(false)} />}
      </main>
    );
}
