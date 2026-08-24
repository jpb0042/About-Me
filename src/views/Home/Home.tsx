import { About, Built, Contact, Focus, Intro, Path } from './components';

export function Home() {
  return (
    <article className="home">
      <Intro />
      <About />
      <Built />
      <Focus />
      <Path />
      <Contact />
    </article>
  );
}
