

function animateMenu(menu)
{
    menu.classList.toggle("change");
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

function paintCell()
{
    this.style.backgroundColor = 'white';
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

let resetButton = document.getElementById('resetbutton');

resetButton.onclick = () => {reset();};


setupGame();