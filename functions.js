import { scales } from "./data/dataScales";

const noteList=["A","A#", "B", "C", "C#","D" ,"D#","E", "F", "F#", "G", "G#"];

export  function getScaleNotes(title, startIndexNote) {
    // Find the scale object with the matching title
    const scale = scales.find(scale => scale.title === title); 
    console.log("scale: ", scale.title, " ", scale.intervals)
    // Find the starting note index in the noteList
    let startIndex = noteList.indexOf(startIndexNote);
    
    const scaleNotes = [];
    scaleNotes.push(noteList[startIndex])
    
    //Loop through the intervals and build the scale
    for (let i = 0; i < scale.intervals.length; i++) {    
      let currentInterval = scale.intervals[i];
      let newIndex = startIndex + currentInterval;
      
      console.log("currentInterval: ", currentInterval)
      console.log("startIndex: ", startIndex)
      console.log("jump from start index and push to result: ", newIndex)
  
      // Handle wrapping around the note list
      while(newIndex >= noteList.length){
        newIndex -= noteList.length     // Subtract the list length to go back to the beginning
      }

      scaleNotes.push(noteList[newIndex]);
      startIndex  += scale.intervals[i];
    }
     
    console.log("result: ", scaleNotes)
    console.log("\n","\n","\n")
  
    return scaleNotes;

  }


  