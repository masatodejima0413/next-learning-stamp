import React, { useEffect, useState } from "react";
// import styled from "styled-components";
import LearnedItem from "../components/Main/LearnedItem/LearnedItem";
import Form from "../components/Main/Form/Form";
// import { Back } from "@styled-icons/entypo/Back";
import { database } from "../base/base";
import Title from "../components/Title/Title";

export async function getServerSideProps(context) {
  const userDocumentRef = database.ref(`users/${context.params.userId}`);
  let obj;
  userDocumentRef.on("value", (snapshot) => {
    obj = snapshot.val();
  });
  return {
    props: {
      items: obj.items,
      username: obj.username,
      userId: context.params.userId,
    },
  };
}

const UserPage = ({ items, username, userId }) => {
  const [currentItems, setCurrentItems] = useState({});
  useEffect(() => {
    setCurrentItems(items);
  }, [items]);
  return (
    <>
      <Title />
      {/* <Link to="/">
        <StyledBack />
      </Link> */}
      {/* {console.log("userId", userId)} */}
      <Form
        userId={userId}
        username={username}
        currentItems={currentItems}
        setCurrentItems={setCurrentItems}
      />
      <LearnedItem
        items={currentItems}
        userId={userId}
        setCurrentItems={setCurrentItems}
      />
    </>
  );
};

export default UserPage;

// const StyledBack = styled(Back)`
//   width: 50px;
//   height: 80px;
//   color: #5d02ff;
//   opacity: 0.6;
//   position: absolute;
//   top: 50px;
//   right: 50px;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   &:hover {
//     transform: scale(1.3, 1.3);
//   }
// `;
