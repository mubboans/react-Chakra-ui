import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";
export const User = () => {
  const [user, setUser] = useState([]);
  const [error, seterror] = useState();
  const [isloading, setloading] = useState();
  useEffect(() => {
    const abort = new AbortController();
    setloading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users", {
        signal: abort.signal
      })
      .then((result) => {
        setUser(result.data);
        setloading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        seterror(err.message);
        setloading(false);
        console.log(err, "error in get users");
      });
    return () => abort.abort();
  }, []);
  return (
    <div className="card">
      {isloading && <div className="spinner-border"></div>}
      <ul className="list-group list-group-flush">
        {error && <p className="text-danger">Error in get request {error}</p>}
        {user.map((user, index) => (
          <li className="list-group-item" key={user.id}>
            {user.name} + {user.username} +{index}
          </li>
        ))}
      </ul>
    </div>
  );
};
