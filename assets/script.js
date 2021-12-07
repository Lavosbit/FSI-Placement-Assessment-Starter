// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Jacob Galito" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total = 0
let gb_row = document.querySelector('#qty-gb')
let cc_row = document.querySelector('#qty-cc')
let sugar_row = document.querySelector('#qty-sugar')
let c_total = document.querySelector('#qty-total')

console.log(Math.floor(0))

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`


/**
 * Gingerbread
 */

// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
    gb++
    gb_row.textContent = gb;
    c_total.textContent = (gb + cc + sugar);

})

document.getElementById('minus-gb').addEventListener('click', function() {
    gb--
    gb_row.textContent = gb;
    c_total.textContent = (gb + cc + sugar);
    if(gb <= 0){
        gb = Math.min(0);
    }
})

/**
 * Chocolate Chip
 */

// If + chocolate chip is pressed
document.getElementById('add-cc').addEventListener('click', function() {
    cc++
    cc_row.textContent = cc;
    c_total.textContent = (gb + cc + sugar);
    
})

// If - chocolate chip is pressed
document.getElementById('minus-cc').addEventListener('click', function() {
    cc--
    cc_row.textContent = cc;
    c_total.textContent = (gb + cc + sugar);
    if(cc <= 0){
        cc = Math.min(0);
    }
})

/**
 * Sugar Sprinkle
 */

// + Sugar Sprinkle is pressed
document.getElementById('add-sugar').addEventListener('click', function() {
    sugar++
    // Number.MIN_SAFE_INTEGER
    sugar_row.textContent = sugar;
    c_total.textContent = (gb + cc + sugar);
   
})

// - Sugar Sprinkle is pressed
document.getElementById('minus-sugar').addEventListener('click', function() {
    sugar--
    sugar_row.textContent = sugar;
    c_total.textContent = (gb + cc + sugar);
    if(sugar <= 0){
        sugar = Math.min(0);
    }
})