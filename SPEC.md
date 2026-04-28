# 바이브코딩 아카데미 — 기술 스펙

## 1. 개요

**제품명**: 바이브코딩 아카데미 (Vibe Coding Academy)
**한 줄 설명**: 사내 직원이 "이 앱만 따라오면" 바이브코딩으로 앱을 만들고 웹에 배포까지 끝낼 수 있는 단계별 강의 플랫폼.
**대상 사용자**: 비개발자 일반 직원 (코딩 경험 없음 가정)
**핵심 가치**: 기존 강의 PPTX의 모든 슬라이드를 챕터·레슨 단위로 재구성한, 이미지 중심의 셀프 학습 사이트.

---

## 2. 기술 스택

| 항목 | 선택 |
|------|------|
| 프레임워크 | **Next.js 14** (App Router, TypeScript) |
| 스타일링 | **Tailwind CSS** |
| 폰트 | Geist Sans (Next.js 기본) + Geist Mono (코드용) |
| 아이콘 | `lucide-react` (가벼움) |
| 배포 | **Vercel** (자동 배포 전제) |
| 패키지 매니저 | npm |

> **외부 의존성은 최소로**. 위 목록 외에는 추가하지 않습니다. 차트·캐러셀·MDX 등은 필요 없습니다.

---

## 3. 폴더 구조 (생성 결과 기대값)

```
vibe-coding-academy/
├── PROMPT.md              ← (이미 존재, 그대로 둠)
├── SPEC.md                ← (이미 존재, 그대로 둠)
├── CONTENT.md             ← (이미 존재, 그대로 둠)
├── README.md              ← Antigravity가 새로 생성
├── package.json
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── .gitignore
├── public/
│   └── slides/            ← (이미 존재, 그대로 사용)
│       ├── part1/slide-01.jpg ~ slide-65.jpg
│       └── part2/slide-01.jpg ~ slide-96.jpg
└── src/
    ├── app/
    │   ├── layout.tsx              ← 글로벌 레이아웃 (사이드바 + 메인)
    │   ├── page.tsx                ← 홈 (챕터 그리드)
    │   ├── globals.css             ← Tailwind import + CSS 변수
    │   └── chapters/
    │       └── [chapterSlug]/
    │           ├── page.tsx        ← 챕터 개요 + 레슨 리스트
    │           └── [lessonSlug]/
    │               └── page.tsx    ← 레슨 상세 (슬라이드 뷰어)
    ├── components/
    │   ├── Sidebar.tsx             ← 좌측 챕터/레슨 네비
    │   ├── SlideViewer.tsx         ← 메인 슬라이드 표시 + 좌우 화살표
    │   ├── LessonNav.tsx           ← 레슨 하단 이전/다음 버튼
    │   ├── ChapterCard.tsx         ← 홈 화면 챕터 카드
    │   └── ProgressBar.tsx         ← 챕터별 진행률 (옵션, 클라이언트 localStorage)
    └── lib/
        └── content.ts              ← CONTENT.md 의 챕터/레슨 데이터를 TS 객체로 정의
```

---

## 4. 데이터 모델

`src/lib/content.ts` 안에 다음 타입과 데이터를 만듭니다. **CONTENT.md** 에 정의된 모든 챕터와 레슨을 빠짐없이 옮겨야 합니다.

```ts
export type Slide = {
  /** "part1" | "part2" */
  part: 'part1' | 'part2';
  /** 1-based slide number, e.g. 5 -> /slides/part1/slide-05.jpg */
  number: number;
  /** 화면 캡션 (선택) */
  caption?: string;
};

export type Lesson = {
  slug: string;            // URL용 — 영문 kebab-case
  number: string;          // 표시용 번호 — "001", "0-1", "1-3" 등 CONTENT.md 그대로
  title: string;           // 한국어 제목
  description: string;     // 1-3문장 요약
  slides: Slide[];         // 이 레슨에 포함되는 슬라이드들
};

export type Chapter = {
  slug: string;            // URL용
  number: number;          // 0, 1, 2, ...
  title: string;
  subtitle: string;        // 부제 (영문이나 캐치프레이즈)
  description: string;     // 챕터 한 줄 소개
  lessons: Lesson[];
};

export const chapters: Chapter[] = [ /* CONTENT.md 데이터 */ ];

// 헬퍼
export function getChapter(slug: string): Chapter | undefined { ... }
export function getLesson(chapterSlug: string, lessonSlug: string): { chapter: Chapter; lesson: Lesson } | undefined { ... }
export function getNextLesson(chapterSlug: string, lessonSlug: string): { chapterSlug: string; lessonSlug: string } | undefined { ... }
export function getPrevLesson(chapterSlug: string, lessonSlug: string): { chapterSlug: string; lessonSlug: string } | undefined { ... }
export function slideSrc(slide: Slide): string {
  return `/slides/${slide.part}/slide-${String(slide.number).padStart(2, '0')}.jpg`;
}
```

