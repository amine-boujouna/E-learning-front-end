import {Niveau} from "./Niveau";
import {Trimestre} from "./Trimestre";
import {Chapitre} from "./Chapitre";
import {Difficulte} from "./Difficulte";
import {Fichier} from "./Fichier";
import {SousChamp} from "./SousChamp";

export class Exercice {
  id!: number;
  niveau!:Niveau;
  trimestre!:Trimestre;
  sousChamp!:SousChamp;
  chapitre!:Chapitre;
  difficulte!:Difficulte;
  numero!:number;
  fichiers!:Fichier[];

}
