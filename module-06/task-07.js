'use strict'

import users from './users.js';

const calculateTotalBalance = users => {
    const total = users.reduce(
        (totalBalance, user) => totalBalance + user.balance,
        0,
    );

    return total;
  };
  
  console.log(calculateTotalBalance(users)); // 20916