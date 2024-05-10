import React, { useState, useEffect } from "react";
import { View, Text, Animated } from "react-native";
import tw from "../../lib/tailwind";

interface ProgressBarProps {
  toValue: number;
}

const ProgressBar = ({ toValue }: ProgressBarProps) => {
  const [progress, setProgress] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 75,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    console.log(progress);
  }, [toValue]);

  return (
    <View style={tw`h-1 bg-gray bg-opacity-30`}>
      <Animated.View
        style={[
          tw`h-1 bg-yellow`,
          {
            width: progress.interpolate({
              inputRange: [0, 100],
              outputRange: ["0%", "100%"],
              extrapolate: "clamp",
            }),
          },
        ]}
      />
      {/* <Text>{progress._value}</Text> */}
    </View>
  );
};

export default ProgressBar;
