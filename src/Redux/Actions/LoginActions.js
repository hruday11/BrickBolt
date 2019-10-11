export const LOGGED_IN = "logged_in";
export const LOGGED_OUT = "logged_out";

export function loginUser(values) {
  var usersData = JSON.parse(localStorage.getItem("users")) || [];
  console.log(usersData);
  if( usersData.length > 0){
    for (let i = 0; i < usersData.length; i++) {
        console.log(usersData[i].email);
        if (
          usersData[i].email === values.email &&
          usersData[i].password === values.password
        ) {
          localStorage.setItem("loggedUser", usersData[i].email);
          return {
            type: LOGGED_IN,
            payload: true
          };
        }
        }
  } else {
    var usersList = JSON.parse(localStorage.getItem("users")) || [];
    usersList.push(values);
    localStorage.setItem("users", JSON.stringify(usersList));
    localStorage.setItem("loggedUser", values.email);
    return {
      type: LOGGED_IN,
      payload: true
    };
  
  }
}

export function isUserLoggedIn() {
  if (localStorage.getItem("loggedUser")) {
    return {
      type: LOGGED_IN,
      payload: true
    };
  } else {
    return {
      type: LOGGED_OUT,
      payload: false
    };
  }
}
