import { Component, OnInit } from '@angular/core';
import {BreakpointObserver} from "@angular/cdk/layout";
import {Observable} from "rxjs";
import {STEPPER_GLOBAL_OPTIONS, StepperOrientation} from "@angular/cdk/stepper";
import {map} from "rxjs/operators";
import {ScriptsService} from "../../_services/scripts.service";
import {FormBuilder, FormArray, FormGroup} from "@angular/forms";

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
  // state indicators
  step1: boolean = true;

  //creation du gestionnaire de formulaire reactif
  formEtudiant!: FormGroup;
  constructor(private breakpoint: BreakpointObserver, private script: ScriptsService,
               private formBuilder: FormBuilder) {
    this.stepperOrientation = breakpoint.observe('(min-width: 1100px)').pipe(
      map(({matches}) => matches ? 'horizontal' : 'vertical')
    );
  }

  ngOnInit(): void {
    this.script.responsiveMenu();
    this.initForm();
  }

  initForm(): void {
    this.formEtudiant = this.formBuilder.group(
      {
       identification : this.formBuilder.array([
         this.formBuilder.control(''),
         this.formBuilder.control(''),
         this.formBuilder.control(''),
         this.formBuilder.control(''),
         this.formBuilder.control(''),
       ])
      }
    );
  }

//  Send form method
  onSubmit(): void{}
}
