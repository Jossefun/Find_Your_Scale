import { StyleSheet } from "react-native";

export const globalStyle = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    titleText: {
        fontFamily: 'AlNile-Bold',
        fontSize: 20,
        color: '#ffffff',
        
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
        
    },
    button:{
        backgroundColor: '#ff9900',
        
    },   
    homeList:{
        backgroundColor: '#3d0099',
        margin: 4 ,
        padding: 7,
        shadowColor: '#666699',
        shadowOpacity: 0.5,
        shadowRadius: 4,
        borderRadius: 5,

    }
})