import React, { useEffect, useState } from "react";
import ContactItem from "../users/UserItem";
import { getUsers } from "../../services/userService";
import Loading from "../loading/Loading";

export default function ChatList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    handleGetUser()
      .then((response) => {
        setUsers(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {};
  }, []);

  const handleGetUser = () => {
    return getUsers();
  };

  return (
    <div className="my-[8px] py-[16px] px-[15px] shadow rounded-2xl bg-white h-[calc(100vh-120px)] overflow-y-auto">
      <div className="text-[#adb5bd] text-[14px]">Contacts</div>

      {users.length > 0 ? (
        users?.map((u) => <ContactItem data={u} />)
      ) : (
        <Loading />
      )}
      <Loading />
    </div>
  );
}
