import { Component } from '@angular/core';
import { PersonService } from '../../service/person/person.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from '../../models/global.model';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrl: './registre.component.css'
})
export class RegistreComponent {
  RegistreForm!:FormGroup

  constructor(private srv:PersonService,private fb:FormBuilder,private route:Router){}
  ngOnInit(): void {
    this.RegistreForm=this.fb.group({
      username:['', Validators.required],
      password:['', Validators.required],
      email:['', Validators.required],
      age:['', Validators.required],
      role: ['', Validators.required],


    })

   
  }
  RegistreMethod(){
    const person:Person={
      id: 0,
      username: this.RegistreForm.value.username,
      password: this.RegistreForm.value.password,
      email: this.RegistreForm.value.email,
      role: this.RegistreForm.value.role
    }
    this.srv.addUser(person).subscribe(()=>{
      this.route.navigateByUrl('')

    })
  }


}
