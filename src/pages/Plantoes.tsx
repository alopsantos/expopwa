import React, { useEffect, useState } from "react";
import {
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList,
  Image,
  View,
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

const Plantoes: React.FC = () => {
  const [plantao, setPlantao] = useState<Plantao[]>([]);

  useEffect(() => {
    fetch("https://api.lopscorp.com/plantoes").then((response) => {
      response.json().then((data) => {
        setPlantao(data);
      });
    });
  }, []);
  return (
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
                <View>
                  <Text style={styles.name}>{plantao.farmacia.name}</Text>
                  <Text>{plantao.farmacia.address[2]}</Text>
                  <Text>
                    Incio:{" "}
                    {new Date(plantao.datainicio).toLocaleDateString("pt-br")}
                  </Text>
                  <Text>
                    Fim: {new Date(plantao.datafim).toLocaleDateString("pt-br")}
                  </Text>
                </View>
              </View>
            </>
          )}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  member: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 16,
    borderRadius: 8,
  },
  name: {
    color: "#4b5c6b",
    fontSize: 24,
    marginBottom: 8,
  },
});
export default Plantoes;
