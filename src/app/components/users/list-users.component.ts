import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/service/users.service';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users: Users[] = [];

  constructor(
    private UsersService: UsersService
    ) {}

  ngOnInit(): void {
  this.UsersService.list().subscribe((data) => {
    this.users = data;
  });
}
}