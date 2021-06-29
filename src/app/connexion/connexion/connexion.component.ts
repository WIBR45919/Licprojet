import { Component, OnInit } from '@angular/core';
import {ScriptsService} from "../../_services/scripts.service";
import {ConnexionService} from "../_service/connexion.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {loginModel} from "../../_models/login.model";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  loginForm!: FormGroup;
  infoUser!: loginModel;

  constructor(private script: ScriptsService,private login: ConnexionService, private build: FormBuilder) { }

  ngOnInit(): void {
    this.script.hideShowpass();
    this.initForm();
  }

  onLogin():void{
    this.login.Login(this.restecturation()).subscribe((response: any) => {
      console.log(response);
      switch (response.status) {
        case 200:
          //message
          break;
        case 404:
          //message
          break;
        case 500:
          //message
          break;
        default:
      }
    }, error => {
      console.log(error);
    });
  }

  restecturation(): loginModel{
    return {
      username: this.loginForm.get('')?.value,
      password: this.loginForm.get('')?.value
    }
  }
  initForm(): void{
    this.loginForm = this.build.group({
        username: new FormControl('',[Validators.required, Validators.minLength(4)]),
        password: new FormControl('',[Validators.required, Validators.minLength(8), Validators.pattern('\\w{8,}')])
    })
  }
}
