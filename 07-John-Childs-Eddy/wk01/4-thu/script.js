// Excercise 1

// Remove Eggbert (hint look at the slice/splice method(s))
// Change "Neff" to "No One"
// Access and console.log "Waldo"

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert", ["Lucinda", "Jacc", "Neff", "Snoop"], ["Petunia", ["Baked Goods", "Waldo"]]]

// Answer 1
whereIsWaldo.splice(0, 1);
console.log(whereIsWaldo);

// Answer 2

whereIsWaldo[2][2] = "No one"
console.log(whereIsWaldo);

//  Answer 3

console.log(whereIsWaldo[3][1][1]);

// Excercise 2

