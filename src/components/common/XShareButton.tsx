import Link from 'next/link';
import React from 'react'

interface XShareButtonProps {
  url: string;
  title: string;
  hashtags?: string[];
}

const XShareButton = ( {url, title, hashtags = []}: XShareButtonProps ) => {
  let shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    url
  )}&text=${encodeURIComponent(title)}${
      hashtags.length ? `&hashtags=${hashtags.join(",")}` : ""
  }`;

  return (
    
    <div className='space-y-2'>
      <div className='mb-2'>
        <span className='font-semibold md:text-xl'>\ SNSでシェアしよう /</span>
      </div>
      <Link
        href={shareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 bg-slate-500 text-white rounded hover:bg-slate-400 transition-colors"
      >
        <div className='flex items-center'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-2"
        >
          <path d="M23.056 0H16.64l-4.64 7.925L7.363 0H.948l8.08 13.729L.072 24h6.432l5.657-9.487L17.844 24h6.431l-8.96-10.271z" />
        </svg>
        <span className='pb-[0,1rem]'>記事を共有する</span>
        </div>
      </Link>
    </div>
  )
}

export default XShareButton