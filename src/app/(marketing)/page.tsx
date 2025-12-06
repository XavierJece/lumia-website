import { Hero } from './components/home/Hero'
import { FeaturedServices } from './components/home/FeaturedServices'
import { ImpactMetrics } from './components/home/ImpactMetrics'
import { SocialProof } from './components/home/SocialProof'

export default function MarketingHome() {
  return (
    <div className="flex flex-col min-h-screen bg-white-essential">
      <Hero />
      <FeaturedServices />
      <div className="bg-green-900">
        <ImpactMetrics />
      </div>
      <SocialProof />
    </div>
  )
}
