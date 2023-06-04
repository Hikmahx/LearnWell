// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from './home';
// import MyNotes from './mynotes';

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="MyNotes" component={MyNotes} />
//     </Tab.Navigator>
//   );
// }

import { Tabs } from "expo-router";
// import { BlurView } from "expo-blur";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";
import Home from "../../assets/home.svg";
import tw from "../../lib/tailwind";
import Search from "../../assets/search.svg";
export default function AppLayout() {
  return (
    <SafeAreaProvider>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: "home",
            href: "/home",
            tabBarLabel: "Home",
            headerShown: false,
            // tabBarStyle: { display: "none" },
            tabBarIcon: ({ color, size }) => (
              <Svg
                // style={tw`fill-${color}`}
                fill={color}
                // fill="currentColor"
                height="48"
                viewBox="0 96 960 960"
                width="48"
              >
                <Path d="M220 876h150V626h220v250h150V486L480 291 220 486v390Zm-60 60V456l320-240 320 240v480H530V686H430v250H160Zm320-353Z" />
              </Svg>
            ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            // title: "search",
            href: "/search",
            tabBarLabel: "Browse",
            headerShown: false,
            // tabBarStyle: { display: "none" },
            tabBarIcon: ({ color, size }) => (
              <Svg fill={color} height="48" viewBox="0 96 960 960" width="48">
                <Path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z" />
              </Svg>
            ),
          }}
        />
        <Tabs.Screen
          name="mynotes"
          options={{
            href: "/mynotes",
            tabBarLabel: "My Notes",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Svg fill={color} height="48" viewBox="0 96 960 960" width="48">
                <Path d="M480 936v-71l216-216 71 71-216 216h-71ZM120 726v-60h300v60H120Zm690-49-71-71 29-29q8-8 21-8t21 8l29 29q8 8 8 21t-8 21l-29 29ZM120 561v-60h470v60H120Zm0-165v-60h470v60H120Z" />
              </Svg>
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "profile",
            href: "/profile",
            tabBarLabel: "Profile",
            headerShown: false,
            // tabBarStyle: { display: "none" },
            tabBarIcon: ({ color, size }) => (
              <Svg
                // xmlns="http://www.w3.org/2000/svg"
                height="48"
                fill={color}
                viewBox="0 96 960 960"
                width="48"
              >
                <Path d="M480 575q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160 896v-94q0-38 19-65t49-41q67-30 128.5-45T480 636q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800 764 800 802v94H160Zm60-60h520v-34q0-16-9.5-30.5T707 750q-64-31-117-42.5T480 696q-57 0-111 11.5T252 750q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570 425q0-39-25.5-64.5T480 335q-39 0-64.5 25.5T390 425q0 39 25.5 64.5T480 515Zm0-90Zm0 411Z" />
              </Svg>
            ),
          }}
        />
      </Tabs>
    </SafeAreaProvider>
    // <Home fill={color} width={size} height={size}/>
  );
}
