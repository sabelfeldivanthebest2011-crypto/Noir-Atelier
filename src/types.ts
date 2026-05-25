export interface Drink {
  id: string;
  name: string;
  jpName?: string;
  description: string;
  category: 'espresso' | 'slow-brew' | 'cold-infusion';
  origin: string;
  elevation?: string;
  process?: string;
  notes: string[];
  temperature: string;
  extractionTime?: string;
  waterTemp?: string;
  price: string;
  image: string;
}

export interface LocationInfo {
  id: string;
  name: string;
  ruName: string;
  address: string;
  metro: string;
  description: string;
  hours: string;
  baristaTableSlots: string[];
  features: string[];
  ambientText: string;
}

export interface ExperienceFeature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
}
