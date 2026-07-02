function sumIntervals(intervals) {
    if (intervals.length === 0) return 0;
    
    intervals.sort((a, b) => a[0] - b[0]);
    
    let total = 0;
    let currentStart = intervals[0][0];
    let currentEnd = intervals[0][1];
    
    for (let i = 1; i < intervals.length; i++) {
        let start = intervals[i][0];
        let end = intervals[i][1];
        
        if (start <= currentEnd) {
            currentEnd = Math.max(currentEnd, end);
        } else {
            total += currentEnd - currentStart;
            currentStart = start;
            currentEnd = end;
        }
    }
    
    total += currentEnd - currentStart;
    
    return total;
}

console.log(sumIntervals([[1,5],[1,5]]))