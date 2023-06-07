import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import BudgetDataService from '../../services/data.services';

function Modal({ closeModal, setBudgetDataId, id, showModal }) {
  const [title, setTitle] = useState('');

  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('income');
  const [message, setMessage] = useState({ error: false, msg: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    if (title === '' || amount === '' || date === '') {
      setMessage({ error: true, msg: 'All fields are mandatory!' });

      return;
    }

    const newBudgetData = {
      title,
      date,
      amount,
      status,
    };

    try {
      await BudgetDataService.addBudgetData(newBudgetData);
      setMessage({ error: false, msg: 'New Book added successfully!' });
      window.location.reload();
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setTitle('');
    setAmount('');
    setDate('');
    setStatus('income');

    closeModal();
  };

  const editHandler = async () => {
    setMessage('');
    console.log('edithandler calleld');
    try {
      const docSnap = await BudgetDataService.getBudgetData(id);
      console.log('the record inside : ', docSnap.data());
      const selectedBudgetData = docSnap.data();

      setTitle(selectedBudgetData.title);
      setAmount(selectedBudgetData.amount);
      setStatus(selectedBudgetData.status);
      setDate(selectedBudgetData.date);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'scroll';
    };
  });

  useEffect(() => {
    console.log('The id here is: ', id);
    if (id) {
      editHandler();
    }
  }, [id]);

  // function padTo2Digits(num) {
  //   return num.toString().padStart(2, "0");7
  // }

  // function formatDate(Defaultdate = new Date()) {
  //   return [
  //     Defaultdate.getFullYear(),
  //     padTo2Digits(Defaultdate.getMonth() + 1),
  //     padTo2Digits(Defaultdate.getDate()),
  //   ].join("-");
  // }

  return ReactDOM.createPortal(
    (title && date && amount && status) || !id ? (
      <>
        <div className="wrapper" onClick={closeModal}></div>
        <div className="wrapper-content">
          <div className="wrapper-content-box">
            {message?.msg && (
              <div onClick={() => setMessage('')} style={{ color: 'red' }}>
                {' '}
                {message?.msg}
              </div>
            )}
            <div className="formTop">Add Expense</div>

            <form className="form" onSubmit={handleSubmit}>
              <div className="wrapper-content-form">
                <div className="wrapper-content-form-subbox">
                  <div className="form-element">
                    <label htmlFor="Title">Title</label>
                    <input
                      type="text"
                      id="Title"
                      name="Title"
                      placeholder="Title"
                      value={title}
                      onChange={(event) => setTitle(event.target.value)}
                    />
                  </div>
                  <div className="form-element">
                    <label htmlFor="Amount">Amount</label>
                    <input
                      type="number"
                      id="Amount"
                      name="Amount"
                      placeholder="0"
                      value={amount}
                      onChange={(event) => setAmount(event.target.value)}
                    />
                  </div>
                </div>
                <div className="wrapper-content-form-subbox">
                  <div className="form-element">
                    <label htmlFor="date">Date</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={date}
                      onChange={(event) => setDate(event.target.value)}
                    />
                  </div>
                  <div className="form-element">
                    <label htmlFor="status">Choose Status</label>
                    <select
                      name="status"
                      id="status"
                      value={status}
                      onChange={(event) => setStatus(event.target.value)}
                    >
                      <option value="income">income</option>
                      <option value="expense">expense</option>
                    </select>
                  </div>
                </div>
              </div>
              <button className="formBtn">Submit</button>
            </form>
          </div>
        </div>
      </>
    ) : (
      'Loading...'
    ),
    document.querySelector('.myPortalModalDiv')
  );
}

export default Modal;
