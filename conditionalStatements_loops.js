function temperature_check(temperature){
 
if (temperature < 0) 
      console.log("It's freezing!"); 
      else if (temperature >= 0 && temperature <= 15) {
      console.log("It's cold.");
    } else if (temperature >= 16 && temperature <= 25)  {
      console.log("It's mild.");
    } else {
      console.log("It's warm.");
    }
  }
    //test
    temperature_check(-1)
    temperature_check(10)
    temperature_check(19)
    temperature_check(45)

    
  function determineTemperature(temperature) {
    switch (true) 

    {case (temperature < 0):
        console.log("It's freezing!");
        break;
      case(temperature >= 0 && temperature <= 15):
        console.log("It's cold.");
        break;
      case (temperature >= 16 && temperature <= 25):
        console.log("It's mild.");
        break;
      case (temperature >25):
        console.log("It's warm.");}
    } 
        //test
        temperature_check(-1)
        temperature_check(10)
        temperature_check(19)
        temperature_check(45)
  
  

  
  


function divisibility_check(number) {
    if (number % 2 === 0 && number % 3 === 0) {
      console.log("Divisible by both 2 and 3.");
    } else if (number % 2 === 0) {
      console.log("Divisible by 2.");
    } else if (number % 3 === 0) {
      console.log("Divisible by 3.");
    } else {
      console.log("Not divisible by 2 or 3.");
    }
  }
  //test
  divisibility_check(30)
  divisibility_check(10)
  divisibility_check(9)
  divisibility_check(3)
  divisibility_check(19)


    function determineTemperature(number) {
    switch (true) {
        case (number < 0):
        console.log("Divisible by both 2 and 3.");
        break;
      case(number % 2 === 0):
        console.log("Divisible by 2.");
        break;
      case(number % 3 === 0):
        console.log("Divisible by 3.");
        break;
      default:
        console.log("Not divisible by 2 or 3.");
    }
  }
   //test
   divisibility_check(30)
   divisibility_check(10)
   divisibility_check(9)
   divisibility_check(3)
   divisibility_check(19)
  
  

//numbers and sums of print result
  
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  
  for (let i = 2; i <= 20; i += 2) {  
    console.log(i);
  }

  let total = 0;
for (let i = 1; i <= 100; i++) {
  total += i;
}
console.log("The sum of numbers 1-100 is:", total);


  // Loop from 1 to 49 (inclusive) to check for multiples of 5
  for (let i = 1; i <= 49; i++)
  {
   if (i % 5 === 0) {
     console.log(i);
   }
 }
 



//Guessing game

  // Example usage
  let number = parseInt(prompt("PUT A NUMBER FOR THIS PATH")+10);
  divisibility_check(10);

  const Brandon = Math.floor(Math.random() * 10) + 1;
let guess;
do {
    guess = parseInt(prompt("Guess a number between 1 and 10: "), 10);
    if (guess < Brandon) {
        console.log("Oops");
    } else if (guess > Brandon) {
        console.log("Thats on you");
    } else if (!isNaN(guess)) {
        console.log("Welcome back", Brandon);
    }
} while (guess !== Brandon);


