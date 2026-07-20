function convertFrac(list) {
    if (list.length === 0) return '';
    const simplified = list.map(([num, den]) => {
        const gcd = findGCD(num, den);
        return [num / gcd, den / gcd];
    });
    let commonDen = 1;
    for (let i = 0; i < simplified.length; i++) {
        commonDen = lcm(commonDen, simplified[i][1]);
    }
    const result = simplified.map(([num, den]) => {
        const newNum = num * (commonDen / den);
        return `(${newNum},${commonDen})`;
    });
    return result.join('');
}

function findGCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / findGCD(a, b);
}

console.log(convertFrac([ [1, 2], [1, 3], [1, 4] ]))