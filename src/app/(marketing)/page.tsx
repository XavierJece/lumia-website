import { Hero } from './components/home/Hero'
import { AboutSummary } from './components/home/AboutSummary'
import { ImpactMetrics } from './components/home/ImpactMetrics'
import { FeaturedServices } from './components/home/FeaturedServices'
import { Methodology } from './components/home/Methodology'
import { Clients } from './components/home/Clients'
import { FAQ } from './components/home/FAQ'
import { BlogPreview } from './components/home/BlogPreview'
import { LeadCapture } from './components/home/LeadCapture'

export default function MarketingHome() {
  return (
    <div className="flex flex-col min-h-screen bg-white-essential">
      <Hero />
      <AboutSummary />
      <div className="bg-horizon-green">
        <ImpactMetrics />
      </div>
      <FeaturedServices />
      <Methodology />
      <Clients />
      <FAQ />
      <BlogPreview />
      <LeadCapture />
    </div>
  )
}
