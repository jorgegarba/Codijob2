import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  switchLogin:boolean = true;
  
  objCredenciales = {
    per_nom: '',
    per_ape: '',
    per_email: '',
    usu_pass: ''
  };

  constructor(private _sAuth:AuthService) { }

  ngOnInit() {
  }

  changeTab(evento){
    evento.preventDefault();
    
    // if(this.switchLogin == true){
    //   this.switchLogin = false;
    // }else{
    //   this.switchLogin = true;
    // }
    this.switchLogin = this.switchLogin ? false : true;
  }
  
  onRegister(){
    console.log(this.objCredenciales);
    this._sAuth.registrar(this.objCredenciales).subscribe((response:any)=>{
      this._sAuth.saveToken(response.token);
      this.clearCredentials();
    });
  }

  clearCredentials(){
    this.objCredenciales.per_ape ='';
    this.objCredenciales.per_email ='';
    this.objCredenciales.per_nom ='';
    this.objCredenciales.usu_pass ='';
  }

  login(){
    this._sAuth.login(this.objCredenciales).subscribe((response:any)=>{
      console.log(response);
    });
  }
}