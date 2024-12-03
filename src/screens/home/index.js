import React from "react";
import { View,Text, StyleSheet , Image, TouchableOpacity} from "react-native";
import { SearchPokemons } from "../searchPokemon";
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation();
    return(
        <View style={styles.Container}>
            
            <Image 
            style={styles.imglogo}
            source={require('../../../imagens/pk.png')}
            />
            <Image
            style={styles.imgbola}
            source={require('../../../imagens/pokebola.png')}
            />
            <Text style={{fontSize:40, textAlign: 'center', fontWeight: 'bold'}}>
                Seja Bem vindo! 
            </Text>
            <Text style={{fontSize:40, textAlign: 'center', fontWeight: 'bold', marginBottom:40}}>
                 A sua pokedex!
            </Text>
            <TouchableOpacity style={styles.btn}>
                <Text style={{fontSize:20,color: '#FFF'}} 
                onPress={ () => navigation.navigate("SearchPokemons")}>Ver Pokémons!</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imglogo: {
        width:300,
        height:110
    },
    imgbola: {
        width:150,
        height:150
    },
    btn: {
        marginTop:50,
        borderWidth:1,
        borderRadius:15,
        backgroundColor: '#0000FF',
        padding:15
    }


});

export {Home}