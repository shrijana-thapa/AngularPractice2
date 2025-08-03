import { Component } from '@angular/core';
import { FormBuilder,ReactiveFormsModule, FormGroup } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-details',
  standalone:true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './details.html',
  styleUrls: ['./details.css']
})
export class Details {
  userDetailsForm !:FormGroup;
  isFormDirty:boolean=false;
  constructor(private fb : FormBuilder){
    this.userDetailsForm=this.fb.group({
      username:[''],
      registration_no : ['']
    })
  }
  submit(){
    console.log("user details form value:",this.userDetailsForm.value)
  }
checkStatus(){
  this.isFormDirty=this.userDetailsForm.dirty;
}
}
