import Image from 'next/image';
import bg from '../../../../public/background/contact-background.png';
import Form from '@/app/components/contact/Form';

export default function Contact() {
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center pt-8 sm:py-0  space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">How to find me</h1>
          <p className="text-center font-light text-sm xs:text-base">
            Embark on a digital quest with a Frontend Developer skilled in the arts of React, Angular, JavaScript,
            Typescript and REST. I create immersive and responsive web applications, conjuring seamless user experiences
            that transport users to fantastical digital landscapes. Let me help you vanquish the technical foes that
            plague your web application, I welcome your missive. Let&apos;s craft a masterpiece together, contact me to
            begin our quest!
          </p>
        </div>
      </article>

      <Form />
    </>
  );
}
