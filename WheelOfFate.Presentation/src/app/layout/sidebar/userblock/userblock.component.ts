import { Component, OnInit } from '@angular/core';

import { UserblockService } from './userblock.service';
import { UsersService } from '../../../services/users/users.service';

@Component({
    selector: 'app-userblock',
    templateUrl: './userblock.component.html',
    styleUrls: ['./userblock.component.scss']
})
export class UserblockComponent implements OnInit {
    user: any;
    constructor(public userblockService: UserblockService,
        private userService: UsersService
    ) {
        this.user = this.userService.getUser();
        this.user.picture = 'assets/img/user/unknown.jpg';
    }

    ngOnInit() {
    }

    userBlockIsVisible() {
        return this.userblockService.getVisibility();
    }

}
