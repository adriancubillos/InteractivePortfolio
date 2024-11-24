import Image from 'next/image';
import bg from '../../public/background/home-background.jpeg';
import RenderModel from './components/RenderModel';

import Navigation from './components/navigation';
import dynamic from 'next/dynamic';

/*
  On-demand loading: Components are only loaded when they're actually needed, which can improve performance.
  Reduced server load: By setting ssr: false, you're ensuring this potentially heavy component (likely a 3D model) isn't rendered on the server, which could slow down server-side rendering.
*/
const Gandalf = dynamic(() => import('@/app/components/models/Gandalf'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-35"
      />
      <div className="w-full h-screen">
        <Navigation />
        <RenderModel preset="forest">
          <Gandalf />
        </RenderModel>
      </div>
    </main>
  );
}
