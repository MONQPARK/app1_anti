export type Slide = {
  part: 'part1' | 'part2';
  number: number;
  caption?: string;
};

export type Lesson = {
  slug: string;
  number: string;
  title: string;
  description: string;
  slides: Slide[];
};

export type Chapter = {
  slug: string;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  lessons: Lesson[];
};

export const chapters: Chapter[] = [
  {
    slug: 'setup',
    number: 0,
    title: '환경 세팅 — 도구 설치와 계정 준비',
    subtitle: 'Setup the toolchain',
    description: '바이브코딩에 필요한 모든 도구(Antigravity, Node.js, Git, GitHub)를 설치하고 계정을 준비합니다.',
    lessons: [
      {
        slug: 'gmail-account',
        number: '001',
        title: '본인 지메일 계정 준비',
        description: '이후 모든 도구(Antigravity, GitHub, Vercel, Google Sheets)에 연동할 본인 명의 지메일 계정을 준비합니다.',
        slides: [{ part: 'part1', number: 5 }]
      },
      {
        slug: 'install-antigravity',
        number: '002',
        title: '구글 Antigravity 설치',
        description: 'Google Antigravity(이하 "앤비")를 PC에 설치합니다. 앤비는 본 강의의 메인 코딩 도구입니다.',
        slides: [{ part: 'part1', number: 6 }, { part: 'part1', number: 7 }]
      },
      {
        slug: 'antigravity-extensions',
        number: '003',
        title: 'Antigravity 추가 설정',
        description: '앤비 안에서 한국어 / 코드 작성에 필요한 추가 확장을 설치합니다.',
        slides: [{ part: 'part1', number: 8 }, { part: 'part1', number: 9 }]
      },
      {
        slug: 'install-nodejs',
        number: '004',
        title: 'Node.js 설치',
        description: '웹앱을 로컬에서 실행하려면 Node.js 가 필요합니다. LTS 버전을 다운로드 받아 설치합니다.',
        slides: [{ part: 'part1', number: 10 }]
      },
      {
        slug: 'signup-github',
        number: '005',
        title: 'GitHub 가입',
        description: '코드를 저장·공유하고 Vercel에 배포하기 위한 GitHub 무료 계정을 만듭니다.',
        slides: [{ part: 'part1', number: 11 }, { part: 'part1', number: 12 }, { part: 'part1', number: 13 }, { part: 'part1', number: 14 }]
      },
      {
        slug: 'create-repo',
        number: '006',
        title: 'GitHub 리포지토리 생성',
        description: '프로젝트 코드를 담을 빈 리포지토리를 만들고 주소를 복사해 둡니다. 이 주소가 앤비와 Vercel을 연결하는 키입니다.',
        slides: [{ part: 'part1', number: 15 }, { part: 'part1', number: 16 }, { part: 'part1', number: 17 }]
      },
      {
        slug: 'install-git',
        number: '007',
        title: 'Git 설치 (Windows / macOS)',
        description: '로컬 PC에서 GitHub와 통신하려면 Git이 필요합니다. Windows는 Git for Windows, Mac은 Homebrew 기반으로 설치합니다.',
        slides: [{ part: 'part1', number: 20 }, { part: 'part1', number: 21 }, { part: 'part1', number: 22 }, { part: 'part1', number: 23 }, { part: 'part1', number: 24 }]
      },
      {
        slug: 'connect-antigravity-github',
        number: '008',
        title: 'Antigravity ↔ GitHub 연동',
        description: '앤비에서 GitHub로 파일을 업로드할 수 있도록 인증을 마칩니다. 에러가 나면 다음 강의 초반 설치 섹션에서 무료 지원을 받을 수 있습니다.',
        slides: [{ part: 'part1', number: 25 }, { part: 'part1', number: 26 }, { part: 'part1', number: 27 }, { part: 'part1', number: 28 }]
      }
    ]
  },
  {
    slug: 'app-design',
    number: 1,
    title: '앱 기획 — 구글시트·NotebookLM·Gemini Gem',
    subtitle: 'Design with AI — GV2-ATM Part 1',
    description: '구글시트·Tally·NotebookLM·Gemini Gem 으로 앱의 데이터 구조와 UI 프롬프트를 설계합니다.',
    lessons: [
      {
        slug: 'google-drive-sheet',
        number: '101',
        title: '구글 드라이브 + 스프레드시트 작업',
        description: '앱이 다룰 데이터를 담을 구글 스프레드시트를 만들고, 탭과 변수명을 설계합니다.',
        slides: [{ part: 'part1', number: 32 }, { part: 'part1', number: 33 }]
      },
      {
        slug: 'tally-survey',
        number: '102',
        title: 'Tally 설문 + 구글 시트 연동',
        description: 'Tally 설문 응답이 자동으로 구글 시트의 Tally_raw 탭에 쌓이도록 설계합니다.',
        slides: [{ part: 'part1', number: 34 }, { part: 'part1', number: 35 }]
      },
      {
        slug: 'notebooklm-prompt',
        number: '103',
        title: 'NotebookLM에서 슈퍼 프롬프트 생성',
        description: 'NotebookLM에 자료를 올리고, 앱 디자인용 "슈퍼 프롬프트"를 만들어 냅니다.',
        slides: [{ part: 'part1', number: 36 }]
      },
      {
        slug: 'gemini-gem-designer',
        number: '104',
        title: "Gemini Gem '슈퍼 디자이너 v1' 생성",
        description: 'Gemini Gem으로 v0.app에 보낼 디자인 프롬프트를 자동 생성하는 전용 에이전트를 만듭니다. 엑셀 변수명까지 반영한 정밀한 프롬프트가 결과물입니다.',
        slides: [{ part: 'part1', number: 37 }, { part: 'part1', number: 38 }, { part: 'part1', number: 39 }, { part: 'part1', number: 40 }]
      }
    ]
  },
  {
    slug: 'code-and-deploy',
    number: 2,
    title: '코딩과 배포 — v0.app · Antigravity · GitHub · Vercel',
    subtitle: 'Build & Ship — GV2-ATM Part 2',
    description: 'v0.app으로 앱 디자인을 생성하고, Antigravity에서 다듬어 GitHub로 푸시하고, Vercel로 웹에 배포합니다.',
    lessons: [
      {
        slug: 'v0-app-design',
        number: '105',
        title: 'v0.app 로그인 + 웹앱 디자인 생성',
        description: 'v0.app(=v0.dev)에 로그인해 챕터 1에서 만든 디자인 프롬프트를 입력합니다. 결과 코드를 ZIP으로 다운로드해 [문서] > [Antigravity] 폴더에 풀어둡니다.',
        slides: [{ part: 'part1', number: 44 }, { part: 'part1', number: 45 }, { part: 'part1', number: 46 }, { part: 'part1', number: 47 }]
      },
      {
        slug: 'antigravity-edit',
        number: '106',
        title: 'Antigravity에서 디자인·기능 수정',
        description: '앤비에서 v0.app으로 받은 코드 폴더를 열고, 자연어 명령으로 디자인과 기능을 다듬습니다.',
        slides: [{ part: 'part1', number: 48 }, { part: 'part1', number: 49 }, { part: 'part1', number: 50 }, { part: 'part1', number: 51 }]
      },
      {
        slug: 'push-to-github',
        number: '107',
        title: 'Antigravity → GitHub 코드 업로드',
        description: '앤비에서 변경된 코드를 챕터 0에서 만든 GitHub 리포지토리로 푸시합니다. 0단계의 008 작업이 마무리되어 있어야 합니다.',
        slides: [{ part: 'part1', number: 52 }]
      },
      {
        slug: 'vercel-deploy',
        number: '108',
        title: 'Vercel 배포',
        description: 'Vercel.com 에 GitHub로 로그인하고, 방금 푸시한 리포지토리를 import 한 뒤 [Deploy] 버튼을 누릅니다. 끝나면 공개 URL이 발급되어 카톡으로 바로 공유할 수 있습니다.',
        slides: [
          { part: 'part1', number: 53 }, { part: 'part1', number: 54 }, { part: 'part1', number: 55 }, { part: 'part1', number: 56 },
          { part: 'part1', number: 57 }, { part: 'part1', number: 58 }, { part: 'part1', number: 59 }, { part: 'part1', number: 60 },
          { part: 'part1', number: 61 }, { part: 'part1', number: 62 }, { part: 'part1', number: 63 }, { part: 'part1', number: 64 }
        ]
      }
    ]
  },
  {
    slug: 'data-link-gas',
    number: 3,
    title: '데이터 연동 ① — Google Apps Script',
    subtitle: 'Connect with Apps Script',
    description: '구글 앱스 스크립트(GAS)로 앱과 구글 시트를 가장 간단하게 연결하는 방법입니다. 교육용 첫 시도로 추천합니다.',
    lessons: [
      {
        slug: 'download-app-code',
        number: '301',
        title: 'v0.app 코드 다운로드 + 폴더 정리',
        description: 'v0.app에서 만든 앱 코드 ZIP을 받아 풀고, [문서] > [Antigravity] > [t폴더] 위치에 저장한 뒤 앤비에서 엽니다.',
        slides: [{ part: 'part2', number: 5 }, { part: 'part2', number: 6 }, { part: 'part2', number: 7 }, { part: 'part2', number: 8 }, { part: 'part2', number: 9 }, { part: 'part2', number: 10 }]
      },
      {
        slug: 'prepare-google-sheet',
        number: '302',
        title: '구글 시트 준비',
        description: '노션 링크에서 받은 엑셀 파일을 구글 드라이브에 올리고 구글 스프레드시트로 변환합니다. 앱의 탭과 시트의 탭이 1:1로 매칭되어야 합니다.',
        slides: [{ part: 'part2', number: 11 }]
      },
      {
        slug: 'gas-prompt',
        number: '303',
        title: 'Antigravity에 GAS 연동 프롬프트 입력',
        description: '앤비에 "구글 시트의 앱스 스크립트를 이용한 간단한 연동 방법"을 묻고, 단계별 안내를 받아냅니다.',
        slides: [{ part: 'part2', number: 12 }, { part: 'part2', number: 13 }, { part: 'part2', number: 14 }, { part: 'part2', number: 15 }, { part: 'part2', number: 16 }, { part: 'part2', number: 17 }, { part: 'part2', number: 18 }]
      },
      {
        slug: 'code-gs-deploy',
        number: '304',
        title: 'Code.gs 작성 + 웹 앱 배포',
        description: '앤비가 생성한 코드를 Code.gs에 붙여 넣고, 앱스 스크립트의 [배포]에서 웹 앱으로 배포한 뒤 URL을 복사합니다.',
        slides: [{ part: 'part2', number: 19 }, { part: 'part2', number: 20 }, { part: 'part2', number: 21 }, { part: 'part2', number: 22 }, { part: 'part2', number: 23 }, { part: 'part2', number: 24 }, { part: 'part2', number: 25 }, { part: 'part2', number: 26 }]
      },
      {
        slug: 'app-sheet-test',
        number: '305',
        title: '앱 ↔ 시트 연동 테스트',
        description: '앱에서 데이터를 입력해 보고, 구글 시트에 행이 추가되는지 확인합니다.',
        slides: [{ part: 'part2', number: 27 }, { part: 'part2', number: 28 }, { part: 'part2', number: 29 }, { part: 'part2', number: 30 }, { part: 'part2', number: 31 }]
      }
    ]
  },
  {
    slug: 'data-link-gcp',
    number: 4,
    title: '데이터 연동 ② — Google Cloud Console',
    subtitle: 'Connect with Google Cloud Console',
    description: '더 정식이고 확장성 있는 방식. 서비스 계정과 API 키로 시트를 연동합니다. 한 번에 안 되는 게 정상이니 5번 정도 반복 연습을 권장합니다.',
    lessons: [
      {
        slug: 'download-and-open',
        number: '401',
        title: '코드 다운로드 + Antigravity 오픈',
        description: 'v0.app 코드를 다운받아 지정 폴더에 풀고 앤비에서 엽니다. (CHAPTER 3과 동일한 사전 작업)',
        slides: [{ part: 'part2', number: 35 }, { part: 'part2', number: 36 }, { part: 'part2', number: 37 }, { part: 'part2', number: 38 }, { part: 'part2', number: 39 }, { part: 'part2', number: 40 }]
      },
      {
        slug: 'console-prompt',
        number: '402',
        title: 'Antigravity에 클라우드 콘솔 연동 프롬프트 입력',
        description: '앤비에 "구글 클라우드 콘솔 API 키로 시트와 연동하는 방법"을 단계별로 묻습니다. 메뉴명이 한국어로 다르게 보이면 영어 메뉴명으로 다시 받아냅니다.',
        slides: [{ part: 'part2', number: 41 }, { part: 'part2', number: 42 }, { part: 'part2', number: 43 }, { part: 'part2', number: 44 }]
      },
      {
        slug: 'new-project',
        number: '403',
        title: '클라우드 콘솔에 새 프로젝트 생성',
        description: '구글 클라우드 콘솔에서 새 프로젝트를 만들고, 프로젝트 ID를 메모합니다.',
        slides: [{ part: 'part2', number: 45 }, { part: 'part2', number: 46 }, { part: 'part2', number: 47 }, { part: 'part2', number: 48 }, { part: 'part2', number: 49 }, { part: 'part2', number: 50 }]
      },
      {
        slug: 'enable-api-service-account',
        number: '404',
        title: 'Sheets API 활성화 + 서비스 계정 생성',
        description: '프로젝트에 Google Sheets API를 활성화하고, 서비스 계정(service account)을 만들어 권한을 부여합니다.',
        slides: [{ part: 'part2', number: 51 }, { part: 'part2', number: 52 }, { part: 'part2', number: 53 }, { part: 'part2', number: 54 }, { part: 'part2', number: 55 }, { part: 'part2', number: 56 }, { part: 'part2', number: 57 }, { part: 'part2', number: 58 }, { part: 'part2', number: 59 }, { part: 'part2', number: 60 }, { part: 'part2', number: 61 }, { part: 'part2', number: 62 }, { part: 'part2', number: 63 }, { part: 'part2', number: 64 }, { part: 'part2', number: 65 }, { part: 'part2', number: 66 }, { part: 'part2', number: 67 }, { part: 'part2', number: 68 }]
      },
      {
        slug: 'download-json-key',
        number: '405',
        title: 'JSON 키 다운로드 + 시트 공유',
        description: '서비스 계정의 JSON 키 파일을 다운로드하고, 그 계정 이메일을 구글 시트에 [편집자]로 공유합니다.',
        slides: [{ part: 'part2', number: 69 }, { part: 'part2', number: 70 }, { part: 'part2', number: 71 }, { part: 'part2', number: 72 }]
      },
      {
        slug: 'connect-app-and-sheet',
        number: '406',
        title: '앱 코드 → 시트 연결 + GitHub 푸시',
        description: '앤비에서 환경변수를 설정하고 GitHub 리포지토리 주소를 본인 것으로 교체한 뒤 푸시합니다. 이후 작업은 다음 챕터의 Vercel 추가 조치로 이어집니다.',
        slides: [{ part: 'part2', number: 73 }, { part: 'part2', number: 74 }, { part: 'part2', number: 75 }, { part: 'part2', number: 76 }, { part: 'part2', number: 77 }, { part: 'part2', number: 78 }, { part: 'part2', number: 79 }, { part: 'part2', number: 80 }, { part: 'part2', number: 81 }, { part: 'part2', number: 82 }]
      }
    ]
  },
  {
    slug: 'vercel-extras',
    number: 5,
    title: '클라우드 연동 후 Vercel 추가 조치',
    subtitle: 'Production-ready deployment',
    description: '클라우드 콘솔로 시트와 연동한 후, Vercel에서 환경변수와 권한을 마저 설정해 실제 운영 가능한 상태로 만듭니다.',
    lessons: [
      {
        slug: 'vercel-env-vars',
        number: '501',
        title: 'Vercel 환경변수 등록',
        description: 'JSON 키와 시트 ID 등 비밀값을 Vercel 프로젝트의 Environment Variables 에 안전하게 등록합니다.',
        slides: [{ part: 'part2', number: 84 }, { part: 'part2', number: 85 }, { part: 'part2', number: 86 }, { part: 'part2', number: 87 }, { part: 'part2', number: 88 }, { part: 'part2', number: 89 }, { part: 'part2', number: 90 }, { part: 'part2', number: 91 }]
      },
      {
        slug: 'redeploy-and-verify',
        number: '502',
        title: '재배포 + 동작 확인',
        description: 'Vercel에서 다시 Deploy 하고, 공개 URL에서 시트로의 입출력이 정상 동작하는지 확인합니다. 여기까지가 "웹앱 상용화" 단계입니다.',
        slides: [{ part: 'part2', number: 92 }, { part: 'part2', number: 93 }, { part: 'part2', number: 94 }, { part: 'part2', number: 95 }]
      }
    ]
  }
];

