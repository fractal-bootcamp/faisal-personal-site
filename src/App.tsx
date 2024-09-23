import './App.css'
import FlickeringGrid from './components/Background'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'

const App = () => {
  
  return (
    <div className='relative min-h-screen'>
      {/* Site background */}
      <FlickeringGrid 
        className="absolute top-0 left-0 w-full h-full z-0"
      />
      
      <div className="relative z-10 flex">
      {/* Site navigation */}
        <NavBar />

      {/* Site main content */}
        <div className="flex-grow p-4 max-w-4xl mx-auto">
          <Hero 
            title="Welcome to my digital print!"
            subTitle="Hi, I'm Faisal 🤖."
            body="Current lifestage ( ) => {Wanna be a coder}. 
            I found out the best way to test the many thoughts and ideas I 
            encounter during my days are through quick experiments, which in today's 
            age translate to learning how to code."
            imgUrl="https://gravatar.com/avatar/ed770eed9c603f81ed46390292acee87?s=200&d=robohash&r=x"
          />

          <About 
            title="About"
            body="After 12 years of business education, and 7 years of business & operational experience, 
            I finally decided to pursue learning how to code to stay relavant in the age of AI."
          />

          <Skills
            title="Skills"
            skills={[
              "React",
              "Typescript",
              "TailwindCSS",
              "Next.js",
            ]}
          />

          <Projects
            title="Projects = (thoughtExperiments) => {}"
          />
        </div>
      </div>
    </div>
  )
}

export default App