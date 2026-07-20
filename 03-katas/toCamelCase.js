function toCamelCase(str) {
    let result = '';
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '-' || str[i] === '_' || str[i] === ' ') {
            result += str[i + 1].toUpperCase();
            i++;
        } else {
            result += str[i];
        }
    }
    
    return result;
}

console.log(toCamelCase("hello world"));        
console.log(toCamelCase("hello world test"));   
console.log(toCamelCase("hello-world"));        
console.log(toCamelCase("hello_world"));      
console.log(toCamelCase("hello world-test"));  