import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

/**
 * Props interface for the SelectMonthButton component
 *
 * @property {string} label - The text to display on the button (defaults to "This Month")
 * @property {() => void} onClick - Callback function to execute when the button is clicked
 * @property {string} className - Optional additional CSS classes
 */
interface SelectMonthButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
}

/**
 * SelectMonthButton Component
 *
 * @param {SelectMonthButtonProps} props - Component props
 */
export const SelectMonthButton = ({
  label = "This Month",
  onClick,
  className = "",
}: SelectMonthButtonProps) => {
  return (
    <Button
      variant="outline"
      className={`relative flex items-center justify-between gap-4 h-12 px-6 py-4 cursor-pointer !bg-gray-800/40 border border-gray-700 text-white rounded-xl ${className}`}
      style={{
        backdropFilter: "blur(8.4px)",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      }}
      onClick={onClick}
    >
      {/* Dropdown Indicator */}
      <Image
        src="/icons/calendar.png"
        alt="Fire"
        width={18}
        height={18}
        className="text-white"
      />

      {/* Label */}
      <span className="font-semibold">{label}</span>

      <ChevronDown className="w-6 h-6 text-white" />

      {/* Gradient Border */}
      <div
        className="absolute inset-0 rounded-xl"
        style={{
          padding: "1px",
          background:
            "linear-gradient(90deg, #FF4AE7 0%, #85A7F3 50%, #83A8F3 100%)",
          borderRadius: "0.75rem",
          zIndex: -1,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
        }}
      />
    </Button>
  );
};
