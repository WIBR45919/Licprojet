import { Component, OnInit } from '@angular/core';
import {ScriptsService} from "../../_services/scripts.service";
import {ConnexionService} from "../_service/connexion.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {loginModel} from "../../_models/login.model";
import {Router} from "@angular/router";
import {GlobalinfoService} from "../../_services/globalinfo.service";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  loginForm!: FormGroup;
  message!: string;
  msgerr = false;
  msgwar = false;
  

  constructor(private script: ScriptsService,private login: ConnexionService, private build: FormBuilder,
              private router: Router, private global: GlobalinfoService) {
  }

  ngOnInit(): void {
    this.script.hideShowpass();
    this.initForm();
  }

  onLogin():void{
    console.table(this.restructuration());
    this.login.Login(this.restructuration()).subscribe((response: any) => {
      console.log(response);
      if (response.token) {
          this.global.setidUder(response.id);
          this.login.registerSuccessfulLogin('Bearer '+response.token);
          this.router.navigate(['/profil']);
      }
    }, error => {
      console.log(error);
      switch (error.status) {
        case 401:
         this.message = "utilisateur inexistant";
         this.msgwar = true;
          break;
        case 500:
          this.message = "Erreur du serveur veuillez-reéssayer";
          this.msgerr = true;
          break;
        default: this.message = "Veuillez réessayer SVP";
        this.msgerr = true;
      }
    });
  }

  restructuration(): loginModel{
    return {
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value
    }
  }
  initForm(): void{
    this.loginForm = this.build.group({
        username: new FormControl('',[Validators.required, Validators.minLength(4)]),
        password: new FormControl('',[Validators.required, Validators.minLength(8), Validators.pattern('\\w{8,}')])
    })
  }
}
