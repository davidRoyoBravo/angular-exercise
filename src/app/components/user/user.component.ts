import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

interface MyResult {
  results: object[];
}

export class UserComponent implements OnInit {

  user: object;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
  }

  getRandomUser() {
    this.userService.getRandomName().subscribe(
      (data: MyResult) => {
        this.user = data.results[0];
      });
  }
}
