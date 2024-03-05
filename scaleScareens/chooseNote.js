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
    navigation.navigate('ShowScales', {combinedData})

  }

  return (
    <View style= {globalStyle.container}>
      <View style={globalStyle.viewText}>
          <Text>Choose Your Key Note :</Text>
      </View>
      
      <View style={ globalStyle.container }>
        {["A","A#", "B", "C", "C#","D" ,"D#","E", "F", "F#", "G", "G#"].map((note) => (
          <TouchableOpacity key={note} onPress={() => handleNotePress(note)}>
             <View style ={ globalStyle.homeList}> 
                 <Text style={globalStyle.titleText}>{note}</Text>
            </View>
         </TouchableOpacity>
        ))}
      </View>
      {/* {selectedNote && <Text>Selected Note: {selectedNote}</Text>} */}
    </View>
  );
}


