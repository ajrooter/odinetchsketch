let inputU = window.prompt("Enter the grid dimention")

let grid =  document.querySelector(".grid");

let gridlimit = Number(inputU);


for(x=0;x<gridlimit;x++)
    {
        let row = "row";
        let r = document.createElement("div")
        r.classList.add(row)
        grid.appendChild(r)
        for(y=0;y<gridlimit;y++)
        {
            let col = "col";
            let c = document.createElement("div");
            c.textContent = "trail"
            c.classList.add(col);
            r.appendChild(c);
        }
    }


