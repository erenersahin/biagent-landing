import { Header } from './components/Header'
import { Footer } from './components/Footer'
import {
  Hero,
  Pipeline,
  ProblemsSolved,
  Features,
  Worktree,
  Waitlist,
  FAQ,
} from './components/sections'

function App() {
  return (
    <div className="min-h-screen bg-bg-page">
      <Header />
      <Hero />
      <Pipeline />
      <ProblemsSolved />
      <Features />
      <Worktree />
      <Waitlist />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
