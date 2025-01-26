import { HttpTypes } from "@medusajs/types"
import LatestDropRail from "@modules/home/components/latest-drops/product-rail"

export default async function LatestDrops({
  products,
}: {
  products: HttpTypes.StoreProduct[]
}) {
  
  return (
    <>
    <li >
      <LatestDropRail products={products} />
    </li>
    </>
  )
}
