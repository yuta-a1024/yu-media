// import React from 'react'

import Hero from "@/components/layouts/Hero"
import { getAllTags } from "@/libs/api"
import { Tag } from "@/types/types";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "タグ一覧",
};

const Tags = async () => {
  const { allTags } = await getAllTags();

  return (
    <div>
      <Hero title="タグ一覧"/>

      <div className='mt-24'>
        <div className="flex items-center gap-7 md:max-w-5xl mx-auto">
          {allTags.map((tag: Tag) => (
            <Link key={tag.id} href={`/tags/${tag.name}`} className="text-blue-500 underline font-semibold text-xl">
              {tag.name}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tags