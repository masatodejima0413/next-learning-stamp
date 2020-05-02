import React, { useState, useEffect } from "react";
import { database, databaseRef } from "../../../base/base";

import {
  StyledLearnedItem,
  StyledLearnedItemsContainer,
  StyledLearned,
  StyledDate,
  StyledComment,
  DeleteIcon,
} from "./LearnedItem.styles";

const LearnedItem = ({ items, userId, setCurrentItems }) => {
  const deleteItem = (deleteKey) => {
    databaseRef
      .child("users")
      .child(userId)
      .child("items")
      .child(deleteKey)
      .remove();
    // delete with setCurrentItems
    const newItems = {};
    Object.keys(items).map((key) => {
      if (key === deleteKey) {
        return;
      }
      newItems[key] = items[key];
    });
    setCurrentItems(newItems);
  };
  return (
    <StyledLearnedItemsContainer>
      {!items ? (
        <h1>No item found</h1>
      ) : (
        Object.keys(items).map((key) => {
          const item = items[key];
          return (
            <StyledLearnedItem key={key}>
              <StyledLearned>{item.learned}</StyledLearned>
              <StyledDate>{item.date}</StyledDate>
              <StyledComment>{item.comment}</StyledComment>
              <DeleteIcon onClick={() => deleteItem(key)} />
            </StyledLearnedItem>
          );
        })
      )}
    </StyledLearnedItemsContainer>
  );
};

export default LearnedItem;
