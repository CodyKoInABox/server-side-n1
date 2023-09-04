const eAnoBissexto = require('./index.js')

test('ano 1600', () =>{
    expect(eAnoBissexto(1600)).toBe(true)
})

test('ano 1996', () =>{
    expect(eAnoBissexto(1996)).toBe(true)
})

test('ano 2000', () =>{
    expect(eAnoBissexto(2000)).toBe(true)
})

test('ano 2004', () =>{
    expect(eAnoBissexto(2004)).toBe(true)
})

test('ano 2008', () =>{
    expect(eAnoBissexto(2008)).toBe(true)
})

test('ano 2012', () =>{
    expect(eAnoBissexto(2012)).toBe(true)
})

test('ano 2016', () =>{
    expect(eAnoBissexto(2016)).toBe(true)
})

test('ano 2400', () =>{
    expect(eAnoBissexto(2400)).toBe(true)
})

test('ano 2800', () =>{
    expect(eAnoBissexto(2800)).toBe(true)
})

test('ano 1500', () =>{
    expect(eAnoBissexto(1500)).toBe(false)
})

test('ano 1974', () =>{
    expect(eAnoBissexto(1974)).toBe(false)
})

test('ano 1982', () =>{
    expect(eAnoBissexto(1982)).toBe(false)
})

test('ano 1983', () =>{
    expect(eAnoBissexto(1500)).toBe(false)
})

test('ano 1990', () =>{
    expect(eAnoBissexto(1990)).toBe(false)
})

test('ano 2018', () =>{
    expect(eAnoBissexto(2018)).toBe(false)
})

test('ano 2022', () =>{
    expect(eAnoBissexto(2022)).toBe(false)
})

test('ano 2030', () =>{
    expect(eAnoBissexto(2030)).toBe(false)
})

test('ano 2038', () =>{
    expect(eAnoBissexto(2038)).toBe(false)
})