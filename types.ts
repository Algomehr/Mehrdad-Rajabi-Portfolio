export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link: string;
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  publishDate: string;
  link: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
}

export interface Activity {
  id: string;
  title: string;
}