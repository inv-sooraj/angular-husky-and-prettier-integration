import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'angularClient';
    a = 1;
    b = 2;

    ngOnInit(): void {
        /* TODO document why this method 'ngOnInit' is empty */
        console.log('Will throw an error if the method is empty');
    }

    sum(a: number, b: number) {
        a === b;
    }
}
