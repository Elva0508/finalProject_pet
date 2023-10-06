import React from "react";
import ListD from "@/components/member/list-d";
import ListM from "@/components/member/list-m";

import ResetPassword from "@/components/user/resetPassword";
const ResetUserPassword = () => {
  return (
    <div className="d-flex container-fluid flex-column flex-md-row my-3">
      <div className="d-flex justify-content-end">
        {/* mobile版的左側tab */}
        <ListM />
      </div>

      {/* <ListUserM /> */}
      <ListD />
      <ResetPassword />
    </div>

    //
  );
};

export default ResetUserPassword ;