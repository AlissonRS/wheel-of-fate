import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../core/settings/settings.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    returnUrl: any;
    valForm: FormGroup;
    public wrongCredentials: Boolean = false;

    constructor(
        public settings: SettingsService,
        fb: FormBuilder,
        private authService: AuthService,
        private route: ActivatedRoute,
        private router: Router) {

        this.valForm = fb.group({
            'login': [null, Validators.compose([Validators.required, CustomValidators.login])],
            'password': [null, Validators.required]
        });

    }

    ngOnInit() { 
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    submitForm($ev, value: any) {
        this.wrongCredentials = false;
        $ev.preventDefault();
        for (let c in this.valForm.controls) {
            this.valForm.controls[c].markAsTouched();
        }
        if (this.valForm.valid) {
            this.authService.login(value.login, value.password)
            .subscribe((data: any) => {
                // login successful so redirect to return url
                this.router.navigateByUrl(this.returnUrl);
              }, (error: any) => {
                  console.log(error);
                  this.wrongCredentials = true;
              });
        }
    }

}