`getNextLesson` 은 같은 챕터 안에서 다음 레슨, 챕터의 마지막이면 다음 챕터의 첫 레슨을 반환합니다.

---

## 5. 디자인 시스템

### 5.1 컬러 (다크 테마 기본)

| 역할 | 다크 모드 | 라이트 모드 (옵션) |
|------|----------|------------------|
| 배경 (page) | `#0A0A0B` | `#FFFFFF` |
| 배경 (panel/card) | `#15151A` | `#F7F7F8` |
| 보더 | `#27272F` | `#E5E5EA` |
| 본문 텍스트 | `#EDEDEF` | `#0A0A0B` |
| 보조 텍스트 | `#9A9AA3` | `#52525B` |
| **악센트 (primary)** | **`#7C5CFF`** (보라) | 동일 |
| 악센트 호버 | `#9579FF` | 동일 |
| 성공 | `#22C55E` | 동일 |
| 경고 | `#F59E0B` | 동일 |
| 코드 박스 배경 | `#1B1B22` | `#F1F1F4` |

CSS 변수는 `globals.css` 의 `:root` / `.dark` 에 정의하고, Tailwind config 에 `colors.bg`, `colors.panel`, `colors.border`, `colors.fg`, `colors.muted`, `colors.accent` 로 매핑하세요.

### 5.2 타이포그래피

- 페이지 타이틀: `text-4xl md:text-5xl font-bold tracking-tight`
- 챕터 타이틀: `text-3xl font-bold`
- 레슨 타이틀: `text-2xl font-semibold`
- 본문: `text-base leading-relaxed`
- 캡션 / 보조: `text-sm text-muted`
- 코드/명령어: `font-mono text-sm bg-codebg px-2 py-1 rounded`
- 번호 뱃지: `font-mono text-xs tracking-wider text-accent` (예: `LESSON 001`)

### 5.3 시각 모티브 (반복 사용)
- **보라색 좌측 4px 보더**: 현재 활성 사이드바 항목, 강조 카드
- **번호 + 점**: `01.`, `02.` 형식으로 모노스페이스로 표기
- **둥근 모서리는 작게** (`rounded-md` 6px), 완전 라운드는 뱃지에만
- 그림자 대신 `border` 로 깊이 표현

### 5.4 절대 금지
- 그라디언트 배경 (지나치게 화려해 보임)
- 큰 둥근 카드 (`rounded-2xl` 이상)
- 이모지 사용 (사내 교육 톤)
- 가운데 정렬 본문 텍스트
- 화려한 애니메이션 (간단한 페이드만)

---

## 6. 화면 사양

### 6.1 글로벌 레이아웃 (`app/layout.tsx`)

```
┌──────────────────────────────────────────────────────────┐
│ Sidebar (300px)            │ Main content (flex-1)        │
│ ─────────────              │                              │
│ [로고/제목]                 │  ← 페이지별 컨텐츠           │
│                            │                              │
│ CHAPTER 0                  │                              │
│   레슨 리스트              │                              │
│ CHAPTER 1                  │                              │
│   레슨 리스트              │                              │
│ ...                        │                              │
│                            │                              │
└──────────────────────────────────────────────────────────┘
```

- 데스크톱: 사이드바 고정 폭 300px, 좌측 고정 (sticky), 메인은 max-w-5xl 가운데 정렬, 양옆 패딩.
- 모바일 (< 768px): 사이드바는 햄버거 버튼으로 토글되는 오버레이.
- 사이드바 상단에 "바이브코딩 아카데미" 로고 텍스트와 "v1.0" 정도의 작은 뱃지.

### 6.2 홈 (`/`)

