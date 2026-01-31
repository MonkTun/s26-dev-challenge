import { AddToCartButton } from "./ui/add-to-cart-button";
import { Product } from "@/lib/constants";
import Image from "next/image";
import { Button } from "./ui/button";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group flex flex-col gap-2">
      <div className="relative aspect-4/4 overflow-hidden bg-[#E9E9EB] rounded-lg">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-8 transition-transform group-hover:scale-150"
        />
        {product.isDiscounted && product.salePrice && (
          <span className="absolute top-2 left-2 font-sans bg-[#DB4444] text-white text-xs px-2 py-1 rounded">
            -
            {(
              ((product.price - product.salePrice) / product.price) *
              100
            ).toFixed(0)}
            %
          </span>
        )}

        <Button className="absolute w-8 h-8 p-0 top-2 right-2" variant="ghost">
          ♡
        </Button>

        <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <AddToCartButton />
        </div>
      </div>

      <div className="flex justify-between items-start mt-2">
        <div>
          <h3 className="font-medium text-sm font-sans text-gray-900">
            {product.name}
          </h3>
          <div className="flex items-center gap-2 mt-2">
            {product.isDiscounted && product.salePrice ? (
              <>
                <span className="text-sm font-sans font-semibold text-[#DB4444]">
                  ${product.salePrice.toFixed(2)}
                </span>
                <span className="text-sm font-sans text-gray-400 line-through">
                  ${product.price.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-sm font-sans font-semibold text-gray-500">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs text-gray-500">
        {/* Rating Stars full credit to GEMINI */}
        <div className="relative flex items-center">
          <div className="flex text-gray-300">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-sm">
                ★
              </span>
            ))}
          </div>
          <div
            className="absolute top-0 left-0 flex overflow-hidden text-[#FFAD33]"
            style={{ width: `${((product.ratings || 0) / 5) * 100}%` }}
          >
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-sm">
                ★
              </span>
            ))}
          </div>
        </div>
        <span className="font-sans font-semibold text-xs text-gray-500">
          ({product.reviewCount})
        </span>
      </div>
    </div>
  );
}
