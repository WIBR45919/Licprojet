import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EtudiantModel } from 'src/app/_models/etudiant.model';
import { UserInService } from '../_service-admin/user-in.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  showSubcription!: Subscription;
  showEtudiant!: any[];

  constructor(private user: UserInService) { }

  ngOnInit(): void {
    this.showSubcription = this.user.showSubject.subscribe((data) => {
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
    this.user.emitSublect();
  }

  ngOnDestroy(): void{
    this.showSubcription.unsubscribe()
  }
}
