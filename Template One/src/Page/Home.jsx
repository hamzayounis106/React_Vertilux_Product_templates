import React, { createContext, useEffect } from "react";
import useFetchTemplate from "../Hook/useFetchTemplate";
import { useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Gallery from "../Components/Gallery";
import HeadingBar from "../Components/HeadingBar";
import TechnicalProperties from "../Components/TechnicalProperties";
import CareAndMaintenance from "../Components/CareAndMaintenance";
import Manufacturing from "../Components/Manufacturing";
import Applications from "../Components/Applications";
import Certificates from "../Components/Certificates";

// Export the AcfContext globally
export const AcfContext = createContext();

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    console.log("Current Path:", location.pathname);
  }, [location.pathname]);

  const { data: acfData, error, isLoading } = useFetchTemplate(9452);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message || "An error occurred."}</div>;

  // Provide the acfData to children components
  return (
    <AcfContext.Provider value={acfData}>
      <div className="w-full flex justify-center items-center mb-10">
        <div className="flex flex-col max-w-[1140px] justify-center items-center gap-10 w-full">
          <Header />
          <Gallery />
          <HeadingBar heading="TECHNICAL PROPERTIES" />
          <TechnicalProperties />
          <div className="w-full flex justify-between items-stretch">
            <div className="p-[20px] w-1/2">
              <HeadingBar heading="CARE & MAINTENANCE" />
              <CareAndMaintenance />
            </div>
            <div className="p-[20px] w-1/2">
              <HeadingBar heading="MANUFACTURING" />
              <Manufacturing />
            </div>
          </div>
          <div className="w-full flex justify-between items-stretch">
            <div className="p-[20px] w-1/2">
              <HeadingBar heading="INTERNATIONAL CERTIFICATIONS" />
              <Certificates />
            </div>
            <div className="p-[20px] w-1/2">
              <HeadingBar heading="APPLICATIONS" />
              <Applications />
            </div>
          </div>
          <div className="w-full flex justify-between items-stretch">
            <div className="p-[20px] w-1/2 flex justify-end items-end">
              <p className="Roboto text-[12px] text-[#7a7a7a]">
                IMPORTANT: The values and recommendations in this card are not
                contractual and can not be used as claim for order cancellations
                or returns. This technical data may vary at any time without
                previous notice. Color samples may not necessarily be an exact
                match of the material to be used to produce your order. Returns
                will not be accepted due to minor variations of color or
                texture.
              </p>
            </div>
            <div className="p-[20px] w-1/2 flex flex-col justify-start items-end gap-2">
              <img
                className="w-[96px]"
                src="https://aep.tdd.mybluehost.me/staging/3938/wp-content/uploads/2024/11/TS_RX-Daku-qr-icon.png"
                alt=""
              />
              <h2 className="Roboto text-[#58585a] font-[400] text-[20px]">
                vertilux.com
              </h2>
              <p className="Roboto text-[12px] text-[#7a7a7a]">© 2024. Vertilux, Ltd. All Rights Reserved. 1st Edition</p>
            </div>
          </div>
        </div>
      </div>
    </AcfContext.Provider>
  );
}
