import React, { useEffect, useState } from "react";

import Table from "./components/core/Table";
import Response from "./data.json";
import Card from "components/core/Card";
import BudgetDataService from "./services/data.services";

import Icon from "components/core/Icon";

export default function Main() {
  const [BudgetData, setBudgetData] = useState([]);
  useEffect(() => {
    getBudgetData();
  }, []);

  const getBudgetData = async () => {
    const data = await BudgetDataService.getAllBudgetData();
    // console.log(data.docs);
    setBudgetData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const IncomeArray = BudgetData.filter(function (el) {
    return el.status === "income";
  });

  console.log(IncomeArray);

  const ExpenseArray = BudgetData.filter(function (el) {
    return el.status === "expense";
  });

  var total = 0;
  const TOTAL_INCOME = (function total_Income() {
    for (var i = 0; i < IncomeArray.length; i++) {
      total = total + Number(IncomeArray[i].amount);
    }
    return total;
  })();

  var totalExpense = 0;
  const TOTAL_EXPENSE = (function total_Expense() {
    for (var i = 0; i < ExpenseArray.length; i++) {
      totalExpense = totalExpense + Number(ExpenseArray[i].amount);
    }
    return totalExpense;
  })();

  const Available_Balance = Number(TOTAL_INCOME) - Number(TOTAL_EXPENSE);

  return (
    <div className="componentclass">
      <h2 className="mt-10">Overview</h2>
      <h3 className="mt-20">Summary</h3>
      <div className="cardclass mt-20">
        {[
          {
            total: TOTAL_INCOME.toFixed(),
            header: "Total Income",
            iscurrency: true,
            icon: "Income",
            isIcon: true,
            iconColor: "#69db7c",
          },
          {
            total: TOTAL_EXPENSE.toFixed(),
            header: "Total Expense",
            iscurrency: true,
            icon: "Expense",
            isIcon: true,
            iconColor: "#fa5252",
          },
          {
            total: Available_Balance.toFixed(),
            header: "Available Balance",
            iscurrency: true,
            icon: "AvailableBalance",
            isIcon: true,
            iconColor: "#862e9c",
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
          />
        </div>
      </div>
    </div>
  );
}
