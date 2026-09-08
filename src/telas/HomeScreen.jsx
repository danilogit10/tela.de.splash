import { StyleSheet,Text, View, Image} from "react-native";
import { ScrollView } from "react-native-web";
export default function HomeScreen(){
    
    return (

        <ScrollView style={styles.container}>
        <Text style={styles.welcome}>Olá, visitante</Text>
        <Text style={styles.subtitle}>Encontre a planta perfeita para o seu  lar.
        </Text>
        
        <Image
        source={{
            uri: "https://img.magnific.com/fotos-premium/um-fundo-rico-de-flores-azuis-profundas-criando-uma-atmosfera-temperamental-e-elegante_917664-196319.jpg?semt=ais_hybrid&w=740&q=80"
        }}
        style={styles.banner}
        />
        <Text style={styles.sectionTitle}>
            Produtos Populares
        </Text>
        <View style={styles.card}>
            <Image
            source={{
                uri: "https://cdn.shopify.com/s/files/1/0832/4779/2394/files/MonsteraDeliciosa-110cm-610319.jpg?v=1736442436"
            }}
            style={styles.cardImage}
            />
            <Text style={styles.plantName}>
                Monstera Deliciosa
            </Text>
            <Text style={styles.price}>
                R$ 89,90
            </Text>
        </View>

        <View style={styles.card}>
            <Image
            source={{
                uri: "https://s2-casavogue.glbimg.com/BlwN2a7v9XkFAINzhStCx_gVzug=/0x0:4088x2725/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2023/0/d/Hr6Bv5Sa6XACHkqkMAmQ/rosa-do-deserto-1-.jpg"
            }}
            style={styles.cardImage}
            />
            <Text style={styles.plantName}>
                Rosa do Deserto
            </Text>
            <Text style={styles.price}>
                R$ 109,90
            </Text>
        </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
        welcome: {
            fontWeight: 'bold',
            fontSize:28,
            color:"#4A5D23",
            marginTop: 10,
        },

        container: {
            flex: 1,
            backgroundColor: "#fff",
            padding: 20,
        },

        subtitle: {
            fontSize:16,
            color: "#666",
           marginTop:5,
           marginBottom: 20, 
        },

        banner: {
            widtg: "100%",
            height: 200,
            borderRadius: 15,
        },

        sectionTitle: {
            fontSize: 22,
            fontWeight: "bold",
            marginTop: 25,
            marginBottom: 15,
            color: "#4A5D23",
        },

        card: {
            backgroundColor: "#F5F5F5",
            padding: 15,
            borderRadius: 12,
            marginBottom: 15,
        },

        cardImage: {
            width: "100%",
            height:100,
            borderRadius: 10,
            marginBottom: 10,
        },

        plantName: {
            fontSize: 18,
            fontWeight: "bold",
        },

    });