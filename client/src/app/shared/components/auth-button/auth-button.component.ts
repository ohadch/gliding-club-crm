import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { IdToken } from '@auth0/auth0-spa-js';


@Component({
    selector: 'auth-button',
    templateUrl: './auth-button.component.html',
    styleUrls: ['./auth-button.component.css', "../../../../shared.css"]
})
export class AuthButtonComponent implements OnInit {

    accessToken: string = ''

    private readonly localStorageKey = 'loggedin'

    constructor(
        @Inject(DOCUMENT) public document: Document,
        public auth: AuthService,
    ) {
    }
    ngOnInit(): void {
        // If user is in a "logged in" state, meaning, it was logged in before and 
        // currently is not in the redirect flow from the auth0 website, we initiate
        // the login process.
        // This will automatically redirect to auth0, and since user is already logged
        // in, it will redirect back to this page with the login information.
        if (localStorage.getItem(this.localStorageKey) == 'true' && !this.isRedirect()) {
            this.login()
        }

        // Subscribe to changes to id token.
        this.auth.idTokenClaims$.subscribe((idToken: IdToken | null) => {
            if (idToken == null) {
                localStorage.removeItem(this.localStorageKey)
                return
            }
            localStorage.setItem(this.localStorageKey, 'true')
        })
    }

    login() {
        this.auth.loginWithRedirect({
            redirect_uri: "http://localhost:4200",
        });
    }

    logout() {
        this.auth.logout({ returnTo: this.document.location.origin });
        localStorage.removeItem(this.localStorageKey)
    }

    // Checks if the current page was redirected from auth0 login page.
    isRedirect(): boolean {
        return new URLSearchParams(window.location.search).has('code')
    }
}