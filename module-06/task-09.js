'use strict'

import users from './users.js';

const getNamesSortedByFriendsCount = users => {

    const calcFriends = users.sort((prev, next) => prev.friends.length - next.friends.length);
   return calcFriends.map(user => user.name);
  };
  
  console.log(getNamesSortedByFriendsCount(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]