import type {
  Package, ItineraryDay, ItineraryTab,
  Review, FaqItem, DifferenceItem,
  JoinStep, Stat, DayTour, PackageCombo,
} from './types'

// ─── Hero stats ───────────────────────────────────────────────────────────────

export const heroStats: Stat[] = [
  { value: '20명', label: '한정 소규모' },
  { value: '75.6만', label: '조튜브 구독자' },
  { value: '4.9★', label: '평균 만족도' },
]

// ─── Creator-tour packages ────────────────────────────────────────────────────

export const packages: Package[] = [
  {
    id: 'standard',
    name: 'Standard',
    nights: 3, days: 5,
    price: 1990000, earlyBirdPrice: null,
    hotelGrade: '이코노미 항공 + 3~4성 숙박',
    tagline: '알차게 즐기는 발리 핵심 코스',
    tag: '🟡 합리 라인', featured: false,
    cardGradient: 'from-gold/70 to-dark',
    priceNote: '한국 출발 199만원~ / 현지 합류 99만원~',
    highlights: ['이코노미 항공 + 3~4성 숙박', '전 일정 투어 포함', '지정 6식', '조튜브 24시간 동행', '공항 픽업·센딩', '한국어 인솔자'],
    includes: ['인천 ↔ 발리 이코노미 왕복', '3~4성급 호텔 3박', '전 일정 투어 ALL', '지정 식사 6회', '조튜브 전 일정 동행', '공항 픽업·센딩', '한국어 인솔자'],
  },
  {
    id: 'premium',
    name: 'Premium',
    nights: 4, days: 6,
    price: 2990000, earlyBirdPrice: null,
    hotelGrade: '이코노미 항공 + 4성~풀빌라',
    tagline: '가장 많은 분이 선택하는 베스트',
    tag: '🟠 프리미엄', featured: true,
    cardGradient: 'from-terra/90 to-deep',
    priceNote: '한국 출발 299만원~ / 현지 합류 169만원~',
    highlights: ['이코노미 항공 + 4성~풀빌라', '전 일정 투어 ALL', '지정 8식', '조튜브 동행 + 스파 2회', '공항 픽업·센딩', '전담 인솔자'],
    includes: ['인천 ↔ 발리 이코노미 왕복', '4성급~풀빌라 4박', '전 일정 투어 ALL', '지정 식사 8회', '조튜브 전 일정 동행', '발리니즈 스파 2회', '공항 픽업·센딩', '전담 한국어 인솔자'],
  },
  {
    id: 'luxury',
    name: 'Luxury',
    nights: 5, days: 7,
    price: 4490000, earlyBirdPrice: null,
    hotelGrade: '비즈니스 항공 + 5성·풀빌라',
    tagline: '비즈니스석부터 VIP 동행까지',
    tag: '🔴 럭셔리', featured: false,
    cardGradient: 'from-deep via-[#3D1F10] to-dark',
    priceNote: '한국 출발 449만원~ / 현지 합류 299만원~',
    highlights: ['비즈니스 항공 + 5성·풀빌라', '전 일정 투어 ALL', '전식 포함', '조튜브 VIP 동행 + 스파 3회', 'VIP 공항 픽업 + 라운지', '1:1 전담 인솔자'],
    includes: ['인천 ↔ 발리 비즈니스 항공', '5성급 풀빌라 5박', '전 일정 프라이빗 투어', '전 일정 식사 ALL', '조튜브 VIP 전담 동행', '스파 3회', 'VIP 공항 픽업 + 라운지', '1:1 전담 인솔자'],
  },
]

// ─── Day tours ────────────────────────────────────────────────────────────────

