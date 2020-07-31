import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";

interface Farmacia {
  id: string;
  name: string;
  urllogo: string;
  phone: string;
  address: string;
}

const Detalhesfarmacia: React.FC = () => {
  const [farmacias, setFarmacias] = useState<Farmacia[]>([]);

  useEffect(() => {
    fetch("https://api.lopscorp.com/farmacias").then((response) => {
      response.json().then((data) => {
        setFarmacias(data);
      });
    });
  }, []);
  return (
    <ScrollView>
      <SafeAreaView>
        <FlatList
          contentContainerStyle={{ padding: 24 }}
          data={farmacias}
          keyExtractor={(farmacia) => farmacia.id}
          renderItem={({ item: farmacia }) => (
            <View style={styles.member}>
              <Image style={styles.image} source={{ uri: farmacia.urllogo }} />
              <View>
                <Text style={styles.name}>{farmacia.name}</Text>
                <Text>{farmacia.address[2]}</Text>
                <Text>{farmacia.phone}</Text>
              </View>
            </View>
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
    marginBottom: 8,
    color: "#4b5c6b",
    fontSize: 24,
    display: "flex",
  },
});

export default Detalhesfarmacia;
