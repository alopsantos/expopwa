import React, { useState, useEffect } from "react";
import {
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import {
  View,
  FlatList,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from "react-native";

interface Plantao {
  _id: string;
  name: string;
  phone: string;
  datainicio: string;
  datafim: string;
  farmacia: object;
  urllogo: object;
}

const Main: React.FC = () => {
  const [plantao, setPlantao] = useState<Plantao[]>([]);

  useEffect(() => {
    fetch("https://api.lopscorp.com/plantao").then((response) => {
      response.json().then((data) => {
        setPlantao(data);
      });
    });
  }, []);
  return (
    <>
      <StatusBar  barStyle="light-content" backgroundColor="#312e38" />
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <FlatList
            contentContainerStyle={{ padding: 24 }}
            data={plantao}
            keyExtractor={(plantao) => plantao._id}
            renderItem={({ item: plantao }) => (
              <>
                <View style={styles.member}>
                  <Image
                    style={styles.image}
                    source={{ uri: plantao.farmacia.urllogo }}
                  />
                </View>
                <View style={styles.detalhes}>
                  <Text style={styles.name}>{plantao.farmacia.name}</Text>
                  <Text style={styles.detalhe}>
                    <MaterialCommunityIcons
                      style={styles.icones}
                      name="phone-classic"
                      size={24}
                    />{" "}
                    Telefone: {plantao.farmacia.phone}
                  </Text>
                  <Text style={styles.detalhe}>
                    <MaterialIcons
                      style={styles.icones}
                      name="location-on"
                      size={24}
                    />{" "}
                    Endereço: {plantao.farmacia.address[0]},
                    {plantao.farmacia.address[1]}
                  </Text>
                  <Text style={styles.detalhe}>
                    <MaterialIcons
                      style={styles.icones}
                      name="location-on"
                      size={24}
                    />{" "}
                    Bairro: {plantao.farmacia.address[2]}
                  </Text>
                  <Text style={styles.detalhe}>
                    <FontAwesome
                      style={styles.icones}
                      name="calendar"
                      size={24}
                    />{" "}
                    Inicio:{" "}
                    {new Date(plantao.datainicio).toLocaleDateString("pt-br")}
                  </Text>
                  <Text style={styles.detalhe}>
                    <FontAwesome
                      style={styles.icones}
                      name="calendar"
                      size={24}
                    />{" "}
                    Fim: {new Date(plantao.datafim).toLocaleDateString("pt-br")}
                  </Text>
                </View>
              </>
            )}
          />
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  icones: {
    marginRight: 20,
  },
  member: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    flex: 1,
    width: 332,
    height: 332,
  },
  detalhes: {
    flex: 1,
    flexDirection: "column",
    marginTop: 10,
  },
  detalhe: {
    display: "flex",
    alignItems: "center",
    marginBottom: 8,
  },
  name: {
    marginBottom: 8,
    color: "#4b5c6b",
    fontSize: 24,
    display: "flex",
    flex: 1,
  },
});

export default Main;
