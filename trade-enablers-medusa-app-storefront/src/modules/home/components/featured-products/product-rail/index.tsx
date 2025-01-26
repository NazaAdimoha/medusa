import { retrieveCollection } from "@lib/data/collections"
import {  listProductsFeatured } from "@lib/data/products"
import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"

export default async function ProductRail({
  collection,
  region,
}: {
  collection: HttpTypes.StoreCollection
  region: HttpTypes.StoreRegion
}) {
  console.log('collection', collection)
  const {products} = await listProductsFeatured()

  console.log('products:::', products)

  console.log('products', products)

  if (!products) {
    return null
  }

  const getPrices = (product: HttpTypes.StoreProduct) => {
    const price = getProductPrice({
        product,
      })
    return price  
  }

  return (
    <div className="content-container py-6 small:py-24">
      <div className="flex justify-between mb-8">
        <p className="txt-xlarge">{collection.title}</p>
        <InteractiveLink href={`/collections/${collection.handle}`}>
          See all
        </InteractiveLink>
      </div>
      <ul className="grid grid-cols-3 small:grid-cols-3 gap-x-6 gap-y-6 small:gap-y-12">
        {products &&
          products.map((product) => (
            <li key={product.id}>
              <ProductPreview product={product} region={region} isFeatured />
            </li>
          ))}
      </ul>

    </div>
  )
}
