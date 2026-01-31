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
        {product.isDiscounted && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            Sale
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
          <h3 className="font-medium text-sm text-gray-900">{product.name}</h3>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-sm font-semibold">
              ${product.price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs text-gray-500">
        <div className="flex items-center">
          <span>★ {product.ratings}</span>
        </div>
        <span>({product.reviewCount} reviews)</span>
      </div>
    </div>
  );
}
