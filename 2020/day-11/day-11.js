// Run in browser console on page https://adventofcode.com/2020/day/11/input 

const getPuzzleInput = () => {
    return document.getElementsByTagName('pre')[0].innerText.trim().split('\n').map(u=>u.split(''));
}

// Part 1
const swap = { L: '#', '#': 'L'}
const shouldUpdateSeat = (seat, adjacentSeats) => {
  if (seat === 'L' && !adjacentSeats.includes('#')) return true;
  if (seat === '#' && (adjacentSeats.match(/#/g)||[]).length > 3) return true;
  return false;
}

const adjacentSeats = (r, c, arr) => [
    arr[r][c-1],
    arr[r][c+1],
    arr[r-1] && arr[r-1][c-1],
    arr[r-1] && arr[r-1][c],
    arr[r-1] && arr[r-1][c+1],
    arr[r+1] && arr[r+1][c-1],
    arr[r+1] && arr[r+1][c],
    arr[r+1] && arr[r+1][c+1],
].filter(Boolean).join('');

const findSeating = (seats = getPuzzleInput()) => {
    let seatArray = seats;
    let lastArray = [];
    while (lastArray.flat().join('') !== seatArray.flat().join('')) {
        lastArray = seatArray;
        seatArray = seatArray.reduce((a,v,i,r) => {
            return [
                ...a,
                v.reduce((a2,v2,i2) => {
                    if (shouldUpdateSeat(v2, adjacentSeats(i, i2, r))) {
                        return [...a2, swap[v2]]
                    }
                    return [...a2, v2]
                }, []),
            ];
        }, []);
    }
    console.log(seatArray.flat().join('').match(/#/g));
}

// Part 2
const swap = { L: '#', '#': 'L'}
const directions = {
    north: [-1,0],
    northEast: [-1,1],
    northWest: [-1,-1],
    south: [1,0],
    southEast: [1,1],
    southWest: [1,-1],
    east: [0,1],
    west: [0,-1],
}

const collision = (x, y, array, move) => {
  const [row, col] = move;
  while (array[x] && array[x][y]) {
    x = x + row;
    y = y + col;
    if (array[x] && array[x][y] && /L|#/.test(array[x][y])) {
        return array[x][y];
    }
  }
  return '.';
}

const adjacentSeats = (r, c, arr) => [
    collision(r,c,arr,directions.north),
    collision(r,c,arr,directions.northEast),
    collision(r,c,arr,directions.northWest),
    collision(r,c,arr,directions.south),
    collision(r,c,arr,directions.southEast),
    collision(r,c,arr,directions.southWest),
    collision(r,c,arr,directions.east),
    collision(r,c,arr,directions.west)
].filter(Boolean).join('');

const shouldUpdateSeat = (seat, adjacentSeats) => {
    if (seat === 'L' && !adjacentSeats.includes('#')) return true;
    if (seat === '#' && (adjacentSeats.match(/#/g)||[]).length > 4) return true;
    return false;
  }

const findSeating = (seats = getPuzzleInput()) => {
    let seatArray = seats;
    let lastArray = [];
    const check = () => {
        console.log(lastArray.flat().join('') !== seatArray.flat().join(''))
        return lastArray.flat().join('') !== seatArray.flat().join('')
    }
    while (check()) {
        lastArray = seatArray;
        seatArray = seatArray.reduce((a,v,i,r) => {
            return [
                ...a,
                v.reduce((a2,v2,i2) => {
                    if (shouldUpdateSeat(v2, adjacentSeats(i, i2, r))) {
                        return [...a2, swap[v2]]
                    }
                    return [...a2, v2]
                }, []),
            ];
        }, []);
    }
    console.log(seatArray.flat().join('').match(/#/g));
}