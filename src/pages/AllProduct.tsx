import ProductList from '../components/product/ProductsList'
import { Section, SectionTitle } from '../styles/common.css'

function AllProduct() {
  return (
    <Section>
      <SectionTitle>전체상품</SectionTitle>
      <ProductList />
    </Section>
  )
}

export default AllProduct
