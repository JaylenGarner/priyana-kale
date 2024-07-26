import React from "react";
import Link from "next/link";

import { pages } from "@/components/navigation/helpers";

const Navigation = () => {
  return (
    <nav className="navigation">
      <span className="text-3xl italic">P.K.</span>
      <div className="space-x-6 ">
        {pages.map((page) => {
          return (
            <Link href={`${page.link}`} key={page.name}>
              {page.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
