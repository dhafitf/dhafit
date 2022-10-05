export interface DefaultPostProps {
  title: string;
  subtitle: string;
  timestamp: string;
  thumb: string;
  tags: string[];
  featured: boolean;
  order: number;
  isNotTranslated?: boolean;
}

export interface PostLoaderProps {
  data: DefaultPostProps;
  content: string;
  permalink: string;
}

export interface PostProps extends DefaultPostProps {
  content: string;
  permalink: string;
}

export interface DefaultPostCard {
  title: string;
  subtitle: string;
  permalink: string;
}

export interface BlogCardProps extends DefaultPostCard {
  timestamp: string;
}

export interface ProjectCardProps extends DefaultPostCard {
  thumb: string;
  tags: string[];
}
