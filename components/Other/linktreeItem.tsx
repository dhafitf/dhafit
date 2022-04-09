import * as React from "react";
import { LinktreeProps } from "~/types/components";

const LinktreeItem: React.FC<LinktreeProps> = ({ href, text, icon }) => {
  return (
    <div>
      <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-xl border-2 border-secondary p-3 text-white">
        <div className="text-sm tracking-widest">{text}</div>
        <div className="flex">{icon}</div>
      </a>
    </div>
  );
};

export default LinktreeItem;
