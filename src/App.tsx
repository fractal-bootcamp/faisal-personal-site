import './App.css'
import FlickeringGrid from './components/Background'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'

const App = () => {
  
  return (
      <div>
        <NavBar />
        <div className='relative'>
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
          <Projects/>
          <FlickeringGrid />`
        </div>
      </div>
  )
}

export default App