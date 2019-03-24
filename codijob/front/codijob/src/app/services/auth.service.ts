import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token:string;

  constructor(private _http:HttpClient) { }

  registrar(credenciales){
    let misHeaders = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post("http://localhost:3700/api/auth/registrar",
                    credenciales,
                    {
                      headers:misHeaders
                    });
  }
  saveToken(token:string){
    localStorage.setItem("token",token);
    this.token = token;
  }

  //Funcion que obtendrá el token del localStorage
  getToken(){
    if(!this.token){
      this.token = localStorage.getItem("token");
    }
    return this.token;
  }

  //Funcion para obtener el payload del token si estuviera creado
  //en el localstorage
  getUserDetails(){
    let token = this.getToken();
    let payload;
    if(token){
      //obtenemos la posicion 1 (payload) del token
      // ejm. qdqwqwd.12e23d23.24tg35g45, la parte del medio
      payload = token.split(".")[1];
      //con el payload codificado, usamos la funcion atob() para
      //decodificar el payload.
      //OJO, funciona por el JWT codifica en BASE64 y atob usa
      // el mismo algoritmo
      payload = window.atob(payload);
      //convirtiendo el objeto en string a un objeto JSON
      return JSON.parse(payload);
    }else{
      return null;
    }
  }

  //Funcion para verificar si el usuairo esta loggeado o ño
  isLoggedIn():boolean{
    let usuario = this.getUserDetails();
    if(usuario){
      return usuario.exp > Date.now() / 1000 ? true : false;
    }else{
      return false;
    }
  }

  logout(){
    this.token = '';
    localStorage.removeItem("token");
  }

  login(credenciales){
    let misHeaders = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post("http://localhost:3700/api/auth/login",
                    credenciales,
                    {
                      headers:misHeaders
                    });
  }

}
