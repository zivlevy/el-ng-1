import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'elbit',
    templateUrl: './elbit.component.html',
    styleUrls: ['./elbit.component.css']
})
export class ElbitComponent implements OnInit {

    myHeader: string ="Click item to change the header";
    myListItems: string[] = ["Learn HTML", "Learn CSS", "Learn JS", "Learn Bootstrap 4", "Learn Git", "Learn SASS/LESS"];
    myInput: string = "";
    counter: number = 1;
    activeLi: number = -1;

    constructor() {
    }

    ngOnInit() {
    }


    myButtonClicked() {
        if (this.myInput === "") {
            this.myListItems.push("New item " + this.counter++);
        } else {
            this.myListItems.push(this.myInput);
        }
        this.myInput = "";
    }

    myListItemClicked(index, event) {
        if (event.shiftKey) {
            this.myListItems.splice(index, 1);
            this.activeLi = -1;
        } else {
            this.myHeader = this.myListItems[index];
            this.activeLi = index;
        }
    }
}

