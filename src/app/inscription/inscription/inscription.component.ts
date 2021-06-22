import { Component, OnInit } from '@angular/core';
import {BreakpointObserver} from "@angular/cdk/layout";
import {Observable} from "rxjs";
import {STEPPER_GLOBAL_OPTIONS, StepperOrientation} from "@angular/cdk/stepper";
import {map} from "rxjs/operators";
import {ScriptsService} from "../../_services/scripts.service";
import {FormBuilder, FormArray, FormGroup, FormControl, Validators, AbstractControl} from "@angular/forms";
import {DiplomeAutreModel} from "../../_models/diplomeAutre.model";
import {MatSnackBar} from "@angular/material/snack-bar";
import {InfosService} from "../__services/infos.service";
import {EtudiantModel} from "../../_models/etudiant.model";
declare var $:any

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue:{ displayDefaultIndicatorType: false }
  }]
})
export class InscriptionComponent implements OnInit {

  stepperOrientation!: Observable<StepperOrientation>;

  //getion de la liste des diplomes
  listDiplomeAutre = new Array<DiplomeAutreModel>();
  annees!: string[];
  diplome!: string[];
  mention!: string[];
  cursus!: any;
  tab!:any;
  regions!: any;
  pays!: any;

  //creation du gestionnaire de formulaire reactif
  formEtudiant!: FormGroup;
  formDiplome!: FormGroup;
  isVisible = false;
  filiere = [{id: 1, name:''}];
  niveau = [{id: 1, name:''}];
  isSame = false;


  constructor(private breakpoint: BreakpointObserver, private script: ScriptsService,
               private formBuilder: FormBuilder, private snack: MatSnackBar, private infos: InfosService) {
    this.stepperOrientation = breakpoint.observe('(min-width: 1000px)').pipe(
      map(({matches}) => matches ? 'horizontal' : 'vertical')
    );
  }
  // retourne un formArray avec le nom 'informations'
  get informations(): AbstractControl{
    return this.formEtudiant.get('informations') as FormArray;
  }

  ngOnInit(): void {
    this.script.responsiveMenu();
    this.initForm();
    this.initFormDiplome();

    //initialisations des valeurs a utiliser provenant du service
    this.mention = this.infos.mention;
    this.annees = this.infos.annees;
    this.diplome = this.infos.diplome;
    this.cursus = this.infos.cursus;
    this.regions = this.infos.Pays[0].regions;
    this.pays = this.infos.Pays;
  }

  initForm(): void {
    this.formEtudiant = this.formBuilder.group(
      {
        informations : this.formBuilder.array([
         // IDENTIFICATION
         this.formBuilder.group({
           nom: new FormControl('',[Validators.required]),
           prenom: new FormControl('',[Validators.required]),
           sexe: new FormControl('Maxculin',[Validators.required]),
           date: new FormControl('',[Validators.required, Validators.pattern('')]),
           lieuNaiss: new FormControl('',[Validators.required,Validators.minLength(3)]),
           situation: new FormControl('Célibataire',[Validators.required]),
           address: new FormControl('',[Validators.required]),
           tel: new FormControl('',[Validators.required, Validators.pattern('[0-9]{9}')]),
           numCNI: new FormControl('',[Validators.required, Validators.minLength(8)]),
           email: new FormControl('xyz@gmail.com',[Validators.required, Validators.email,Validators.pattern('\\b[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}\\b')]),
           paysOrigine: new FormControl('République du Cameroun',[Validators.required]),
           regionOrigine: new FormControl('Littoral',[Validators.required]),
           langues: new FormControl(['Français'],[Validators.required]),
         }),
         //SPECIALISATION
         this.formBuilder.group({
           nomCursus: new FormControl('',[Validators.required]),
           niveauFil: new FormControl('',[Validators.required]),
           nomFil: new FormControl('',[Validators.required]),
           diplomeAdd: new FormControl('',[Validators.required]),
           serieAdd: new FormControl('',[Validators.required]),
           mentionDiplome: new FormControl('Bien',[Validators.required]),
           anneeObtention: new FormControl('',[Validators.required]),
           etablissementObt: new FormControl('',[Validators.required]),
           paysObtention: new FormControl('',[Validators.required]),
           Choixcentre: new FormControl('',[Validators.required]),
           AnneeObtentionB: new FormControl('2020',[Validators.required]),
         }),
         // AUTRES INFOS
         this.formBuilder.group({
           handicap: new FormControl('',[Validators.required]),
           profession: new FormControl('',[Validators.required]),
           nomtuteur: new FormControl('',[Validators.required]),
           telephoneTuteur: new FormControl('',[Validators.required, Validators.pattern('[0-9]{9}')]),
           emailTuteur: new FormControl('',[Validators.required, Validators.email,Validators.pattern('\\b[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}\\b')])
         }),
         //FINISH && LOGIN
         this.formBuilder.group({
           username: new FormControl('',[Validators.required]),
           password: new FormControl('',[Validators.required, Validators.minLength(4)])
         }),
       ]),
      }
    );
  }

//  Send form method
  onSubmit(): void{ //-------------------------terminer la souscription--------------------------------
   this.infos.Inscription(this.inscriptionModel()).subscribe(
     data => {
       console.log(data)
     },
     error => {
       console.log(error)
     },
   );
  }
  choixNiveau(elt1: any): void{
    const name = $(elt1)[0].value;
    // console.log(name)
    this.tab = this.cursus.cursus.filter((elt: any) => elt.nom === name);
    // console.log(tab[0]);
    this.niveau = this.tab[0].others.niveau;
    this.filiere = this.tab[0].others.filieres;
  }
  choixFilire(elt: any): void{
    // console.log($(elt)[0].value)
  }
  updateRegion(event: any){
    const bet = this.infos.Pays.filter((pay: any) => pay.nom === $(event)[0].value);
    this.regions = bet[0].regions;
  }
//  méthodes liée aux diplomes

