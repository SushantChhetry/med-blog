import React from 'react'
import { getPostsMeta } from '@/lib/post'
import ListItem from './ListItem'

export default async function Posts() {
  const posts = await getPostsMeta()
  //not using async because we already have the values in our projects for the blog

  if(!posts){
    return <p className='mt-10 text-center'>Sorry, no post are avavailablbe</p>
  }

  return (
    <section className='mt-6 mx-auto max-w-2xl'>
      <h2 className='text-4xl font-bold dark:text-white/90'>Blog</h2>
      <ul className='w-full list-none p-0'>
        {posts.map((post) => (
          <ListItem post= {post} key={post.id}/>
        ))}
      </ul>
    </section>
  )
}
