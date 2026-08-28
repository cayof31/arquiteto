export interface ProjectImage {
  url: string;
  alt: string;
  span?: 'col-span-1' | 'col-span-2' | 'col-span-3';
  caption?: string;
  category: "photo" | "plans"
}

export interface ProjectPlans {
  url: string;
  alt: string;
  caption: string;
  category: 'plans' | 'photo';
}

export type ProjectContentBlock =
  | {
    type: 'paragraph';
    text: string;
  }
  | {
    type: 'image';
    image: ProjectImage;
  }
  | {
    type: 'image-grid';
    columns?: 2 | 3;
    images: ProjectImage[];
  };

export interface ArchitectureProject {
  slug: string;
  title: string;
  category: string;
  plans: ProjectPlans[];
  year: number;
  location: string;
  coverImage: string;
  gallery?: ProjectImage[];
  description?: string;
  source?: {
    name: string;
    url: string;
  };
  content?: ProjectContentBlock[];
  technicalDetails: {
    area: number;
    architects?: string;
    designTeam?: string[];
    interiorDesignTeam?: string[];
    materials: string[];
    structuralChallenges?: string;
    executionTime?: string;
  };
}