function comp(a, b) {
    if (!a || !b) return false;
    
    if (a.length !== b.length) return false;
    
    const sortedA = [...a].sort((x, y) => x - y);
    const sortedB = [...b].sort((x, y) => x - y);
    
    for (let i = 0; i < sortedA.length; i++) {
        if (sortedA[i] * sortedA[i] !== sortedB[i]) {
            return false;
        }
    }
    
    return true;
}

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 19999641, 20736, 361, 25921, 361, 20736, 361])); 