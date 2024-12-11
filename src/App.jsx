import './App.css'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import Projects from './Projects/Projects'

function App() {
  return (
    <>
      <div className='blur'>
      </div>
      <div className='blur2'>
      </div>

      <Navbar />
      <main>
        <Hero/>
        <Projects/>
      </main>
    </>
  )
}

export default App
