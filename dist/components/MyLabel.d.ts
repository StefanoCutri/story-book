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
     * What font color to use
     */
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, }: MyLabelProps) => import("react/jsx-runtime").JSX.Element;
