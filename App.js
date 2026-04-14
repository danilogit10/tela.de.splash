import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./src/navigation/tabNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}