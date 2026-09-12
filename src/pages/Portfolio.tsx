import Home from './Home'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'
import References from './References'

const sections = [
  { id: 'home', component: <Home /> },
  { id: 'about', component: <About /> },
  { id: 'experience', component: <Experience /> },
  { id: 'projects', component: <Projects /> },
  { id: 'contact', component: <Contact /> },
  { id: 'references', component: <References /> },
]

const Portfolio = () => {
  return (
    <div className="w-full">
      {sections.map(({ id, component }) => (
        <section
          key={id}
          id={id}
          className="scroll-mt-16"
        >
          {component}
        </section>
      ))}
    </div>
  )
}

export default Portfolio
