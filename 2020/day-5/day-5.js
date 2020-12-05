// Run in browser console on page https://adventofcode.com/2020/day/4/input 

const getPuzzleInput = () => {
    return document.getElementsByTagName('pre')[0].innerText.trim().split('\n');
}

const firstHalf = ({ middle: m, bounds: b}) => ({middle: m - b / 2, bounds: b/2});
const lastHalf = ({ middle: m, bounds: b}) => ({middle: m + b / 2, bounds: b/2});
const rules = {
    F: firstHalf,
    B: lastHalf,
    R: lastHalf,
    L: firstHalf,
}

const parseCode = (codeArr) => Math.floor(
    codeArr.reduce(
        (acc, val) => rules[val](acc),
        {
            middle: (2 ** (codeArr.length-1)),
            bounds: (2 ** (codeArr.length-1))
        }
    ).middle
)

const parseBoardingPass = (list, boardingPass) => {
    const rowCode = Array.from(boardingPass.slice(0,7));
    const seatCode = Array.from(boardingPass.slice(7,10));
    const row = parseCode(rowCode);
    const seat = parseCode(seatCode);
    return ([
        ...list,
        {
            row,
            seat,
            seatId: row * 8 + seat,
        }
    ])
}

// Part 1
getPuzzleInput()
  .reduce(parseBoardingPass, [])
  .sort((a,b) => a.seatId - b.seatId)
  .slice(-1)

// Part 2 - Find the 2 seats on either side of mine.
getPuzzleInput()
  .reduce(parseBoardingPass, [])
  .sort((a,b) => a.seatId - b.seatId)
  .filter(
    (v, i, a) => {
        if (i === 0 || i === a.length - 1) return false;
        if (v.seatId - a[i-1].seatId !== 1 || a[i+1].seatId - v.seatId !== 1) return true;
        return false;
    }
)
