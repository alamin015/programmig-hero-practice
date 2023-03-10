
let value;
document.getElementById("counter").addEventListener("click",(e) => {

    ripple(e)
    getItem();
    // setItem 
    setItem();
    
})

const getItem = () => {
    let getDataString = localStorage.getItem("key");
    let getDataParse = JSON.parse(getDataString);
    value = getDataParse?.count ? getDataParse.count : 0;
    return getDataParse;

}

const setItem = () => {
    
    value++;
    myFunction();



    let digitObj = {
        count: value
    };

    let strObj = JSON.stringify(digitObj);

    localStorage.setItem("key",strObj);
    


}


const myFunction = () => {
    document.getElementById("digit").innerText = value;
}

getItem();
myFunction();




// extra functionality for interActivity 
const ripple = (e) => {
    let position = document.getElementById("position");
    let x = e.offsetX;
    let y = e.offsetY;


    let span = document.createElement("span");
    span.style.left = `${x}px`;
    span.style.top = `${y}px`;
    position.appendChild(span);

    setTimeout(() => {
        span.style.display = "none";
    },700)


}