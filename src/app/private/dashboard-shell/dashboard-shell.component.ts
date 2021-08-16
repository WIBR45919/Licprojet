import {Component, Input, OnInit} from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    this.Men = 54;
    this.Women = 254;
    this.All = 368;
    this.Sick = 60;
  }

}
