import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import {movieData} from '../../data/MovieData.js'

const HomeScreen = () => {
    return(
        <View style={styles.mainContainer}>
            <FlatList data={movieData} keyExtractor = {(item) => item.id} contentContainerStyle={styles.flatListContainer} renderItem = {({item}) => {
                return(
                    <View style={styles.dataContainer}>
                        <Image style={styles.movieImage} source={{uri : item.imageLink}} />
                        <View style={styles.movieDescriptionContainer}>
                            <Text style={styles.title}>{item.title}</Text>
                            <View style={styles.yearContainer}>
                                <Text>{item.year}</Text>
                            </View>
                            <Text>{item.rating}</Text>
                        </View>
                    </View>
                )
            }} />
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer : {
        flex :1
    },
    flatListContainer : {
        padding: 8
    },
    movieImage : {
        width: 130,
        height: 200,
        borderRadius : 10
    },
    dataContainer : {
        flexDirection: 'row',
        margin: 8,
        borderWidth : 2,
        borderRadius : 10,
        borderColor: "#96ceb4",
        padding: 16,
    },
    title : {
        fontSize : 18,
        fontWeight : 'bold'
    },
    movieDescriptionContainer: {
        flex : 1,
        justifyContent : 'center',
        margin: 8
    },
    yearContainer : {
        marginTop : 8,
        marginBottom: 8
    }
})

export default HomeScreen