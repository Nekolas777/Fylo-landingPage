import { Hero } from './components/Hero'
import { NavBar } from './components/NavBar'
import { Features } from './components/Features'

export const App = () => {

  return (
    <>
      <NavBar />
      <main>
        <Hero/>
        <Features/>
      </main>
    </>
  )

}

