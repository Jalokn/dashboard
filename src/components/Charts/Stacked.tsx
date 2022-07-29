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
import { useStateContext } from "contexts/ContextProvider";
import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "data/dummy";

const Stacked = ({ height, width }: { height: string; width: string }) => {
  const { currentMode } = useStateContext();
  return (
    <ChartComponent
      height={height}
      width={width}
      id="charts"
      // @ts-ignore
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      background={currentMode === "Dark" ? "#33373E" : "#fff"}
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
