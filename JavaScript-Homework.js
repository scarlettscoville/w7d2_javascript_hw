//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){
    for (namE of dog_names){
        if (dog_string.includes(namE)) {
            console.log('Matched "' + namE + '"') 
        }else{
            console.log('No match for "' + namE + '"')
        }
    }
       
}
    


//Call method here with parameters
findWords()


//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let givenArr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(word of arr){
        if (arr.indexOf(word) % 2 == 0){
            arr.splice(arr.indexOf(word), 1, 'even index')
        }
        else{
            continue
        };
    };
    return arr

}

console.log(replaceEvens(givenArr))


//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
