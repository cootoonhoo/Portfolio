const wrapper = document.getElementById("tiles");

let columns = 0,
    rows = 0,
    toggled = false;

    const toggle = () => {
        toggled = !toggled;
        
        document.body.classList.toggle("toggled");
      }

const handleOnClick = index =>{
    toggle();
    anime({
        targets: ".tile",
        opacity: toggled ? 1 : 0,
        delay: anime.stagger(30,{
            grid: [columns, rows],
            from: index
        })
    })
}

const createTile = index =>{
    const tile = document.createElement("div");
    tile.classList.add("tile")

    tile.onclick = e => handleOnClick(index);

    return tile
}

const createTiles = quantity =>{
    Array.from(Array(quantity)).map((tile, index) =>{
        wrapper.appendChild(createTile(index));
    })
}

const createGrid = () =>{
    wrapper.innerHTML = "";
    columns = Math.floor(document.body.clientWidth/90),
    rows = Math.floor(document.body.clientHeight/300);
    
    wrapper.style.setProperty("--columns", columns);
    wrapper.style.setProperty("--rows", rows);

    createTiles(columns * rows);
}

createGrid();
window.onresize = () => createGrid();