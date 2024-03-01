import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { globalStyle } from '../styles/global';
import { useNavigation } from '@react-navigation/native';


const ReviewDetails = ({ route }) => {

    const { item } = route.params;

    return(
        <View style={globalStyle.container}>
           <Text>{ item.title }</Text>
           
        </View>
    )

}

export default  ReviewDetails;
