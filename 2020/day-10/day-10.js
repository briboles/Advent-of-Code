// Run in browser console on page https://adventofcode.com/2020/day/10/input 

const getPuzzleInput = () => {
    return document.getElementsByTagName('pre')[0].innerText.trim().split('\n');
}

// Part 1
const part1 = getPuzzleInput().map(u=>+u).sort((a,b)=>a-b).reduce((a,v,i,r)=>{
    if (i === 0) return {...a, one: 1 }
    if (v-r[i-1] === 1) return {...a, one: a.one+1}
    if (v-r[i-1] === 3) return {...a, three: a.three+1}
}, { one: 0, three: 1})
console.log(part1.one * part1.three)

// Part 2


const a = `28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3
`.trim().split('\n').map(u=>+u).sort((a,b)=>a-b)

const first = 0;
const last = a[a.length-1] + 3

a.reduce((a,v,i,r)=>{
    
},0)
