class Person {
    protected name: string
    protected lastName: string
    protected identification?: string
    protected identificationType?: string
    protected birthday?: string
    protected height?: string
    protected weight?: string

    public constructor(person: {
        name: string,
        lastName: string
    }) {
        this.name = person.name
        this.lastName = person.lastName
    }
}

export {
    Person
}