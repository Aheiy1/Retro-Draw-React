import React from "react";
import Cell from "./Cell";
import { COLORS } from "../utils";

/* Need to map over the COLORS array, so we pull them from ../utils */

/**
 * The Palette component represents the interface for displaying
 * clickable color cells, and needs to communicate the activeColor
 * to other components.
 */
const Palette = (props) => {
  const { activeColor, setActiveColor } = props;

  return (
    <div className="palette">
      <>
    {COLORS.map((color, i) => {
      return (
        <Cell
        key={`${i}palette-`}
        color={color}
        isActive={color === activeColor ? true : false}
        handleClick={() => {
          setActiveColor(color);
        }}
        />
        );
      })}
      </>
    </div>
    /**
     * Create constants for activeColor and setActiveColor, reading the value off of the props
     */

    /**
     * For the template, you need to:
     * - map over COLORS
     * - return from the mapping function a <Cell /> which:
     *    - has a unique key (you can use 'palette-' and the index of the color)
     *    - has a prop of color equal to the color from the map
     *    - has a prop of isActive equal to true if activeColor equals the color from the map
     *    - has a prop of handleClick which is a function that calls setActiveColor, passing it
     *      the color from the map
     */
  );
};

export default Palette;