import { About, Contact, Focus, Intro, Path } from './components';

export function Home() {
  return (
    <article className="home">
      <Intro />
      <About />
      <Focus />
      <Path />
      <Contact />
    </article>
  );
}
