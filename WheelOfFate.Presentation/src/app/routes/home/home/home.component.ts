import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { UsersService } from '../../../services/users/users.service';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/startWith';
import { Observable } from 'rxjs';
import { TeamsService } from '../../../services/teams/teams.service';
import { MatAutocomplete } from '@angular/material';

declare var $: any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

    $calendar: any;

    calendarOptions: any = {
        // isRTL: true,
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        buttonIcons: { // note the space at the beginning
            prev: ' fa fa-caret-left',
            next: ' fa fa-caret-right'
        },
        buttonText: {
            today: 'Today',
            month: 'Month',
            week: 'Week',
            day: 'Day'
        },
        editable: false,
        droppable: false,
        eventOrder: 'order',
        viewRender: this.calendarDateChanged.bind(this)
    };

    selectedEvent = null;

    // Component - Autocomplete
    teamCtrl: FormControl = new FormControl();
    filteredTeams: Observable<any>;
    teams: any;
    selectedTeam: any;
 
    // reference to the calendar element
    @ViewChild('fullcalendar') fullcalendar: ElementRef;
    @ViewChild(MatAutocomplete) matAutocomplete: MatAutocomplete;

    constructor(
        private usersService: UsersService,
        private teamsService: TeamsService
    ) {
        this.loadTeams();
    }

    ngOnInit() {
        this.$calendar = $(this.fullcalendar.nativeElement);
    }

    ngAfterViewInit() {
        // init calendar plugin
        this.$calendar.fullCalendar(this.calendarOptions);
    }

    calendarDateChanged() {
        this.loadShiftsByTeam();
    }

    displayTeamInAutoComplete(team): string | undefined {
        return team ? team.name : undefined;
    }

    filterTeams(val: any): any {
        return val ? this.teams.filter((team) => new RegExp(val, 'gi').test(team.name)) : this.teams;
    }

    loadShiftsByTeam() {
        if (this.selectedTeam == undefined)
            return;
        var date = this.$calendar.fullCalendar('getDate');
        var month = date.month();
        var year = date.year();
        this.calendarOptions.events = [];
        this.$calendar.fullCalendar('removeEvents');
        this.teamsService.getShifts(this.selectedTeam.id, month, year).subscribe(shifts => {
            console.log(shifts);
            let events = shifts.map(shift => {
                return {
                    title: shift.engineer,
                    start: new Date(shift.date),
                    order: shift.order,
                    allDay: true,
                    backgroundColor: '#0073b7', //Blue
                    borderColor: '#0073b7' //Blue
                };
            });
            // display events in calendar
            this.$calendar.fullCalendar('renderEvents', events);
        });
    }

    loadTeams() {
        this.usersService.getTeams().subscribe(teams => {
            this.teams = teams;
            this.filteredTeams = this.teamCtrl.valueChanges
                .startWith(null)
                .map(team => this.filterTeams(team));
        });
    }

    teamChanged(team) {
        this.selectedTeam = team;
        this.loadShiftsByTeam();
    }

    ngOnDestroy() {
        this.$calendar.fullCalendar('destroy')
    }
}
