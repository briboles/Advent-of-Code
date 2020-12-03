// Run in browser console on page https://adventofcode.com/2020/day/2/input 

const getPuzzleInput = () => {
    return document.getElementsByTagName('pre')[0].innerText.trim().split('\n');
}

// Part 1
getPuzzleInput().reduce(
    (count, item) => { 
        const values = item.split(' ');
        const requiredCounts = values[0].split('-');
        const requiredMin = Number(requiredCounts[0]);
        const requiredMax = Number(requiredCounts[1]);
        const requiredLetter = values[1][0];
        const password = values[2];
        const regex = new RegExp(requiredLetter, 'g');
        const matches = password.match(regex);
        if (matches && matches.length >= requiredMin && matches.length <= requiredMax) {
            return count + 1;
        }
        return count;
    }, 0)

// Part 2
getPuzzleInput().reduce(
    (count, item) => { 
        const values = item.split(' ');
        const requiredPositions = values[0].split('-');
        const requiredPosition1 = Number(requiredPositions[0]) - 1;
        const requiredPosition2 = Number(requiredPositions[1]) - 1;
        const requiredLetter = values[1][0];
        const password = values[2];
        const pos1 = password[requiredPosition1] === requiredLetter;
        const pos2 = password[requiredPosition2] === requiredLetter;
        if ((pos1 || pos2) && !(pos1 && pos2)) {
            return count + 1;
        }
        return count;
    }, 0)