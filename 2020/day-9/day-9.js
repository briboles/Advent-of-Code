// Run in browser console on page https://adventofcode.com/2020/day/9/input 

const getPuzzleInput = () => {
    return document.getElementsByTagName('pre')[0].innerText.trim().split('\n');
}

// Part 1
const PREAMBLE = 25;
const notSum = (target, numArr) => {
    const len = numArr.length-1;
    for (let i=0;i<len;i++) {
        const item = numArr.shift();
        if (numArr.some(u=>target-u-item === 0)) {
            return false;
        }
    }
    return true;
}
const answer = getPuzzleInput().find((v,i,a)=>{
  if (i < PREAMBLE) return false;
  return notSum(v, a.slice(i-PREAMBLE,i))
});
console.log(answer);

// Part 2
const findSum = (target, data=getPuzzleInput()) => {
    return data.reduce((a,v,i,r) => {
        if (+v === +target) return a;
        const result = r.slice(i).reduce((a2,v2,i2) => {
            if (a2.success) return a2;
            if (a2.c === +target && !a2.success) return {...a2, first:i, success:true};
            return {...a2, c: a2.c + +v2, last: i+i2, v2};
        },{c:0,success:false})
        if (result.success) return [...a,result]
        return a;
    },[]);
}
const sumthing = findSum(answer)[0];
const sumset = getPuzzleInput().slice(sumthing.first, sumthing.last+1).sort()
const first = sumset.shift();
const last = sumset.pop();

console.log(+first + +last);
