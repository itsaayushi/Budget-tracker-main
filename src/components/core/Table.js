import React, { useEffect, useState } from 'react';
import BudgetDataService from '../../services/data.services';
import Icon from 'components/core/Icon';

export default function Table({ headers, income, expense }) {
  const [BudgetData, setBudgetData] = useState([]);
  useEffect(() => {
    getBudgetData();
  }, []);

  const getBudgetData = async () => {
    const data = await BudgetDataService.getAllBudgetData();
    // console.log(data.docs);
    setBudgetData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getBudgetData();
  }, []);
  const IncomeArray = BudgetData.filter(function (el) {
    return el.status === 'income';
  });

  console.log(IncomeArray);

  const ExpenseArray = BudgetData.filter(function (el) {
    return el.status === 'expense';
  });

  let CurrentBudgetData = [];
  if (income) {
    CurrentBudgetData = IncomeArray;
  } else if (expense) {
    CurrentBudgetData = ExpenseArray;
  } else {
    CurrentBudgetData = BudgetData;
  }

  const deleteHandler = async (id) => {
    await BudgetDataService.deleteBudgetData(id);
    getBudgetData();
  };

  return (
    <>
      <table className="table" width="100%">
        <thead>
          <tr>
            {headers?.map((obj) => (
              <th className={`th ${obj.class}`}>{obj?.label}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {CurrentBudgetData?.map((singleObj) => (
            <tr key={singleObj.id}>
              {headers?.map((headerobj) => (
                <td className={`td ${headerobj.class}`}>
                  {singleObj[headerobj?.key]}
                </td>
              ))}
              <td>
                <button
                  onClick={() => deleteHandler(singleObj.id)}
                  style={{
                    border: 'none',
                  }}
                >
                  <span
                    className={`w-5 h-5 iconStyleTrash`}
                    style={{
                      backgroundColor: '#0000001A',
                      color: '#000000',
                    }}
                  >
                    <Icon name="Trash" />
                  </span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
