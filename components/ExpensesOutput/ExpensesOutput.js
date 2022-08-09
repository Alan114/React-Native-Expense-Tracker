import React from "react";
import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.99,
    date: new Date("2022-02-12"),
  },
  {
    id: "e3",
    description: "A shirt",
    amount: 19.99,
    date: new Date("2022-06-20"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 14.99,
    date: new Date("2022-03-08"),
  },
  {
    id: "e5",
    description: "Supplements",
    amount: 29.99,
    date: new Date("2022-08-12"),
  },
  {
    id: "e6",
    description: "Proteins",
    amount: 59.99,
    date: new Date("2022-08-26"),
  },
  {
    id: "e7",
    description: "Present",
    amount: 9.99,
    date: new Date("2022-08-30"),
  },
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
