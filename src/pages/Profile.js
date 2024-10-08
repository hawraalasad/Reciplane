import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/user";
import { getMyProfile } from "../api/auth";
const Profile = () => {
  const { data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: getMyProfile,
  });

  console.log(profile);
  return (
    <div>
      {profile?.username}
      {profile?.recipes}
    </div>
  );
};

export default Profile;
