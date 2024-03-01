import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { globalStyle } from '../styles/global';
import { useNavigation, useRoute } from '@react-navigation/native';


export default function ShowScales ({navigation}){

    const route = useRoute();
    const interval =route.params?.interval
    const title = route.params?.title
    console.log("title:", title)

    
    return(
        <View style={globalStyle.container}>
           <Text>Here is title here :{ title } 
                 Here is interval: { interval }
           </Text>
             
        </View>
    )

}