export const dayTours: DayTour[] = [
  {
    id: 'uluwatu',
    title: '울루와뚜 케착 & 선셋',
    copy: '해지는 절벽 위, 100명의 합창',
    story: '붉은 노을이 인도양을 물들이는 그 시간, 사원의 계단에 앉아 케착 댄스를 본다. 공연이라기보다 의식에 가깝다. 말이 필요 없는 순간.',
    image: '/images/tours/batur/Batur3.png',
    category: '문화',
    price: 65000,
    duration: '3~4시간',
  },
  {
    id: 'atv',
    title: 'ATV 정글 트레킹',
    copy: '진흙 뒤집어쓰고 웃는 게 여행이죠',
    story: '논두렁을 가르고, 강을 건너고, 야자나무 사이를 달린다. 발리의 속살을 보는 가장 빠른 방법. 중간에 멈추기 어렵다.',
    image: '/images/tours/atv/ATV_5.JPG',
    category: '액티비티',
    price: 72000,
    duration: '4시간',
  },
  {
    id: 'spa',
    title: '발리니즈 스파',
    copy: '3시간, 아무 생각 없이',
    story: '자스민 향이 방을 채우면 시간이 느려진다. 발리 전통 마사지는 강도보다 호흡이다. 끝나면 왜 더 오래 안 잡았을까 후회한다.',
    image: '/images/tours/zoo/Bali_Zoo_4.jpg',
    category: '자연',
    price: 58000,
    duration: '3시간',
  },
  {
    id: 'cooking',
    title: '전통 쿠킹클래스',
    copy: '장 보고, 요리하고, 같이 먹고',
    story: '이른 아침 현지 시장에서 재료를 고른다. 손으로 빻고, 불 조절하고, 담는다. 만든 밥상을 앞에 두고 나누는 점심이 가장 맛있다.',
    image: '/images/tours/atv/ATV_4.JPG',
    category: '문화',
    price: 62000,
    duration: '5시간',
  },
  {
    id: 'batur',
    title: '아궁산 일출 트레킹',
    copy: '새벽 2시 출발, 구름 위 일출',
    story: '어둠 속 6시간을 오른다. 새벽 하늘이 희뿌옇게 밝아올 때 구름 위로 머리를 내밀면, 이유를 굳이 말하지 않아도 된다.',
    image: '/images/tours/batur/Batur3.png',
    category: '액티비티',
    price: 95000,
    duration: '9시간',
  },
  {
    id: 'airport',
    title: '공항 픽업',
    copy: '도착하는 순간부터 발리',
    story: '공항을 나서는 순간부터 걱정 없다. 한국어로 이름 들고 기다리는 기사, 에어컨 켜진 차, 물 한 병. 발리의 첫 인상을 친절로.',
    image: '/images/tours/nusa/Nusa_Penida_4.JPG',
    category: '가족',
    price: 48000,
    duration: '-',
  },
  {
    id: 'nusa',
    title: '누사 페니다 투어',
    copy: '발리 옆 숨겨진 섬, 비밀 해변',
    story: '스피드보트로 45분, 도착하면 다른 세계다. 킬링 클리프의 절벽, 크리스탈처럼 맑은 물, 천연 풀장. 발리에 와서 누사를 안 보면 아쉽다.',
    image: '/images/tours/nusa/Nusa_Penida_2.jpg',
    category: '자연',
    price: 85000,
    duration: '1일',
  },
  {
    id: 'paragliding',
    title: '패러글라이딩',
    copy: '에메랄드 바다 위를 날다',
    story: '팀비스 절벽에서 뛰어내리는 그 3초가 전부다. 그 다음은 그냥 바람이고 바다다. 발리에서 가장 용기 있는 1시간.',
    image: '/images/tours/timbis/Timbis_8.png',
    category: '액티비티',
    price: 120000,
    duration: '1시간',
    videoSrc: '/videos/paragliding.mp4',
  },
  {
    id: 'zoo',
    title: '발리 동물원',
    copy: '코끼리와 함께 물놀이',
    story: '코끼리 등 위에서 물 흠뻑 뒤집어쓰는 것도 경험이다. 아이도 어른도 다 같이 웃는다. 발리 동물원은 케이지가 없다.',
    image: '/images/tours/zoo/Bali_Zoo_3.JPG',
    category: '가족',
    price: 75000,
    duration: '3~4시간',
  },
  {
    id: 'jeep',
    title: '바투르 지프 선라이즈',
    copy: '새벽 지프로 오르는 일출',
    story: '산길을 달리는 지프 위, 구름 속에서 일출을 기다린다. 커피 한 잔 들고 바투르 화산 정상에 앉아 있으면, 이게 발리다.',
    image: '/images/tours/batur/Batur2.png',
    category: '액티비티',
    price: 95000,
    duration: '반일',
  },
]

