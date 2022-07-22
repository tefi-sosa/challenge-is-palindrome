// Return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards.
// Write your code below

const isPalindrome = (word) => {
    word = word.split('')
    let reverseWord = []
    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord.push(word[i])   
    }
    return JSON.stringify(word) === JSON.stringify(reverseWord)
}

// USING BUILT IN FUNCTIONS

// function isPalindrome(word) {
//     let forwards = word.split('')
//     let reversed = forwards.reverse()
//     let revWord = reversed.join('')

//     if (word === revWord) {
//       return true
//     } else return false
// }

// function checkForPalindrome(word) {
//     const wordLen = word.length

//     for (let i = 0; i < wordLen / 2; i++) {
//         if (str[i] !== str[(wordLen - 1) - i]) {
//             return false
//         }
//     }
//     return true
// }

// isPalindrome = word => word === word.split('').reverse().join('') 

// function isPalindrome (word) {
//     let test = true
//     for (let i = word.length - 1; i >= 0; i--) {
//         for (let j = 0; j < word.length; j++) {
//             if (word[i] !== word[j]) {
//                 test = false
//                 return
//             }
//         }
        
//     }
//     return test
// }

console.log(isPalindrome("bob"))

