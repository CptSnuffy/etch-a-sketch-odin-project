
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

setupGame();