# 🎨 개인 포트폴리오

다크모드 기반의 세련된 원페이지 포트폴리오입니다.

## 🚀 기술 스택

- **Frontend**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Styling**: CSS Modules
- **Language**: JavaScript

## 📁 프로젝트 구조

```
src/
├── components/
│   ├── layout/           # 레이아웃 컴포넌트
│   │   ├── Header/       # 헤더 (네비게이션)
│   │   └── Footer/       # 푸터
│   ├── sections/         # 페이지 섹션들
│   │   ├── Hero/         # 메인 히어로 섹션
│   │   ├── About/        # 자기소개
│   │   ├── Skills/       # 기술 스택
│   │   ├── Projects/     # 프로젝트 목록
│   │   ├── Experience/   # 경력 사항
│   │   └── Contact/      # 연락처
│   └── common/           # 공통 컴포넌트
│       ├── Button/       # 버튼 컴포넌트
│       ├── Card/         # 카드 컴포넌트
│       └── SectionTitle/ # 섹션 제목
├── data/                 # 데이터 파일 (JSON)
│   ├── profile.json      # 개인 정보
│   ├── projects.json     # 프로젝트 목록
│   ├── experience.json   # 경력 사항
│   └── skills.json       # 기술 스택
├── styles/
│   └── variables.module.css  # CSS 변수 (디자인 시스템)
└── index.css             # 글로벌 스타일
```

## 🎯 주요 기능

- ✨ **다크모드 디자인**: 세련된 다크 테마
- 🎨 **글래스모피즘**: 반투명 유리 효과
- 🌈 **그라데이션**: 생동감 있는 색상 조합
- 📱 **완벽한 반응형**: 모든 디바이스 지원
- 🎭 **부드러운 애니메이션**: 스크롤 및 호버 효과
- 📊 **데이터 기반**: JSON 파일로 쉬운 관리

## 📝 데이터 관리 가이드

### 1️⃣ 개인 정보 수정 (`src/data/profile.json`)

```json
{
  "name": "당신의 이름",
  "title": "직책/포지션",
  "subtitle": "한 줄 소개",
  "bio": "자세한 소개",
  "email": "your.email@example.com",
  "github": "https://github.com/yourusername",
  "linkedin": "https://linkedin.com/in/yourusername",
  "resume": "/resume.pdf",
  "avatar": "/avatar.jpg"
}
```

### 2️⃣ 프로젝트 추가 (`src/data/projects.json`)

```json
{
  "id": 1,
  "title": "프로젝트 제목",
  "description": "프로젝트 설명",
  "image": "/projects/project1.jpg",
  "tags": ["React", "Node.js"],
  "github": "https://github.com/...",
  "demo": "https://demo.com",
  "featured": true,  // 추천 프로젝트로 표시
  "year": "2024"
}
```

**프로젝트 추가 방법:**
1. `src/data/projects.json` 파일 열기
2. 배열에 새로운 프로젝트 객체 추가
3. `id`는 고유한 번호로 설정
4. 이미지는 `public/projects/` 폴더에 저장

### 3️⃣ 경력 추가 (`src/data/experience.json`)

```json
{
  "id": 1,
  "company": "회사명",
  "position": "직책",
  "period": "2023.01 - 현재",
  "description": "업무 설명",
  "achievements": [
    "주요 성과 1",
    "주요 성과 2"
  ],
  "skills": ["React", "TypeScript"],
  "current": true  // 현재 재직 중이면 true
}
```

**경력 추가 방법:**
1. `src/data/experience.json` 파일 열기
2. 배열 맨 위에 새로운 경력 추가 (최신순)
3. `current: true`는 현재 재직 중인 회사에만 설정

### 4️⃣ 기술 스택 수정 (`src/data/skills.json`)

```json
{
  "categories": [
    {
      "name": "Frontend",
      "icon": "💻",
      "skills": [
        { "name": "React", "level": 90 }
      ]
    }
  ]
}
```

**기술 추가 방법:**
1. 해당 카테고리의 `skills` 배열에 추가
2. `level`은 0-100 사이의 숫자 (프로그레스 바 표시)

## 🎨 디자인 커스터마이징

### 색상 변경 (`src/styles/variables.module.css`)

```css
:root {
  /* 주요 색상 */
  --color-primary: #6366f1;      /* 메인 컬러 */
  --color-secondary: #ec4899;    /* 보조 컬러 */
  --color-accent: #14b8a6;       /* 강조 컬러 */
  
  /* 배경 색상 */
  --color-bg-primary: #0a0a0f;
  --color-bg-secondary: #13131a;
}
```

### 폰트 변경 (`src/index.css`)

Google Fonts URL을 수정하여 원하는 폰트 사용:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');
```

## 🚀 실행 방법

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:5173` 접속

### 프로덕션 빌드

```bash
npm run build
```

빌드된 파일은 `dist/` 폴더에 생성됩니다.

### 프리뷰

```bash
npm run preview
```

## 📸 이미지 관리

### 프로필 이미지
- `public/avatar.jpg` - 본인 사진

### 프로젝트 이미지
- `public/projects/` 폴더에 저장
- 권장 크기: 800x480px
- 형식: JPG, PNG

### 이력서
- `public/resume.pdf` - 이력서 파일

## 🎯 배포 가이드

### Vercel 배포
1. GitHub에 코드 푸시
2. [Vercel](https://vercel.com)에서 Import
3. 자동 배포 완료

### Netlify 배포
1. GitHub에 코드 푸시
2. [Netlify](https://netlify.com)에서 Import
3. Build command: `npm run build`
4. Publish directory: `dist`

## 💡 유지보수 팁

### 정기적으로 업데이트할 항목
- ✅ 프로젝트 목록 (`projects.json`)
- ✅ 경력 사항 (`experience.json`)
- ✅ 기술 스택 레벨 (`skills.json`)
- ✅ 개인 정보 (`profile.json`)

### 성능 최적화
- 이미지는 WebP 형식 사용 권장
- 이미지 크기 최적화 (TinyPNG 등 사용)
- 불필요한 의존성 제거

## 📞 문의

프로젝트 관련 문의사항이 있으시면 이슈를 등록해주세요.

---

**Made with ❤️ using React + Vite**
