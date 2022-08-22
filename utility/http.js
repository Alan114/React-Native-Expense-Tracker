import axios from "axios";

export function storeExpense(expenseData) {
  axios.post(
    "https://rn-expense-tracker-954d6-default-rtdb.europe-west1.firebasedatabase.app/expenses.json",
    expenseData
  );
}
