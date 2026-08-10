import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function ProductScreen() {
  return (
    <ScrollView style={styles.container}>
      
      {/* Imagem do produto */}
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://mygarden.com.co/wp-content/uploads/2020/05/PLANTA-MONSTERA-DELICIOSA-.jpg.webp",
          }}
          style={styles.image}
        />
      </View>

      {/* Nome do produto */}
      <View style={styles.content}>
          

        <Text style={styles.productName}>
          Monstera Deliciosa
        </Text>


        <Text style={styles.price}>
          R$ 89,90
        </Text>

        {/* Sobre */}
        <Text style={styles.label}>Sobre</Text>

        <Text style={styles.description}>
          A Monstera deliciosa, popularmente conhecida como costela-de-adão,
           é uma planta trepadeira tropical da família Araceae,
            nativa das florestas do México e da América Central.
             Ela é famosa por suas folhas grandes, verde-escuras e brilhantes,
              que possuem furos e recortes naturais chamados fenestrações.
        </Text>

        {/* Botão */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            ADICIONAR CARRINHO
          </Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  imageContainer: {
    width: "90%",
    height: 280,
    marginTop: 20,
    alignSelf: "center",
    backgroundColor: "#f2f2f211",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "200%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: 10,
  },

  content: {
    padding: 20,
  },

  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginTop: 15,
    marginBottom: 5,
  },

  productName: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000",
  },

  price: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2e7d32",
  },

  description: {
    fontSize: 16,
    color: "#555",
    lineHeight: 24,
  },

  button: {
    backgroundColor: "#000",
    height: 50,
    borderRadius: 8,
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});