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
    <div className="content-container py-6 small:py-24">
      <div className="flex justify-between mb-8">
        <p className="txt-xlarge">Latest Drops</p>
        <InteractiveLink href={`/products/latest-drops`}>
          See all
        </InteractiveLink>
      </div>
      <ul className="grid grid-cols-2 small:grid-cols-3 gap-x-6 gap-y-6 small:gap-y-12">
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
