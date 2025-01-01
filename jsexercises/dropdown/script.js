const dropdown = document.querySelector('.button-cls');
const dropdownContent = document.querySelector('.drop-down-items');

function changeDisplay()
{
    console.log('in change display');
    let currentDisplay = dropdownContent.checkVisibility();
    if (currentDisplay)
    {
        dropdownContent.style.display = 'none';
    }
    else{
        dropdownContent.style.display = 'block';
    }
}
dropdown.addEventListener('click', changeDisplay);