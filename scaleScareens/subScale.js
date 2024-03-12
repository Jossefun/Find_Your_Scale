import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { globalStyle } from '../styles/global';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { scales } from "../data/dataScales";

export default function SubScale (){
    const navigation = useNavigation()

    const route = useRoute();
    const interval =route.params?.interval
    const title = route.params?.title
    const genre  = route.params.genre;

    const [uniqueTitles, setUniqueTitles] = useState([]);

    useEffect(() => {
    // Create a Set to store unique genres efficiently
    const titleSet = new Set();
    const uniqueTitles = scales.filter((scale) => {
        // Check if genre exists in the Set, add if not and return the scale
        if (scale.genre === genre){
            titleSet.add(scale.genre);
            return true;
            }
        return false; // Exclude duplicates
    });

    setUniqueTitles(uniqueTitles);
    
    }, []);

   
    return(
        <View style={globalStyle.container}>
            <FlatList
                data={uniqueTitles}
                renderItem = {( {item} ) => (
                    <TouchableOpacity onPress={()=> navigation.navigate('ChooseNote', {item})}>
                        <View style = {globalStyle.flatList}>
                            <Text style = {globalStyle.textList}>{ item.title }</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
           
        </View>
    )

    
}
