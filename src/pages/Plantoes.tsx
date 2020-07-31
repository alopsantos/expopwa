import React, {useEffect, useState} from 'react';
import { Text, SafeAreaView, StatusBar, StyleSheet, FlatList, Image, View } from 'react-native';

interface Plantao {
  id: string;
  name: string;
  phone: string;
  datainicio: string;
  datafim: string;
  farmacia: object;
  urllogo: object;
}

const Plantoes: React.FC = () => {
  const [plantao, setPlantao ] = useState<Plantao[]>([]);

    useEffect(() => {
        fetch('https://api.lopscorp.com/plantoes').then(response => {
            response.json().then(data => {
                setPlantao(data);
            })
        })
    }, []);
    return (
        <SafeAreaView style={styles.container}>
        <FlatList
            contentContainerStyle={{padding: 24}}
            data={plantao}
            keyExtractor={plantao => plantao.id}
            renderItem={({ item: plantao }) => (
              <>
                <View style={styles.member}>
                    <Image style={styles.image} source={{uri: plantao.farmacia.urllogo }} />
                </View>
                <View>
                  <Text style={styles.name}>{ plantao.datainicio }</Text>
                    <Text>{ plantao.datafim }</Text>
                </View>
              </>
            )}
        />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
  member: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20
  },
  image: {
      width: 100,
      height: 100,
      marginRight: 16,
  },
  name: {
      color: 'orange',
      fontSize: 14,
      display: 'flex',
      flex: 1,
  }

})
export default Plantoes;
