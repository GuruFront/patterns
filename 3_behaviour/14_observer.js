class Subject {
    constructor() {
        this.observers = []
    }

    subscribe(observer) {
        this.observers.push(observer)
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(i => observer !== i)
    }

    fire(changes) {
        this.observers.forEach(observer => {
                observer.update(changes)
            }
        )
    }
}

class Observer {
    constructor(state) {
        this.state = state
        this.initialState = state
    }

    update(action) {
        switch (action.type) {
            case 'INCREMENT':
                this.state = ++this.state
                break
            case 'DECREMENT':
                this.state = --this.state
                break
            case 'ADD':
                this.state += action.payload
                break
            default:
                this.initialState
        }
    }
}

const stream$ = new Subject();

const obs1 = new Observer(1)
const obs2 = new Observer(42)

stream$.subscribe(obs1)
stream$.subscribe(obs2)

console.log(obs1.state)
console.log(obs2.state)

stream$.fire({type:'INCREMENT'})
stream$.fire({type:'INCREMENT'})
stream$.fire({type:'ADD', payload: 10})

console.log(obs1.state)
console.log(obs2.state)