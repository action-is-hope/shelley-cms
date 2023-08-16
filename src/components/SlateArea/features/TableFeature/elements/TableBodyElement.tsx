import React from "react";
import type { ElementProps } from "../../../components/Element";

const TableBodyElement = ({ attributes, children }: ElementProps) => (
  <tbody {...attributes}>{children}</tbody>
);

export default TableBodyElement;
