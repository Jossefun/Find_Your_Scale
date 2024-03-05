import React, { useState } from "react";
import { View, Text, TouchableOpacity, Sound } from "react-native";
import { globalStyle } from '../styles/global';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getScaleNotes } from "../functions";
import { Audio } from 'expo-av';



export default function ShowScales ({navigation}){

    const route = useRoute();
    const combinedData =route.params?.combinedData
    const { selectedNote, item } = combinedData;
    const scaletoshow = getScaleNotes(combinedData)
    console.log("scale from getScaleNotes: ", item)
    console.log("scaletoshow from getScaleNotes: ", scaletoshow)
    
    //Sound Handeling
    // Create a soundMap object that maps notes to their corresponding sound
    //  file paths before rendering the component.
    // The playSound function checks if the note exists in the soundMap.
    // If it exists, the sound is loaded and played based on the mapped path.
    // Otherwise, a warning message is logged.

    const soundMap = {
        "C":  require('../notesMusic/Piano-4-Octave/C.wav'),
        "C#": require('../notesMusic/Piano-4-Octave/C#.wav'),
        "D":  require('../notesMusic/Piano-4-Octave/D.wav'),
        "D#": require('../notesMusic/Piano-4-Octave/D#.wav'),
        "E":  require('../notesMusic/Piano-4-Octave/E.wav'),
        "F":  require('../notesMusic/Piano-4-Octave/F.wav'),
        "F#": require('../notesMusic/Piano-4-Octave/F#.wav'),
        "G":  require('../notesMusic/Piano-4-Octave/G.wav'),
        "G#": require('../notesMusic/Piano-4-Octave/G#.wav'),
        "A":  require('../notesMusic/Piano-4-Octave/A.wav'),
        "A#": require('../notesMusic/Piano-4-Octave/A#.wav'),
        "B":  require('../notesMusic/Piano-4-Octave/B.wav'),
        "C":  require('../notesMusic/Piano-4-Octave/C.wav'),
    }

     
    const playSound = async (note) => {
      console.log("chosen note for play: ", note)
      if (!Object.hasOwnProperty.call(soundMap, note)) {
        console.warn(`Sound file not found for note: ${note}`);
        return;
      }
           
      const { sound } = await Audio.Sound.createAsync(soundMap[note]);
      await sound.setStatusAsync({ shouldPlay: true });
      // Cleanup (optional):
      //sound.unloadAsync(); // Unload the sound after playback
          
    };
          
     
    
    return(
        <View style={globalStyle.container}>
            { scaletoshow.map((note, index)=> (
              <TouchableOpacity  key={`${note}- ${index}`} onPress={() => playSound(note)}>
                 <View  style = {globalStyle.homeList}>
                     <Text style = {globalStyle.titleText}> {note} </Text>   
                 </View>
              </TouchableOpacity> 
            ))}
        </View>
        
    )
  
}

