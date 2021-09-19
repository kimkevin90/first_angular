import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  // @Input() users: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();

  // onSetToInactive(id: number) {
  //   this.userSetToInactive.emit(id);
  // }
  
  users: string[];
  constructor(private userService: UserService){}

  ngOnInit(){
    this.users = this.userService.activeUsers;
  }

  onSetToInactive(id: number) {
    // this.userSetToActive.emit(id);
    this.userService.setToInActive(id)
  }
}
