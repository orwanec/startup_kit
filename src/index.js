require('./index.css');
// TODO change the node version and refactor via destructuring =>
// import {getUsers, deleteUser} from './api/userAPI';
let getUsers = require('./api/userAPI').getUsers;
let deleteUser = require('./api/userAPI').deleteUser;

const numeral = require('numeral');
const courseValue = numeral(1000).format('$0,0.00');
//debugger;
console.log(`I would pay ${courseValue} for this awesome course!`);
// ***


getUsers().then(result => {
  let usersBody = "";

  result.forEach(user => {
    usersBody+= `<tr>
    <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</ahref></a></td>
    <td>${user.id}</td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.email}</td>
    </tr>`
  });

  //Adding to HTML
  global.document.getElementById('users').innerHTML = usersBody;

  const deleteLinks = global.document.getElementsByClassName('deleteUser');

  // Must use array.from to create a real array from a DOM collection
  // getElementsByClassName only returns an "array like" object
  Array.from(deleteLinks, link => {
    //attaching link handler to each one
    link.onclick = function (event) {
      const element = event.target;
      //preventing defaults that actually click doesn't produce any change to the URL
      event.preventDefault();
      deleteUser(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      //removing from the DOM
      row.parentNode.removeChild(row);
    };
  });
});
