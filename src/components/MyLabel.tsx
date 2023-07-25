import "./mylabel.css";

export interface MyLabelProps {
  /**
   * Label text content
   */
  label: string;
  /**
   * Label size
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Label text color
   */
  color: "primary" | "secondary" | "tertiary";
  /**
   * Capitalize label
   */
  allCaps?: boolean;
  /**
   * What background color to use
   */
  fontColor?: string;
}

export const MyLabel = ({
  label = "No label",
  size = "normal",
  allCaps,
  color = "primary",
  fontColor,
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
