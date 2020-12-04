// Run in browser console on page https://adventofcode.com/2020/day/3/input 

const getPuzzleInput = () => {
    return document.getElementsByTagName('pre')[0].innerText.trim().split('\n');
}

// Part 1
getPuzzleInput().reduce((count, line, index) => {
    if (line[(index * 3) % line.length] === '#') return count + 1;
    return count;
}, 0);

// Part 2
var counts = getPuzzleInput().reduce((count, line, index) => {
    // slope 1
    if (line[index % line.length] === '#') count.slope1++;
    // slope 2
    if (line[(index * 3) % line.length] === '#') count.slope2++;
    // slope 3
    if (line[(index * 5) % line.length] === '#') count.slope3++;
    // slope 4
    if (line[(index * 7) % line.length] === '#') count.slope4++;
    // slope 5
    if (index % 2 === 0 && line[(index/2) % line.length] === '#') count.slope5++;

    return count;
}, {
    slope1: 0,
    slope2: 0,
    slope3: 0,
    slope4: 0,
    slope5: 0
});
Object.values(counts).reduce((a, v) => a * v);
