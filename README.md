# 🌌 Woosik Baek - Cinematic Frontend Portfolio

성능과 감각적인 연출의 균형을 맞춘 **Cinematic Deep Dark** 프론트엔드 포트폴리오입니다.  
사용자의 시선을 사로잡는 인물의 등장을 시작으로, 우주의 신비로움을 담은 인터랙티브 배경이 펼쳐집니다.

---

## ✨ Key Features

### 🎬 **Cinematic Scroll Introduction**
- **몰입형 등장 연출**: 페이지 접속 시 인물 이미지가 화면을 꽉 채우며 등장하고, 스크롤에 따라 부드럽게 배경으로 가라앉으며 컨텐츠가 서서히 드러납니다.
- **Dynamic Header**: 시네마틱 연출이 끝나는 타이밍에 맞춰 헤더와 컨텐츠가 나타나는 정교한 스크롤 싱크를 구현했습니다.

### ☄️ **Performance-First Physics Background**
- **Lightweight Canvas Engine**: Matter.js 같은 무거운 물리 엔진 없이 순수 Canvas API만으로 수백 개의 별과 부유하는 기술 스택 아이콘을 구현했습니다.
- **Robust Icon Loader**: Devicon CDN에서 아이콘을 불러오지 못할 경우 자동으로 행성 및 천체 아이콘으로 대체되는 폴백 시스템을 갖추고 있습니다.

### 📱 **Fully Responsive Experience**
- **Adaptive Typography**: 화면 크기에 따라 폰트 크기와 간격이 유동적으로 조절되는 디자인 시스템을 적용했습니다.
- **Mobile-First Navigation**: 모바일에서도 쾌적하게 사용할 수 있는 글래스모피즘 기반의 네비게이션 메뉴를 제공합니다.

### 🚀 **Technical Highlights**
- **Ultra Smooth Scrolling**: Lenis 라이브러리를 통해 데스크탑에서 부드러운 관성 스크롤을 제공합니다.
- **GPU Acceleration**: `will-change`, `translateZ(0)` 등의 속성을 활용하여 60fps의 부드러운 애니메이션을 유지합니다.
- **SEO & Social Sharing**: Vercel 배포 도메인에 최적화된 Open Graph 태그와 Twitter Card 설정을 통해 SNS 공유 시 완벽한 미리보기를 제공합니다.

---

## 🛠 Tech Stack

- **Core**: `React 19`, `JavaScript (ES6+)`
- **Animation**: `Framer Motion`
- **Scrolling**: `@studio-freight/lenis`
- **Styling**: `CSS Modules` (Pure CSS Design System)
- **Deployment**: `Vercel`

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── layout/           # Header, Footer (Fixed UI)
│   ├── sections/         # Hero, About, Skills, Projects, Experience, Contact
│   └── common/           # Reusable Components (Button, Card, SectionTitle)
├── data/                 # JSON-driven contents
├── styles/               # Design Tokens & Global Styles
└── App.jsx               # Main Layout & Scroll Engine Config
```

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/woosikbaek/portfolio.git

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

---

**Built with Precision & Passion**  
wookis의 기술력과 열정이 담긴 포트폴리오입니다. 우주를 유영하듯 편안하게 감상해 보세요. ✨🌌🌑