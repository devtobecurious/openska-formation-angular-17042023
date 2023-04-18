import { Weapon, Wookiee, WookieName, NameType } from './wookiee';

let wookie = new Wookiee('Chewbacca');
let arme: Weapon;

arme = {
    name: 'Blaster',
    fire: () => { }
};

let wookie2: WookieName = {
    name: 'Chewbacca'
}

wookie2.name = 'Chewbacca';
// wookie = 2;




// -----------------------------
function afficher(wookie: NameType): void {
    console.log(wookie.name);
}
const wook = new Wookiee('Chewbacca');
afficher(wook);

const wook2: Wookiee = {
    name: 'Chewbacca'
};
afficher(wook2);

const wook3 = {
    name: 'Chewbacca'
};
afficher(wook3);