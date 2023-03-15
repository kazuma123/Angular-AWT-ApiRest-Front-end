import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  isLoggedIn$: Observable<boolean>;   

  constructor(private service: AuthService, private route: Router){}

  ngOnInit() {
    this.isLoggedIn$ = this.service.isLoggedIn;
  }

  logout(){

    this.service.logout();
    this.route.navigate(['/login']);
  }

}