// ─── Package combos ───────────────────────────────────────────────────────────

export const packageCombos: PackageCombo[] = [
  {
    id: 'highlight',
    name: '발리 하이라이트 3일',
    price: 198000,
    priceUnit: '1인',
    items: ['케착 선셋', '우붓 투어', '스파', '한국어 가이드', '전용 차량'],
    image: '/images/tours/nusa/Nusa_Penida_1.JPG',
    badge: '베스트셀러',
    highlight: true,
  },
  {
    id: 'honeymoon',
    name: '신혼여행 커플 스페셜',
    price: 285000,
    priceUnit: '2인',
    items: ['프라이빗 픽업 + 플라워', '커플 스파', '선셋 디너', '포토 촬영'],
    image: '/images/tours/zoo/Bali_Zoo_2.JPG',
    badge: '커플 추천',
  },
  {
    id: 'activity',
    name: '액티비티 풀코스',
    price: 245000,
    priceUnit: '1인',
    items: ['ATV', '래프팅', '쿠킹클래스', '전용 차량'],
    image: '/images/tours/atv/ATV_4.JPG',
  },
  {
    id: 'wellness',
    name: '힐링 웰니스 리트릿',
    price: 175000,
    priceUnit: '1인',
    items: ['모닝 요가', '스파 3시간', '허브 테라피', '오가닉 런치'],
    image: '/images/tours/zoo/Bali_Zoo_5.JPG',
  },
]

// ─── Itinerary ────────────────────────────────────────────────────────────────

export type { ItineraryTab }

