import type {
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
} from "@react-navigation/material-top-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  useTheme,
  type ParamListBase,
  type TabNavigationState,
} from "@react-navigation/native";
import { withLayoutContext } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const { Navigator } = createMaterialTopTabNavigator();

const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

export default function MaterialTopTabsLayout() {
  const { colors } = useTheme();
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <MaterialTopTabs
          initialRouteName="index"
          screenOptions={{
            tabBarActiveTintColor: colors.text,
            tabBarInactiveTintColor: "grey",
            tabBarLabelStyle: {
              fontSize: 14,
              textTransform: "capitalize",
              fontWeight: "bold",
            },
            tabBarIndicatorStyle: {
              backgroundColor: colors.text,
            },
            tabBarScrollEnabled: true,
            tabBarItemStyle: { width: "auto", minWidth: 100 },
          }}
        >
          <MaterialTopTabs.Screen
            name="index"
            options={{
              title: "Blue",
            }}
          />
          <MaterialTopTabs.Screen
            name="red"
            options={{
              title: "Red",
            }}
          />
          <MaterialTopTabs.Screen
            name="green"
            options={{
              title: "Green",
            }}
          />
          <MaterialTopTabs.Screen
            name="purple"
            options={{
              title: "Purple",
            }}
          />
        </MaterialTopTabs>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
