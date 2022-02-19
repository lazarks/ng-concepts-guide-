import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-remove-user',
  templateUrl: './remove-user.component.html',
  styleUrls: ['./remove-user.component.scss'],
})
export class RemoveUserComponent implements OnInit {
  @Output() removedUser = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  onUserRemoved(event: Event) {
    event.stopImmediatePropagation();
    this.removedUser.emit();
  }
}
