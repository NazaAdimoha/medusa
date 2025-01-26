import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import LatestDrops from "@modules/home/components/latest-drops"
import { listProductsLatest } from "@lib/data/products"

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  const latestDrops = await listProductsLatest()

  if (!collections || !region) {
    return null
  }
  const featured = collections.filter((c) => c.handle === "featured")

  return (
    <>
      <Hero />
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={featured} region={region} />
        </ul>
      </div>

      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <LatestDrops products={latestDrops.products} />
        </ul>
      </div>
    </>
  )
}
