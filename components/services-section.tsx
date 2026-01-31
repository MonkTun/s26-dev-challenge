import Image from "next/image";

export function ServicesSection() {
  return (
    <section className="w-[1090px] mx-auto mt-[112px] mb-[112px]">
      <div className="grid grid-cols-3 gap-x-6 gap-y-10">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/services/Services1.svg"
            alt="Promo 1"
            width={80}
            height={80}
            className="object-cover rounded-lg hover hover:scale-105 transition-transform duration-300"
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
            className="object-cover rounded-lg hover hover:scale-105 transition-transform duration-300"
          />
          <h1 className="mt-4 text-lg font-semibold"> 24/7 CUSTOMER SERVICE</h1>
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
            className="object-cover rounded-lg hover hover:scale-105 transition-transform duration-300"
          />
          <h1 className="mt-4 text-lg font-semibold"> MONEY BACK GUARANTEE</h1>
          <p className="text-sm text-gray-600">
            We return money within 30 days
          </p>
        </div>
      </div>
    </section>
  );
}
