import React from "react";
import { View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("19-12-2021"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.99,
    date: new Date("12-02-2022"),
  },
  {
    id: "e3",
    description: "A shirt",
    amount: 19.99,
    date: new Date("20-06-2022"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 14.99,
    date: new Date("08-03-2022"),
  },
  {
    id: "e5",
    description: "Supplements",
    amount: 29.99,
    date: new Date("12-08-2022"),
  },
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList />
    </View>
  );
};

export default ExpensesOutput;
