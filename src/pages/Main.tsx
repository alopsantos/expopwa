import React, {useState, useEffect} from 'react';
import { View, FlatList, Image, Text, StyleSheet } from 'react-native';

interface Farmacia {
    id: string;
    name: string;
    urllogo: string;
    phone: string;
}

const Main: React.FC =() => {
    const [farmacias, setFarmacias ] = useState<Farmacia[]>([]);

    useEffect(() => {
        fetch('https://api.lopscorp.com/farmacias').then(response => {
            response.json().then(data => {
                setFarmacias(data);
            })
        })
    }, []);
    return (
        <FlatList
            contentContainerStyle={{padding: 24}}
            data={farmacias}
            keyExtractor={farmacia => farmacia.name}
            renderItem={({ item: farmacia }) => (
                <View style={styles.member}>
                    <Image style={styles.image} source={{uri: farmacia.urllogo }} />
                    <Text style={styles.name}>{ farmacia.name }</Text>
                    <Text>{ farmacia.phone }</Text>
                </View>
            )}
        />
    );
}

const styles = StyleSheet.create({
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

export default Main;