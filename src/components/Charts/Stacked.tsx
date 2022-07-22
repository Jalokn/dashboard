import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import React from "react";
import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../../data/dummy";

const Stacked = ({ height, width }: { height: string; width: string }) => {
  return (
    <ChartComponent
      height={height}
      width={width}
      id="charts"
      // @ts-ignore
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      // @ts-ignore
      chartArea={{ broder: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={{ background: "white" }}
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => {
          return <SeriesDirective key={index} {...item} />;
        })}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;
