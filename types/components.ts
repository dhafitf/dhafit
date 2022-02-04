import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
  title: string;
  metaDesc: string;
}

export interface LoadMoreProps {
  name: string;
  href: string;
}

export interface PostThumbProps {
  src: string;
  alt?: string;
}

export interface MotionHyperlinkProps {
  background: string;
  href: string;
  icon: any;
  text: string;
}

export interface MotionListProps {
  skill: string;
}

export interface LinktreeProps {
  href: string;
  text: string;
  icon: any;
}
