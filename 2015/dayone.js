function solve(input) {
    let solution = 0
    for (i = 0; i < input.length; i++) {
      if (input.charAt(i) == "(") {
        solution += 1
      } else if (input.charAt(i) == ")") {
        solution -= 1
                  
      } 
  if (solution === -1) {
      return i+1               
    }
   }
      console.log(solution)
  }
