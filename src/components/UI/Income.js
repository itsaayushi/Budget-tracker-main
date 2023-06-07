import React, { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Card from "components/core/Card";
import Response from "data.json";
import Table from "../core/Table";
import Button from "components/Button/Button";
import BudgetDataService from "../../services/data.services";

export default function Income({ getBudgetDataId, setBudgetDataId, id }) {
  const [BudgetData, setBudgetData] = useState([]);
  useEffect(() => {
    getBudgetData();
  }, []);

  const getBudgetData = async () => {
    const data = await BudgetDataService.getAllBudgetData();
    setBudgetData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const IncomeArray = BudgetData.filter(function (el) {
    return el.status === "income";
  });

  var total = 0;
  const TOTAL_INCOME = (function total_Income() {
    for (var i = 0; i < IncomeArray.length; i++) {
      total = total + Number(IncomeArray[i].amount);
    }
    return total;
  })();

  return (
    <>
      <div className="componentclass">
        <h2 className="mt-10">Income</h2>
        <h3 className="mt-20">Summary</h3>
        <div className="cardclass mt-20">
          {[
            {
              total: IncomeArray.length,
              header: "Total Income Source",
              iscurrency: false,
              icon: "Income",
              isIcon: false,
              iconColor: "#69db7c",
            },
            {
              total: TOTAL_INCOME.toFixed(),
              header: "Total Amount",
              iscurrency: true,
              icon: "Income",
              isIcon: false,
              iconColor: "#fa5252",
            },
          ].map((item) => {
            return (
              <Card
                {...item}
                iconClasses={""}
                headerTextClass="card-header-text"
                className="padding-12-10"
              />
            );
          })}
        </div>
        <div className="mt-50">
          <div className="mt-20">
            <Table
              headers={[
                { label: "Title", key: "title", class: "text-left" },
                { label: "Date", key: "date", class: "text-centre" },
                { label: "Amount", key: "amount", class: "text-centre" },
                { label: "Status", key: "status", class: "text-centre" },
              ]}
              income
              getBudgetDataId={getBudgetDataId}
            />
          </div>
        </div>
        <Button setBudgetDataId={setBudgetDataId} id={id} />
      </div>
    </>
  );
}
