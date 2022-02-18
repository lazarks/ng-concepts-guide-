import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  @Output() createdUser = new EventEmitter<string>();
  inputUsername: string = '';

  constructor() {}

  ngOnInit(): void {}

  onUserCreated() {
    this.createdUser.emit(this.inputUsername);
  }
}
