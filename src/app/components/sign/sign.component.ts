import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/viewModels/users';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {

  errMessage: string = '';
  constructor(private auth: AuthenticationService, private userServ: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  signUp(form) {
    let data: Users = form.value
    this.auth.signUp(data.email, data.password)
      .then(res => {
        this.errMessage = '';
        this.userServ.addNewUser(res.user.uid, data.name).then(() => {
          this.router.navigate(['/'])
        })

      })
      .catch(err => {
        this.errMessage = err.message;
      })

  }
}
