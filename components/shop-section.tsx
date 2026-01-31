import { MainButton } from "@/components/ui/main-button";
import { ProductCard } from "@/components/product-card";
import { CreateClient } from "@/lib/supabase/server";
import Link from "next/link";
//import { MOCK_PRODUCTS } from "@/lib/constants";

interface ShopSectionProps {
  filter?: string; // 'new' or 'trending'
}

export async function ShopSection({ filter = "new" }: ShopSectionProps) {
  const supabase = await CreateClient();

  let query = supabase
    .from("products")
    .select(
      `
      id,
      name,
      price,
      image,
      isDiscounted: is_discounted,
      salePrice: discounted_price,
      reviewCount: review_count,
      ratings,
      isNew: is_new,
      isFeatured: is_featured
    `,
    )
    .limit(10);

  if (filter === "trending") {
    query = query.order("is_featured", { ascending: false });
  } else {
    query = query.order("is_new", { ascending: false });
  }

  const { data: products, error } = await query;

  if (error) {
    console.error("Error fetching products:", error);
    return <div>Failed to load products.</div>;
  }

  return (
    <section className="w-[1278px] mx-auto mt-16">
      <div className="text-left mb-10 space-x-[36px]">
        <Link href="/?filter=new" scroll={false}>
          <MainButton
            className="mb-8"
            variant={filter === "new" ? "default" : "outline"}
          >
            NEW ARRIVALS
          </MainButton>
        </Link>
        <Link href="/?filter=trending" scroll={false}>
          <MainButton
            className="mb-8"
            variant={filter === "trending" ? "secondary" : "outline2"}
          >
            WHAT'S TRENDING
          </MainButton>
        </Link>
      </div>
      {/*<h2 className="text-2xl font-bold mb-6">New Arrivals</h2>*/}
      <div className="grid grid-cols-4 gap-x-[66px] gap-y-10">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

// .limit().. // you are wriiting a query
// .order() is an instruction to the SQL
// sent to server with await query
