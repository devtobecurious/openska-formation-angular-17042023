export interface MoyenDeplacement {
    seDeplacer(): void;
}

/**
 * Classe Salarie
 */
export class Salarie {
    private _name = '';

    constructor(name: string, private moyenDeplacement: MoyenDeplacement) {
        this.name = name;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        if (value.length < 3) {
            throw new Error('Le nom doit faire au moins 3 caractères');
        }
        this._name = value;
    }

    /**
     * Se déplacer
     */
    seDeplacer(): void {
        this.moyenDeplacement.seDeplacer();
    }
}