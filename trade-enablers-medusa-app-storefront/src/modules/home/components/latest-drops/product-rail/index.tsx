import { retrieveCollection } from "@lib/data/collections"
import { HttpTypes } from "@medusajs/types"
import { Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"

export default async function LatestDropRail({
  products,
}: {
  products: HttpTypes.StoreProduct[]
}) {
  console.log('products', products)

  if (!products) {
    return null
  }

  return (
    <div className="content-container py-12 small:py-24">
      <div className="flex justify-between mb-8">
        <p className="txt-xlarge">Latest Drops</p>
        <InteractiveLink href={`/products/latest-drop`}>
          View all
        </InteractiveLink>
      </div>
      <ul className="grid grid-cols-2 small:grid-cols-3 gap-x-6 gap-y-24 small:gap-y-36">
        {products &&
          products.map((product) => (
            <li key={product.id}>
              <ProductPreview product={product} />
            </li>
          ))}
      </ul>
    </div>
  )
}
