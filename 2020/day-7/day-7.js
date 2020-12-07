// Run in browser console on page https://adventofcode.com/2020/day/7/input 

const getPuzzleInput = () => {
    return document.getElementsByTagName('pre')[0].innerText.trim().split('\n');
}

// Part 1
const findBag = (bagName='shiny gold') => getPuzzleInput()
  .filter(r=>r.includes(bagName) && !r.startsWith(bagName))
  .reduce((a,v)=>([...a,v.split(' bag')[0]]),[])
  .map(u=>([u, findBag(u)]))
  .flat(1000)

Object.keys(findBag().reduce((a,v)=>({...a,[v]:v}),{})).length;

// Part 2
var findBag2 = (bagName='shiny gold') => getPuzzleInput()
    .filter(r=>r.startsWith(bagName))[0]
    .split('bags contain ')[1]
    .split(', ')
    .map(u=>u.replace(/bag[s|\.]/, '').replace(/\./, '').trim())
    .map(m=> ({
        count: Number(m.split(' ', 1)),
        bagName: m.replace(/\d/,'').trim(),
    }))
    .filter(f=>!f.bagName.includes('no other'))
    .map(u=> {  
        return ({...u, bags: findBag2(u.bagName)})
    })

var countBags = (bagArray) => {
    if (bagArray.length === 0) return 1;
    return bagArray.reduce((a,v)=>{
        if (v.bags.length === 0) return a + (v.count * countBags(v.bags))
        return a + v.count + (v.count * countBags(v.bags))
    },0)
}

countBags(findBag2())
