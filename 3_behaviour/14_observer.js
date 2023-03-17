class Subject {
    constructor() {

        this.observers = []

    }

    subscribe(observer){
        this.observers.push(observer)
    }
    unsubscribe(observer){
        this.observers = this.observers.filter(i=>observer!==i)
    }

    fire(changes){}

}