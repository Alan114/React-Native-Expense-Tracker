import React from "react";
import { StyleSheet, Text, View } from "react-native";

const AllExpenses = () => {
  return (
    <View>
      <Text style={styles.text}>All Expenses</Text>
    </View>
  );
};

export default AllExpenses;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: "crimson",
  },
});
