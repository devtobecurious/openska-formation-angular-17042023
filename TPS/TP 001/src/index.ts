import { MoyenDeplacement } from "./salarie";

export class Voiture implements MoyenDeplacement {
    seDeplacer(): void {
        console.log('Je me déplace en voiture');
    }
}