export const itineraryTabs: ItineraryTab[] = [
  {
    packageId: 'standard',
    label: '3박5일 합리',
    days: [
      { day: 1, title: '출발·도착', location: '인천 → 발리', emoji: '✈️', activities: ['인천 공항 새벽 직항 출발', '응우라라이 국제공항 도착', 'BaliOn 전용 픽업', '호텔 체크인', '웰컴 디너'], meals: '웰컴 디너', hotel: '3~4성 호텔', note: '현지 합류: 숙소 직접 체크인 후 저녁 웰컴 디너 합류' },
      { day: 2, title: '액티비티', location: '정글 · 아융강 · 짱구', emoji: '🏍️', activities: ['ATV 정글 트레킹 🏍️', '아융강 래프팅', '바나나잎 현지 점심', '발리니즈 스파 90분 🧖 ✨', '짱구 선셋 비치'], meals: '조식 + 현지 점심', hotel: '3~4성 호텔', note: '유튜버 동행 촬영 · 리얼 리액션 영상' },
      { day: 3, title: '문화·힐링', location: '우붓', emoji: '🌾', activities: ['우붓 라이스 테라스 🌾', '원숭이 숲 탐방', '전통 쿠킹클래스 👩‍🍳 ✨', '조튜버 픽 히든 카페', '우붓 야시장', '숙소 수영장 나이트'], meals: '조식 + 쿠킹클래스 식사', hotel: '3~4성 호텔', note: '유튜버 픽 히든 카페 포함' },
      { day: 4, title: '선셋·파티', location: '울루와뚜 · 스미냑', emoji: '🌅', activities: ['울루와뚜 케착 공연 🌅 ✨', '절벽 선셋 포인트', '파이어댄스 관람', '스미냑 파인다이닝 🍷 ✨', '그룹 파티 나이트 🎉'], meals: '조식 + 파인다이닝 석식', hotel: '3~4성 호텔', note: '전체 영상 하이라이트 촬영일' },
      { day: 5, title: '귀국', location: '발리 → 인천', emoji: '🏠', activities: ['자유 시간 + 쇼핑', '발리 기념품 투어', '공항 센딩', '귀국 비행'], meals: '조식', hotel: '기내', note: '현지 합류 참가자: 자유 일정 후 개별 귀국' },
    ],
  },
  {
    packageId: 'premium',
    label: '4박6일 프리미엄',
    days: [
      { day: 1, title: '출발·도착', location: '인천 → 발리', emoji: '✈️', activities: ['인천 출발', '발리 도착·픽업', '4성~풀빌라 체크인', '웰컴 풀파티 🎉'], meals: '웰컴 디너', hotel: '4성급~풀빌라', note: '현지 합류: 지정 숙소 직접 체크인 후 저녁 합류' },
      { day: 2, title: '우붓 문화', location: '우붓', emoji: '🌾', activities: ['테갈랄랑 라이스 테라스', '우붓 원숭이 숲', '전통 바틱 체험 🎨 ✨', '조튜버 픽 히든 카페', '우붓 나이트 마켓'], meals: '조식 + 중식', hotel: '4성급~풀빌라', note: '현지 문화 깊이 탐방' },
      { day: 3, title: '익스트림 액티비티', location: '정글 · 아융강', emoji: '🏄', activities: ['ATV 정글 어드벤처 🏍️ ✨', '아융강 래프팅', '발리니즈 스파 1회 🧖 ✨', '스미냑 비치 클럽', '선셋 칵테일'], meals: '조식 + 현지 점심', hotel: '4성급~풀빌라', note: '스파 2회 중 1회 포함일' },
      { day: 4, title: '오션·선셋', location: '누사두아 · 울루와뚜', emoji: '🌊', activities: ['누사두아 스노클링 🐠', '해변 런치', '발리니즈 스파 2회차 🧖 ✨', '울루와뚜 케착 공연 🌅 ✨', '짐바란 씨푸드 디너 🦞 ✨'], meals: '조식 + 중식 + 석식', hotel: '4성급~풀빌라', note: '메인 하이라이트 촬영일' },
      { day: 5, title: '자유·힐링', location: '스미냑 · 짱구', emoji: '🛍️', activities: ['오전 풀빌라 자유시간', '스미냑 부티크 쇼핑', '짱구 카페 투어', '그룹 파이널 디너 🍽️', '파티 나이트 🎉'], meals: '조식 + 파이널 디너', hotel: '4성급~풀빌라', note: '마지막 밤 파티' },
      { day: 6, title: '귀국', location: '발리 → 인천', emoji: '🏠', activities: ['호텔 체크아웃', '기념품 쇼핑', '공항 센딩', '귀국 비행'], meals: '조식', hotel: '기내', note: '현지 합류 참가자: 개별 귀국' },
    ],
  },
  {
    packageId: 'luxury',
    label: '5박7일 럭셔리',
    days: [
      { day: 1, title: '비즈니스석 출발', location: '인천 → 발리', emoji: '🛫', activities: ['인천 공항 비즈니스 라운지 ✨', '비즈니스 클래스 탑승', '응우라라이 VIP 입국', '전용 리무진 픽업', '5성급 풀빌라 체크인', 'VIP 웰컴 디너 🍾 ✨'], meals: '기내식 + VIP 웰컴 디너', hotel: '5성급 프라이빗 풀빌라', note: '현지 합류: VIP 픽업 후 웰컴 디너 합류' },
      { day: 2, title: '발리 헬리투어', location: '발리 전역 상공', emoji: '🚁', activities: ['발리 헬리콥터 투어 🚁 ✨', '아궁산·라이스테라스 공중 감상', '파인다이닝 런치 🍽️', '프라이빗 스파 1회 🧖 ✨', '풀빌라 프라이빗 수영'], meals: '조식 + 파인다이닝 런치', hotel: '5성급 프라이빗 풀빌라', note: '헬리콥터 탑승 인원 제한 · 조기 신청 필수' },
      { day: 3, title: '우붓 VIP', location: '우붓', emoji: '🌿', activities: ['프라이빗 차량 우붓 이동', '테갈랄랑 전용 포토타임 🌾 ✨', '조튜버 1:1 촬영 세션 🎥 ✨', '미슐랭 레스토랑 런치 🍜', '전통 발리 쿠킹클래스 ✨', '프라이빗 스파 2회차 🧖'], meals: '조식 + 미슐랭 런치 + 석식', hotel: '5성급 프라이빗 풀빌라', note: '조튜버 1:1 브이로그 촬영 포함' },
      { day: 4, title: '프라이빗 아일랜드', location: '누사페니다', emoji: '🏝️', activities: ['프라이빗 스피드보트 출발 🚤 ✨', '킬링 클리프 VIP 포토타임', '엔젤 빌라봉 프라이빗 투어', '럭셔리 요트 런치 🛥️ ✨', '프라이빗 스노클링', '짐바란 최고급 씨푸드 디너 🦞 ✨'], meals: '조식 + 요트 런치 + 씨푸드 디너', hotel: '5성급 프라이빗 풀빌라', note: '스피드보트 & 요트 전세' },
      { day: 5, title: '선셋 크루즈·스파', location: '울루와뚜 · 발리 해상', emoji: '🌅', activities: ['울루와뚜 VIP석 케착 공연 🌅 ✨', '선셋 크루즈 디너 🚢 ✨', '프라이빗 스파 3회차 🧖 ✨', 'VIP 프라이빗 파티 나이트 🎊'], meals: '조식 + 크루즈 디너', hotel: '5성급 프라이빗 풀빌라', note: '메인 하이라이트 촬영일' },
      { day: 6, title: '자유·쇼핑', location: '스미냑 · 짱구', emoji: '🛍️', activities: ['오전 풀빌라 프라이빗 타임', '스미냑 VIP 부티크 쇼핑', '조튜버 픽 스페셜 카페', '그룹 파이널 갈라 디너 🥂 ✨'], meals: '조식 + 갈라 디너', hotel: '5성급 프라이빗 풀빌라', note: '럭셔리 기념품 & 라스트 나이트' },
      { day: 7, title: '귀국 (비즈니스)', location: '발리 → 인천', emoji: '🏠', activities: ['레이트 체크아웃 (12시)', 'VIP 리무진 공항 이동', '비즈니스 라운지 이용 ✨', '비즈니스 클래스 탑승', '인천 VIP 입국'], meals: '조식 + 기내식', hotel: '기내 (비즈니스)', note: '현지 합류 참가자: 레이트 체크아웃 후 개별 귀국' },
    ],
  },
]

