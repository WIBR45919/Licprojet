import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserInService } from '../_service-admin/user-in.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 
  showEtudiant!: any[];
  i!: number;

  constructor(private user: UserInService) { }

  ngOnInit(): void {
    this.user.getInfos().subscribe((data) => {
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
