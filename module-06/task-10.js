'use strict'

import users from  './users.js';

const getSortedUniqueSkills = users => {
    const allSkills = users
    .reduce(function(skills,user) {
        skills.push(...user.skills);
    
        return skills;
    }, [])
    .filter(
        (dubleUser, index, array) => array.indexOf(dubleUser) === index,
    )

    .sort()

    return allSkills;
  };
  
  console.log(getSortedUniqueSkills(users));
  // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]