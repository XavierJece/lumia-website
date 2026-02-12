import { projects } from '~/shared/data/projectContent'
import * as C from './components'

export default function ProjectPage() {
  return (
    <>
      <C.HeroSection />
      <C.ProjectList projects={projects} />
      <C.CtaSection />
    </>
  )
}
