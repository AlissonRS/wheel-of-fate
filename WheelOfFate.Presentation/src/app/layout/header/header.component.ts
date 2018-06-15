import { Component, OnInit, ViewChild } from '@angular/core';
const screenfull = require('screenfull');
const browser = require('jquery.browser');
declare var $: any;

import { UserblockService } from '../sidebar/userblock/userblock.service';
import { SettingsService } from '../../core/settings/settings.service';
import { MenuService } from '../../core/menu/menu.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    navCollapsed = true; // for horizontal layout
    menuItems = []; // for horizontal layout

    @ViewChild('fsbutton') fsbutton;  // the fullscreen button

    constructor(
        public menu: MenuService,
        public userblockService: UserblockService,
        public settings: SettingsService,
        private authService: AuthService,
        private router: Router
    ) {

        // show only a few items on demo
        this.menuItems = menu.getMenu().slice(0,4); // for horizontal layout

    }

    ngOnInit() {
        if (browser.msie) { // Not supported under IE
            this.fsbutton.nativeElement.style.display = 'none';
        }
    }

    logoff() {
        this.authService.logoff();
        this.router.navigate(['/login']);
    }

    toggleUserBlock(event) {
        event.preventDefault();
        this.userblockService.toggleVisibility();
    }

    toggleCollapsedSideabar() {
        this.settings.layout.isCollapsed = !this.settings.layout.isCollapsed;
    }

}
