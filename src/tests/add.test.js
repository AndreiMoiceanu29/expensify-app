const add =(a,b)=>a+b;

test('should add two nums',()=>{
    const result=add(3,4);

    expect(result).toBe(7);
})