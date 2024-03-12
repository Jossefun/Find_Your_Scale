import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { globalStyle } from '../styles/global';
import { scales } from "../data/dataScales";

export default function ChooseGenre( { navigation } ){
    
  const [uniqueGenres, setUniqueGenres] = useState([]);

  useEffect(() => {
    // Create a Set to store unique genres efficiently
    const genreSet = new Set();
    const uniqueScales = scales.filter((scale) => {
      // Check if genre exists in the Set, add if not and return the scale
      if (!genreSet.has(scale.genre)) {
        genreSet.add(scale.genre);
        return true;
      }
      return false; // Exclude duplicates
    });

    setUniqueGenres(uniqueScales);
  }, []);
       
    
    return(
       <View style={globalStyle.container}>
            <FlatList
                data={uniqueGenres}
                //item pointing on each row in data review
                renderItem = {( {item} ) => (
                        <TouchableOpacity onPress={()=> navigation.navigate('SubScale', {
                            genre: item.genre, title: item.title, interval: item.interval})}>
                            <View style={globalStyle.flatList}>
                                <Text style= {globalStyle.textList}>{ item.genre }</Text>
                            </View> 
                        </TouchableOpacity>                   
                )}
            />
      </View>
    )
    
}

