// Run in browser console on page https://adventofcode.com/2020/day/1/input 

// Part 1
document.getElementsByTagName('pre')[0].innerText.split('\n').forEach(
    (n1, i1, s1) => s1.forEach(
        (n2) => { if (Number(n1) + Number(n2) === 2020) { console.log(n1 * n2); } }
    )
)

// Part 2
document.getElementsByTagName('pre')[0].innerText.split('\n').forEach(
    (n1, i1, s1) => s1.forEach(
        (n2, i2, s2) => s2.forEach(
            (n3) => { if (Number(n1) + Number(n2) + Number(n3) === 2020) { console.log(n1 * n2 * n3) } }
        )
    )
)