let operand1 = '0', operand2 = '0' //Operands
let operatorLast = '+' //Operator
const out = document.getElementById('out')

const buttons = document.getElementsByClassName('btn')
for(let i = 0; i < buttons.length; i++)
    buttons[i].onclick = () => {
    buttonClicked(buttons[i].id)
  }

function buttonClicked(id) {
    const idN = parseInt(id)
    if(!isNaN(idN)) {  //put numbers to display
        if(operand2 == '0') {
            operand2 = '' + idN
            redrawDisplay()
        } else {
            operand2 += idN
            redrawDisplay()
        }
    } else if(id == ','){
        if (!operand2.includes('.')) {
            operand2 += '.'
            redrawDisplay()
        }
    } else if(['*','/','+','-'].includes(id)) {
        operand2 = evalOperation(operand1, operatorLast, operand2) //Rewrite IT!!! Withput Eval()
        redrawDisplay()
        operatorLast = id
        operand1 = operand2
        operand2 = '0'
        
    } else if(id == '=') {
        operand2 = evalOperation(operand1, operatorLast, operand2) //Rewrite IT!!! Withput Eval()
        redrawDisplay()
        operand1 = '0'
        operand2 = '0'
        operatorLast = '+'
    }
    


    
    console.log(typeof(id))
}

function redrawDisplay() {
    out.textContent = operand2
}

function evalOperation (oper1, action, oper2) {
  if (action == '+') {
    return parseFloat(oper1) + parseFloat(oper2)
  }else if (action == '-') {
    return oper1 - oper2
  }else if (action == '*') {
    return oper1 * oper2
  }else if (action == '/') {
    return oper1 / oper2
  }else {
    return 'Alarma!!!'
  }       
}