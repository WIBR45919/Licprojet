import { Component, OnInit } from '@angular/core';
import { UserInService } from '../_service-admin/user-in.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-filieres',
  templateUrl: './filieres.component.html',
  styleUrls: ['./filieres.component.css']
})
export class FilieresComponent implements OnInit {

  showEtudiant!: any[];
  i!: number;

  constructor(private user: UserInService) { }

  ngOnInit(): void {
    this.user.getFiliere().subscribe((data) => {
      this.showEtudiant = data;
    },
    error => {
      console.log(error);
      Swal.fire(
        'Erreur!',
        'Erreur de chargement des données!',
        'error'
      )
    })
  }

  updateFilere(id: number): void{

  }

  deleteFiliere(id: number): void{

  }

  addFilere(): void{

  }

  searchCursus(){
    console.log('hhh')
     this.user.getCursus().subscribe((data) => {
      this.showEtudiant = data;
    },
    error => {
      console.log(error);
      Swal.fire(
        'Erreur!',
        'Erreur de chargement des données!',
        'error'
      )
    })
  }
  searchFiliere(){
    this.user.getFiliere().subscribe((data) => {
      this.showEtudiant = data;
    },
    error => {
      console.log(error);
      Swal.fire(
        'Erreur!',
        'Erreur de chargement des données!',
        'error'
      )
    })
  }
  searchNiveau(){
    this.user.getNiveau().subscribe((data) => {
      this.showEtudiant = data;
    },
    error => {
      console.log(error);
      Swal.fire(
        'Erreur!',
        'Erreur de chargement des données!',
        'error'
      )
    })
  }

}
