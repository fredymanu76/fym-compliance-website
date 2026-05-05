export interface Solution {
  name: string;
  tagline: string;
  description: string;
  tier: "primary" | "specialist" | "supporting";
  color: string;
  url?: string;
}

export interface ExpertiseDomain {
  name: string;
  color: string;
  icon: string;
  areas: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
