import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ProfilService} from "../__service/profil.service";
import  Swal  from "sweetalert2"

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {

  files: File[] = [];
  sendImage!: FormGroup;
  nbfile = 7;
  actif = false;
  formData!: FormData;

  constructor(private buid: FormBuilder, private profil: ProfilService) { }

  ngOnInit(): void {
    this.formData = new FormData();
    this.initFormimg();
  }

  onSelect(event: any): void{
    //On verifie si le nom existe déja
    // Si oui on notifie l'utilisateur
    //Si nom on ajoute
    // On verifie également si la taille du fichier est conforme
    
    if(event.rejectedFiles.length > 0){
       this.fileSize() 
    }else {
      if(this.files.length !==0){
        let trigger = this.files.filter((elt: File) => elt.name === event.addedFiles[0].name);

        if(event.rejectedFiles.length > 0){ this.fileSize() }

        if(trigger.length !== 0){  this.fileName();} 

        else if(this.files.length > this.nbfile){
          this.actif = false;
          // this.files.length
          this.fileLength();
        }
        else{
          this.files.push(...event.addedFiles);
        }
      }
      else{ 
        if(event.rejectedFiles.length > 0){ this.fileSize() }
        this.files.push(...event.addedFiles);
      }
    }
  }

  onRemove(event: any): void {
    this.files.splice(this.files.indexOf(event), 1);
  }
  //todo: l'avertir l'utilisateur du probleme survenu dans le cas ou son fichier n'est pas charge
  // todo: l'avertir grace a une modal de sweetAlert

//  initialisation du champs d'image
  initFormimg(): void{
    this.sendImage = this.buid.group({
      tabImg: new FormControl([])
    });
  }
  // notify user method
  fileLength(): void{
    Swal.fire(
      'Le nombre de fichier est atteint!',
      'Le nombre de fichier est de 7',
      'warning'
    )
  }
  fileName(): void{
    Swal.fire(
      'Le nom du fichier existe déja!',
      'Renommer les fichier en fonction de de l\'ordre donnée ci-dessous',
      'warning'
    )
  }
  fileSize(): void{
    Swal.fire(
      'Le fichier est trop lourd!',
      'Le poids maximal du fichier est de 200KO',
      'warning'
    )
  }
//  Envoie du formulaire
  sendTabImage(): void{
    //chargement des fichiers dans le formData object

    for (let i = 0; i < this.files.length; i++) {
      if (this.files[i].type.match('image.*')){
        this.formData.append(`files[${i}]`, this.files[i], this.files[i].name);
      }
    }
    this.profil.sendImageServer(this.formData).subscribe((data) =>{
      console.log(data);
    }, error => {
      console.log(error);
    });
  }
}
