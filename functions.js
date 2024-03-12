import { scales } from "./data/dataScales";
import { useRoute } from "@react-navigation/native";

const noteList=["C", "C#","D" ,"D#","E", "F", "F#", "G", "G#", "A","A#", "B", "C", "C#","D" ,"D#","E", "F", "F#", "G","G#","A","A#", "B","C"]

export function getScaleNotes(combinedData) {

    const { selectedNote, item } = combinedData

    console.log("scale from getScaleNotes: ", item)
    console.log("key Note from getScaleNotes: ", selectedNote)

    // Find the starting note index in the noteList
    let startIndex = noteList.indexOf(selectedNote);
    const scaleNotes = [];
    scaleNotes.push(noteList[startIndex])
    console.log("scaleNotes with first index: ",scaleNotes )
    
    //Loop through the intervals and build the scale
    for (let i = 0; i < item.intervals.length; i++) { 
         
      let currentInterval = item.intervals[i];
      let newIndex = startIndex + currentInterval;
      
      console.log("currentInterval: ", currentInterval)
      console.log("startIndex: ", startIndex)
      console.log("jump from start index and push to result: ", newIndex)
  
      // Handle wrapping around the note list
      while(newIndex >= noteList.length){
        newIndex -= noteList.length     // Subtract the list length to go back to the beginning
      }

      scaleNotes.push(noteList[newIndex]);
      startIndex  += item.intervals[i];
    }

    console.log("result: ", scaleNotes)
    console.log("\n","\n","\n")
  
    return scaleNotes;

  }


  