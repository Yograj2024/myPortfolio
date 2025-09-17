import AboutMe from './about/AboutMe';
import ContectSec from './contect/ContectSec';
import Hero from './Hero';
import Projects from './projects/Projects';
import Skills from './skills/Skills';

const MainContainer = () => {

  return (
    <>
      <Hero />
      <AboutMe/>
      <Skills />
      <Projects/>
      <ContectSec/>
    </>
  );
};

export default MainContainer;