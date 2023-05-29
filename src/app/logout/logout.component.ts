import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private service:ProjectService,private router: Router,private spinnerService: NgxSpinnerService) { }

  ngOnInit() {
    console.log("in logout");
    this.doLogout;
  }

  doLogout() {

    this.showSpinner();
    console.log("in logout");
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['login']);
    }
  }

  public showSpinner(): void {
    console.log("in spinner");
    this.spinnerService.show();

    setTimeout(() => {
      this.spinnerService.hide();
    }, 2000); // 5 seconds
  }

}
