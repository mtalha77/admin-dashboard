import React from "react";
import { Button } from "@/components/ui/button";

/**
 * Props interface for the ViewAllButton component
 *
 * @property {string} title - The text to display on the button (defaults to "View all")
 * @property {() => void} onClick - Optional callback function to execute when the button is clicked
 */
interface ViewAllButtonProps {
  title?: string;
  onClick?: () => void;
}

/**
 * ViewAllButton Component
 *
 * @param {ViewAllButtonProps} props - Component props
 * @param {string} props.title - Button text (defaults to "View all")
 * @param {() => void} props.onClick - Click handler function
 */
export const ViewAllButton = ({
  title = "View all",
  onClick,
}: ViewAllButtonProps) => {
  return (
    <div className="">
      <Button
        className="relative h-8 bg-black/10 hover:bg-transparent hover:cursor-pointer px-4 font-medium text-white rounded-full backdrop-blur-md"
        style={{
          backdropFilter: "blur(8.4px)",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        }}
        onClick={onClick}
      >
        {/* Text content with higher z-index to appear above the border */}
        <span className="relative z-10">{title}</span>

        {/* Gradient border implementation using CSS mask technique */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            // 1px padding creates the border effect
            padding: "1px",
            // Gradient colors from design spec
            background:
              "linear-gradient(90deg, #FF4AE7 0%, #85A7F3 50%, #83A8F3 100%)",
            borderRadius: "999px",
            zIndex: 0,
            // CSS mask technique to create border effect
            // This creates a border by masking everything except the 1px edge
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
          }}
        />
      </Button>
    </div>
  );
};
