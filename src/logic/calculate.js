import operate from './operate'

function calculate (calculation, buttonSymbol) {
  if (buttonSymbol === 'AC') {
    return clearCalculation()
  }

  if (isNumber(buttonSymbol)) {
    return processesNumber(calculation, buttonSymbol)
  }

  if (buttonSymbol === '.') {
    return processesDecimalPoint(calculation)
  }

  if (buttonSymbol === '+/-') {
    return processSignalNumber(calculation)
  }

  if (buttonSymbol === '=') {
    return calculationResult(calculation)
  }

  // Button must be an operation

  // When the user presses an operation button without having entered
  // a number first, do nothing.
  // if (!calculation.next && !calculation.total) {
  //   return {};
  // }

  // User pressed an operation button and there is an existing operation
  if (calculation.operation) {
    return {
      total: operate(calculation.total, calculation.next, calculation.operation),
      next: null,
      operation: buttonSymbol,
    }
  }

  // no operation yet, but the user typed one

  // The user hasn't typed a number yet, just save the operation
  if (!calculation.next) {
    return {operation: buttonSymbol}
  }

  // save the operation and shift 'next' into 'total'
  return {
    total: calculation.next,
    next: null,
    operation: buttonSymbol,
  }
}

function clearCalculation () {
  return {
    total: null,
    next: null,
    operation: null,
  }
}

function isNumber (buttonSymbol) {
  return !!buttonSymbol.match(/[0-9]+/)
}

function processesNumber (calculation, buttonSymbol) {
  if (buttonSymbol === '0' && calculation.next === '0') {
    return {}
  }

  // if there is an operation, update next
  if (calculation.operation) {
    if (calculation.next) {
      return {next: calculation.next + buttonSymbol}
    }
    return {next: buttonSymbol}
  }

  // if there is no operation, update next and clear the value
  if (calculation.next) {
    return {
      next: calculation.next + buttonSymbol,
      total: null,
    }
  }

  return {
    next: buttonSymbol,
    total: null,
  }
}

function processesDecimalPoint (calculation) {
  if (calculation.next) {
    if (calculation.next.includes('.')) {
      return {}
    }
    return {next: calculation.next + '.'}
  }

  if (calculation.operation) {
    return {next: '0.'}
  }

  if (calculation.total) {
    if (calculation.total.includes('.')) {
      return {}
    }
    return {total: calculation.total + '.'}
  }

  return {total: '0.'}
}

function processSignalNumber (calculation) {
  if (calculation.next) {
    return {next: (-1 * parseFloat(calculation.next)).toString()}
  }

  if (calculation.total) {
    return {total: (-1 * parseFloat(calculation.total)).toString()}
  }

  return {}
}

function calculationResult (calculation) {
  if (calculation.next && calculation.operation) {
    return {
      total: operate(calculation.total, calculation.next, calculation.operation),
      next: null,
      operation: null,
    }
  } else {
    // '=' with no operation, nothing to do
    return {}
  }
}

export default calculate