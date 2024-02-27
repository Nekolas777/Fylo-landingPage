import { Hero } from './components/Hero'
import { NavBar } from './components/NavBar'
import { Features } from './components/Features'
import { Service } from './components/Service'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export const App = () => {

  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Features />
        <Service />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )

}

