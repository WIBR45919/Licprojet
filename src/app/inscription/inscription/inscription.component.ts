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

  //creation du gestionnaire de formulaire reactif
  formEtudiant!: FormGroup;
  formDiplome!: FormGroup;
  isVisible = false;
  filiere = [{id: 1, name:''}];
  niveau = [{id: 1, name:''}];


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
  }

  initForm(): void {
    this.formEtudiant = this.formBuilder.group(
      {
        informations : this.formBuilder.array([
         this.formBuilder.group({
           nom: new FormControl('',[Validators.required]),
           prenom: new FormControl('',[Validators.required]),
           sexe: new FormControl('Maxculin',[Validators.required]),
           date: new FormControl('',[Validators.required, Validators.pattern('')]),
           lieuNaiss: new FormControl('',[Validators.required,Validators.minLength(3)]),
           situation: new FormControl('Célibataire',[Validators.required]),
           address: new FormControl('',[Validators.required]),
           tel: new FormControl('',[Validators.required, Validators.minLength(9)]),
           numCNI: new FormControl('',[Validators.required, Validators.minLength(8)]),
           email: new FormControl('',[Validators.required, Validators.email,Validators.pattern('\\b[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}\\b')]),
           paysOrigine: new FormControl('République du Cameroun',[Validators.required]),
           regionOrigine: new FormControl('Littoral',[Validators.required]),
           langues: new FormControl(['Français'],[Validators.required]),
         }),
         this.formBuilder.group([
           // nomCursus: new FormControl('',[Validators.required]),
           // niveauFil: new FormControl('',[Validators.required]),
           // nomFil: new FormControl('',[Validators.required]),
           // diplomeAdd: new FormControl('',[Validators.required]),
           // serieAdd: new FormControl('',[Validators.required]),
           // mentionDiplome: new FormControl('',[Validators.required]),
           // anneeObtention: new FormControl('',[Validators.required]),
           // etablissementObt: new FormControl('',[Validators.required]),
           // paysObtention: new FormControl('',[Validators.required]),
           // Choixcentre: new FormControl('',[Validators.required]),
           // AnneeObtentionB: new FormControl('',[Validators.required]),
         ]),
         this.formBuilder.group([

         ]),
         this.formBuilder.group([

         ]),
       ]),
      }
    );
  }

//  Send form method
  onSubmit(): void{
    alert('Envoyer');
  }
  choixNiveau(elt1: any): void{
    const name = $(elt1)[0].value;
    // console.log(name)
    const tab = this.cursus.cursus.filter((elt: any) => elt.nom === name);
    // console.log(tab[0]);
    this.niveau = tab[0].others.niveau;
    this.filiere = tab[0].others.fileres;
  }
  choixFilire(elt: any): void{
    console.log($(elt).value)
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
    this.listDiplomeAutre.splice(index-1, 1);
    this.ConfirmAjout('Suppression éffetuer');
  }
}
//Validators.pattern('([1-9]|1[0-2])/([1-9]|1[0-9]|2[0-9]|3[01])/(19|20)[0-9]{2}')
