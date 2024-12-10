import ArticleCardList from '@/components/ArticleCardList';
import LoadMoreButton from '@/components/LoadMoreButton';
import Hero from '@/components/layouts/Hero'
import { getAllTags, getArticlesByTagId} from '@/libs/api';
import { Metadata } from 'next';
import React from 'react'

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;

  return {
    title: slug,
  };
}

const DetailTag = async ({ params }: { params: { slug: string}}) => {
  const tagName = params.slug;
  const { allTags } = await getAllTags();

  const currentTag = allTags.find((tag: any) => tag.name === tagName);

  const { articles, totalCount } = await getArticlesByTagId(currentTag.id);

  return (
    <div className='px-2 py-12'>
      <Hero title={tagName} />

      <div className='mt-24'>
          <div className='mx-auto text-center py-4'>
            <h2 className='md:text-4xl'>記事一覧</h2>
            <ArticleCardList articles={articles}/>
            <LoadMoreButton 
              initialCount={articles.length} 
              totalCount={totalCount}
            />
          </div>
        </div>
    </div>
  )
}

export default DetailTag