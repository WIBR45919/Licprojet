import { Component, OnInit } from '@angular/core';
import {ScriptsService} from "../../_services/scripts.service";
import {ConnexionService} from "../_service/connexion.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {loginModel} from "../../_models/login.model";
import {Router} from "@angular/router";
import {GlobalinfoService} from "../../_services/globalinfo.service";
import { ResetModel } from 'src/app/_models/reset.model';
import  Swal  from "sweetalert2"


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  loginForm!: FormGroup;
  forget!: FormGroup; 
  spinner = false;
  message!: string;
  msgerr = false;
  msgwar = false;
  messageR!: string;
  msgerrR = false;
  msgwarR = false;
  

  constructor(private script: ScriptsService,private login: ConnexionService, private build: FormBuilder,
              private router: Router, private global: GlobalinfoService) {
  }

  ngOnInit(): void {
    this.script.hideShowpass();
    this.initForm();
    this.initFormgotPassword();
  }

  onLogin():void{
    this.spinner = true;
    this.login.Login(this.restructuration()).subscribe((response: any) => {
      if (response.status === "200") {
          this.login.decodeToken(response.jwtToken);
          this.login.registerSuccessfulLogin('Bearer '+response.jwtToken, response.idEtudiant);
          if(response.role === 'ROLE_USER') this.router.navigate(['/profil']);
          else this.router.navigate(['/admin']);
      }
    }, error => {
      console.log(error);
      this.spinner = false;
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
// ajout de sweetAlert
  onResetPassword(): void{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.login.resetPassword(this.restructurationReset()).subscribe((response: any) => {
          console.log(response)
          if (response === "OK") {
            Swal.fire(
              'Reseted!',
              'Your password has been reseted.',
              'success'
            )
            this.router.navigate(['/connexion']);
          }
        }, error => {
          Swal.fire(
            'not Reseted!',
            'Your password has not been reseted.',
            'error'
          )
          console.log(error);
          switch (error.status) {
            case 401:
             this.messageR = "utilisateur inexistant";
             this.msgwarR = true;
              break;
            case 500:
              this.messageR = "Erreur du serveur veuillez-reéssayer";
              this.msgerrR = true;
              break;
            default: this.messageR = "Veuillez réessayer SVP";
            this.msgerrR = true;
          }
        });
      }
    })
  
  }

  restructuration(): loginModel{
    return {
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value
    }
  }

  restructurationReset(): ResetModel{
    return {
      nom: this.forget.get('name')?.value,
      prenom: this.forget.get('lastname')?.value,
      lieu: this.forget.get('place')?.value,
      password: this.forget.get('newpassword')?.value,
    }
  }
  initForm(): void{
    this.loginForm = this.build.group({
        username: new FormControl('',[Validators.required, Validators.minLength(4)]),
        password: new FormControl('',[Validators.required, Validators.minLength(6), Validators.pattern('\\w{6,}')])
    })
  }
  initFormgotPassword(): void{
    this.forget = this.build.group({
      name: new FormControl('',[Validators.required, Validators.minLength(4)]),
      lastname: new FormControl('',[Validators.required, Validators.minLength(4)]),
      birth: new FormControl('',[Validators.required, Validators.minLength(4)]),
      place: new FormControl('',[Validators.required, Validators.minLength(4)]),
      newpassword: new FormControl('',[Validators.required, Validators.minLength(8), Validators.pattern('\\w{8,}')])
    })
  }
}
