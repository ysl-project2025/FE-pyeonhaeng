import { Link } from 'react-router-dom'

function Category() {
  return (
    <>
      <ul>
        <li>
            <Link to={"/"}>전체상품</Link>
        </li>
        <li>
            <Link to={"/"}>행사상품</Link>
        </li>
        <li>
            <Link to={"/"}>레시피</Link>
        </li>
        <li>
            <Link to={"/"}>랭킹</Link>
        </li>
      </ul>
    </>
  )
}

export default Category
