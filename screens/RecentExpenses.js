import React from "react";
import { StyleSheet, Text, View } from "react-native";

const RecentExpenses = () => {
  return (
    <View>
      <Text style={styles.text}>Recent Expenses</Text>
    </View>
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: "crimson",
  },
});
