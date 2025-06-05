const dfa = {
  states: ['q0', '0', '01', '1'],
  alphabet: ['0', '1'],
  startState: 'q0',
  acceptStates: ['01'],

  transitions: {
    'q0': {
      '0': '0',
      '1': '1'
    },
    '0': {
      '0': '0',
      '1': '01'
    },
    '01': {
      '0': '0',
      '1': '1'
    },
    '1': {
      '0': '1',
      '1': '1'
    }
  },

  accepts: function(inputString) {
    let currentState = this.startState;

    for (let i = 0; i < inputString.length; i++) {
      const symbol = inputString[i];
      if (!this.alphabet.includes(symbol)) {
        return false;
      }
      currentState = this.transitions[currentState][symbol];
      if (currentState === undefined) {
        return false;
      }
    }

    return this.acceptStates.includes(currentState);
  }
};

// Ejemplo de uso:
console.log("Testing DFA:");
console.log("Does '01' accept?", dfa.accepts('01'));
console.log("Does '0' accept?", dfa.accepts('0'));
console.log("Does '1' accept?", dfa.accepts('1'));
console.log("Does '001' accept?", dfa.accepts('001'));
console.log("Does '011' accept?", dfa.accepts('011'));
console.log("Does '010' accept?", dfa.accepts('010'));
console.log("Does '' accept?", dfa.accepts(''));
console.log("Does '10' accept?", dfa.accepts('10'));