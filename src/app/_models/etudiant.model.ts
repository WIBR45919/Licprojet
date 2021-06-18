import {loginModel} from "./login.model";
import {DiplomeAdmissionModel} from "./diplomeAdmission.model";
import {DiplomeAutreModel} from "./diplomeAutre.model";
import {FiliereModel} from "./filiere.model";
import {NiveauModel} from "./niveau.model";
import {TuteurModel} from "./tuteur.model";
import {CursusModel} from "./cursus.model";

export  interface EtudiantModel {
  nom: string;
  prenom: string;
  sexe: string;
  situationFamilial: string;
  dateNaissance: string;
  lieu: string;
  numCNI: string;
  email: string;
  telephone: number;
  paysOrigine: string;
  regionOrigine: string;
  langue: string;
  handicap: string;
  profession: string;
  cursus: CursusModel,
  DiplomeAdmission: DiplomeAdmissionModel,
  DiplomeAutre: DiplomeAutreModel[],
  Filiere: FiliereModel,
  Tuteur: TuteurModel,
  Niveau: NiveauModel,
  Inscrit: loginModel;
}
