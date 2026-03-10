export interface BlogSection {
  heading?: string;
  paragraphs: string[];
}

export interface BlogPost {
  slug: string;
  // SEO
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  // Hero
  heroImage: string;
  heroAlt: string;
  // Card display (blog listing)
  cardStyle: 'aurora' | 'default';  // which background component to use
  cardTitle: string;
  cardExcerpt: string;
  // Article
  title: string;
  subtitle: string;
  sections: BlogSection[];
}