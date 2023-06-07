import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Expense from './components/UI/Expense';
import Income from './components/UI/Income';
import Main from './main';
import { useState } from 'react';

function App() {
  const [BudgetDataId, setBudgetDataId] = useState('');

  const getBudgetDataIdHandler = (id) => {
    console.log(id);
    setBudgetDataId(id);
  };
  return (
    <div className="UIclass">
      <Navbar />

      <Routes>
        <Ro ute path="/" element={<Main />} />
        <Route path="/expenses" element={<Expense />} />
        <Route
          path="/Income"
          element={
            <Income
              getBudgetDataId={getBudgetDataIdHandler}
              id={BudgetDataId}
              setBudgetDataId={setBudgetDataId}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
