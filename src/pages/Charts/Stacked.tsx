import React from "react";

import { Header, Stacked as StackedChart } from "components";

const Stacked = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <Header category="Stacked" title="Revenue Breakdown" />
    <div className="w-full">
      <StackedChart height="auto" width="auto" />
    </div>
  </div>
);

export default Stacked;
