// Run in browser console on page https://adventofcode.com/2020/day/5/input 

const getPuzzleInput = () => {
    return document.getElementsByTagName('pre')[0].innerText.trim().split('\n\n');
}

// Part 1
getPuzzleInput().reduce((acc, val) => {
   return acc + Object.keys(val.replaceAll('\n', '').split('').reduce((a,v)=>({...a,[v]:v}),{})).length;
}, 0)

// Part 2
getPuzzleInput().reduce((acc, val) => {
    const len = val.trim().split('\n').length
    return acc + Object.values(
        val.replaceAll('\n', '')
           .split('')
           .reduce((a,v)=>({...a,[v]: a[v]?`${v}${a[v]}`:v,}), {}))
           .filter(l=>l.length === len).length;
 }, 0)