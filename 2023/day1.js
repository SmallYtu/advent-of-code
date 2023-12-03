function removeLetters(input) {
  let sum = 0

  for (i=0; i < input.length; i++) {
    x = input[i]
    if (x.length === 1) {
      sum += Number(x + x) // inside of Number() auto concats 
    } else {
      sum += Number(x.charAt(0) +x.charAt(x.length - 1)) // auto concat
    }

    console.log(sum)
  }

  return sum
}

function solve(z) { // this is the part 1 answer btw
  z = z.replace(/[a-z]/g, "") // no more letters
  z = z.split(/\n/)
  removeLetters(z)
  } 

function partTwoSolve(inps) {
  
  inps = inps.replaceAll("one", "o1ne")
  inps = inps.replaceAll("two", "t2wo")
  inps = inps.replaceAll("three", "t3hree")
  inps = inps.replaceAll("four", "f4our")
  inps = inps.replaceAll("five", "f5ive")
  inps = inps.replaceAll("six", "s6ix")
  inps = inps.replaceAll("seven", "s7seven")
  inps = inps.replaceAll("eight", "e8ight")
  inps = inps.replaceAll("nine", "n9ine")


  solve(inps)

}
