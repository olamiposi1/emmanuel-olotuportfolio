export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  commitment: string;
  description?: string;
}

export interface TrackItem {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  coverUrl: string;
  spotifyUrl: string;
}

export interface WorkStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  deliverables?: string[];
}

export interface BookInfo {
  title: string;
  author: string;
  coverUrl: string;
  status: string;
  progressPercent: number;
  favoriteQuote?: string;
  description?: string;
}
