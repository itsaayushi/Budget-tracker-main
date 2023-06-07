import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const IncomeExpenseCollectionRef = collection(db, "Income-expense");
class BudgetDataService {
  addBudgetData = (newBudgetData) => {
    return addDoc(IncomeExpenseCollectionRef, newBudgetData);
  };

  updateBudgetData = (id, updateBudgetData) => {
    const updateBudgetDataDoc = doc(db, "Income-expense", id);
    return updateDoc(updateBudgetDataDoc, updateBudgetData);
  };

  deleteBudgetData = (id) => {
    const BudgetDataDoc = doc(db, "Income-expense", id);
    return deleteDoc(BudgetDataDoc);
  };

  getAllBudgetData = () => {
    return getDocs(IncomeExpenseCollectionRef);
  };

  getBudgetData = (id) => {
    const BudgetDataDoc = doc(db, "Income-expense", id);

    const test = getDoc(BudgetDataDoc);

    return test;
  };
}

export default new BudgetDataService();
