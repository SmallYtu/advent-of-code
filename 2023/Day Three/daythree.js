const { readFileSync } = require("fs");
const whar = readFileSync("Day Three/input.txt").toString();

 function solve(input, part = 1) {
    input = input.split(/\n/)
    let currentNum = 0
    let solution = 0
    let hasSkipped = 0
    let symbol = false
    let cordData = {}
    for(line = 0; line < input.length; line++) {

        for(char = 0; char < input[line].length; char++) {
            inputChar = input[line].charAt(char)

            if (!isNaN(parseInt(inputChar))) {
                currentNum = inputChar
                hasSkipped = 0

                if (!isNaN(input[line].charAt(char+1))) { // for the second number

                    currentNum = currentNum + input[line].charAt(char+1)
                    char = char + 1
                    hasSkipped = 1

                    if (!isNaN(input[line].charAt(char+1))) { //for the third number
                        currentNum = currentNum + input[line].charAt(char+1)
                        char = char + 1
                        hasSkipped = 2
                    }

                }
                //seperating that shit code from this shit code
                function isSymbol(x, y) {
                    if (isNaN(input[line + y].charAt(char-hasSkipped + x)) && input[line + y].charAt(char-hasSkipped + x) != ".") {
                        if (part === 1) {
                            solution += Number(currentNum)
                        } else { // THIS IS FOR PART 2 OF THE THING
                            let symbolCord = `${x - hasSkipped + char}` + "y " + `${y + line}`
                            if (!cordData[symbolCord]) {
                                cordData[symbolCord] = currentNum
                            } else {
                                solution += cordData[symbolCord] * currentNum
                            }
                            
                        }
                        
                    }
                }
                if (hasSkipped == 2) {
                    for(let xa = -1; xa <4; xa++) {
                        try{isSymbol(xa, -1)}catch(error){}
                        try{isSymbol(xa, 0)}catch(error){}
                        try{isSymbol(xa, 1)}catch(error){}
                    }
                }
                if (hasSkipped == 1) {
                    for(let xa = -1; xa <3; xa++) {
                        try{isSymbol(xa, -1)}catch(error){}
                        try{isSymbol(xa, 0)}catch(error){}
                        try{isSymbol(xa, 1)}catch(error){}
                    }
                }
                if (hasSkipped == 0) {
                    for(let xa = -1; xa <2; xa++) {
                        try{isSymbol(xa, -1)}catch(error){}
                        try{isSymbol(xa, 0)}catch(error){}
                        try{isSymbol(xa, 1)}catch(error){}
                    }
                }
               


            }
        }

    }
    console.log(solution)
}
console.log("PART 1")
solve(whar, 1)
console.log("PART 2")
solve(whar, 2)
