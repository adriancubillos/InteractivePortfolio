import clsx from 'clsx'
import React from 'react'

const ItemLayout = ({ children, className }) => {
  return (
    <div className={clsx("custom-bg p-8 rounded-xl flex items-center justify-center space-y-5", className)}>
      {children}
    </div>
  )
}
const AboutDetails = () => {
  return (
    <section className='py-20 w-full'>
      <div className='grid grid-cols-12 gap-8 w-full'>
        <ItemLayout className={'col-span-8 row-span-2 flex-col items-start'}>
          <h2 className='text-2xl text-left w-full capitalize text-accent'>
            Developer of Dreams
          </h2>
          <p className='font-semibold'>
            I&apos;m a passionate and results-oriented Senior Software Engineer with 15+ years of experience transforming
            complex challenges into elegant, high-performing software solutions.
            My journey has spanned full-stack development (Java, JavaScript frameworks including React & Next.js, TypeScript),
            cloud technologies (AWS, Azure, Kubernetes), and Agile methodologies.
            I&apos;m adept at leading teams, modernizing legacy systems, and ensuring robust security.
            My commitment to creating exceptional user experiences is complemented by my fluency in English and Spanish.
          </p>
        </ItemLayout>
        <ItemLayout className={'col-span-4 text-accent'}>
          <div className='font-semibold w-full text-left text-5xl '>
            8+ <sub className='font-semibold text-base'>companies</sub>
          </div>
        </ItemLayout>
        <ItemLayout className={'col-span-4 text-accent'}>
          <div className='font-semibold w-full text-left text-5xl'>
            15+ <sub className='font-semibold text-base'>years of experience</sub>
          </div>
        </ItemLayout>

        <ItemLayout className={'col-span-8 !p-0'}>
          <img
            className="w-full h-auto"
            src='https://github-readme-stats.vercel.app/api?username=adriancubillos&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&custom_title=Adriancubillos Github Stats'
            alt='Github Stats Image'
            loading='lazy'></img>
        </ItemLayout>

        <ItemLayout className={'col-span-4 !p-0'}>
          <img
            className="w-full h-auto"
            src='https://github-readme-stats.vercel.app/api/top-langs?username=adriancubillos&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF'
            alt='Github Stats Image'
            loading='lazy'></img>
        </ItemLayout>

        <ItemLayout className={'col-span-full'}>
          <img
            className="w-full h-auto"
            src='https://skillicons.dev/icons?i=js,ts,angular,react,redux,nextjs,vue,express,nestjs,graphql,postman,nodejs,npm,html,css,tailwind,sass,aws,docker,heroku,github,bitbucket,firebase,mongodb,postgres,ai,py,java,spring,jenkins,vscode,eclipse,jest,selenium,ubuntu,linux,maven,webpack,stackoverflow'
            alt='Github Skill Inventory Image'
            loading='lazy'></img>
        </ItemLayout>

        <ItemLayout className={'col-span-6 !p-0'}>
          <img
            className="w-full h-auto"
            src="https://github-readme-streak-stats.herokuapp.com?user=adriancubillos&theme=dark&hide_border=true&type=png&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B" alt="GitHub Streak" loading='lazy'></img>
        </ItemLayout>

        <ItemLayout className={'col-span-6 !p-0'}>
          <img
            className="w-full h-auto"
            src='https://github-readme-stats.vercel.app/api/pin?username=adriancubillos&repo=github-readme-stats&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF'
            alt='Github Readme Stats'
            loading='lazy'></img>
        </ItemLayout>



      </div>
    </section >
  )
}

export default AboutDetails