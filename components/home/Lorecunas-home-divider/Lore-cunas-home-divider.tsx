import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function LorecunasHomeDivider() {
  return (
    <div className="md:flex flex-1 mx-auto max-w-7xl gap-8 px-4 py-16 lg:flex-row lg:gap-12 lg:px-8 lg:py-24">
      <div>
        <h4 className="text-2xl  text-center md:text-left md:text-6xl font-serif ">
          Te invitamos a ver nuestros productos para el hogar
        </h4>
        <p className="max-w-[540px] text-center md:text-left text-sm  mt-4">
          Contamos con una amplia variedad de productos decorativos para el
          hogar, te invitamos a verlos todos en el boton de abajo.
        </p>
        <div className="flex md:block justify-center mb-5">
          <Button
            variant={"outline"}
            size={"lg"}
            asChild
            className="bg-[#D6B3B3] w-[220px] mt-5 text-primary-foreground hover:bg-primary/90 "
          >
            <Link className="text-lg " href={"/productos/home"}>
              Ver Lorecunas HOME
            </Link>
          </Button>
        </div>
      </div>
      <div>
        <Image
          className="rounded-xl"
          src={"/images/chiffonier.jpg"}
          width={1200}
          height={500}
          alt="chifonier"
        />
      </div>
    </div>
  );
}
