// Select color input
// Select size input

let inputHeight = document.getElementById('inputHeight')
let inputWidth = document.getElementById('inputWidth')
let colorPicker = document.getElementById('colorPicker')
let pixelCanvas = document.getElementById('pixelCanvas')
let sizePickerForm = document.getElementById('sizePicker');

// When size is submitted by the user, call makeGrid()


sizePickerForm.addEventListener('submit', (e) => {
     e.preventDefault(); 
    if (pixelCanvas.firstElementChild != null) pixelCanvas.firstElementChild.remove();
    makeGrid(inputHeight.value, inputWidth.value);
});



function makeGrid(height, width) {
for(i = 0; i < height; i++) {
    // insert row using insertRow function, this will give you a reference of the created row
    let row = pixelCanvas.insertRow(i)
    for(j = 0; j < width; j++) {
       // insert column using insertCell function into the created row
       let cell = row.insertCell(j)

       cell.addEventListener('click', (e) => {
       cell.style.backgroundColor = colorPicker.value;
    });


    } 
  }



}
