import React, { useState } from "react";
import FriendProfile from "./FriendProfile";
import Button from "./Button";
import axios from "axios";

function Friend() {
  const [friend, setFriend] = useState({});
  const [hasError, setError] = useState(false);

  const getFriend = () => {
    axios
      .get("https://www.randomuser.me/api?results=1")
      .then((response) => setFriend(response.data.results[0]))
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };
  let friendProfile = "";
  if (Object.keys(friend).length !== 0) {
    friendProfile = (
      <FriendProfile
        firstName={friend.name.first}
        lastName={friend.name.last}
        country={friend.location.country}
        email={friend.email}
        phone={friend.phone}
        image={friend.picture.large}
      />
    );
  }

  return (
    <div>
      <Button onClick={getFriend} />
      <br />
      {!hasError && friendProfile}
      {hasError && <p>There is a problem!</p>}
    </div>
  );
}

export default Friend;
