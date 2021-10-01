import { Component, OnInit } from '@angular/core';
import {BreakpointObserver} from "@angular/cdk/layout";
import {Observable, Subject} from "rxjs";
import {STEPPER_GLOBAL_OPTIONS, StepperOrientation} from "@angular/cdk/stepper";
import {map} from "rxjs/operators";
import {FormBuilder, FormArray, FormGroup, FormControl, Validators, AbstractControl} from "@angular/forms";
import {DiplomeAutreModel} from "../../_models/diplomeAutre.model";
import {MatSnackBar} from "@angular/material/snack-bar";
import {InfosService} from "../__services/infos.service";
import {EtudiantModel} from "../../_models/etudiant.model";
import {FiliereModel} from "../../_models/filiere.model";
import {NiveauModel} from "../../_models/niveau.model";
import {Router} from "@angular/router";
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import Swal from 'sweetalert2';
declare var $:any

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
  providers: [
    { provide: STEPPER_GLOBAL_OPTIONS,
       useValue:{
          displayDefaultIndicatorType: false
        }
    },
  { provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},  
  ]
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
  //Date max et date Min
  minDate = new Date(1990, 1, 1)
  maxDate = new Date(2010,1,1)
  date!: string;

  //creation du gestionnaire de formulaire reactif
  formEtudiant!: FormGroup;
  formDiplome!: FormGroup;
  isVisible = false;
  filiere!: FiliereModel[];
  niveau!: NiveauModel;
  isSame = false;

  //variable de la webcam
  // toggle webcam on/off
  public showWebcam = true;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId!: string;
  mirror = '';
  public videoOptions: MediaTrackConstraints = {
    // width: {ideal: 1024},
    // height: {ideal: 576}
  };
  public errors: WebcamInitError[] = [];

  // latest snapshot
  public webcamImage!: WebcamImage;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean|string> = new Subject<boolean|string>();



  constructor(private breakpoint: BreakpointObserver,
               private formBuilder: FormBuilder,private snack: MatSnackBar, private infos: InfosService,
              private router: Router) {
    this.stepperOrientation = breakpoint.observe('(min-width: 1000px)').pipe(
      map(({matches}) => matches ? 'horizontal' : 'vertical')
    );
  }
  // retourne un formArray avec le nom 'informations'
  get informations(): AbstractControl{
    return this.formEtudiant.get('informations') as FormArray;
  }

  ngOnInit(): void {
    this.requiredStep();
    this.initForm();
    this.initFormDiplome();
    this.infos.getCursus().subscribe( (data) =>{
      this.cursus = data;
    }, error => {
      console.log(error);
    });

    //initialisations des valeurs a utiliser provenant du service
    this.mention = this.infos.mention;
    this.annees = this.infos.getMyYear();
    this.diplome = this.infos.diplome;
    this.regions = this.infos.Pays[0].regions;
    this.pays = this.infos.Pays;

    //webcam
  }

  useWebcam(): void{
    WebcamUtil.getAvailableVideoInputs()
    .then((mediaDevices: MediaDeviceInfo[]) => {
      this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
    });
  }

  initForm(): void {
    this.formEtudiant = this.formBuilder.group(
      {
        informations : this.formBuilder.array([
         // IDENTIFICATION
         this.formBuilder.group({
           Numreçus: new FormControl('',[Validators.required, Validators.maxLength(100)]),
           nom: new FormControl('',[Validators.required]),
           prenom: new FormControl('',[Validators.required]),
           sexe: new FormControl('Maxculin',[Validators.required]),
           date: new FormControl('',[Validators.required, Validators.pattern('')]),
           lieuNaiss: new FormControl('',[Validators.required,Validators.minLength(3)]),
           situation: new FormControl('Célibataire',[Validators.required]),
           address: new FormControl('',[Validators.required]),
           tel: new FormControl('',[Validators.required, Validators.pattern('[0-9]{9}')]),
           numCNI: new FormControl('',[Validators.required, Validators.minLength(8)]),
           email: new FormControl('xyz@gmail.com',[Validators.email,Validators.pattern('\\b[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}\\b')]),
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
           AnneeObtentionB: new FormControl('2020',[Validators.required]),
         }),
         // AUTRES INFOS
         this.formBuilder.group({
           handicap: new FormControl('',[Validators.required]),
           profession: new FormControl('',[Validators.required]),
           nomtuteur: new FormControl('',[Validators.required]),
           telephoneTuteur: new FormControl('',[Validators.required, Validators.pattern('[0-9]{9}')]),
           Choixcentre: new FormControl('',[Validators.required]),
           emailTuteur: new FormControl('',[Validators.required, Validators.email,Validators.pattern('\\b[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}\\b')])
         }),
         //FINISH && LOGIN
         this.formBuilder.group({
           username: new FormControl('',[Validators.required]),
           password: new FormControl('',[Validators.required, Validators.minLength(6), Validators.pattern('\\w{6,}')])
         }),
       ]),
      }
    );
  }
//prevention des elements necessaires
 requiredStep(): void{
  Swal.fire(
    'Etape Obligatoire',
    'Vous devez avoir payé les frais de préinscription avant de vous préinscrire!',
    'warning'
  )
 }
