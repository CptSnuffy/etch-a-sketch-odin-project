

function showContent(menu)
{
    let hamburgerContent = document.querySelector(".hamburgercontent");
    hamburgerContent.classList.toggle("change");
}

function animateMenu(menu)
{
    menu.classList.toggle("change");
    showContent(menu);
}

function reset()
{
    let userGridSize = window.prompt("Please enter a grid size up to a maximum of 100");
    let divParent = document.getElementById('gridparent');

    if(userGridSize > 100)
    {
        while(userGridSize > 100)
        {
            userGridSize = window.prompt("Please enter a grid size up to a maximum of 100");
        }
    }

    while(divParent.firstChild)
    {
        divParent.removeChild(divParent.firstChild);
    }

    setupGame(userGridSize);
}

function getRandomInt(max)
{
    rng = Math.floor(Math.random() * max);
    if(rng == 0)
    {
        rng+= 1;
    }
    return rng
}

function componentToHex(c)
{
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r,g,b)
{
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex (b);
}

function paintCell()
{
    if(whitePen)
    {
        this.style.backgroundColor = 'white';
    }
    else if(!whitePen)
    {
        this.style.backgroundColor = rgbToHex(getRandomInt(255), getRandomInt(255), getRandomInt(255));
    }
}

function setupGame(gridSize = 16)
{

    let divParent = document.getElementById('gridparent');

    divParent.style.setProperty('--grid-rows', gridSize);
    divParent.style.setProperty('--grid-cols', gridSize);

    for(i = 0; i < (gridSize * gridSize); i++)
    {
        let cell = document.createElement('div');
        cell.addEventListener("mouseover", paintCell);
        divParent.appendChild(cell).className="sketchdiv"; 
    }
}

// let resetButton = document.getElementById('resetbutton');

// resetButton.onclick = () => {reset();};

var whitePen = true;

let whiteButton = document.getElementById('whitecolor');
let rgbButton = document.getElementById('rgbcolor');

whiteButton.onclick = () => {whitePen = true;};
rgbButton.onclick = () => {whitePen = false;};
setupGame();