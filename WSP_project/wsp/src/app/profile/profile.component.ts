import { Component, inject } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  usersService = inject(UserService);

  user = this.usersService.getCurrentUser();

  changePicture(){
    alert("I don't know how yet")
  }
}
