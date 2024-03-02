import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { globalStyle } from '../styles/global';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getScaleNotes } from "../functions";

export default function ShowScales ({navigation}){

    const route = useRoute();
    const interval =route.params?.interval
    const title = route.params?.title
    const genre = route.params?.genre

    const keyNote = "G#"

    const scaletoshow = getScaleNotes(title, keyNote)
    
    return(
        <View style={globalStyle.container}>
            <Text> Here Your {genre}  {title}  </Text>
           <Text> {scaletoshow} </Text>
             
        </View>
    )

}

