export type NameType = { name: string };

export class Weapon {
    constructor(public name: string) { }

    fire(): void { }
}

export interface WookieName {
    name: string;

    prenom?: string;
}

/**
 * C'est ma super classe
 */
export class Wookiee {//  implements WookieName {
    constructor(public name: string) { }

    // sayHello() {
    //     console.log(`Hello, my name is ${this.name}`);
    // }
}