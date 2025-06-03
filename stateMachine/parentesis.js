/**
 * Defines a Deterministic Finite Automaton (DFA) for
 * validating parentheses sequences with a depth of at most 2.
 */
class ParenthesesDFA {
  constructor() {
    this.states = {
      s0: "Depth 0 (Initial and Accepting)",
      s1: "Depth 1",
      s2: "Depth 2 (Max allowed open parentheses)",
      se: "Error State (Invalid sequence)",
    };

    this.initialState = "s0";
    this.acceptingStates = new Set(["s0"]);

    this.transitions = {
      s0: {
        "(": "s1",
        ")": "se",
      },
      s1: {
        "(": "s2",
        ")": "s0",
      },
      s2: {
        "(": "se",
        ")": "s1",
      },
      se: {
        "(": "se",
        ")": "se",
      },
    };
  }

  /**
   * Checks if a given string is accepted by the DFA.
   * @param {string} inputString The string to test.
   * @returns {boolean} True if the string is accepted, false otherwise.
   */
  accepts(inputString) {
    let currentState = this.initialState;

    for (let i = 0; i < inputString.length; i++) {
      const symbol = inputString[i];

      if (!this.transitions[currentState].hasOwnProperty(symbol)) {
        console.warn(
          `Unexpected symbol '${symbol}' at index ${i}. Transitioning to error state.`
        );
        currentState = "se";
        break;
      }

      currentState = this.transitions[currentState][symbol];

      if (currentState === "se") {
        break;
      }
    }

    // A string is accepted if it ends in an accepting state
    return this.acceptingStates.has(currentState);
  }
}


const dfa = new ParenthesesDFA();

console.log("Testing valid sequences:");
console.log(`'()' : ${dfa.accepts("()")}`);
console.log(`'(())' : ${dfa.accepts("(())")}`);
console.log(`'()()' : ${dfa.accepts("()()")}`);
console.log(`'(()())' : ${dfa.accepts("(()())")}`);
console.log(`'' (empty string): ${dfa.accepts("")}`);
