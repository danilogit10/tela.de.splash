import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../telas/HomeScreen";
import SearchScreen from "../telas/SearchScreen";
import FavoritesScreen from "../telas/FavoritesScreen";
import ProfileScreen from "../telas/ProfileScreen";
import ProductsScreen from "../telas/ProductsScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (

        <Tab.Navigator>

            <Tab.Screen name= "Home" component= {HomeScreen} />
            <Tab.Screen name= "Search" component= {SearchScreen} />
            <Tab.Screen name= "Favoritos" component={FavoritesScreen}/>
            <Tab.Screen name= "Perfil" component={ProfileScreen}/>
            <Tab.Screen name= "Produtos" component={ProductsScreen}/>

        </Tab.Navigator>
    );
}