// ─── Difference items ─────────────────────────────────────────────────────────

export const differenceItems: DifferenceItem[] = [
  { icon: '🎥', title: '유튜버가 진짜 24시간 함께해요', description: '식사, 투어, 이동, 숙소까지 조튜브가 직접 전 일정을 동행합니다. 단순 스쳐가는 만남이 아닙니다.' },
  { icon: '📸', title: '내 얼굴이 유튜브에 나와요', description: '30만 구독자 채널에 직접 출연하는 경험. 촬영은 자유 선택이며 인생 콘텐츠를 함께 만들어요.' },
  { icon: '👥', title: '최대 20명 소규모 프리미엄 그룹', description: '단체 여행의 단점은 없애고 프라이빗한 느낌은 살렸어요. 모두와 자연스럽게 친해질 수 있어요.' },
  { icon: '🇰🇷', title: '한국어 전담 인솔자', description: '현지 10년 경력 한국어 인솔자가 전 일정을 함께합니다. 언어 걱정 없이 온전히 즐기세요.' },
  { icon: '✈️', title: '현지 합류도 OK', description: '항공 스케줄이 맞지 않거나 항공권을 직접 구매하고 싶다면 현지 합류 옵션을 선택하세요.' },
  { icon: '⭐', title: '조튜버가 직접 검증한 코스', description: '조튜브가 발로 뛰며 선별한 맛집·포토스팟·스파만 담았습니다. 일반 패키지와는 다른 경험.' },
]

// ─── Join steps ───────────────────────────────────────────────────────────────

export const joinSteps: JoinStep[] = [
  { step: 1, icon: '💬', title: '카카오 채널 추가', description: '카카오톡에서 @BaliOn을 검색하거나 아래 버튼을 눌러 채널을 추가하세요.' },
  { step: 2, icon: '📋', title: '상담 & 패키지 선택', description: '원하는 출발일·패키지·한국 출발 또는 현지 합류를 상담 후 선택하세요.' },
  { step: 3, icon: '✅', title: '예약금 입금 & 확정', description: '예약금 30% 입금으로 자리가 확정됩니다. 잔금은 출발 30일 전까지 납부하시면 됩니다.' },
]

// ─── Reviews ──────────────────────────────────────────────────────────────────