**구성**:
1. **히어로 섹션**: 큰 타이틀 + 부제 + 한 문장 설명
   - 타이틀: `바이브코딩 아카데미`
   - 부제: `Claude → Antigravity → GitHub → Vercel`
   - 설명: `누구나 따라하면 웹앱을 만들고 배포할 수 있습니다.`
2. **시작하기 버튼**: 첫 챕터의 첫 레슨으로 이동 (`/chapters/setup/lesson-001`)
3. **챕터 그리드**: 6개 챕터를 2열 그리드로. 각 카드에 챕터 번호, 제목, 부제, 레슨 개수, "시작 →" 링크.

### 6.3 챕터 페이지 (`/chapters/[chapterSlug]`)

**구성**:
1. 빵부스러기 (`홈 / CHAPTER 0`)
2. 챕터 번호 뱃지 + 제목 + 설명
3. 레슨 리스트 (세로): 각 행에 번호 / 제목 / 슬라이드 개수 / `→`
4. 하단: "다음 챕터 →" 버튼

### 6.4 레슨 페이지 (`/chapters/[chapterSlug]/[lessonSlug]`)

**가장 중요한 화면**. 슬라이드 이미지가 메인입니다.

```
┌──────────────────────────────────────────┐
│ 빵부스러기                                │
│ LESSON 001                               │
│ 본인 지메일 계정 준비                     │
│                                          │
│ [설명 1-3문장]                            │
│                                          │
│  ┌────────────────────────────────────┐  │
│  │                                    │  │
│  │     [슬라이드 이미지 — 큼]         │  │
│  │                                    │  │
│  └────────────────────────────────────┘  │
│  ◀  1 / 3  ▶                             │
│                                          │
│ [선택 캡션]                               │
│                                          │
│ ────────────────────────────────────     │
│ ← 이전 레슨        다음 레슨 →           │
└──────────────────────────────────────────┘
```

- 한 레슨에 슬라이드가 여러 장이면 SlideViewer 안에서 좌우 화살표로 넘김 (클라이언트 컴포넌트).
- 키보드 ←/→ 도 동작.
- 이미지는 `next/image` 사용, `priority`는 첫 슬라이드만, 나머지는 `loading="lazy"`.
- 이미지 컨테이너는 `aspect-[4/3]` (PPT가 4:3 비율).

### 6.5 사이드바 동작

- 챕터 제목을 클릭하면 토글로 펼침/접힘 (기본 펼침: 현재 페이지가 속한 챕터만).
- 현재 레슨 항목은 좌측 4px 보라 보더 + 배경 약간 밝게.
- 레슨 항목 텍스트는 `번호. 제목` (예: `001. 본인 지메일 계정 준비`).
- 사이드바도 자체 스크롤 (sticky + overflow).

---

## 7. 접근성 / 성능

- 모든 `<img>` 또는 `<Image>` 에 의미 있는 `alt` (예: `"레슨 001: 본인 지메일 계정 준비 - 슬라이드 1"`).
- `<main>`, `<nav>`, `<aside>` 시맨틱 태그 사용.
- 키보드 포커스 표시 유지 (Tailwind의 `focus-visible:` 활용).
- 이미지는 `loading="lazy"` 기본, 첫 슬라이드만 eager.
- LCP 최소화를 위해 히어로에는 큰 이미지를 넣지 않음.

---

## 8. README.md 에 포함할 내용 (Antigravity가 작성)

1. 프로젝트 소개 (한 단락)
2. **로컬 실행** — `npm install`, `npm run dev`
3. **GitHub 푸시** — `git init`, `git remote add`, `git push` 단계
4. **Vercel 배포** — vercel.com 가입 → New Project → GitHub 리포지토리 import → Deploy
5. 콘텐츠 추가 방법 — `src/lib/content.ts` 수정 + `public/slides/` 에 이미지 추가
6. 라이선스 / 저작권 (PPTX 출처: 컴퍼스랩 임선집 강의자료)

---

## 9. 검수 기준

Antigravity가 자체적으로 확인:

- `npm run build` → 에러 0개, 경고 최소화
- 메인 페이지 → 6개 챕터 카드 모두 표시
- 첫 레슨 → 슬라이드 이미지가 보이고, 다음 버튼 누르면 다음 레슨으로 이동
- 마지막 레슨 → "다음 레슨" 버튼이 비활성화 또는 "끝!" 표시
- 모바일 폭(375px) → 레이아웃이 깨지지 않음
