import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-login-frame',
  templateUrl: './login-frame.component.html',
  styleUrls: ['./login-frame.component.sass']
})
export class LoginFrameComponent {

  formLogin!: FormGroup;

  constructor(
    public router: Router,
    public authService: AuthenticationService,
    private formBuilder: FormBuilder, 
    private toastr: ToastrService) {

    this.formLogin = this.createFormLogin();
  }

  ngOnInit() {

  }

  public createFormLogin(): FormGroup {
    return this.formBuilder.group({
      email: ["", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ["", [Validators.required]]
    })
  }

  submitAuthentication() {

    const { email, password } = this.formLogin.value;
    this.formLogin.reset;

    this.authService.signInWithEmailPassword(email, password).subscribe({
      complete: () => {
        this.router.navigate(['abertura']);
      },
      error: (err) => {
        this.toastr.error(err);
      }
    });
  }
}
