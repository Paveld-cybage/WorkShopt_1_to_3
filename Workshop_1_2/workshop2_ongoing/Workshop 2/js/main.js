
//1st select all the calculators buttons and operators
//data-operations to represent your operation
//data-numbers to represent the number button
//data-delete to represent the delete button
//adding this operand to the classes as previous-operand and current-operand


//data-number, data-operation, data-entry-clear, data-all-clear, data-delete, data-signChange, data-equals

const numberButtons = document.querySelectorAll('[data-number]');

const operationButtons = document.querySelectorAll('[data-operation]');
const entryClearButton = document.querySelector('[data-entry-clear]');

const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');

const signChangeButton = document.querySelector('[data-signChange]');
const equalsButton = document.querySelector('[data-equals]');

const previousOperandTextElement = document.querySelector('.previousvalue');
const currentOperandTextElement = document.querySelector('.currentvalue')

//storing the output with the help of the class

class calculator {
    constructor(previousOperandTextElement,currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear;
    }

    clear() {
        this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined

    }
    
    deleteEntry() {
    }
    
     appendNumber(number) {
         if(number === '.' && this.currentOperand.includes('.')) return
         this.currentOperand = this.currentOperand.toString() + number.toString();
    }
    
     chooseOperation(operation) {
    }
    
     compute() {
    }
    
    updateDisplay() {
        this.currentOperandTextElement.innerHTML = this.currentOperand;
    }
}

//various functions

//selecting numbers
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerHTML)
        calculator.updateDisplay()
    })
})

//selecting operations

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerHTML)
        calculator.updateDisplay()
    })
})