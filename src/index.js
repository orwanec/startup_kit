require('./index.css');
let getUsers = require('./api/userAPI').getUsers;

const numeral = require('numeral');
const courseValue = numeral(1000).format('$0,0.00');
//debugger;
console.log(`I would pay ${courseValue} for this awesome course!`);
// ***


getUsers().then(result => {
  let usersBody = "";

  result.forEach(user => {
    usersBody+= `<tr>
    <td><a href="#" data-id="${user.id}" class="deleteUser">Delete User</ahref></a></td>
    <td>${user.id}</td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.email}</td>
    </tr>`
  });

  //Adding to HTML
  global.document.getElementById('users').innerHTML = usersBody;
});
