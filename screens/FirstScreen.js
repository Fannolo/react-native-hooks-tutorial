import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Routes } from "../navigation";

export function FirstScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(Routes.HOME)}
      >
        <Text style={{ color: "#fff" }}>Naviga in Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  button: {
    backgroundColor: "#6b52ae",
    padding: 20,
  },
});
