import React from 'react'
import { getSortedPostData } from '@/lib/post'
import ListItem from './ListItem'

export default function Posts() {
  const posts = getSortedPostData()
  //not using async because we already have the values in our projects for the blog

  return (
    <section className='mt-6 mx-auto max-w-2xl'>
      <h2 className='text-4xl font-bold dark:text-white/90'>Blog</h2>
      <ul className='w-full'>
        {posts.map((post) => (
          <ListItem post= {post} key={post.id}/>
        ))}
      </ul>
    </section>
  )
}
