import axios from "axios";

const URL =
  "https://rn-expense-tracker-954d6-default-rtdb.europe-west1.firebasedatabase.app/expenses.json";

export function storeExpense(expenseData) {
  axios.post(URL + "/expenses.json", expenseData);
}

// console.log(response.data);
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
