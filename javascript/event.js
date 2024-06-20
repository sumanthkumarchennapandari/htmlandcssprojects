let mode = document.querySelector("#mode");
let currmode ="light";


mode.addEventListener("click", () => {
   if(currmode==="light")
    {
        currmode = "dark";
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");
    }
    else
    {
        currmode = "light";
        document.querySelector("body").classList.add("white");
        document.querySelector("body").classList.remove("dark");
    }
    console.log(currmode);
});