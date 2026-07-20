function whichHand(word) {
    if (word === "") return "NONE";
    
    const leftHand = new Set(['q','w','e','r','t','a','s','d','f','g','z','x','c','v','b']);
    const rightHand = new Set(['y','u','i','o','p','h','j','k','l','n','m']);
    
    let hasLeft = false;
    let hasRight = false;
    
    for (let letter of word) {
        if (leftHand.has(letter)) {
            hasLeft = true;
        } else if (rightHand.has(letter)) {
            hasRight = true;
        }
    }
    
    if (hasLeft && hasRight) return "BOTH";
    if (hasLeft) return "LEFT";
    if (hasRight) return "RIGHT";
}


// using  the instructions from the codewars to handles also the infinite loop case....
// function whichHand(word) {
//     const LEFTS = "qwertasdfgzxcvb";
//     const RIGHTS = "yuiophjklnm";
    
//     let hasLeft = false;
//     let hasRight = false;
    
//     for (let letter of word) {
//         if (LEFTS.includes(letter)) {
//             hasLeft = true;
//         } else if (RIGHTS.includes(letter)) {
//             hasRight = true;
//         }
        
//         // If we found both, we can stop early!
//         if (hasLeft && hasRight) {
//             return BOTH;
//         }
//     }
    
//     if (hasLeft) return LEFT;
//     if (hasRight) return RIGHT;
//     return NONE;
// }