
noteList=["A","A#", "B", "C", "C#","D" ,"D#","E", "F", "F#", "G", "G#", "A",
         "A#", "B", "C", "C#","D" ,"D#","E", "F", "F#", "G", "G#"]

// //from AI
// 1. Researching Scales:

// Ethiopian Scales: Explore resources like "Ethiopian Musical Modes" by Fekadu G. Yohannes and online resources like "Ethiopian Music Scales."
// Indian Scales (Thaat system): Refer to books like "The Ragas of North Indian Classical Music" by Ashok D. Ranade and online sources like "Thaat System Explained."
// R&B Scales: Consult books like "The R&B Guitarist" by Desi Serna and websites like "R&B Scales and Chords."
// 2. Replacing Intervals with Numbers:
// Semitones: Use numbers 0-11, with 0 being a unison and 11 being an octave.
// Whole Tones/Half Steps: Use 2 for a whole tone and 1 for a half step.
// Microtones: Assign fractional values based on their size relative to a semitone.
// 3. Building Your List:

// Start with the provided examples and expand based on your research.
// Include relevant information like scale mode (major, minor, etc.).
// Use consistent notation for intervals (e.g., semitones).

export const scales = [
    // Ethiopian Scales
    {
      genre: "Ethiopian", title: "Tizita", intervals: [2, 2, 1, 2, 1, 2], key: 1,
    },
    {
      genre: "Ethiopian",title: "Ambasel", intervals: [1, 2, 2, 2, 1, 2], key: 2,
    },
    {
      genre: "Ethiopian", title: "Gonder", intervals: [2, 2, 1, 2, 1, 1, 2],
      key: 3,
    },
  
    // Indian Scales (Thaat system)
    {
      genre: "Indian", title: "Bilawal", intervals: [2, 2, 1, 2, 1], key: 4,
    },
    {
      genre: "Indian", title: "Bhairav", intervals: [1, 1, 2, 2, 1, 2], key: 5,
    },
    {
      genre: "Indian", title: "Charukeshi", intervals: [1, 2, 1, 2, 1, 1], key: 6,
    },
  
    // R&B Scales (Pentatonic and Blues-based)
    {
      genre: "R&B", title: "Major Pentatonic", intervals: "[2, 2, 1, 2, 1]", key: 7,
    },
    {
      genre: "R&B", title: "Minor Pentatonic", intervals: "[1, 3, 2, 3, 1]", key: 8,
    },
    {
      genre: "R&B", title: "Blues Scale", intervals: [1, 1, 2, 1, 1, 1, 2], key: 9,
    },
  
    // Additional Scales (Examples)
    {
      genre: "Western", title: "Major Scale", intervals: [2, 2, 1, 2, 2, 2, 1], key: 10,
    },
    {
      genre: "Western", title: "Minor Scale (Natural)", intervals: "[2, 1, 2, 2, 1, 2, 2]", key: 11,
    },
    {
      genre: "Japanese", title: "Yo scale", intervals: "[2, 3, 2, 2, 3, 2]", key: 12,
    },
  ];