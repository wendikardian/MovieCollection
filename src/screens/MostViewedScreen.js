import React, {useEffect} from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'

const MostViewedScreen = (props) => {
    const {route} = props;
    const sortedMostViewed = route.params.allMostViewed;
    useEffect(() => {
        console.log(sortedMostViewed.length)
    },[])
    return (
        <View>
            <FlatList contentContainerStyle={styles.mainDataContainer} data={sortedMostViewed} keyExtractor={(item) => item.id} renderItem = {({item}) => { 
                return(
                    <View style={styles.movieContainer}>
                        <Image style={styles.movieImage} source={{uri : item.imageLink}} />
                    </View>
                )
            }}  /> 
        </View>
    )
}

const styles = StyleSheet.create({
    mainDataContainer : {
        padding: 8
    },movieContainer : {
        margin: 8,
        padding: 16,
        backgroundColor: 'skyblue'
    }, movieImage : {
        width: 130,
        height: 200
    }
})

export default MostViewedScreen