export function getChapter(slug: string): Chapter | undefined {
  return chapters.find(c => c.slug === slug);
}

export function getLesson(chapterSlug: string, lessonSlug: string): { chapter: Chapter; lesson: Lesson } | undefined {
  const chapter = getChapter(chapterSlug);
  if (!chapter) return undefined;
  
  const lesson = chapter.lessons.find(l => l.slug === lessonSlug);
  if (!lesson) return undefined;
  
  return { chapter, lesson };
}

export function getNextLesson(chapterSlug: string, lessonSlug: string): { chapterSlug: string; lessonSlug: string } | undefined {
  const chapterIdx = chapters.findIndex(c => c.slug === chapterSlug);
  if (chapterIdx === -1) return undefined;
  
  const chapter = chapters[chapterIdx];
  const lessonIdx = chapter.lessons.findIndex(l => l.slug === lessonSlug);
  if (lessonIdx === -1) return undefined;
  
  if (lessonIdx < chapter.lessons.length - 1) {
    return { chapterSlug, lessonSlug: chapter.lessons[lessonIdx + 1].slug };
  } else if (chapterIdx < chapters.length - 1) {
    return { chapterSlug: chapters[chapterIdx + 1].slug, lessonSlug: chapters[chapterIdx + 1].lessons[0].slug };
  }
  
  return undefined;
}

export function getPrevLesson(chapterSlug: string, lessonSlug: string): { chapterSlug: string; lessonSlug: string } | undefined {
  const chapterIdx = chapters.findIndex(c => c.slug === chapterSlug);
  if (chapterIdx === -1) return undefined;
  
  const chapter = chapters[chapterIdx];
  const lessonIdx = chapter.lessons.findIndex(l => l.slug === lessonSlug);
  if (lessonIdx === -1) return undefined;
  
  if (lessonIdx > 0) {
    return { chapterSlug, lessonSlug: chapter.lessons[lessonIdx - 1].slug };
  } else if (chapterIdx > 0) {
    const prevChapter = chapters[chapterIdx - 1];
    return { chapterSlug: prevChapter.slug, lessonSlug: prevChapter.lessons[prevChapter.lessons.length - 1].slug };
  }
  
  return undefined;
}

export function slideSrc(slide: Slide): string {
  return `/slides/${slide.part}/slide-${String(slide.number).padStart(2, '0')}.jpg`;
}
