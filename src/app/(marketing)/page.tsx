import { BlogPreview } from './components/home/BlogPreview'
import { Clients } from './components/home/Clients'
import { FAQ } from './components/home/FAQ'
// import { FeaturedServices } from './components/home/FeaturedServices'
import { Hero } from './components/home/Hero'
import { ImpactMetrics } from './components/home/ImpactMetrics'
import { LeadCapture } from './components/home/LeadCapture'
import { Methodology } from './components/home/Methodology'
import SolutionsGrid from './components/home/SolutionsGrid'

export default function MarketingHome() {
  return (
    <div className="flex flex-col min-h-screen bg-white-essential">
      <Hero />
      {/* <AboutSummary />
      <div className="bg-horizon-green"> */}
      <ImpactMetrics />
      {/* </div> */}
      {/* <FeaturedServices /> */}
      <SolutionsGrid />
      <Methodology />
      <Clients />
      <FAQ />
      <BlogPreview />
      <LeadCapture />
    </div>
  )
}
