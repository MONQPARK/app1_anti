# 바이브코딩 아카데미 (Vibe Coding Academy)

사내 직원이 "이 앱만 따라오면" 바이브코딩으로 앱을 만들고 웹에 배포까지 끝낼 수 있는 단계별 셀프 학습 강의 플랫폼입니다. (Next.js 14 App Router 기반)

## 🚀 로컬 실행 방법

1. 의존성 패키지를 설치합니다:
   ```bash
   npm install
   ```
2. 개발 서버를 실행합니다:
   ```bash
   npm run dev
   ```
3. 브라우저에서 [http://localhost:3000](http://localhost:3000) 로 접속하여 확인합니다.

---

## 🛠 GitHub 푸시 방법

작업한 코드를 GitHub에 올려 Vercel 배포를 준비합니다.

1. 로컬 저장소를 초기화하고 커밋합니다 (최초 1회):
   ```bash
   git init
   git add .
   git commit -m "초기 설정: 바이브코딩 아카데미"
   ```
2. GitHub에서 만든 새 리포지토리 주소를 연결하고 푸시합니다:
   ```bash
   git remote add origin https://github.com/[본인아이디]/[리포지토리이름].git
   git push -u origin main
   ```

---

## 🌐 Vercel 배포 방법

1. [vercel.com](https://vercel.com/) 에 접속하여 GitHub 계정으로 로그인합니다.
2. **Add New...** > **Project** 를 클릭합니다.
3. 방금 푸시한 GitHub 리포지토리를 찾아 **Import** 버튼을 누릅니다.
4. 설정 변경 없이 **Deploy** 버튼을 클릭합니다.
5. 배포가 완료되면 발급된 공개 URL로 접속합니다!

---

## ✏️ 콘텐츠 추가/수정 방법

강의 슬라이드나 내용을 추가하려면 다음 두 가지를 진행하세요:

1. **이미지 추가**: `public/slides/part1/` 또는 `part2/` 폴더에 새 슬라이드 이미지를 넣습니다. (예: `slide-99.jpg`)
2. **데이터 연결**: `src/lib/content.ts` 파일을 열어 해당하는 챕터의 `lessons` 배열에 새 슬라이드 정보를 추가합니다.

---

## 📝 라이선스 / 저작권

- 본 플랫폼에 포함된 모든 강의 슬라이드(PPTX 기반 이미지)는 **컴퍼스랩 임선집** 강사의 자료를 바탕으로 작성되었습니다.
- 무단 전재 및 재배포를 금합니다.
