function nbYear(p0, percent, aug, p) {
    let years = 0;
    let population = p0;
    const growthRate = percent / 100;
    
    while (population < p) {
        population = population + population * growthRate + aug;
        population = Math.floor(population);
        years++;
    }
    
    return years;
}