describe("it should make be able to make a die", function(){
    it("should return true if a valid number of sides is passed", function(){
        let makeDie = new DiceFactory(6)
        expect(makeDie.makeDie()).toBe(true)
    })
    it("should return false", function(){
        let makeDie = new DiceFactory(0)
        expect(makeDie.makeDie()).toBe(false)
    })
})
describe("it should test if the dice is fair or not fair", function(){
it("should return true if the dice is fair that is if the number of sides occur 40% or less", function(){
    let testDie = new DiceTester(6)
    expect(testDie.dieTest([1,2,1,2,1,2])).toBe("The die is not fair")
    
})
it("Should return an error if the wrong die is inputed", function(){
    let testDie = new DiceTester(12)
    expect(testDie.dieTest([1,2,3,4,5,6,7,8,9,10,11,12])).toBe("This die can not be tested")
    testDie = new DiceTester(5)
    expect(testDie.dieTest([1,2,3,4,5])).toBe("This die can not be tested")
})
})