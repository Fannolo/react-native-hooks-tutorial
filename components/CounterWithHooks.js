import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";

//Custom Hook using useEffect and useCount
function useCount(count) {
  const [hiddenText, setHiddenText] = useState(false);
  useEffect(() => {
    if (count > 19) {
      setHiddenText(true);
    }
  }, [count]);

  useEffect(() => {
    return () => {
      alert("ciao ci vediamo dal hooks 👋");
    };
  }, []);
  return hiddenText;
}

export function CounterWithHooks({ count }) {
  const hiddenText = useCount(count);
  return (
    <View>
      <Text>You clicked {count} times.</Text>
      {hiddenText && (
        <Image
          style={{ width: 300, height: 200 }}
          source={{
            uri: "https://media3.giphy.com/media/g9582DNuQppxC/giphy.gif",
          }}
        />
      )}
    </View>
  );
}
