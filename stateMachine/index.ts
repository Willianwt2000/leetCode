type State = 'q0' | 'q1' | 'q2' | 'q3';
type Input = '0' | '1';

interface Transitions {
    [key: string]: {
        [key: string]: State | undefined;
    };
}

class DFA {
    private states: Transitions;
    private currentState: State;
    private acceptStates: State[];

    constructor() {
        this.states = {
            q0: {
                '0': 'q0',
                '1': 'q1'
            },
            q1: {
                '0': 'q2',
                '1': 'q1'
            },
            q2: {
                '0': 'q0',
                '1': 'q3'
            },
            q3: {
                '0': 'q3',
                '1': 'q3'
            }
        };
        this.currentState = 'q0';
        this.acceptStates = ['q3'];
    }

    public transition(input: Input): void {
        const nextState = this.states[this.currentState]?.[input];
        if (nextState !== undefined) {
            this.currentState = nextState;
            console.log(`Transición a estado: ${this.currentState} con entrada: ${input}`);
        } else {
            console.warn(`No hay transición para el estado ${this.currentState} con la entrada ${input}. Manteniendo el estado actual.`);
        }
    }

    public process(inputString: string): boolean {
        this.currentState = 'q0';
        console.log(`Procesando cadena: "${inputString}"`);

        for (let i = 0; i < inputString.length; i++) {
            const char = inputString[i] as Input;
            if (char !== '0' && char !== '1') {
                console.error(`Error: Carácter '${char}' no válido para esta DFA. Solo se aceptan '0' o '1'.`);
                return false;
            }
            this.transition(char);
        }

        return this.isAccepted();
    }

    public isAccepted(): boolean {
        const accepted = this.acceptStates.includes(this.currentState);
        console.log(`Cadena ${accepted ? 'aceptada' : 'no aceptada'}. Estado final: ${this.currentState}`);
        return accepted;
    }
}

const myDFA = new DFA();

console.log("\n--- Prueba 1: '101' ---");
myDFA.process("101");

console.log("\n--- Prueba 2: '0101' ---");
myDFA.process("0101");

console.log("\n--- Prueba 3: '110010' ---");
myDFA.process("110010");

console.log("\n--- Prueba 4: 'abc' ---");
myDFA.process("abc");

console.log("\n--- Prueba 5: '100' ---");
myDFA.process("100");