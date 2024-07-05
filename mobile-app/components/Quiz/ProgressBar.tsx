import React, { useEffect } from "react";
import { View } from "react-native";
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
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(toValue, {
      duration: 500,
      easing: Easing.linear,
    });
  }, [toValue]);

  const style = useAnimatedStyle(() => {
    return {
      width: `${progress.value}%`,
    };
  });

  return (
    <View style={tw`h-1 bg-gray bg-opacity-30`}>
      <Animated.View
        style={[
          tw`h-1 bg-yellow`,
          style,
        ]}
      />
    </View>
  );
};

export default ProgressBar;
