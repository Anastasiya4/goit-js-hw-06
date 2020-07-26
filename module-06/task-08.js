'use strict'

import users from './users.js';

const getUsersWithFriend = (users, friendName) => {
    const userNames = users
        .filter(users => users.friends.includes(friendName));

        return userNames.map(user => user.name );
  };
  
  console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
  console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]