export const reviews: Review[] = [
  { id: '1', name: '김지연', ageLocation: '20대 · 서울', packageType: '3박5일 합리', badge: '크리에이터 투어', rating: 5, text: '조튜버 영상에 제가 나왔어요! 편집 영상 보면서 아직도 뿌듯해요. 발리도 너무 좋았고, 진짜 꿈 같은 여행이었어요.', date: '2024.11', initials: '김지', avatarBg: 'bg-terra' },
  { id: '2', name: '이준혁 · 박소현', ageLocation: '30대 커플 · 부산', packageType: '4박6일 프리미엄', badge: '신혼여행', rating: 5, text: '신혼여행으로 갔는데 조튜버가 우리 커플 포토도 찍어줬어요. 풀빌라 수영장에서 찍은 사진이 진짜 인생 샷이 됐어요!', date: '2024.10', initials: '이준', avatarBg: 'bg-leaf' },
  { id: '3', name: '박민준', ageLocation: '20대 · 인천', packageType: '4박6일 프리미엄', badge: '현지 합류', rating: 5, text: '현지 합류였는데도 조튜버랑 밥도 먹고 같이 투어도 다녔어요. 가격 대비 이렇게 좋을 줄 몰랐어요. 꿈 같았어요.', date: '2024.09', initials: '박민', avatarBg: 'bg-gold' },
  { id: '4', name: '최수빈', ageLocation: '20대 · 대구', packageType: '3박5일 합리', badge: null, rating: 5, text: 'ATV 탈 때 조튜버가 옆에서 같이 진흙 뒤집어썼어요 ㅋㅋ 유튜브에서만 보던 모습 그대로여서 너무 신기했어요.', date: '2024.08', initials: '최수', avatarBg: 'bg-deep' },
  { id: '5', name: '강동현', ageLocation: '40대 · 서울', packageType: '5박7일 럭셔리', badge: '럭셔리', rating: 5, text: '비즈니스석에 풀빌라에 조튜버 VIP 동행... 반신반의했는데 진짜였어요. 헬기 타고 발리 내려다볼 때 눈물 날 뻔했어요.', date: '2024.07', initials: '강동', avatarBg: 'bg-muted' },
  { id: '6', name: '정은서', ageLocation: '20대 · 광주', packageType: '3박5일 합리', badge: '솔로 여행', rating: 4, text: '혼자 신청했는데 20명 소규모라 금방 친해졌어요. 지금도 그때 만난 분들이랑 연락해요. 발리도 좋았지만 사람들이 더 좋았어요.', date: '2024.06', initials: '정은', avatarBg: 'bg-terra' },
]

// ─── FAQs ─────────────────────────────────────────────────────────────────────

export const faqs: FaqItem[] = [
  { question: '조튜버가 진짜 24시간 같이 있나요?', answer: '네! 모든 일정에 조튜브가 직접 동행해요. 식사, 투어, 이동 전부 함께하고 숙소도 같은 빌라·리조트에 머물어요. 단, 개인 자유 시간(취침 후 등)은 각자 보내요.' },
  { question: '현지 합류면 뭐가 포함되나요?', answer: '전 일정 투어비 + 지정 식사 + 유튜버 동행 + 한국어 인솔 지원이 포함됩니다. 항공·숙박은 개별 준비이며, 예약 시 추천 항공편과 숙소 리스트를 별도로 안내드려요.' },
  { question: '영상에 꼭 나와야 하나요?', answer: '강요하지 않아요! 촬영 동의는 선택 사항이고, 얼굴이 나오기 싫으신 분은 출발 전 또는 현장에서 사전에 말씀해 주시면 충분히 배려해 드려요.' },
  { question: '혼자 신청해도 되나요?', answer: '물론이에요! 솔로 참가자가 오히려 더 많아요. 최대 20명 소규모라 금방 친해지고, 조튜버도 모두와 자연스럽게 어울려서 혼자 와도 전혀 어색하지 않아요.' },
  { question: '결제·취소 정책이 어떻게 되나요?', answer: '카카오페이·신용카드 결제 가능하며 예약금 30% 선결제 후 잔금은 출발 30일 전까지 납부하시면 돼요. 취소 정책: 출발 60일 전 100% 환불 / 30일 전 80% / 14일 전 50% / 7일 전 30% 환불.' },
]
