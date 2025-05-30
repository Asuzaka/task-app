"use client";
import { User } from "@/entities";
import { getProfiles } from "@/utils/";
import { FaLock, FaTrash, FaUnlock } from "react-icons/fa";
import { banAction, deleteAction, unbanAction } from "@/utils/";
import {
  DashboardActions,
  DashboardButton,
  DashboardRow,
  DashboardTable,
  Notification,
} from "@/widgets";
import { useCallback, useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState<User[]>([]);
  const [reload, setReload] = useState<boolean>(false);
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  const isUserSelected = (userId: string) => {
    return selectedUsers.includes(userId);
  };

  const doAction = async (cl: (ids: string[]) => Promise<void>) => {
    await cl(selectedUsers);
    setReload((e) => !e);
    setSelectedUsers([]);
  };

  const selectAllusers = () => {
    setSelectedUsers(data.map((each) => each.id));
  };

  const removeSelection = () => {
    setSelectedUsers([]);
  };

  const handleClick = () => {
    if (data.length == selectedUsers.length) {
      removeSelection();
    } else {
      selectAllusers();
    }
  };

  const handleSelectUser = (userId: string) => {
    setSelectedUsers((prevSelected) => {
      if (prevSelected.includes(userId)) {
        return prevSelected.filter((id) => id !== userId);
      } else {
        return [...prevSelected, userId];
      }
    });
  };

  const fetchData = useCallback(async () => {
    try {
      const data = await getProfiles();
      setData(data.sort((a, b) => a.username.localeCompare(b.username)));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData, reload]);

  return (
    <div className="p-4">
      <DashboardActions>
        <DashboardButton
          text="Block"
          icon={<FaLock />}
          handler={() => doAction(banAction)}
          color="blue"
        />
        <DashboardButton
          text=""
          icon={<FaUnlock />}
          handler={() => doAction(unbanAction)}
          color="blue"
        />
        <DashboardButton
          text=""
          icon={<FaTrash />}
          handler={() => doAction(deleteAction)}
          color="red"
        />
      </DashboardActions>
      <DashboardTable
        noSelection={selectedUsers.length == 0}
        isAllSelected={selectedUsers.length == data.length}
        handleClick={handleClick}
      >
        {data.map((each) => (
          <DashboardRow
            key={each.id}
            user={each}
            isUserSelected={isUserSelected}
            onSelect={handleSelectUser}
          />
        ))}
      </DashboardTable>
      <Notification
        size="sm:text-lg"
        padding="px-5 py-2 sm:px-10 sm:py-1"
        location="bottom-2 sm:bottom-5  gap-2 sm:gap-5 lg:top-2 lg:bottom-auto left-[50%] translate-x-[-50%] w-[80%] sm:w-auto"
      />
    </div>
  );
}
