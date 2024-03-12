import { StyleSheet } from "react-native";

export const globalStyle = StyleSheet.create({
    container: {
        flex: 1,
        padding: 13,
    },
    textList: { 
        fontFamily: 'AlNile-Bold',
        fontSize: 20,
        color: '#ffffff',
    },   
    flatList:{
        
        backgroundColor: '#3d0099',
        margin: 4 ,
        padding: 7,
        shadowColor: '#666699',
        shadowOpacity: 0.5,
        shadowRadius: 4,
        borderRadius: 5,
        //height: 35,

    },
    simpleText:{
        fontFamily: 'AlNile-Bold',
        fontSize: 20,
        color: '#000000',
    },
    chooseNote:{
        flexDirection: 'row', 
        flexWrap: 'wrap',
        
    }
})