import jwtDecode from "jwt-decode";

export function isLoggedIn() {
  return !!localStorage.getItem('token')
}

export function user() {
  if (!isLoggedIn()) return false;

  return jwtDecode(localStorage.getItem('token'))
}