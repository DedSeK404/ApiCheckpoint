import axios from "axios";
import { useEffect, useState } from "react";

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
    <div>
      {listOfUser.map((e) => (
        <div className="Container">
        <p className={`P${e.id}`}>{e.name}</p>
        </div>
      ))}
    </div>
  );
};
