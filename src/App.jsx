import { Hero } from './components/Hero/Hero'
import { NavBar } from './components/Navbar/NavBar'
import { Features } from './components/Features/Features'
import { Service } from './components/Service/Service'
import { Testimonials } from './components/Testimonials/Testimonials'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'

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

