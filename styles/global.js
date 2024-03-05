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
    viewText:{
        backgroundColor: ' #616105',
        fontFamily: 'march-rough',
        fontWeight: 'bold',
        fontSize: 14,
        //textTransform: 'uppercase',
        //backgroundColor: '#3d0099',
        //margin: 0,
        //padding: 0,
        shadowColor: '#666699',
        shadowOpacity: 0.5,
        shadowRadius: 4,
        borderRadius: 5,
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

    },
    chooseNote:{
        flexDirection: 'row', 
        flexWrap: 'wrap',
        
    }
})