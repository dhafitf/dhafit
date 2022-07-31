import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface LoadMoreProps {
  name: string;
  href: string;
  className?: string;
}

export interface PostThumbProps {
  src: string;
  alt?: string;
}

export interface LinktreeProps {
  href: string;
  text: string;
  icon: JSX.Element;
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

export interface MetricCardProps {
  href: string;
  title: string;
  value: number;
}

export interface YoutubeResponse {
  subscriberCount: number;
  viewCount: number;
  videoCount: number;
}
