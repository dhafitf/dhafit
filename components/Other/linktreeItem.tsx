import * as React from "react";
import { LinktreeProps } from "~/types/components";

const LinktreeItem: React.FC<LinktreeProps> = ({ href, text, icon }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-xl border-2 border-lavender p-3 text-white hover:bg-lavender">
      <div className="text-sm tracking-widest">{text}</div>
      <div className="flex">{icon}</div>
    </a>
  );
};

export default LinktreeItem;
