const container = document.querySelector('#container');
const display = document.querySelector('#display');
const regex = /[+\-/*%]/g;

function findOperators()
{
    
    const matches = display.textContent.match(regex);
    let operators = [];
    if (matches) {
        operators = matches;
        console.log(`Operator found: ${operators}`);
    }
    return operators;

}

function operate(num1, num2, operator)
{ 
    let value = 0;
    num1 = Number(num1);
    num2 = Number(num2);
    switch (operator) {
        case '+':
            value = num1 + num2;
            break;
        
        case '-':
            value = num1 - num2;
            break;
        
        case '/':
            value = num1 / num2;
            break;  
        
        case '%':
            value = num1 % num2;
            break;
        
        case '*':
            value = num1 * num2;
            break;

        default:
            break;
    }

    console.log(value);
    return value.toFixed(1);

}

function operateAll(currentDisplayText, operators)
{
    let arr = currentDisplayText.split(regex);
    console.log(arr);
    let operatedVlue=0;
    let index = 0;
    operators.forEach(element => {
        if(operatedVlue)
            {
                console.log('Already operated');
                console.log(operatedVlue + `${element}` + arr[index+1] );
                operatedVlue = operate(operatedVlue, arr[index+1], element);
                
            }else{
                console.log(arr[index] + `${element}` + arr[index+1] );
                operatedVlue = operate(arr[index], arr[index+1], element);
                
            }
        
        index++;
    });

    return operatedVlue;
}

container.addEventListener('click', (event) => {
    let target = event.target;
    let currentDisplay = display.textContent;
    switch (target.id) {
        case 'percent':
            console.log('percent clicked');
            currentDisplay += '%';
            
            break;

        
        case 'multiply':
            console.log('multiply clicked');
            currentDisplay += '*';
    
            break;
        
        case 'division':
            
            currentDisplay += '/';
    
            break;
        
        case 'seven':
            
            currentDisplay += '7';
    
            break;
        
        case 'eight':
            
            currentDisplay += '8';
    
            break;
        
        case 'nine':
            
            currentDisplay += '9';
    
            break;

        case 'four':
            
            currentDisplay += '4';
    
            break;   
        
        case 'five':
            
            currentDisplay += '5';
    
            break;  

        case 'six':
            
            currentDisplay += '6';
    
            break;  
            
        case 'one':
            
            currentDisplay += '1';
    
            break; 
            
        
        case 'two':
            
            currentDisplay += '2';
    
            break;

        case 'three':
            
            currentDisplay += '3';
    
            break;    

        case 'zero':
            
            currentDisplay += '0';
    
            break;  
        
        case 'dot':
            
            currentDisplay += '.';
    
            break; 

        case 'all-clear':
            currentDisplay = '';
    
            break;    

        case 'plus':
            
            currentDisplay += '+';
    
            break; 

        case 'minus':
            
            currentDisplay += '-';
    
            break;    

        case 'clear':
            currentDisplay = display.textContent.slice(0, display.textContent.length-1);
    
            break;   
            
        case 'equal-button':
            let operators = findOperators()
            let finalOperatedValue = operateAll(display.textContent, operators);
            currentDisplay = finalOperatedValue.toString();
            break;  
            
    
        default:
            break;
    }
    display.textContent = currentDisplay.trim();

});