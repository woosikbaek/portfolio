# 🌌 Modern Minimal Deep Dark Portfolio

성능 최적화와 세련된 사용자 경험에 집중한 **Deep Dark 모드** 기반의 프리미엄 포트폴리오입니다.

## ✨ 프로젝트 하이라이트

- **Deep Matte Dark UI**: 눈이 편안한 딥 블랙(#050505) 테마와 비비드한 인디고 블루 포인트.
- **Ultra Smooth Scrolling**: `Lenis` 라이브러리를 통한 부드러운 관성 스크롤 구현.
- **High Performance**: 
  - `backdrop-filter: blur` 최적화를 통한 스크롤 버벅임(Micro-stuttering) 해결.
  - GPU 가속을 활용한 배경 오로라 및 섹션 애니메이션 구현.
- **Interactive Framer Motion**: 스크롤 상태에 반응하는 세련된 인터랙션 및 등장 애니메이션.
- **Hybrid Skills Grid**: 6개의 정교한 카테고리로 구성된 완벽한 그리드 밸런스.

## 🚀 기술 스택

- **Core**: `React 19`, `JavaScript`
- **Build Tool**: `Vite`
- **Animation**: `Framer Motion`
- **Smooth Scroll**: `@studio-freight/lenis`
- **Styling**: `CSS Modules`와 전역 변수 시스템을 이용한 일관된 디자인

## 📂 프로젝트 구조

```text
src/
├── components/
│   ├── layout/           # Header, Footer (Fixed UI)
│   ├── sections/         # Hero, About, Skills, Projects, Experience, Contact
│   └── common/           # Button, Card, SectionTitle (Reusable)
├── data/                 # JSON 기반 콘텐츠 관리
├── styles/
│   └── variables.module.css  # 디자인 시스템 (Color, Spacing, Shadow)
└── index.css             # 글로벌 최적화 및 폰트 설정
```

## 🛠️ 주요 엔지니어링 포인트

### 1. 렌더링 성능 최적화
스크롤 시 발생하는 GPU 부하를 줄이기 위해 다음 작업을 수행했습니다:
- **배경 레이어 분리**: `body::before` 가상 요소를 활용하여 배경 그라데이션을 레이어로 분리하고 GPU 가속(`translateZ(0)`)을 적용했습니다.
- **Blur 연산 최소화**: 성능에 치명적인 `backdrop-filter` 블러 값을 조정하여 저사양 기기에서도 부드러운 스크롤을 보장합니다.

### 2. 컴포넌트 기반 데이터 관리
콘텐츠 수정을 위해 코드를 건드릴 필요 없이 `src/data/*.json` 파일만 수정하면 포트폴리오의 모든 내용이 즉시 반영됩니다.

### 3. 반응형 디자인
모든 섹션은 모바일, 태블릿, 데스크탑 환경에 최적화된 유동적인 레이아웃을 제공합니다.

## 🚀 실행 및 빌드

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build
```

---

**Built with Precision & Passion**  
사용자의 시선을 사로잡는 동시에 최고의 성능을 선사합니다. ✨
