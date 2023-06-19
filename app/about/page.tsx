import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <div className="px-4 md:px-8">

      <h1 className="text-3xl font-bold mt-8 text-white">About Me: A Journey Towards Becoming a Cardiologist</h1>

       <div className="flex justify-center">
         <Image
            className='border-4 border-black dark:border-slate-500 
            drop-shadow-xl shadow-black mx-auto mt-8'
            src="/images/logo.png"
            width={300}
            height={300}
            alt="logo"
            priority={true}
        />
      </div>

      <p className="mt-4 text-white">
        Hi there! My name is Sakshyat Chhetry, and I am a premed student at the University of Alabama at Birmingham (UAB) with a burning passion for cardiology. Join me on this captivating journey as I share my experiences, challenges, and aspirations in pursuing my dream of becoming a cardiologist.
      </p>

      <h2 className="text-2xl font-bold mt-8 text-white">A Dream Takes Shape</h2>

      <p className="mt-4 text-white">
        Ever since I can remember, the human heart has fascinated me. Its intricate mechanisms, the rhythmic dance of life it orchestrates, and the profound impact it has on our well-being have always intrigued me. As I embarked on my premed journey at UAB, my fascination with cardiology only deepened, solidifying my resolve to specialize in this field.
      </p>

      <h2 className="text-2xl font-bold mt-8 text-white">Nurturing the Passion</h2>

      <p className="mt-4 text-white">
        My time at UAB has been an enriching experience. I have been fortunate to learn from exceptional professors, engage in groundbreaking research, and witness the transformative power of medicine in various clinical settings. Each step of the way, my passion for cardiology has been fueled by the knowledge and skills I acquire.
      </p>

      <h2 className="text-2xl font-bold mt-8 text-white">Challenges and Triumphs</h2>

      <p className="mt-4 text-white">
        Becoming a cardiologist is not an easy path, but I believe that the challenges we face shape us into the best versions of ourselves. From the demanding coursework to the rigorous medical school admissions process, I have encountered obstacles that have tested my determination and resilience. However, with every setback, I have emerged stronger, more focused, and even more dedicated to my ultimate goal.
      </p>

      <h2 className="text-2xl font-bold mt-8 text-white">Compassion in Practice</h2>

      <p className="mt-4 text-white">
        While the science behind cardiology is captivating, I firmly believe that compassion is the heartbeat of medicine. As a future cardiologist, I aspire not only to diagnose and treat cardiovascular conditions but also to provide compassionate care to patients during vulnerable moments. I am committed to developing strong patient-doctor relationships built on trust, empathy, and understanding.
      </p>

      <h2 className="text-2xl font-bold mt-8 text-white">Sharing the Journey</h2>

      <p className="mt-4 text-white">
        Through this blog, I aim to share my experiences and insights as a premed student aspiring to become a cardiologist. I will document my triumphs, challenges, and everything in between, offering a glimpse into the exciting world of cardiology and the path to achieving this specialized career.
      </p>
      </div>

  )
}
