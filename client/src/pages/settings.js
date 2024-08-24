import React from "react";
import Header from "components/Header";
import useBearStore from "store/store";

function settings() {
  const user = useBearStore((state) => state.user);

  return (
    <div>
      <Header user={user} />
    </div>
  );
}

export default settings;
