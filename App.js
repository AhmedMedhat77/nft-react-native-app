import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./src/pages/Home/Home";
import Details from "./src/pages/Details/Details";

const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};
function App() {
  const [loaded] = useFonts({
    IterBold: require("./assets/fonts/Inter-Bold.ttf"),
    IterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    IterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    IterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    IterLight: require("./assets/fonts/Inter-Light.ttf"),
  });
  if (!loaded) return null;
  else {
    return (
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;
