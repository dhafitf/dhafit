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
