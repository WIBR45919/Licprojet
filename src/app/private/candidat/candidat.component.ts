import { Component, Input, OnInit } from '@angular/core';
import { UserInService } from '../_service-admin/user-in.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent implements OnInit {

  @Input() showEtudiant!: any[];

  constructor(private user: UserInService) { }

  ngOnInit(): void {
  }
  updateFilere(id: number): void{
    console.log('update');
  }

  deleteFiliere(id: number): void{
    console.log('delete');
  }

  addFilere(): void{
   console.log('add');
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
