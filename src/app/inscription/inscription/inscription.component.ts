import { Component, OnInit } from '@angular/core';
import {BreakpointObserver} from "@angular/cdk/layout";
import {Observable} from "rxjs";
import {STEPPER_GLOBAL_OPTIONS, StepperOrientation} from "@angular/cdk/stepper";
import {map} from "rxjs/operators";
import {ScriptsService} from "../../_services/scripts.service";
import {FormBuilder, FormArray, FormGroup, FormControl, Validators} from "@angular/forms";
import {DiplomeAutreModel} from "../../_models/diplomeAutre.model";
import {MatSnackBar} from "@angular/material/snack-bar";

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
  annees = ["1991","1992","1993","1994","1995","1996","1997","1998","1999",
    "2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012",
    "2013","2014","2015","2016","2017","2018","2019","2020","2021",];
  diplome = [
    "HND","DSEP","Baccalaureat","BT","DUT","Licence Scientifique","GCE Advanced Level","BEPC / CAP",
    "Ingénieur des Travaux","Licence Technologie","BTS","DEUG","Probatoire","HCE Ordinary Level","CEP anglophone"
  ];
  mention = ["Asséz-bien","Bien","Excellent","Passable","Très bien","Sous-reserve"];


  //creation du gestionnaire de formulaire reactif
  formEtudiant!: FormGroup;
  formDiplome!: FormGroup;


  constructor(private breakpoint: BreakpointObserver, private script: ScriptsService,
               private formBuilder: FormBuilder, private snack: MatSnackBar) {
    this.stepperOrientation = breakpoint.observe('(min-width: 1000px)').pipe(
      map(({matches}) => matches ? 'horizontal' : 'vertical')
    );
  }

  ngOnInit(): void {
    this.script.responsiveMenu();
    this.initForm();
    this.initFormDiplome();
  }

  initForm(): void {
    this.formEtudiant = this.formBuilder.group(
      {
       form : this.formBuilder.array([
         this.formBuilder.group({

         }),
         this.formBuilder.group({

         }),
         this.formBuilder.group({

         }),
         this.formBuilder.group({

         }),
         this.formBuilder.group({

         }),
       ])
      }
    );
  }

//  Send form method
  onSubmit(): void{
    alert('Envoyer');
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

  deleteDiplome(index: number):void{
    this.listDiplomeAutre.splice(index-1, 1);
    this.ConfirmAjout('Suppression éffetuer');
  }
}
