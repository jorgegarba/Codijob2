import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _sAuth:AuthService,
              private _router:Router) { }

  ngOnInit() {
  }

  logout(){
    this._sAuth.logout();
    this._router.navigateByUrl('/');
  }

}