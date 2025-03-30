import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users : User[] = [
    {
      id: "23B031370",
      login: "a_mizambekov",
      password: "1212wweeqq",
      firstname: "Assanali",
      lastname: "Mizambekov",
      fathername: "Zaurbekovich",
      picture: "../../assets/profp.jpg",
      iin: "060120500757",
      birthdate: new Date(),
      gender: true,
      email: "asanali_miz@mail.ru",
      phone: "+77012462853",
      category: "Student"
    }
  ];

  getCurrentUser(){
    return this.users[0];
  }

  constructor() { 

  }
}
