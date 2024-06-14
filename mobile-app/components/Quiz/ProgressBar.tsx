import React, { useEffect } from "react";
import { View, Text } from "react-native";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from "react-native-reanimated";
import tw from "../../lib/tailwind";

interface ProgressBarProps {
  toValue: number;
}

const ProgressBar = ({ toValue }: ProgressBarProps) => {
  // const progress = useSharedValue(0);

  // useEffect(() => {
  //   progress.value = withTiming(toValue, {
  //     duration: 2000,
  //     easing: Easing.linear,
  //   });
  // }, [toValue]);

  const randomWidth = useSharedValue(10);

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(randomWidth.value, config),
    };
  });

  return (
    <View style={tw`h-1 bg-gray bg-opacity-30`}>
      <Animated.View
        style={[
          tw`h-1 bg-yellow`,
          {
            width: `${toValue}%`,
          },
          style,
        ]}
      />
      {/* <Text>{toValue}</Text> */}
    </View>
  );
};

export default ProgressBar;
