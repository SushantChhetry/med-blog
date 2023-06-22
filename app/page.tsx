import Image from 'next/image'
import Posts from './components/Posts'
import MyProfilePic from './components/MyProfilePic'

export const revalidate = 86400 //1 day in seconds

export default function Home() {
  return (
    <div className="mx-auto">
      <MyProfilePic/>
      <p className='mt-10 mb-10 mx-auto max-w-2xl text-xl text-center dark:text-white'>
  Follow along as I share my captivating journey as a premed student, striving to become a doctor. Join me as I offer candid reflections and invaluable insights into the transformative process of becoming a compassionate and skilled healer.
</p>
      <Posts/>

    </div>
  )
}
