import { Hero } from '@/components/home/Hero'
import { ExecutiveSummary } from '@/components/home/ExecutiveSummary'
import { Stats } from '@/components/home/Stats'
import { Maintenance } from '@/components/home/Maintenance'
import { Products } from '@/components/home/Products'
import { Projects } from '@/components/home/Projects'

export default function Index() {
  return (
    <div className="w-full">
      <Hero />
      <ExecutiveSummary />
      <Stats />
      <Maintenance />
      <Products />
      <Projects />
    </div>
  )
}
