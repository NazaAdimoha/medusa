"use client";
import { Button, Text } from "@medusajs/ui";
import { getProductPrice } from "@lib/util/get-product-price";
import { HttpTypes } from "@medusajs/types";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import Thumbnail from "../thumbnail";
import PreviewPrice from "./price";
import { ShoppingCartIcon } from "lucide-react";
import { useMemo, useState } from "react";
import { isEqual } from "lodash";
import { addToCart } from "@lib/data/cart";

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct;
  isFeatured?: boolean;
  region?: HttpTypes.StoreRegion;
}) {
  const [options, setOptions] = useState<Record<string, string | undefined>>({});
  const [isAdding, setIsAdding] = useState(false);
  const { cheapestPrice } = getProductPrice({
    product,
  });

  const optionsAsKeymap = (
    variantOptions: HttpTypes.StoreProductVariant["options"]
  ) => {
    return variantOptions?.reduce((acc: Record<string, string>, varopt: any) => {
      acc[varopt.option_id] = varopt.value;
      return acc;
    }, {});
  };

  const selectedVariant = useMemo(() => {
    if (!product.variants || product.variants.length === 0) {
      return;
    }

    return product.variants.find((v) => {
      const variantOptions = optionsAsKeymap(v.options);
      return isEqual(variantOptions, options);
    });
  }, [product.variants, options]);

  const handleAddToCart = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!selectedVariant?.id) return;

    setIsAdding(true);

    await addToCart({
      variantId: selectedVariant.id,
      quantity: 1,
    });

    setIsAdding(false);
  };

  return (
    <LocalizedClientLink href={`/products/${product.handle}`} className="group">
      <div className="relative" data-testid="product-wrapper">
        {/* Thumbnail with Add to Cart and Price Overlay */}
        <div className="relative">
          <Thumbnail
            thumbnail={product.thumbnail}
            images={product.images}
            size="full"
            isFeatured={isFeatured}
          />

          <Button
            variant="secondary"
            className="absolute top-2 left-2 bg-white text-black px-3 py-1 rounded-lg shadow-md hover:bg-gray-100"
            onClick={handleAddToCart}
            isLoading={isAdding}
            data-testid="add-to-cart-button"
          >
            <ShoppingCartIcon className="w-4 h-4" /> <span>Add to cart</span>
          </Button>

          {cheapestPrice && (
            <div className="absolute bottom-2 left-2 bg-white text-black px-3 py-1 rounded-lg shadow-md">
              <PreviewPrice price={cheapestPrice} />
            </div>
          )}
        </div>

        {/* Product Title */}
        <div className="flex txt-compact-medium mt-4 justify-between">
          <p className="text-ui-fg-subtle" data-testid="product-title">
            {product.title}
          </p>
        </div>
      </div>
    </LocalizedClientLink>
  );
}
