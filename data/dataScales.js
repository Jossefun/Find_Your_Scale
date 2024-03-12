

const noteList=["C", "C#","D" ,"D#","E", "F", "F#", "G", "G#", "A","A#", "B", "C", "C#","D" ,"D#","E", "F", "F#", "G","G#","A","A#", "B","C"]



export const scales = [
    // Ethiopian Scales
   
    {
      genre: "Ethiopian",
      title: "Ambasel", 
      intervals: [1,4,2,1], 
      key: 2,
    },
    {
      genre: "Ethiopian", 
      title: "Bati Major", 
      intervals: [4,1,2,4],
      key: 3,
    },
  
    // Indian Scales (Thaat system)
    {
      genre: "Indian", 
      title: "Bilawal", 
      intervals: [2, 2, 1, 2, 1], 
      key: 4,
    },
    {
      genre: "Indian", 
      title: "Bhairav", 
      intervals: [1, 1, 2, 2, 1, 2], 
      key: 5,
    },
    {
      genre: "Indian", 
      title: "Charukeshi", 
      intervals: [1, 2, 1, 2, 1, 1], key: 6,
    },
  
    // R&B Scales (Pentatonic and Blues-based)
    {
      genre: "R&B", 
      title: "Major Pentatonic", 
      intervals: [2, 2, 1, 2, 1], key: 7,
    },
    {
      genre: "R&B",
      title: "Dorian Mode",
      intervals: [2, 1, 2, 2, 2, 1, 2],
      key: 8,
    },
    {
      genre: "R&B",
      title: "Mixolydian Mode",
      intervals: [2, 2, 1, 2, 2, 1],
      key: 9,
    },
    {
      genre: "R&B",
      title: "Super Locrian",
      intervals: [1, 1, 1, 2, 1, 3, 1],
      key: 10,
    },
    {
      genre: "R&B",
      title: "Bebop Dominant Scale",
      intervals: [2, 2, 1, 1, 1, 2, 1],
      key: 11,
    },
    {
      genre: "R&B",
      title: "Whole Tone Scale",
      intervals: [2, 2, 2, 2, 2, 2],
      key: 12,
    },
    {
      genre: "R&B", 
      title: "Minor Pentatonic", 
      intervals: [1, 3, 2, 3, 1], 
      key: 13,
    },
    {
      genre: "R&B", 
      title: "Blues Scale", 
      intervals: [1, 1, 2, 1, 1, 1, 2], 
      key: 14,
    },
  
    // Additional Scales (Examples)
    {
      genre: "Western", 
      title: "Major", 
      intervals: [2, 2, 1, 2, 2, 2, 1], 
      key: 15,
    },
    {
      genre: "Western", 
      title: "Minor (Natural)", 
      intervals: [2, 1, 2, 2, 1, 2, 2], 
      key: 16,
    },
    {
      genre: "Japanese", 
      title: "Yo", 
      intervals: [2, 3, 2, 2, 3, 2], 
      key: 17,
    },
    {
      genre: "Ethiopian",
      title: "Anchi Hoye", 
      intervals: [1,4,1,3], 
      key: 18,
    },
    {
      genre: "Ethiopian",
      title: "Tizita Major", 
      intervals: [2,2,3,2], 
      key: 1,
    },
    {
      genre: "Ethiopian",
      title: "Tizita Minor", 
      intervals: [2,1,4,1], 
      key: 19,

    },
    {
      genre: "R&B",
      title: "Mixolydian b9 Scale",
      intervals: [1, 2, 2, 1, 1, 3/2, 1],
      key: 20,
     },
     {
      genre: "Arabic",
      title: "Hijaz Scale",
      intervals: [1, 3/4, 1, 1, 3/4, 1, 1/2],
      key: 21,
     }
  ];