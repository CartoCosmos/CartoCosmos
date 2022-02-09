import React from "react";
import ConsoleAppBar from "../presentational/ConsoleAppBar.jsx";

/**
 * Container component that holds the ConsoleAppBar and all of its subcomponents
 *
 * @component
 *
 */
export default function ConsoleContainer(props) {
  return (
    <ConsoleAppBar target={props.target} bodyChange={props.bodyChange}  />
  );
}
