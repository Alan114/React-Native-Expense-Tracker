import axios from "axios";

const URL =
  "https://rn-expense-tracker-954d6-default-rtdb.europe-west1.firebasedatabase.app";

export async function storeExpense(expenseData) {
  const response = axios.post(URL + "/expenses.json", expenseData);
  const id = response.data.name;
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(URL + "/expenses.json");

  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }
  return expenses;
}
