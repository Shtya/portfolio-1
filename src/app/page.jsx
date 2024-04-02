import React    from   'react'
import Nav      from   "@/components/Nav";
import Whats    from   "@/components/Whats";
import Hero2    from   "@/components/Hero2";
import About    from   "@/components/Aboutus"
import Services from   "@/components/Services";
import Skills   from   "@/components/Skills";
import Projects from   "@/components/Projects";
import Process  from   "@/components/Process";
import Testimonials from '@/components/Testimonials' 
import Contact  from   "@/components/Contact";
import Footer   from   "@/components/Footer"
import Preload from '@/components/Preload';


const Home = () => {
  return (
    <main>
        <Preload />
        <Nav />
        <Whats />
        <Hero2 />
        <About  />
        <Services />
        <Skills />
        <Projects />
        <Process />
        <Testimonials />
        <Contact />
        <Footer /> 
        
    </main>
  )
}

export default Home
