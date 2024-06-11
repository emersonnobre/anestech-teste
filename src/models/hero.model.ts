export default class Hero {
    id: number
    name: string
    alias: string
    powers: Array<string>
    affiliation: string

    constructor(id:number, name: string, alias: string, powers: Array<string>, affiliation: string) {
        this.id = id
        this.name = name
        this.alias = alias
        this.powers = powers
        this.affiliation = affiliation
    }
}