//  Send form method
  onSubmit(): void{ //-------------------------terminer la souscription--------------------------------
   this.infos.Inscription(this.inscriptionModel()).subscribe(
     data => {
      sessionStorage.setItem('USER_FORM',JSON.stringify({
        infos: this.inscriptionModel(),
        image: this.webcamImage.imageAsDataUrl
       }));
      
       window.open('/pdf');
       this.router.navigate(['/connexion']);
     },
     error => {
       console.log(error)
     },
   );
  }
  choixNiveau(elt1: any): void{
    const name = $(elt1)[0].value;
    // console.log(name)
    this.tab = this.cursus.filter((elt: any) => elt.nomCursus === name);
    // console.log(tab[0]);
    this.niveau = this.tab[0].niveau.nomNiveau;
    this.filiere = this.tab[0].filiereList;
  }
  choixFilire(elt: any): void{
    // console.log($(elt)[0].value)
  }
  updateRegion(event: any){
    const bet = this.infos.Pays.filter((pay: any) => pay.nom === $(event)[0].value);
    this.regions = bet[0].regions;
  }
  //previsualisation d'image
  loadpreviewImage(file :any, img: any): void{
    $(file).click();

    $(file).change(()=>{
      let image = $(file)[0].files[0];
       if(image.size > 204800){
        Swal.fire(
          'Le fichier est trop lourd!',
          'Le poids maximal du fichier est de 200KO',
          'warning'
        )
       }else{
          let reader = new FileReader();
          reader.addEventListener('load', ()=>{
            $(img).attr('src',reader.result)
          }, false)

          if(image){
            reader.readAsDataURL(image);
          }
       }
      
    })
  }
//  méthodes liée aux diplome
  //  -- initialisation du formulaire d'ajout

  initFormDiplome(): void{
    this.formDiplome = this.formBuilder.group({
      annee: new FormControl('2021',[Validators.required]),
      etablissement: new FormControl('',[Validators.required, Validators.minLength(3)]),
      diplome: new FormControl('Probatoire',[Validators.required]),
      mention: new FormControl('Bien',[Validators.required]),
    });
  }
  ConfirmAjout(message: any): void{
    message = message.toString();
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
    //verifier si le diplome existe deja
    let final = this.listDiplomeAutre.filter(dip => (dip.nomDiplome === elt.nomDiplome || dip.anneeObtention === elt.anneeObtention));
    if(final?.length > 0){
      this.ConfirmAjout("Diplome déja existant ou année déja existante");
    }
    else this.listDiplomeAutre.push(elt);
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
// Pour afficher les informations en as de besoin
  affiche(): void{
    console.log(this.informations.get([0])?.get('date')?.value);
  }
  addEvent (event : MatDatepickerInputEvent<Date>) {
  let day = event.value?.getDate() //jour
  let year = event.value?.getFullYear() //année
  let month = event.value?.getMonth() + '';
  this.date = day +'/' + (parseInt(month, 10) +1) + '/'+year
 }
  //  restructuration du formulaire au format demande
  inscriptionModel(): EtudiantModel{
    const langue = this.informations.get([0])?.get('langues')?.value;
    return {
      Numreçus:this.informations.get([0])?.get('Numreçus')?.value,
      nom: this.informations.get([0])?.get('nom')?.value,
      prenom: this.informations.get([0])?.get('prenom')?.value,
      sexe: this.informations.get([0])?.get('sexe')?.value,
      situationFamilial: this.informations.get([0])?.get('situation')?.value,
      adresse: this.informations.get([0])?.get('adresse')?.value,
      centre: this.informations.get([2])?.get('Choixcentre')?.value,
      dateNaissance: this.date,
      lieu: this.informations.get([0])?.get('lieuNaiss')?.value,
      numCNI: this.informations.get([0])?.get('numCNI')?.value,
      email: this.informations.get([0])?.get('email')?.value,
      telephone: this.informations.get([0])?.get('tel')?.value,
      paysOrigine: this.informations.get([0])?.get('paysOrigine')?.value,
      regionOrigine: this.informations.get([0])?.get('regionOrigine')?.value,
      langue: langue.toString(),
      handicap: this.informations.get([2])?.get('handicap')?.value,
      profession: this.informations.get([2])?.get('profession')?.value,
      cursus: {
        nomCursus: this.informations.get([1])?.get('nomCursus')?.value
      },
      diplomeAdmission: {
        nomDiplome: this.informations.get([1])?.get('diplomeAdd')?.value,
        anneeObtention: this.informations.get([1])?.get('anneeObtention')?.value,
        paysObtention: this.informations.get([1])?.get('paysObtention')?.value,
        etablissement: this.informations.get([1])?.get('etablissementObt')?.value,
        centreExamen: this.informations.get([1])?.get('Choixcentre')?.value,
        anneeObtentionAutre: this.informations.get([1])?.get('AnneeObtentionB')?.value,
        serieDiplome: this.informations.get([1])?.get('serieAdd')?.value
      },
      diplomeAutres: this.listDiplomeAutre,
      filiere: {
        nomFiliere: this.informations.get([1])?.get('nomFil')?.value
      },
      tuteur: {
        nomTuteur: this.informations.get([2])?.get('nomtuteur')?.value,
        telephoneTuteur: parseInt(this.informations.get([2])?.get('telephoneTuteur')?.value),
        emailTuteur: this.informations.get([2])?.get('emailTuteur')?.value
      },
      niveau: {
        nomNiveau: this.informations.get([1])?.get('niveauFil')?.value
      },
      inscrit: {
        username: this.informations.get([3])?.get('username')?.value,
        password: this.informations.get([3])?.get('password')?.value
      }
    };
  }

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
  }

  public cameraWasSwitched(deviceId: string): void {
    this.deviceId = deviceId;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean|string> {
    return this.nextWebcam.asObservable();
  }

}
//Validators.pattern('([1-9]|1[0-2])/([1-9]|1[0-9]|2[0-9]|3[01])/(19|20)[0-9]{2}')
//Validators.pattern('\\b[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}\\b')]),
