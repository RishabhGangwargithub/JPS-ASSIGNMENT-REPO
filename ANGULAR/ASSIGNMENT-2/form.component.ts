import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  submit(login: any){
    alert("are you sure you want to submit the form,once submitted cannot be edited again")
    console.log("form submitted",login)
  }
            

  constructor() { }

  ngOnInit(): void {
  }

}
