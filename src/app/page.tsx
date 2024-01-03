import { CommunityUpdates } from '@/components/CommunityUpdates'
import { FooterBig } from '@/components/Footer'
import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { InfoSection } from '@/components/InfoSection'
import { UnlockSection } from '@/components/UnlockSection'

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <UnlockSection />
      <CommunityUpdates />
      <InfoSection />
      <FooterBig />
    </main>
  )
}
