import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

export const isLoggedin = (token) => {
  if (!token) return false;
  try {
    const decode = jwtDecode(token);
    console.log(decode);
    decode.exp * 1000 > Date.now()
    return true;
  } catch (error) {
    toast.error(error);
    return false;
  } 
};
