import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profileinformation',
  templateUrl: './profileinformation.component.html',
  styleUrls: ['./profileinformation.component.css']
})
export class ProfileinformationComponent implements OnInit {

//loginForm! :FormGroup
 userForm: FormGroup
  constructor(private fb:FormBuilder) {
    this.userForm = this.fb.group ({
      firstname :['',Validators.required],
      lastname :['',Validators.required],
      gender :['',Validators.required],
      email :['',Validators.required],
      mobile :['',Validators.required],
      password :['',Validators.required]
    })
   }
    public saveItem():void{
      console.log(this.userForm.value);
      this.userForm.reset();
    }
    reset(){
      this.userForm.reset();
    }
  ngOnInit(): void {
 

  }
  
}
