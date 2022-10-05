import React from "react";

// components

import CardStats from "./CardStats";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-default-skin md:pt-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statBgColor="bg-hotel-maroon"
                  statSubtitle="Hotels"
                  statTitle="27"
                  statDescripiron="Total hotels available"
                  statIconName="fas fa-hotel"
                  statIconColor="text-white"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statBgColor="bg-package-maroon"
                  statSubtitle="Packages"
                  statTitle="9"
                  statDescripiron="Added for Gir"
                  statIconName="fas fa-chart-pie"
                  statIconColor="text-white"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statBgColor="bg-customer-brown"
                  statSubtitle="Enquiries"
                  statTitle="93"
                  statDescripiron="Since 2022"
                  statIconName="fas fa-users"
                  statIconColor="text-white"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statBgColor="bg-enquiry-brown"
                  statSubtitle="Customers"
                  statTitle="577"
                  statDescripiron="Registered up to now"
                  statIconName="fas fa-percent"
                  statIconColor="text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
