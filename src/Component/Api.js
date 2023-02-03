import axios from "axios";
import { useEffect, useState } from "react";
import { Names } from "./Names";

export const Api = () => {
  const [listOfUser, setListOfUser] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")

      .then((response) => setListOfUser(response.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="Container">
      {listOfUser.map((e) => (
        <Names key={e.id} names={e} />
      ))}
    </div>
  );
};
