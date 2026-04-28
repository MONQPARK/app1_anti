# 강의 콘텐츠 데이터

이 문서를 그대로 `src/lib/content.ts` 의 `chapters` 배열로 옮기세요.
모든 슬라이드 번호는 `public/slides/part1/slide-XX.jpg` / `public/slides/part2/slide-XX.jpg` 에 매핑됩니다.

## 챕터 구성 한눈에 보기

| 번호 | 챕터 슬러그 | 제목 | 출처 |
|------|------------|------|------|
| 0 | `setup` | 환경 세팅 — 도구 설치와 계정 준비 | Part1 #1–#28 |
| 1 | `app-design` | 앱 기획 — 구글시트·NotebookLM·Gemini Gem | Part1 #29–#40 |
| 2 | `code-and-deploy` | 코딩과 배포 — v0.app · Antigravity · GitHub · Vercel | Part1 #41–#65 |
| 3 | `data-link-gas` | 데이터 연동 ① — Google Apps Script | Part2 #1–#31 |
| 4 | `data-link-gcp` | 데이터 연동 ② — Google Cloud Console | Part2 #32–#82 |
| 5 | `vercel-extras` | 클라우드 연동 후 Vercel 추가 조치 | Part2 #83–#96 |

---

## CHAPTER 0 — 환경 세팅 (slug: `setup`)

부제: `Setup the toolchain`
설명: `바이브코딩에 필요한 모든 도구(Antigravity, Node.js, Git, GitHub)를 설치하고 계정을 준비합니다.`

### Lesson 001 (slug: `gmail-account`)
- 제목: `본인 지메일 계정 준비`
- 설명: `이후 모든 도구(Antigravity, GitHub, Vercel, Google Sheets)에 연동할 본인 명의 지메일 계정을 준비합니다.`
- 슬라이드: part1/5

### Lesson 002 (slug: `install-antigravity`)
- 제목: `구글 Antigravity 설치`
- 설명: `Google Antigravity(이하 "앤비")를 PC에 설치합니다. 앤비는 본 강의의 메인 코딩 도구입니다.`
- 슬라이드: part1/6, part1/7

### Lesson 003 (slug: `antigravity-extensions`)
- 제목: `Antigravity 추가 설정`
- 설명: `앤비 안에서 한국어 / 코드 작성에 필요한 추가 확장을 설치합니다.`
- 슬라이드: part1/8, part1/9

### Lesson 004 (slug: `install-nodejs`)
- 제목: `Node.js 설치`
- 설명: `웹앱을 로컬에서 실행하려면 Node.js 가 필요합니다. LTS 버전을 다운로드 받아 설치합니다.`
- 슬라이드: part1/10

### Lesson 005 (slug: `signup-github`)
- 제목: `GitHub 가입`
- 설명: `코드를 저장·공유하고 Vercel에 배포하기 위한 GitHub 무료 계정을 만듭니다.`
- 슬라이드: part1/11, part1/12, part1/13, part1/14

### Lesson 006 (slug: `create-repo`)
- 제목: `GitHub 리포지토리 생성`
- 설명: `프로젝트 코드를 담을 빈 리포지토리를 만들고 주소를 복사해 둡니다. 이 주소가 앤비와 Vercel을 연결하는 키입니다.`
- 슬라이드: part1/15, part1/16, part1/17

### Lesson 007 (slug: `install-git`)
- 제목: `Git 설치 (Windows / macOS)`
- 설명: `로컬 PC에서 GitHub와 통신하려면 Git이 필요합니다. Windows는 Git for Windows, Mac은 Homebrew 기반으로 설치합니다.`
- 슬라이드: part1/20, part1/21, part1/22, part1/23, part1/24

### Lesson 008 (slug: `connect-antigravity-github`)
- 제목: `Antigravity ↔ GitHub 연동`
- 설명: `앤비에서 GitHub로 파일을 업로드할 수 있도록 인증을 마칩니다. 에러가 나면 다음 강의 초반 설치 섹션에서 무료 지원을 받을 수 있습니다.`
- 슬라이드: part1/25, part1/26, part1/27, part1/28

---

## CHAPTER 1 — 앱 기획 (slug: `app-design`)

부제: `Design with AI — GV2-ATM Part 1`
설명: `구글시트·Tally·NotebookLM·Gemini Gem 으로 앱의 데이터 구조와 UI 프롬프트를 설계합니다.`

### Lesson 101 (slug: `google-drive-sheet`)
- 제목: `구글 드라이브 + 스프레드시트 작업`
- 설명: `앱이 다룰 데이터를 담을 구글 스프레드시트를 만들고, 탭과 변수명을 설계합니다.`
- 슬라이드: part1/32, part1/33

### Lesson 102 (slug: `tally-survey`)
- 제목: `Tally 설문 + 구글 시트 연동`
- 설명: `Tally 설문 응답이 자동으로 구글 시트의 Tally_raw 탭에 쌓이도록 설계합니다.`
- 슬라이드: part1/34, part1/35

