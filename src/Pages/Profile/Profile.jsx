import { Flex } from "@chakra-ui/react";
import { FollowerList, ProfileCard, Sidebar } from "../../Components";

const Profile = () => {
  return (
    <>
      <Flex justifyContent="space-between" mt="1rem">
        <Sidebar />
        <ProfileCard />
        <FollowerList />
      </Flex>
    </>
  );
};
export { Profile };
