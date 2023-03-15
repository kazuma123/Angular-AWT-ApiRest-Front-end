import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{

  usuario: Usuario;

  constructor(private service: AuthService, private route: Router){
    this.usuario = new Usuario();
  }

  
  ngOnInit() {
    
  }

  login(form: NgForm){

    console.log('form value', form.value)

    this.service.login(this.usuario).subscribe(response => {
      this.route.navigate(['/entidad']);
    })
  }

}
