import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ManageExpense = () => {
  return (
    <View>
      <Text style={styles.text}>Manage Expenses</Text>
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: "crimson",
  },
});
