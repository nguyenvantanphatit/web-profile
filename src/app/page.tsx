import {
  Header,
  Hero,
  About,
  Skills,
  Experience,
  Projects,
  Contact,
  Footer
} from '@/components/sections';

import Cursor from '@/components/cursor/cursor';
import SmoothScroll from '@/components/smooth-scroll';

export default function Home() {
  return (
    <SmoothScroll>
      <div className="flex min-h-[100dvh] flex-col">
        <Header loader={true} />
        <main className="flex-1 max-w-sm md:max-w-screen-2xl mx-auto">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
          <Footer />
      </div>
      <Cursor />
    </SmoothScroll>
  );
}