  //  -- initialisation du formulaire d'ajout

  initFormDiplome(): void{
    this.formDiplome = this.formBuilder.group({
      annee: new FormControl('2021',[Validators.required]),
      etablissement: new FormControl('',[Validators.required, Validators.minLength(3)]),
      diplome: new FormControl('Probatoire',[Validators.required]),
      mention: new FormControl('Bien',[Validators.required]),
    });
  }
  ConfirmAjout(message: string): void{
    this.snack.open(message, 'OK');
  }
  addDiplome(): void{
    const elt = {
      nomDiplome: this.formDiplome.get('diplome')?.value,
      anneeObtention: this.formDiplome.get('annee')?.value,
      etablissement: this.formDiplome.get('etablissement')?.value,
      mention: this.formDiplome.get('mention')?.value
    }
    // console.log(typeof this.formDiplome.get('diplome')?.value);
    this.listDiplomeAutre.push(elt);
  }
  showHide(): void{
    this.isVisible = !this.isVisible;
  }
  deleteDiplome(index: number):void{
    console.log(index);
    this.listDiplomeAutre.splice(index, 1);
    this.ConfirmAjout('Suppression éffetuer');
  }
//  verification des mots de passe
  verifpass(a: string, b: string): boolean{
    this.isSame = a!==b;
    return a !== b;
  }


  //  restructuration du formulaire au format demande
  inscriptionModel(): EtudiantModel{
    return {
      nom: this.informations.get([0])?.get('nom')?.value,
      prenom: this.informations.get([0])?.get('prenom')?.value,
      sexe: this.informations.get([0])?.get('sexe')?.value,
      situationFamilial: this.informations.get([0])?.get('situation')?.value,
      dateNaissance: this.informations.get([0])?.get('date')?.value,
      lieu: this.informations.get([0])?.get('lieuNaiss')?.value,
      numCNI: this.informations.get([0])?.get('numCNI')?.value,
      email: this.informations.get([0])?.get('email')?.value,
      telephone: this.informations.get([0])?.get('tel')?.value,
      paysOrigine: this.informations.get([0])?.get('paysOrigine')?.value,
      regionOrigine: this.informations.get([0])?.get('regionOrigine')?.value,
      langue: this.informations.get([0])?.get('langues')?.value,
      handicap: this.informations.get([2])?.get('handicap')?.value,
      profession: this.informations.get([2])?.get('profession')?.value,
      cursus: {
        nomCursus: this.informations.get([1])?.get('nomCursus')?.value
      },
      DiplomeAdmission: {
        nomDiplome: this.informations.get([1])?.get('diplomeAdd')?.value,
        anneeObtention: this.informations.get([1])?.get('anneeObtention')?.value,
        paysObtention: this.informations.get([1])?.get('paysObtention')?.value,
        etablissement: this.informations.get([1])?.get('etablissementObt')?.value,
        centreExamen: this.informations.get([1])?.get('Choixcentre')?.value,
        anneeObtentionAutre: this.informations.get([1])?.get('AnneeObtentionB')?.value,
        serieDiplome: this.informations.get([1])?.get('serieAdd')?.value
      },
      DiplomeAutre: this.listDiplomeAutre,
      Filiere: {
        nomFiliere: this.informations.get([1])?.get('nomFil')?.value
      },
      Tuteur: {
        nomTuteur: this.informations.get([2])?.get('nomtuteur')?.value,
        telephoneTuteur: parseInt(this.informations.get([2])?.get('telephoneTuteur')?.value),
        emailTuteur: this.informations.get([2])?.get('emailTuteur')?.value
      },
      Niveau: {
        nomNiveau: this.informations.get([1])?.get('niveauFil')?.value
      },
      Inscrit: {
        username: this.informations.get([3])?.get('username')?.value,
        password: this.informations.get([3])?.get('password')?.value
      }
    };
  }
}
//Validators.pattern('([1-9]|1[0-2])/([1-9]|1[0-9]|2[0-9]|3[01])/(19|20)[0-9]{2}')
//Validators.pattern('\\b[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}\\b')]),
