import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const MyProfile = () => {
  const [profile, setProfile] = useState({});
  const { user } = useAuth();

  useEffect(() => {
    const URL = `https://rocky-coast-79726.herokuapp.com/api/users/${user?.email}`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setProfile(data[0]));
  }, [user]);

  return (
    <div>
      <div class="rounded-3xl overflow-hidden shadow-xl max-w-full my-3 bg-blue-300 lg:flex p-16 items-center justify-between">
        <div class="flex justify-center mt-8">
          <img
            src={user?.photoURL}
            class="rounded-full border-solid border-white border-2 -mt-3"
          ></img>
        </div>
        <div class="text-center px-3 pb-6 pt-2">
          <h3 class="text-white text-5xl bold font-sans">
            {user?.displayName}
          </h3>
          <p class="mt-2 font-sans font-light text-white text-2xl">
            {user?.email}
          </p>
        </div>
        <div class="flex justify-center pb-3 text-white">
          <div class="text-center mr-3 pr-3">
            <h2>1</h2>
            <span>Membership</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
