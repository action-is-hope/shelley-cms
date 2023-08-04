import React from "react";

export const LinkElement = ({ attributes, children, element }) => (
  <a {...attributes} href={element.url}>
    {children}
  </a>
);
