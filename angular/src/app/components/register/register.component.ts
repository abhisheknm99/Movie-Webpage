import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: String;
  username: String;
  email: String;
  password: String;
  status: String;

  constructor(
    private validateService: ValidateService,
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

onSubmit(){
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    }

    //Validate all fields 
    if(!this.validateService.validateRegister(user)){
      this.status="X  Please fill in all the fields.";
      return false;
    } else{
      this.status="";
    }

    //Validate Email
    if(!this.validateService.validateEmail(user.email)){
      this.status="X  Please use a valid email.";
      return false;
    } else{
      this.status="";
    }

    //Validate Password
    if(!this.validateService.validatePassword(user.password)){
      this.status="X Weak Password.";
      return false;
    } else{
      this.status = "";
    }

    //Register User
    this.authService.registerUser(user).subscribe(data => {
      console.log(data);
      if(data.success){
        this.status = "You are now registered!";
        // this.router.navigate(['login']);
      } else{
        this.status = "Some error occured!";
      }
    });
  }
}
