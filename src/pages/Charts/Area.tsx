import {
  ChartComponent,
  DateTime,
  Inject,
  Legend,
  SplineAreaSeries,
  SeriesCollectionDirective,
  SeriesDirective,
} from "@syncfusion/ej2-react-charts";
import React from "react";
import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from "data/dummy";
import { useStateContext } from "contexts/ContextProvider";
import { Header } from "components";

const LineChart = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Inflation Rate" />

      <ChartComponent
        id="area-chart"
        height="420px"
        //@ts-ignore
        primaryXAxis={areaPrimaryXAxis}
        //@ts-ignore
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#33373e" : "#fff"}
      >
        <Inject services={[SplineAreaSeries, DateTime, Legend]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => {
            return <SeriesDirective key={index} {...item} />;
          })}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default LineChart;
