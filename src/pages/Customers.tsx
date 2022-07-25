import React from "react";
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Search,
  Edit,
  Inject,
  Toolbar,
  Selection,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";

import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const Employees = () => {
  return (
    <div className="m-2 mt-24 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Customer" category="Page" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={["Delete", "Search"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => {
            return <ColumnDirective key={index} {...item} />;
          })}
        </ColumnsDirective>
        <Inject
          services={[Page, Toolbar, Search, Selection, Edit, Sort, Filter]}
        />
      </GridComponent>
    </div>
  );
};

export default Employees;
