export interface Package {
  id: string
  name: string
  nights: number
  days: number
  price: number
  earlyBirdPrice: number | null
  hotelGrade: string
  tagline: string
  includes: string[]
  highlights: string[]
  tag: string | null
  featured: boolean
  cardGradient: string
  priceNote: string
}

export interface ItineraryDay {
  day: number
  title: string
  location: string
  emoji: string
  activities: string[]
  meals: string
  hotel: string
  note: string
}

export interface ItineraryTab {
  packageId: string
  label: string
  days: ItineraryDay[]
}

export interface Review {
  id: string
  name: string
  ageLocation: string
  packageType: string
  badge: string | null
  rating: number
  text: string
  date: string
  initials: string
  avatarBg: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface DifferenceItem {
  icon: string
  title: string
  description: string
}

export interface JoinStep {
  step: number
  icon: string
  title: string
  description: string
}

export interface Stat {
  value: string
  label: string
}
