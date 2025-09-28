// B. 
let playlist = [
  { title: "Song1", artist: "A" },
  { title: "Song2", artist: "B" },
  { title: "Song3", artist: "C" }
];

// 1. Insert "SongX" after "Song2" using splice().
playlist.splice(2,-1,{ title: "Songx", artist: "D" })
console.log(playlist);

// 2. Remove the last song using pop().
console.log(playlist.pop());

// 3. Create a shallow copy of playlist.
//    → Change artist of "Song1". Observe effect on original.
// const shallowcopy=[...playlist]
// playlist[0].artist='E'
// console.log(shallowcopy);
// console.log(playlist); 

// 4. Create a deep copy of playlist.
//    → Add a new song to deep copy only. Verify original remains same.
const deepcopy=structuredClone(playlist)
console.log(deepcopy.push({ title: "Song4", artist: "F" }));
console.log(deepcopy);
console.log(playlist);

// 5. Extract ["Song1", "Song2"] into a new array using slice().
console.log(deepcopy.slice(0,-2));

// 6. Merge the deep copy with another array 
//    [{ title: "SongZ", artist: "Z" }] using spread.

let newarr=[{ title: "SongZ", artist: "Z" },...deepcopy]
console.log(newarr);
