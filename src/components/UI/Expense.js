import React, { useEffect, useState } from 'react';
import Card from 'components/core/Card';
import Table from '../core/Table';
import Button from '../Button/Button';
import BudgetDataService from '../../services/data.services';

export default function Income() {
  const [BudgetData, setBudgetData] = useState([]);
  useEffect(() => {
    getBudgetData();
  }, []);

  const getBudgetData = async () => {
    const data = await BudgetDataService.getAllBudgetData();
    // console.log(data.docs);
    setBudgetData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const ExpenseArray = BudgetData.filter(function (el) {
    return el.status === 'expense';
  });

  var totalExpense = 0;
  const TOTAL_EXPENSE = (function total_Expense() {
    for (var i = 0; i < ExpenseArray.length; i++) {
      totalExpense = totalExpense + Number(ExpenseArray[i].amount);
    }
    return totalExpense;
  })();

  return (
    <div className="componentclass">
      <h2 className="mt-10">Expense</h2>
      <h3 className="mt-20">Summary</h3>
      <div className="cardclass mt-20">
        {[
          {
            total: ExpenseArray.length,
            header: 'Total Expense',
            iscurrency: false,
          },
          {
            total: TOTAL_EXPENSE.toFixed(),
            header: 'Total Amount',
            iscurrency: true,
          },
        ].map((item) => {
          return (
            <Card
              {...item}
              iconClasses={''}
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
              { label: 'Title', key: 'title', class: 'text-left' },
              { label: 'Date', key: 'date', class: 'text-centre' },
              { label: 'Amount', key: 'amount', class: 'text-centre' },
              { label: 'Status', key: 'status', class: 'text-centre' },
            ]}
            expense
          />
        </div>
      </div>
      <Button />
    </div>
  );
}
