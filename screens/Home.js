import * as React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CounterWithHooks, CounterWithoutHooks } from "../components";

export function HomeScreen() {
  const [count, setCount] = React.useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <CounterWithHooks count={count} />
      <CounterWithoutHooks count={count} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => setCount(count + 1)}
      >
        <Text style={{ color: "#fff" }}>Press Me</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    margin: 50,
  },
  button: {
    backgroundColor: "#000",
    padding: 16,
  },
});