### Lesson 103 (slug: `notebooklm-prompt`)
- 제목: `NotebookLM에서 슈퍼 프롬프트 생성`
- 설명: `NotebookLM에 자료를 올리고, 앱 디자인용 "슈퍼 프롬프트"를 만들어 냅니다.`
- 슬라이드: part1/36

### Lesson 104 (slug: `gemini-gem-designer`)
- 제목: `Gemini Gem '슈퍼 디자이너 v1' 생성`
- 설명: `Gemini Gem으로 v0.app에 보낼 디자인 프롬프트를 자동 생성하는 전용 에이전트를 만듭니다. 엑셀 변수명까지 반영한 정밀한 프롬프트가 결과물입니다.`
- 슬라이드: part1/37, part1/38, part1/39, part1/40

---

## CHAPTER 2 — 코딩과 배포 (slug: `code-and-deploy`)

부제: `Build & Ship — GV2-ATM Part 2`
설명: `v0.app으로 앱 디자인을 생성하고, Antigravity에서 다듬어 GitHub로 푸시하고, Vercel로 웹에 배포합니다.`

### Lesson 105 (slug: `v0-app-design`)
- 제목: `v0.app 로그인 + 웹앱 디자인 생성`
- 설명: `v0.app(=v0.dev)에 로그인해 챕터 1에서 만든 디자인 프롬프트를 입력합니다. 결과 코드를 ZIP으로 다운로드해 [문서] > [Antigravity] 폴더에 풀어둡니다.`
- 슬라이드: part1/44, part1/45, part1/46, part1/47

### Lesson 106 (slug: `antigravity-edit`)
- 제목: `Antigravity에서 디자인·기능 수정`
- 설명: `앤비에서 v0.app으로 받은 코드 폴더를 열고, 자연어 명령으로 디자인과 기능을 다듬습니다.`
- 슬라이드: part1/48, part1/49, part1/50, part1/51

### Lesson 107 (slug: `push-to-github`)
- 제목: `Antigravity → GitHub 코드 업로드`
- 설명: `앤비에서 변경된 코드를 챕터 0에서 만든 GitHub 리포지토리로 푸시합니다. 0단계의 008 작업이 마무리되어 있어야 합니다.`
- 슬라이드: part1/52

### Lesson 108 (slug: `vercel-deploy`)
- 제목: `Vercel 배포`
- 설명: `Vercel.com 에 GitHub로 로그인하고, 방금 푸시한 리포지토리를 import 한 뒤 [Deploy] 버튼을 누릅니다. 끝나면 공개 URL이 발급되어 카톡으로 바로 공유할 수 있습니다.`
- 슬라이드: part1/53, part1/54, part1/55, part1/56, part1/57, part1/58, part1/59, part1/60, part1/61, part1/62, part1/63, part1/64

---

## CHAPTER 3 — 데이터 연동 ① GAS (slug: `data-link-gas`)

부제: `Connect with Apps Script`
설명: `구글 앱스 스크립트(GAS)로 앱과 구글 시트를 가장 간단하게 연결하는 방법입니다. 교육용 첫 시도로 추천합니다.`

### Lesson 301 (slug: `download-app-code`)
- 제목: `v0.app 코드 다운로드 + 폴더 정리`
- 설명: `v0.app에서 만든 앱 코드 ZIP을 받아 풀고, [문서] > [Antigravity] > [t폴더] 위치에 저장한 뒤 앤비에서 엽니다.`
- 슬라이드: part2/5, part2/6, part2/7, part2/8, part2/9, part2/10

### Lesson 302 (slug: `prepare-google-sheet`)
- 제목: `구글 시트 준비`
- 설명: `노션 링크에서 받은 엑셀 파일을 구글 드라이브에 올리고 구글 스프레드시트로 변환합니다. 앱의 탭과 시트의 탭이 1:1로 매칭되어야 합니다.`
- 슬라이드: part2/11

### Lesson 303 (slug: `gas-prompt`)
- 제목: `Antigravity에 GAS 연동 프롬프트 입력`
- 설명: `앤비에 "구글 시트의 앱스 스크립트를 이용한 간단한 연동 방법"을 묻고, 단계별 안내를 받아냅니다.`
- 슬라이드: part2/12, part2/13, part2/14, part2/15, part2/16, part2/17, part2/18

### Lesson 304 (slug: `code-gs-deploy`)
- 제목: `Code.gs 작성 + 웹 앱 배포`
- 설명: `앤비가 생성한 코드를 Code.gs에 붙여 넣고, 앱스 스크립트의 [배포]에서 웹 앱으로 배포한 뒤 URL을 복사합니다.`
- 슬라이드: part2/19, part2/20, part2/21, part2/22, part2/23, part2/24, part2/25, part2/26

### Lesson 305 (slug: `app-sheet-test`)
- 제목: `앱 ↔ 시트 연동 테스트`
- 설명: `앱에서 데이터를 입력해 보고, 구글 시트에 행이 추가되는지 확인합니다.`
- 슬라이드: part2/27, part2/28, part2/29, part2/30, part2/31

