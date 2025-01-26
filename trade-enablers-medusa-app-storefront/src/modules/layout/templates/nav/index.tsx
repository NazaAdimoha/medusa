import { Suspense } from "react"

import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import Image from "next/image"
import TE from "@modules/common/icons/TE.svg"
import SearchIcon from "@modules/common/icons/search.svg"
import UserIcon from "@modules/common/icons/user-circle.svg"
import Cart from "@modules/common/icons/cart.svg"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto border-b duration-200 bg-[#F8F9FB] border-ui-border-base">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu regions={regions} />
            </div>
          </div>

          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
              data-testid="nav-store-link"
            >
              <Image
                src={TE}
                alt="Trade-Enablers store"
                width={100}
                height={100}
              />
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-2 md:h-[33px] px-3 py-2 bg-white rounded-lg hover:text-ui-fg-base">
              <span>
                <Image src={SearchIcon} width={14} height={14} alt="search" />
              </span>{" "}
              Search
            </div>

            <div className="hidden small:flex items-center gap-x-2 md:h-[33px] px-3 py-2 bg-white rounded-lg hover:text-ui-fg-base">
              <span>
                <Image src={UserIcon} width={14} height={14} alt="cart" />
              </span>{" "}
              Account
            </div>

            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hidden small:flex items-center gap-x-2 md:h-[33px] px-3 py-2 bg-white rounded-lg hover:text-ui-fg-base"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  <span>
                    <Image src={Cart} width={14} height={14} alt="cart" />
                  </span>{" "}
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
