// Run in browser console on page https://adventofcode.com/2020/day/8/input 

const getPuzzleInput = () => {
    return document.getElementsByTagName('pre')[0].innerText.trim().split('\n');
}

// Part 1
let index = 0;
let count = 0;
let trackIndex = [];
const instructions = {
    acc: a => {count += +a; index+=1;},
    jmp: i => index += +i,
    nop: () => index += 1,
}
const list = getPuzzleInput().map(u=>u.split(' '));
const process = (cmds) => {
    if (index >= cmds.length) {
        return count;
    }
    const [cmd,arg] = cmds[index];
    if (trackIndex.includes(index)) {
        console.log('fail', count)
        return false;
    }
    trackIndex.push(index);
    instructions[cmd](arg);
    return process(cmds)
}
process(list);

// Part 2
const swap = { nop: 'jmp', jmp: 'nop'}
const cmdArr = list.reduce((a,v,i) => {
    if (v[0] !== 'acc') return [...a,i];
    return a;
},[])
const cmdIndex = cmdArr.find(p => {
  const list2 = getPuzzleInput().map(u=>u.split(' '));
  list2[p][0] = swap[list2[p][0]];
  count = 0;
  index = 0;
  trackIndex = [];
  return process(list2);
});

list[cmdIndex][0] = swap[list[cmdIndex][0]]
process(list);

