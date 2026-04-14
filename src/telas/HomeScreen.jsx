import { StyleSheet,Text, View} from "react-native";
export default function HomeScreen(){
    
    return (
        <View>
        <Text style={StyleSheet.bemvindo}>Olá, visitante</Text>
        </View>
    );
}
const styles = StyleSheet.create({
        bemvindo: {
            fontWeight: 'bold',
        }
    });