import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    numbers = [1, 2, 3, 4, 5];
    onlyOdd = false;

    oddNum = [];

    value = 10;

    ngOnInit(): void {
        this.onlyOddNum();
    }

    onlyOddNum() {
        for(let num of this.numbers) {
            if(num % 2 !== 0) {
                this.oddNum.push(num);
            }
        }
    }
}
