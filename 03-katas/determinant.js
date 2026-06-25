function determinant(m) {
    if (m.length === 1) {
        return m[0][0];
    }
    
    if (m.length === 2) {
        return m[0][0] * m[1][1] - m[0][1] * m[1][0];
    }
    
    let result = 0;
    
    for (let col = 0; col < m.length; col++) {
        const minor = [];
        for (let row = 1; row < m.length; row++) {
            const newRow = [];
            for (let c = 0; c < m.length; c++) {
                if (c !== col) {
                    newRow.push(m[row][c]);
                }
            }
            minor.push(newRow);
        }
        
        const sign = col % 2 === 0 ? 1 : -1;
        result += sign * m[0][col] * determinant(minor);
    }
    
    return result;
}

console.log(determinant([[2,4,2],[3,1,1],[1,2,0]]));