# 🌌 Woosik's Premium Portfolio - Starfield Edition

성능과 감각적인 연출의 정점을 지향하는 **Cinematic Deep Dark** 기반의 프론트엔드 포트폴리오입니다.

## ✨ 프로젝트 하이라이트

### 🎬 Cinematic Intro Experience
- **Scroll-Driven Entrance**: 페이지 접속 시 인물의 이미지가 중앙에 배치되며, 스크롤에 따라 이미지 크기와 투명도가 정교하게 변하며 컨텐츠가 등장하는 몰입형 연출.
- **Breathing Effect**: 정지 상태일 때 인물 이미지가 은은하게 반짝이며 생동감을 부여.

### ☄️ High-Performance Space Environment
- **Physics-Based Canvas Background**: Matter.js의 무거운 연산을 제거하고 순수 Canvas API로 구현된 경량 우주 배경.
- **Starfield & Comet Animation**: 수백 개의 반짝이는 별과 가끔씩 밤하늘을 가르는 혜성 효과로 깊이 있는 공간감 선사.
- **Smart Icon Mapping**: 기술 스택 아이콘이 로드되지 않을 경우 자동으로 행성/천체 아이콘으로 대체되는 Robust한 폴백 시스템.

### 🚀 Technical Excellence
- **Ultra Smooth Scrolling**: `Lenis`를 통한 부드러운 스크롤과 `Framer Motion`의 조화로운 인터랙션.
- **Extreme Optimization**: GPU 가속 레이어 분리 및 `will-change` 속성 활용으로 60fps 유지.
- **JSON-Driven Content**: 모든 텍스트와 기술 스택 데이터를 JSON으로 분리하여 유지보수성 극대화.

## 🛠️ 기술 스택

- **Framework**: `React 19`
- **Animation**: `Framer Motion`
- **Scroll Engine**: `@studio-freight/lenis`
- **Background Engine**: `Custom Canvas API`
- **Styling**: `CSS Modules` (Pure JavaScript Context)
- **Icons**: `Devicon SVG Integration`

## 📂 프로젝트 구조

```text
src/
├── components/
│   ├── layout/           # Header (Profile Image Logo & Navigation)
│   ├── sections/         # Hero(Cinematic), Skills(Starfield), Projects, Contact
│   └── common/           # Reusable Button & Card Components
├── data/                 # JSON contents (profile, skills, projects)
├── styles/               # Design Tokens (variables.module.css)
└── index.css             # Performance Optimized Global Styles
```

## 🚀 실행 방법

```bash
# 의존성 설치
npm install

# 로컬 개발 서버
npm run dev

# 프로덕션 빌드 및 최적화
npm run build
```

---

**Built with Precision & Passion**  
수많은 별들 사이에서 빛나는 기술력과 열정을 확인해보세요. ✨🌌🚀
