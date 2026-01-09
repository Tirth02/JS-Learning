// Immediately Invoked Function Expressions (IIFE) 

// sometimes we have problem from global scope population, and to remove variables or anything of global scope we use iife

(function chai(){
    // named iife
    console.log(("DB Connected"));
    
})();

((name) => {
    console.log(`DB connected Two ${name}`)
})('tirth')
