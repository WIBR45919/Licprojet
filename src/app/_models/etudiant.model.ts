import {loginModel} from "./login.model";
import {DiplomeAdmissionModel} from "./diplomeAdmission.model";
import {DiplomeAutreModel} from "./diplomeAutre.model";
import {FiliereModel} from "./filiere.model";
import {NiveauModel} from "./niveau.model";
import {TuteurModel} from "./tuteur.model";
import {CursusModel} from "./cursus.model";

export  interface EtudiantModel {
  nom: string;
  Numreçus: string;
  prenom: string;
  sexe: string;
  situationFamilial: string;
  dateNaissance: string;
  lieu: string;
  numCNI: string;
  email: string;
  telephone: number;
  adresse: string;
  centre: string;
  paysOrigine: string;
  regionOrigine: string;
  langue: string;
  handicap: string;
  profession: string;
  cursus: CursusModel,
  diplomeAdmission: DiplomeAdmissionModel,
  diplomeAutres: DiplomeAutreModel[],
  filiere: FiliereModel,
  tuteur: TuteurModel,
  niveau: NiveauModel,
  inscrit: loginModel;
}
