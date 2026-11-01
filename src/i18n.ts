export const langs = ['en', 'ko'] as const;
export type Lang = (typeof langs)[number];

export const other = (lang: Lang): Lang => (lang === 'en' ? 'ko' : 'en');

/** Prefix a site-relative path with the configured base (GitHub project pages need this). */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

/** Splits an entry id like "ko/hadestown" into its language and shared slug. */
export function splitId(id: string): { lang: Lang; slug: string } {
  const [lang, ...rest] = id.split('/');
  return { lang: lang as Lang, slug: rest.join('/') };
}

export function formatDate(d: Date, lang: Lang, style: 'long' | 'short' = 'long'): string {
  return d.toLocaleDateString(lang === 'ko' ? 'ko-KR' : 'en-US', {
    year: 'numeric',
    month: style === 'long' ? 'long' : 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export const t = {
  en: {
    name: 'Hyewon Jung',
    nav: { home: 'Home', projects: 'Projects', reviews: 'Reviews', about: 'About' },
    switchTo: '한국어',
    switchLabel: 'Read this page in Korean',
    hero: {
      admit: 'Admit one',
      line: 'Builds things that see, sense, and explain. Likes to spend my free time at a theater.',
      fields: [
        ['Program', 'MS, Electrical & Computer Engineering'],
        ['School', 'Carnegie Mellon University'],
        ['Duration', 'Aug 2026 – Dec 2027'],
      ],
      stub: ['ECE', 'MS', "'27"],
      stubLabels: ['Dept', 'Prog', 'Class'],
    },
    actOne: 'Act I',
    actOneTitle: 'On the bench',
    actOneLede: 'Research and builds in computer vision, medical imaging, and accessible hardware.',
    actTwo: 'Act II',
    actTwoTitle: 'From the audience',
    actTwoLede: 'Notes on the plays and musicals I see, written the night of or the morning after.',
    allProjects: 'All projects',
    allReviews: 'All reviews',
    reviews: {
      title: 'Reviews',
      lede: 'Every show I see gets a ticket here. Filter by kind, or scroll by season.',
      all: 'All',
      musical: 'Musicals',
      play: 'Plays',
      kind: { musical: 'Musical', play: 'Play' },
      empty: 'No shows of this kind yet.',
      seen: 'Seen',
      venue: 'Venue',
      seat: 'Seat',
      cast: 'Cast',
      rating: 'Rating',
      outOf: 'out of 5',
      back: 'Back to all reviews',
      sample: 'Sample entry: replace with your own review',
      missing: 'This review is only in Korean for now.',
    },
    projects: {
      title: 'Projects & research',
      lede: 'What I have built and studied, with the tools that went into each.',
      role: 'Role',
      period: 'Period',
      where: 'Where',
      stack: 'Stack',
      back: 'Back to all projects',
    },
    about: {
      title: 'About',
      intro: [
        "I'm Hyewon, a first-year master's student in Electrical and Computer Engineering at Carnegie Mellon. Before Pittsburgh I spent four years at Johns Hopkins studying electrical engineering and computer science.",
        'My work sits where computer vision meets people: feedback for surgeons-in-training, a board game that children with visual impairments can play with sighted friends, and MRI sequence classification for cardiac imaging.',
        'Off the bench I am usually at the theatre. I keep a review for shows that I saw and liked, in English and Korean.',
      ],
      education: 'Education',
      experience: 'Work',
      skills: 'Toolkit',
      contact: 'Contact',
      resume: 'Download résumé (PDF)',
      email: 'Email',
    },
    footer: 'Built with Astro. Curtain up whenever you are.',
  },
  ko: {
    name: '정혜원',
    nav: { home: '홈', projects: '프로젝트', reviews: '관람 후기', about: '소개' },
    switchTo: 'English',
    switchLabel: '이 페이지를 영어로 보기',
    hero: {
      admit: '입장권 1매',
      line: '보고, 감지하고, 설명하는 시스템을 만듭니다. 여가 시간에는 연극 및 뮤지컬을 봅니다.',
      fields: [
        ['과정', '전기·컴퓨터공학 석사 (MS ECE)'],
        ['장소', '카네기멜론 대학교'],
        ['기간', '2026년 8월 – 2027년 12월'],
      ],
      stub: ['ECE', 'MS', "'27"],
      stubLabels: ['학과', '과정', '졸업'],
    },
    actOne: '1막',
    actOneTitle: '실험대 위에서',
    actOneLede: '컴퓨터 비전, 의료 영상, 접근성 하드웨어에 관한 연구와 프로젝트.',
    actTwo: '2막',
    actTwoTitle: '객석에서',
    actTwoLede: '보고 온 연극과 뮤지컬에 대한 기록.',
    allProjects: '프로젝트 전체 보기',
    allReviews: '후기 전체 보기',
    reviews: {
      title: '관람 후기',
      lede: '본 공연마다 티켓 한 장씩. 장르로 거르거나 시즌별로 내려보세요.',
      all: '전체',
      musical: '뮤지컬',
      play: '연극',
      kind: { musical: '뮤지컬', play: '연극' },
      empty: '아직 이 장르의 후기가 없어요.',
      seen: '관람일',
      venue: '극장',
      seat: '좌석',
      cast: '캐스트',
      rating: '별점',
      outOf: '/ 5',
      back: '후기 목록으로',
      sample: '샘플 글입니다. 내 후기로 바꿔주세요',
      missing: '이 후기는 아직 영어로만 있어요.',
    },
    projects: {
      title: '프로젝트 & 연구',
      lede: '만들고 연구한 것들, 그리고 거기에 쓴 도구들.',
      role: '역할',
      period: '기간',
      where: '소속',
      stack: '기술',
      back: '프로젝트 목록으로',
    },
    about: {
      title: '소개',
      intro: [
        '카네기멜론 대학교 전기·컴퓨터공학(ECE) 석사 1년차 정혜원입니다. 피츠버그에 오기 전에는 존스홉킨스 대학교에서 전기공학과 컴퓨터과학을 공부했어요.',
        '컴퓨터 비전이 사람과 만나는 지점에 관심이 많습니다. 수련의를 위한 수술 피드백, 시각장애 아동이 비장애 친구와 함께 할 수 있는 보드게임 보조기기, 심장 MRI 시퀀스 분류를 연구하고 만들었어요.',
        '실험실 밖에서는 대부분 극장에 있습니다 (물리적이든 심적이든...). 마음에 드는 공연에 대한 후기를 여기에 남깁니다.',
      ],
      education: '학력',
      experience: '경력',
      skills: '도구',
      contact: '연락처',
      resume: '이력서 다운로드 (PDF)',
      email: '이메일',
    },
    footer: 'Astro로 만들었습니다. 막은 언제든 오릅니다.',
  },
} as const;
