import { useEffect, useState } from "react";
import { useAuth } from "../util/authContext";
import API from "../util/API";
import Tetris from "./Tetris";

function ProtectedExamplePage() {
  const { logout, user } = useAuth();
  const [data, setData] = useState(null);

  useEffect(() => {
    // example API call
    API.getProtectedExample().then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Cruzcosas Rule and Pauwels Drool!</h1>
      <Tetris />
      {/* <p>user id: {user.id}</p>
      <p>username: {user.username}</p>
      <h3>Protected API Data Example</h3>
      {data && <pre>{JSON.stringify(data)}</pre>} */}
    </div>
  );
}

export default ProtectedExamplePage;
