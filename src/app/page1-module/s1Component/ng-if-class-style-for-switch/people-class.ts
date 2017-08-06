export class PeopleClass {
    private name: string;
    private age: number;
    private country: string;
    private icon: string;

    constructor(nameArg: string, ageArg: number, countryArg: string, iconArg: string) {
        this.name = nameArg;
        this.age = ageArg;
        this.country = countryArg;
        this.icon = iconArg;
    }

}
