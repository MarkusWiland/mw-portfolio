"use client";

import Link from "next/link";
import CountUpNumber from "./CountUp";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";

export default function Stats({ stats }) {
  const { data: githubData, error: githubDataError } = useSWR(
    `/api/github`,
    fetcher
  );

  return (
    <li>
      <Link href={stats.link} className="flex items-center gap-2 text-title ">
        {stats.svg}
        <div className="flex gap-2">
          <span>
            <CountUpNumber numb={githubData?.data?.public_repos} />
          </span>
          <span>{stats.name}</span>
        </div>
      </Link>
    </li>
  );
}
