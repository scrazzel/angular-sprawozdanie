import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:[{
    id: number,
    name: string,
    username: string,
    email: string
  }]

  constructor(private dataService: DataService) { 

  }

  ngOnInit() {
    this.dataService.getUsers().subscribe(users => this.users=users);
  }

}