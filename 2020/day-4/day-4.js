// Run in browser console on page https://adventofcode.com/2020/day/4/input 

const getPuzzleInput = () => {
    return document.getElementsByTagName('pre')[0].innerText.trim().split('\n\n');
}

// Part 1
const VALID_FIELDS = [
    'byr:',
    'iyr:',
    'eyr:',
    'hgt:',
    'hcl:',
    'ecl:',
    'pid:',
]

const containsValidFields = (passport) => VALID_FIELDS.every(
    field => passport.includes(field)
);

getPuzzleInput().filter(containsValidFields).length

// Part 2
const VALID_EYE_COLORS = [
    'amb',
    'blu',
    'brn',
    'gry',
    'grn',
    'hzl',
    'oth'
]

const FIELD_RULES = {
    byr: (y) => (y.length === 4 && +y >= 1920 && +y <= 2002),
    iyr: (y) => (y.length === 4 && +y >= 2010 && +y <= 2020),
    eyr: (y) => (y.length === 4 && +y >= 2020 && +y <= 2030),
    hgtCm: (h) => (+h >= 150 && +h <= 193),
    hgtIn: (h) => (+h >= 59 && +h <= 76),
    hgt: (h) => (
        h.includes('cm') && FIELD_RULES.hgtCm(h.split('cm')[0])
    ) || (
        h.includes('in') && FIELD_RULES.hgtIn(h.split('in')[0])
    ),
    hcl: (h) => /^#[0-9,a-f]{6}$/.test(h),
    ecl: (e) => VALID_EYE_COLORS.filter(v => e.includes(v)).length === 1,
    pid: (p) => p.length === 9,
    cid: () => true,
}

getPuzzleInput()
  .filter(containsValidFields)
  .reduce((count, passport) => {
    const fields = passport.split(/\s/).map(p => p.split(':'))
    if (fields.every(
        ([field, value]) => FIELD_RULES[field](value)
    )) return count + 1;
    return count;
  }, 0)
