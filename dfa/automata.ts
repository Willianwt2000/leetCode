class DFA {
    private currentState: string;
    private readonly acceptingStates: Set<string>;
    private readonly transitions: Map<string, Map<string, string>>;

    constructor() {
        // Initialize states and transitions
        this.currentState = 'start';
        this.acceptingStates = new Set(['qbb']);

        // Set up transitions
        this.transitions = new Map([
            ['start', new Map([['a', 'start'], ['b', 'qb']])],
            ['qb', new Map([['b', 'qbb'], ['a', 'qb']])],
            ['qbb', new Map([['b', 'qHELL'], ['a', 'qbb']])],
            ['qHELL', new Map([['a', 'qHELL'], ['b', 'qHELL']])]
        ]);
    }

    public processInput(input: string): boolean {
        for (const symbol of input) {
            this.transition(symbol);
            if (this.currentState === 'qHELL') {
                break;
            }
        }
        return this.acceptingStates.has(this.currentState);
    }

    private transition(symbol: string): void {
        const stateTransitions = this.transitions.get(this.currentState);
        if (!stateTransitions) {
            throw new Error(`Invalid state: ${this.currentState}`);
        }

        const nextState = stateTransitions.get(symbol);
        if (!nextState) {
            throw new Error(`Invalid symbol '${symbol}' for state ${this.currentState}`);
        }

        this.currentState = nextState;
    }

    public reset(): void {
        this.currentState = 'start';
    }
}


const dfa = new DFA();

console.log(dfa.processInput("bb"));   
console.log(dfa.processInput("abab")); 
console.log(dfa.processInput("bbb"));  
console.log(dfa.processInput("aabbb")); 