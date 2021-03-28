import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isUser: boolean = false;
  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.auth.user.subscribe(user => {
      if (user)
        this.isUser = true;
      else
        this.isUser = false;

      console.log(user)
    })
  }


  LogOut() {
    this.auth.logout();
  }
}
