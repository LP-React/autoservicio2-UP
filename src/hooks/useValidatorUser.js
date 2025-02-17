import { useContext } from "react";
import { UserContext } from "../contexts/UserProvider";

export function validatorUser() {
  const { userData } = useContext(UserContext);
  if (userData == null) {
    return false;
  } else if (userData) {
    return true;
  }
}
