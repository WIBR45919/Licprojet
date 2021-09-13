import {Component, Input, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { UserInService } from '../_service-admin/user-in.service';

@Component({
  selector: 'app-dashboard-shell',
  templateUrl: './dashboard-shell.component.html',
  styleUrls: ['./dashboard-shell.component.css']
})
export class DashboardShellComponent implements OnInit {

  //permanent infos dashboard
   Men!: number;
   Women!: number;
   All!: number;
   Sick!: number;

  //Random infos component
  @Input() AllDetail!: any[];
  @Input() Admit!: any[];
  @Input() Refused!: any[];

  constructor(private user: UserInService) { }

  ngOnInit(): void {

    this.Men = 54;
    this.Women = 254;
    this.All = 368;
    this.Sick = 60;
  }

}
