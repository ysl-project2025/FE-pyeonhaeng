import { Link } from 'react-router-dom'

function Category() {
  return (
    <>
      <ul>
        <li>
            <Link to={"/product_list/all"}>전체상품</Link>
        </li>
        <li>
            <Link to={"/product_list/event"}>행사상품</Link>
        </li>
        {/* <li>
            <Link to={"/"}>레시피</Link>
        </li> */}
        <li>
            <Link to={"/product_list/rank"}>랭킹</Link>
        </li>
      </ul>
    </>
  )
}

export default Category
