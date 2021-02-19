import * as React from "react";
import {
  Image,
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
      <Text style={{ fontSize: 20, textAlign: "center", fontWeight: "bold" }}>
        Please click 10 times to see a hidden element!
      </Text>
      <CounterWithHooks count={count} />
      <CounterWithoutHooks count={count} />
      {count < 10 && (
        <Image
          style={{ width: 300, height: 200 }}
          source={{
            uri: "https://media.giphy.com/media/l0HlBO7eyXzSZkJri/source.gif",
          }}
        />
      )}
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
