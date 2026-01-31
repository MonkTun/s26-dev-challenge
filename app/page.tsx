import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ProductCard } from "@/components/product-card";
import { MainButton } from "@/components/ui/main-button";
import { MOCK_PRODUCTS } from "@/lib/constants";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen mt-[224px] mb-[112px]">
        <HeroSection />

        <section className="w-[1090px] mx-auto mt-16">
          <div className="text-left mb-10 space-x-[36px]">
            <MainButton className="mb-8">NEW ARRIVALS</MainButton>
            <MainButton className="mb-8" variant={"secondary"}>
              WHAT'S TRENDING
            </MainButton>
          </div>
          {/*<h2 className="text-2xl font-bold mb-6">New Arrivals</h2>*/}
          <div className="grid grid-cols-4 gap-x-6 gap-y-10">
            {MOCK_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <div className="w-[1090px] mx-auto h-[1px] bg-[#181818] opacity-33 mt-[112px]" />

        <section className="w-[1090px] mx-auto mt-[112px] mb-[112px]">
          <div className="grid grid-cols-3 gap-x-6 gap-y-10">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/services/Services1.svg"
                alt="Promo 1"
                width={80}
                height={80}
                className="object-cover rounded-lg"
              />
              <h1 className="mt-4 text-lg font-semibold">
                {" "}
                FREE AND FAST DELIVERY
              </h1>
              <p className="text-sm text-gray-600">
                Free delivery for all orders over $140
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image
                src="/services/Services2.svg"
                alt="Promo 1"
                width={80}
                height={80}
                className="object-cover rounded-lg"
              />
              <h1 className="mt-4 text-lg font-semibold">
                {" "}
                24/7 CUSTOMER SERVICE
              </h1>
              <p className="text-sm text-gray-600">
                Friendly 24/7 customer support
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image
                src="/services/Services3.svg"
                alt="Promo 1"
                width={80}
                height={80}
                className="object-cover rounded-lg"
              />
              <h1 className="mt-4 text-lg font-semibold">
                {" "}
                MONEY BACK GUARANTEE
              </h1>
              <p className="text-sm text-gray-600">
                We return money within 30 days
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// export default function Home() {
//   return (
//     <main className="min-h-screen mt-[112px] mb-[112px]">
//       <Navbar />

//       {/* HERO SECTION */}
//       <section className="relative w-[1090px] h-[600px] bg-gray-100 mt-[112px] mx-auto">
//         <Image
//           src="/Hero.svg"
//           alt="Hero Image"
//           fill
//           className="object-cover"
//           priority
//         />
//       </section>
//     </main>
//   );
// }
