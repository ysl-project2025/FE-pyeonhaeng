import { Section, SectionTitle } from '../styles/common.css'
import ProductList from '../components/product/ProductsList'

function EventProduct() {
  return (
    <Section>
        <SectionTitle>행사상품</SectionTitle>
        <ProductList />
    </Section>
  )
}

export default EventProduct
