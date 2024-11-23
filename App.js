import React from "react";
import { View, Text, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Fedry Faurrozy</Text>
      <View style={styles.boxContainer}>
        <View style={styles.box1} />
        <View style={styles.box2} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    color: "blue",
    fontWeight: "bold",
    marginBottom: 20,
  },
  boxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    paddingHorizontal: 20,
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: "#FF6B6B",
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: "#4ECDC4",
  },
});

export default App;
