import { ConstructionIcon, HammerIcon, LucideTruck, Star } from "lucide-react";
import React from "react";


export function BenefitsSection() {
  return (
    <div className="flex justify-center gap-8 text-xl mt-5 flex-wrap">
      <div className=" card p-10 md:border-r-2">
        <div className="flex font-bold flex-col items-center ">
          <HammerIcon
            style={{ width: "50px", height: "50px", opacity: ".6" }}
            fontSize="large"
          />
          <h4 className="font-bold opacity-80 text-center ">
            FABRICACION{" "}
            <span className="text-[#FE98CB]  font-bold">ARGENTINA</span>
          </h4>
          <p className="opacity-50 text-xs">
            Compromiso con el trabajo nacional
          </p>
        </div>
      </div>
      <div className=" card p-10 md:border-r-2">
        <div className="flex font-bold flex-col items-center">
          <LucideTruck
            style={{ width: "50px", height: "50px", opacity: ".6" }}
            fontSize="large"
          />
          <h4 className="font-bold opacity-80">
            ENVIOS <span className="text-[#FE98CB] font-bold">100%</span>{" "}
            SEGUROS
          </h4>
          <p className="opacity-50 text-xs">
            A cargo de nuestro sistema de envios
          </p>
        </div>
      </div>
      <div className="card p-10 ">
        <div className="flex font-bold flex-col items-center">
          <Star
            style={{ width: "50px", height: "50px", opacity: ".6" }}
            fontSize="large"
          />
          <h4 className="font-bold opacity-80">
            LOS MEJORES {" "}
            <span className="text-[#FE98CB] font-bold">PRECIOS</span>
          </h4>
          <p className="opacity-50 text-xs">Precios mayoristas para vos</p>
        </div>
      </div>
    </div>
  );
};

