import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit 
{
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
    public fieldArray: Array<any> = [];
    public newAttribute: any = {};

    addFieldValue() {
        this.fieldArray.push(this.newAttribute)
        this.newAttribute = {};
    }

    deleteFieldValue(index: number) {
        this.fieldArray.splice(index, 1);
    }
}

   

  