---

## CHAPTER 4 — 데이터 연동 ② 클라우드 콘솔 (slug: `data-link-gcp`)

부제: `Connect with Google Cloud Console`
설명: `더 정식이고 확장성 있는 방식. 서비스 계정과 API 키로 시트를 연동합니다. 한 번에 안 되는 게 정상이니 5번 정도 반복 연습을 권장합니다.`

### Lesson 401 (slug: `download-and-open`)
- 제목: `코드 다운로드 + Antigravity 오픈`
- 설명: `v0.app 코드를 다운받아 지정 폴더에 풀고 앤비에서 엽니다. (CHAPTER 3과 동일한 사전 작업)`
- 슬라이드: part2/35, part2/36, part2/37, part2/38, part2/39, part2/40

### Lesson 402 (slug: `console-prompt`)
- 제목: `Antigravity에 클라우드 콘솔 연동 프롬프트 입력`
- 설명: `앤비에 "구글 클라우드 콘솔 API 키로 시트와 연동하는 방법"을 단계별로 묻습니다. 메뉴명이 한국어로 다르게 보이면 영어 메뉴명으로 다시 받아냅니다.`
- 슬라이드: part2/41, part2/42, part2/43, part2/44

### Lesson 403 (slug: `new-project`)
- 제목: `클라우드 콘솔에 새 프로젝트 생성`
- 설명: `구글 클라우드 콘솔에서 새 프로젝트를 만들고, 프로젝트 ID를 메모합니다.`
- 슬라이드: part2/45, part2/46, part2/47, part2/48, part2/49, part2/50

### Lesson 404 (slug: `enable-api-service-account`)
- 제목: `Sheets API 활성화 + 서비스 계정 생성`
- 설명: `프로젝트에 Google Sheets API를 활성화하고, 서비스 계정(service account)을 만들어 권한을 부여합니다.`
- 슬라이드: part2/51, part2/52, part2/53, part2/54, part2/55, part2/56, part2/57, part2/58, part2/59, part2/60, part2/61, part2/62, part2/63, part2/64, part2/65, part2/66, part2/67, part2/68

### Lesson 405 (slug: `download-json-key`)
- 제목: `JSON 키 다운로드 + 시트 공유`
- 설명: `서비스 계정의 JSON 키 파일을 다운로드하고, 그 계정 이메일을 구글 시트에 [편집자]로 공유합니다.`
- 슬라이드: part2/69, part2/70, part2/71, part2/72

### Lesson 406 (slug: `connect-app-and-sheet`)
- 제목: `앱 코드 → 시트 연결 + GitHub 푸시`
- 설명: `앤비에서 환경변수를 설정하고 GitHub 리포지토리 주소를 본인 것으로 교체한 뒤 푸시합니다. 이후 작업은 다음 챕터의 Vercel 추가 조치로 이어집니다.`
- 슬라이드: part2/73, part2/74, part2/75, part2/76, part2/77, part2/78, part2/79, part2/80, part2/81, part2/82

---

## CHAPTER 5 — Vercel 추가 조치 (slug: `vercel-extras`)

부제: `Production-ready deployment`
설명: `클라우드 콘솔로 시트와 연동한 후, Vercel에서 환경변수와 권한을 마저 설정해 실제 운영 가능한 상태로 만듭니다.`

### Lesson 501 (slug: `vercel-env-vars`)
- 제목: `Vercel 환경변수 등록`
- 설명: `JSON 키와 시트 ID 등 비밀값을 Vercel 프로젝트의 Environment Variables 에 안전하게 등록합니다.`
- 슬라이드: part2/84, part2/85, part2/86, part2/87, part2/88, part2/89, part2/90, part2/91

### Lesson 502 (slug: `redeploy-and-verify`)
- 제목: `재배포 + 동작 확인`
- 설명: `Vercel에서 다시 Deploy 하고, 공개 URL에서 시트로의 입출력이 정상 동작하는지 확인합니다. 여기까지가 "웹앱 상용화" 단계입니다.`
- 슬라이드: part2/92, part2/93, part2/94, part2/95

---

## 기타 안내

- 표지·목차·간지 슬라이드(Part1 #1, #2, #3, #4, #18, #19, #29, #30, #31, #41, #42, #43, #65, Part2 #1, #2, #3, #4, #32, #33, #34, #83, #96)는 일부러 레슨에서 제외했습니다. 실습 자체와 무관한 페이지이기 때문입니다. 추후 "강의 소개"·"강사 소개" 등 별도 섹션을 추가할 수 있습니다.
- Part1 #31, #43 같이 한 컷짜리 셰브론은 챕터 전환점이라 챕터 부제로 흡수했습니다.
- 슬라이드 매핑이 빠진 게 발견되면 해당 챕터의 마지막 레슨에 보강 슬라이드로 덧붙이세요.
