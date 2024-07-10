const containerRef = document.querySelector('.container');


// const containerColumn = document.querySelector('.grid-container-column');


function createGrid(squareNumber) {
    console.log('Creating divs')
    for (let index = 0; index < squareNumber; index++) {
        const gridDivsCol = document.createElement("div");
        gridDivsCol.className = `col-${index} col`;
        containerRef.appendChild(gridDivsCol);
        const gridColClassRef = document.querySelector(`.container .col-${index}`)
        for (let i = 0; i < squareNumber; i++) {
            const gridDivsCol = document.createElement("div");
            gridColClassRef.appendChild(gridDivsCol);

        }




    }

    const colDiv = document.querySelectorAll(".col div");


    colDiv.forEach((item) => {
        item.addEventListener('mousemove', (e) => {
            console.log(e);
            // if (e.buttons == 1 || e.buttons == 3) {
            //     //do some stuff
            //     console.log("hold");
            //     item.setAttribute('style', 'background-color: black;')
            // }
            item.setAttribute('style', 'background-color: black;');


        });

    });







}


const createSquareDivsButton = document.querySelector('#create-square-button');
const resetButton = document.querySelector('#reset-button');
const userSelectedNumber = document.querySelector('#input-field')
const delteDivsButton = document.querySelector('#delete-button')


createSquareDivsButton.addEventListener('click', () => {

    let currentDivsValue = userSelectedNumber.value;
    createGrid(Number(currentDivsValue));


});

resetButton.addEventListener('click', () => {

    const colDiv = document.querySelectorAll(".col div");


    colDiv.forEach((item) => {
        // containerRef.removeChild(item);
        item.setAttribute('style', 'background-color: white;')

    });

});


delteDivsButton.addEventListener('click', () => {

    const colDiv = document.querySelectorAll(".col");


    colDiv.forEach((item) => {
        containerRef.removeChild(item);


    });

});