// import { Stack } from "expo-router/stack";

// export default function Layout() {
//   return <Stack initialRouteName="home" />;
// }



// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Home from ".";
// import Onboarding from "./onboarding";
// // import Home from ".";

// const Stack = createNativeStackNavigator();

// function MyStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="home" component={Home} />
//       <Stack.Screen name="onboarding" component={Onboarding} />
//     </Stack.Navigator>
//   );
// }

import { Stack } from "expo-router/stack";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerTitle: "Home", headerShown: false }}
      />
      <Stack.Screen
        name="onboarding"
        options={{ headerTitle: "Onboarding", headerShown: false }}
      />
      <Stack.Screen
        name="register"
        options={{ headerTitle: "Register", headerShown: false }}
      />
      <Stack.Screen
        name="login"
        options={{ headerTitle: "Login", headerShown: false }}
      />
    </Stack>
  );
}
