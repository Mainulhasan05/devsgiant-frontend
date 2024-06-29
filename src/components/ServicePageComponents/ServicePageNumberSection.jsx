import React from "react";
import Container from "../UI/Container/Container";

const ServicePageNumberSection = () => {
  return (
    <Container>
      <div className="mb-6 grid grid-cols-2 gap-0 border border-white border-opacity-20 lg:grid-cols-4">
        <div className="flex flex-col items-center gap-2 border-r border-white border-opacity-20 p-8 last:border-r-0 lg:border-r lg:p-12 lg:last:border-r-0">
          <h3 className="text-4xl font-medium md:text-5xl lg:font-semibold">
            30+
          </h3>
          <p className="text-my-p">Employees in team</p>
        </div>
        <div className="flex flex-col items-center gap-2 border-r border-white border-opacity-20 p-8 last:border-r-0 lg:border-r lg:p-12 lg:last:border-r-0">
          <h3 className="text-4xl font-medium md:text-5xl lg:font-semibold">
            632+
          </h3>
          <p className="text-my-p">Employees in team</p>
        </div>
        <div className="flex flex-col items-center gap-2 border-r border-white border-opacity-20 p-8 last:border-r-0 lg:border-r lg:p-12 lg:last:border-r-0">
          <h3 className="text-4xl font-medium md:text-5xl lg:font-semibold">
            10+
          </h3>
          <p className="text-my-p">Employees in team</p>
        </div>
        <div className="flex flex-col items-center gap-2 p-8 last:border-r-0 lg:p-12">
          <h3 className="text-4xl font-medium md:text-5xl lg:font-semibold">
            300+
          </h3>
          <p className="text-my-p">Employees in team</p>
        </div>
      </div>
    </Container>
  );
};

export default ServicePageNumberSection;
