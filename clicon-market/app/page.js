// Header menu components
import FollowBar from './components/Header/FollowBar'
import NavigationBar from './components/Header/NavigationBar'
import PromoBar from './components/Header/PromoBar'
import SearchBar from './components/Header/SearchBar'

import Section from './components/Section'


export default function Home() {
  return (
    <main>
      <header>
        <PromoBar />
        <FollowBar />
        <SearchBar />
        <NavigationBar />
      </header>
      <Section>
        <h1>Hello world</h1>
      </Section>
    </main>
  )
}
