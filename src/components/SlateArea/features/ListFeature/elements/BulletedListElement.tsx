import React from "react";

export const BulletedListElement = ({ attributes, children }) => (
  <ul {...attributes}>{children}</ul>
);
