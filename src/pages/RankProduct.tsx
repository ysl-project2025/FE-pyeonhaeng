import { Section, SectionTitle } from '../styles/common.css'
import ProductList from '../components/product/ProductsList'

function RankProduct() {
  return (
    <Section>
      <SectionTitle>랭킹</SectionTitle>
      <ProductList />
    </Section>
  )
}

export default RankProduct
