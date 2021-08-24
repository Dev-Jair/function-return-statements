// Checking if a number is big

const checker = function (bigNumber){
    if (bigNumber > 100){
    return true;
    }
    return false;
};


const result = checker (103);
console.log(result);

/* Vraag: Now think about the categories of 
functions we discussed: functions that do something 
and functions that produce something. What kind of function is this?

This is a function that returns a value. So in this case this is a 
function that produces something. */

// Bouncer at a club

const Brenda = function (max_number, current_number, age){
    if (max_number > 250){
        return console.log("it's busy now, come back later");
    }
    if (current_number < 250){
        return console.log("Come in!");
    }
    if (age < 18){
        return console.log("This is a club for adults");
    }
}

Brenda(270);

Brenda (0, 175);

Brenda(0, 280, 17);

/* Vraag: Now think about the categories of 
functions we discussed: functions that do something 
and functions that produce something. What kind of function is this?

This function also uses multiple return statements to return a value. 
This is a function that produces something. */

// Calculating the average

const averageNumber = function(Number1, Number2, Number3, Number4, Number5){
    const average = Number1 + Number2 + Number3 + Number4 + Number5;
    const divide = 5;
    return (Math.round (average / divide)); 

}

const sum = averageNumber(62, 74, 83, 59, 91);
console.log(sum);

/* Vraag: Now think about the categories of functions 
we discussed: functions that do something and functions 
that produce something. What kind of function is this?

This function uses a return statement to calculate the average of the 
numbers within the function. This is a function that produces something. */



