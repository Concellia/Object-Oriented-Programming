class DiceFactory{
    constructor(sides){
        this.sides = sides
        
    }
    
    makeDie(){
        let randomNumbers =  Math.floor(Math.random()*this.sides)+1
        if(randomNumbers>0 && randomNumbers<=this.sides){
            console.log(`A die with ${this.sides} sides has been made`)
            return true
        }else{
             console.log(`A dice with ${this.sides} sides could not be made`)
            return false
        }   
    }
    
}

class DiceTester{
    constructor(sides){
        this.sides = sides;
    }
    dieTest(arr1){
        let arr = [];
        var randomNumbers = [], numberOfOccurences = [], prev;
        if(this.sides === 6){
        var fairDie = Math.round(0.4*this.sides)
        for(var s = 1; s <= this.sides; s++) {
            var m = Math.floor(Math.random() * this.sides);
            arr.push(arr1[m]);}
        arr.sort();
        for ( var i = 0; i < arr.length; i++ ) {
            if ( arr[i] !== prev ) {
                randomNumbers.push(arr[i]);
                    numberOfOccurences.push(1);
            } else {
                numberOfOccurences[numberOfOccurences.length-1]++;
            }
                prev = arr[i];
            }
        numberOfOccurences.sort();
        for(var k = 0; k<numberOfOccurences.length; k++){
             if(numberOfOccurences[numberOfOccurences.length-1] <= fairDie){
                 return true
             }else{
                 return "The die is not fair"
                }
            }
    }
    else{
        return "This die can not be tested"
    }
}

}