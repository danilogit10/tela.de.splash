import {createNativeStackNavigator} from "@react-navigation/native-stack";
import splashScreen from "../telas/SplashScreen";
import loginScreen from "../telas/loginScreen";
import RegisterScreen from "../telas/RegisterScreen";
import TabNavigation from "./tabNavigation";

const Stack = createNativeStackNavigator();

export default function StackNavigation(){
    return (
        <Stack.Navigator>

            <Stack.Screen
            name = "splash"
            component = {splashScreen}
            options = {{headerShown:false}}
            />

            <Stack.Screen
            name = "Tabs"
            component = {TabNavigation}
            options = {{headerShown:false}}
            />

            <Stack.Screen
            name="Cadastro"
            component={RegisterScreen}
            options={{headerShown: false}}
            />

            
            <Stack.Screen
            name="Login"
            component={loginScreen}
            options={{headerShown: false}}
            />
        
        </Stack.Navigator>
    );
}