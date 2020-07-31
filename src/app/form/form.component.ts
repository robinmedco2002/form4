import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  registrationForm: FormGroup;

  get fullName(){
    return this.registrationForm.get('fullName');
  }

  get tname(){
    return this.registrationForm.get('tname');
  }

  get email(){
    return this.registrationForm.get('email');
  }
  get mobile(){
    return this.registrationForm.get('mobile');
  }
  get sex(){
    return this.registrationForm.get('sex');
  }
  get msg(){
    return this.registrationForm.get('msg');
  }

  get term(){
    return this.registrationForm.get('term');
  }





constructor(private fb: FormBuilder) {}

ngOnInit() {

  
this.registrationForm = this.fb.group({
  tname: ['', Validators.required],
  fullName: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  mobile: ['', Validators.required],
  sex: ['', Validators.required],
  msg: [''],
  term: ['', Validators.required]


});

}



  // registrationForm = new FormGroup({
  //   tname: new FormControl(''),
  //   fullName: new FormControl('Robin'),
  //   email: new FormControl(''),
  //   mobile: new FormControl(''),
  //   sex: new FormControl(''),
    
  //   msg: new FormControl(''),
  //   term: new FormControl('')

  // });

    title = 'Add Employee Record';
   



  

onSubmit(){
  console.log(this.registrationForm.value)
}





}
