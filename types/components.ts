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
  icon: JSX.Element;
  text: string;
  className?: string;
}

export interface MotionListProps {
  skill: string;
  className?: string;
}

export interface LinktreeProps {
  href: string;
  text: string;
  icon: JSX.Element;
}

export interface DraggableHeadingProps {
  initialX: number;
  className: string;
  text: string;
}

export interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  title: string;
}

export interface SkillsProps {
  name: string;
  value: string[];
}
