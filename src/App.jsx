import { Hero } from './components/Hero'
import { NavBar } from './components/NavBar'
import { Features } from './components/Features'
import { Service } from './components/Service'

export const App = () => {

  return (
    <>
      <NavBar />
      <main>
        <Hero/>
        <Features/>
        <Service/>
      </main>
    </>
  )

}

