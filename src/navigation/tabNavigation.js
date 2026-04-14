import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../telas/HomeScreen";
import SplashScreen from "../telas/SplashScreen";
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator>

            <Tab.Screen name= "Home" component= {HomeScreen} />
            <Tab.Screen name= "Splash" component= {SplashScreen} />

        </Tab.Navigator>
    );
}