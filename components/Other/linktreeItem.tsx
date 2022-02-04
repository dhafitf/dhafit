import * as React from "react";
import { LinktreeProps } from "~/types/components";
import profileStyle from "~/styles/link.module.css";

const LinktreeItem: React.FC<LinktreeProps> = ({ href, text, icon }) => {
  return (
    <div className={profileStyle.itemList}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <div className={profileStyle.link}>{text}</div>
        <div className={profileStyle.icon}>{icon}</div>
      </a>
    </div>
  );
};

export default LinktreeItem;
