import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyle } from '../styles/global';
import {  useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { scales } from '../data/dataScales';


export default function ChooseNote (){
  const [selectedNote, setSelectedNote] = useState(null); // State variable to store selection
  const navigation = useNavigation()
  const route = useRoute();
  const item =route.params?.item
  console.log("my item from chooseNotes: ", item)
  
  
  
  const handleNotePress = (note) => {
    setSelectedNote(note);
    const combinedData = {selectedNote, item}
    console.log("combinedData: ",combinedData)
    console.log("selected note: ",selectedNote)
    navigation.navigate('ShowScales', {combinedData})

  }

  return (
    <View style= {globalStyle.container}>
    {/* <Text style= {globalStyle.simpleText}>Choose Your Key Note:</Text> */}
      
      <View style={ globalStyle.container }>
        {["C", "C#","D" ,"D#","E", "F", "F#", "G", "G#","A",'A#', "B"].map((note) => (
          <TouchableOpacity key={note} onPress={() => handleNotePress(note)}>
             <View style ={ globalStyle.flatList}> 
                 <Text style={globalStyle.textList}>{note}</Text>
            </View>
         </TouchableOpacity>
        ))}
      </View>
      {/* {selectedNote && <Text>Selected Note: {selectedNote}</Text>} */}
    </View>
  );
}


