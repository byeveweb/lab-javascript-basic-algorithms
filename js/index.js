// Iteration 1: Names and Input
const haker1 = 'Driver'
const haker2 = 'Navigator'
console.log(haker1.length)
console.log(haker2.length)


// Iteration 2: Conditionals
// if (haker1.length > haker2.length) {
//     console.log(`It seems that the navigator has the longest name, it has ${haker2.length} characters.`)
// }
// else if (haker1.length === haker2.length) {
//     console.log(`Wow, you both have equally long names, ${haker2.length} characters!`)
// } else {
//     console.log(`The driver has the longest name, it has ${haker1.length} characters.`)
// }



// // Iteration 3: Loops



function concatString(word) {
    let res = ''
    for (let i = 0; i < word.length; i++) {
        res += word.charAt(i) + '-'
    }

    console.log(res.toUpperCase())
}

concatString(haker1)
concatString(haker2)

function reverseString(word) {
    let res = ''
    for (let i = word.length - 1; i >= 0; i--) {
        res += word[i]
    }

    console.log(res)
}

reverseString(haker1)
reverseString(haker2)


//"a" anterior a la "c" => -2 0 -1
//a antes de la c => 2 o 1
// a y a son igules => 0

function compareLex(word1, word2) {

    const res = word1.localeCompare(word2)

    switch (res) {
        case -1:
            console.log(`The driver's name goes first.`)
            break;
        case 0:
            console.log(`What?! You both have the same name?`)
            break;
        case 1:
            console.log(`Yo, the navigator goes first definitely`)
            break;
    }
}


compareLex(haker2, haker1)




