import AboutMe from './about/AboutMe';
import Hero from './Hero';
import Skills from './skills/Skills'
import Projects from './projects/Projects'
import ContectSec from './contect/ContectSec'

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