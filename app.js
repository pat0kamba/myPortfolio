let toggleMode = localStorage.getItem("mode");


// get the Button from the DOM
const toggle_btn = document.getElementById("toggle-btn");

// Get Left and Right columns from the DOM
const leftCol = document.getElementById("bg-pattern-left");
const rightCol = document.getElementById("bg-pattern-right");
// change to Light Mode
const lightMode = ()=>{
    localStorage.setItem("mode", "light");
    // Remove Dark Mode class from the DOM
    
    leftCol.classList.remove("bg-pattern-dark");
    rightCol.classList.remove("bg-pattern-dark");
    leftCol.classList.add("bg-pattern-light");
    rightCol.classList.add("bg-pattern-light");
    document.body.classList.remove("dark_mode");
}

// change to Dark Mode

const darkMode = ()=>{
    localStorage.setItem("mode","dark");
    // Add Dark Mode class to the DOM
    
    leftCol.classList.remove("bg-pattern-light");
    rightCol.classList.remove("bg-pattern-light");
    leftCol.classList.add("bg-pattern-dark");
    rightCol.classList.add("bg-pattern-dark");
    document.body.classList.add("dark_mode");
} 
// if page refreshed, and dark was On
if(toggleMode === "dark")
{
    darkMode();
}

// Add event to the DOM
toggle_btn.addEventListener('click', ()=>{
    toggleMode = localStorage.getItem("mode");
    if(toggleMode !== "dark")
    {
        darkMode();
    }
    else
    {
        lightMode();
    }
});

