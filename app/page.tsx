import { HeroSection } from "@/components/hero-section";
import { ShopSection } from "@/components/shop-section";
import { ServicesSection } from "@/components/services-section";
import { redirect } from "next/navigation";

export default async function Home(props: {
  searchParams: Promise<{ filter?: string; code?: string }>;
}) {
  const searchParams = await props.searchParams;

  if (searchParams?.code) {
    redirect(`/auth/callback?code=${searchParams.code}`);
    // redirect code to fix localhost thinging. THANKS GEMINI!!!
  }

  const currentFilter = searchParams?.filter || "new";

  return (
    <>
      <HeroSection />

      <ShopSection filter={currentFilter} />

      <div className="w-[1090px] mx-auto h-[1px] bg-[#181818] opacity-33 mt-[112px]" />

      <ServicesSection />
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
