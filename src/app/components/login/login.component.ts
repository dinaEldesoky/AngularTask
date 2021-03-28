import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthenticationService, private router: Router) { }
  errMessage: string = '';
  ngOnInit(): void {
  }

  Login(form: any) {
    let data = form.value
    this.auth.login(data.email, data.password)
      .then(res => {
        this.errMessage = '';
        console.log("done");
        this.router.navigate(['/'])
      })
      .catch(err => {
        this.errMessage = err.message;
      })

  }
}
