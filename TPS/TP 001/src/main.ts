import { MoyenDeplacement, Salarie } from "./salarie";
import { Voiture } from "./";

const velo: MoyenDeplacement = {
    seDeplacer(): void {
        console.log('Je me déplace en vélo');
    }
}

const voiture = new Voiture();
const salarie = new Salarie('Dupont', voiture);

salarie.name = 'test';