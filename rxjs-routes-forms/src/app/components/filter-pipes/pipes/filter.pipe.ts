import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(users: any, filterString: string) {
    if (users.length === 0 || filterString === '') {
      return users;
    }

    let filteredUsers = [];
    for (let user of users) {
      if (user.name.includes(filterString)) {
        filteredUsers.push(user);
      }
    }

    return filteredUsers;
  }
}
