import React, {useState, useEffect} from 'react';
import { View, FlatList, Image, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native';

interface Farmacia {
    id: string;
    name: string;
    urllogo: string;
    phone: string;
}

const Farmacias: React.FC =() => {
    const [farmacias, setFarmacias ] = useState<Farmacia[]>([]);

    useEffect(() => {
        fetch('https://api.lopscorp.com/farmacias').then(response => {
            response.json().then(data => {
                setFarmacias(data);
            })
        })
    }, []);
    return (
        <SafeAreaView>
        <FlatList
            contentContainerStyle={{padding: 24}}
            data={farmacias}
            keyExtractor={farmacia => farmacia.id}
            renderItem={({ item: farmacia }) => (
                <View style={styles.member}>
                    <Image style={styles.image} source={{uri: farmacia.urllogo }} />
                    <Text style={styles.name}>{ farmacia.name }</Text>
                    <Text>{ farmacia.phone }</Text>
                </View>
            )}
        />
        </SafeAreaView>
    );
}

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
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 16,
    },
    name: {
        color: 'orange',
        fontSize: 14,
        display: 'flex',
        flex: 1,
    }

})

export default Farmacias;