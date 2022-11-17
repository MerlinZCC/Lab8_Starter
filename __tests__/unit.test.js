// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('123-456-7890 is phone number true', ()=>{
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
})

test('(123)456-7890 is phone number true', ()=>{
    expect(functions.isPhoneNumber('(123)456-7890')).toBe(true);
})

test('(123)4567890 is phone number false', ()=>{
    expect(functions.isPhoneNumber('(123)4567890')).toBe(false);
})

test('123 is phone number false', ()=>{
    expect(functions.isPhoneNumber('123')).toBe(false);
})

test('abc@gmail.com is email true', ()=>{
    expect(functions.isEmail('abc@gmail.com')).toBe(true);
})

test('abc@ucsd.co is email true', ()=>{
    expect(functions.isEmail('abc@ucsd.co')).toBe(true);
})

test('abc@gmail.ucsd is email false', ()=>{
    expect(functions.isEmail('abc@gmail.ucsd')).toBe(false);
})

test('@gmail.com is email false', ()=>{
    expect(functions.isEmail('@gmail.com')).toBe(false);
})

test('ABCD is strong password true', ()=>{
    expect(functions.isStrongPassword('ABCD')).toBe(true);
})

test('abcd_ is strong password true', ()=>{
    expect(functions.isStrongPassword('abcd_')).toBe(true);
})

test('abc is strong password false', ()=>{
    expect(functions.isStrongPassword('abc')).toBe(false);
})

test('abcd! is strong password false', ()=>{
    expect(functions.isStrongPassword('abcd!')).toBe(false);
})

test('1/1/2023 is date true', ()=>{
    expect(functions.isDate('1/1/2023')).toBe(true);
})

test('12/31/2022 is date true', ()=>{
    expect(functions.isDate('12/31/2022')).toBe(true);
})

test('12/31/22 is date false', ()=>{
    expect(functions.isDate('12/31/22')).toBe(false);
})

test('001/001/2023 is date false', ()=>{
    expect(functions.isDate('001/001/2023')).toBe(false);
})

test('#111 is hex color true', ()=>{
    expect(functions.isHexColor('#111')).toBe(true);
})

test('111111 is hex color true', ()=>{
    expect(functions.isHexColor('111111')).toBe(true);
})

test('#11 is hex color false', ()=>{
    expect(functions.isHexColor('#11')).toBe(false);
})

test('11111 is hex color true', ()=>{
    expect(functions.isHexColor('11111')).toBe(false);
})