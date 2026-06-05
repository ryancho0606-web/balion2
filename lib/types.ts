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

export interface DayTour {
  id: string
  title: string
  copy: string
  story: string
  image: string
  category: '액티비티' | '자연' | '문화' | '가족'
  price: number
  duration: string
  videoSrc?: string
}

export interface PackageCombo {
  id: string
  name: string
  price: number
  priceUnit: string
  items: string[]
  image: string
  badge?: string
  highlight?: boolean
}
