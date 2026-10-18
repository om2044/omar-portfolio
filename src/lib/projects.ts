export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  context: string;
  problem: string;
  contributions: string[];
  technologies: string[];
  focus: string;
  repository?: string;
  demo?: string;
  deploymentSource?: string;
  images?: {
    src: string;
    alt: string;
    caption: string;
    width: number;
    height: number;
  }[];
};

export const projects: Project[] = [
  {
    id: "ecodrive", number: "01", title: "ECODRIVE-AI", category: "AI / DATA ENGINEERING",
    summary: "From driving data to fuel-consumption models. Connecting physical simulation and machine learning.",
    context: "Capgemini Engineering · July–August 2026 · Casablanca",
    problem: "How can real driving data and physical simulation support reliable fuel-consumption modeling?",
    contributions: [
      "Prepared and structured real driving data, with SHA-256 hashing for data traceability.",
      "Built a fuel-consumption modeling pipeline with nine subsystems using MATLAB / Simulink and Python.",
      "Performed exploratory analysis and feature engineering over 30-second sliding windows.",
      "Split training, validation, and test data by vehicle to prevent data leakage, and compared machine learning models with the physical model.",
    ],
    technologies: ["Python", "MATLAB", "Simulink", "Machine Learning", "Data Engineering"],
    focus: "Data traceability, vehicle-level evaluation, and comparison between physical and machine learning models for fuel-consumption estimation.",
  },
  {
    id: "tomato", number: "02", title: "TomatoGrade", category: "COMPUTER VISION / FULL-STACK",
    summary: "A deployed computer vision prototype for tomato quality classification and prediction tracking.",
    context: "Full-stack MVP · Hugging Face Spaces · 2026",
    problem: "How can image classification help distinguish export-grade tomatoes, local-market produce, and rejects?",
    contributions: [
      "Prepared a 5,000-image dataset through a Medallion pipeline for three quality classes: A (export), B (local market), and C (reject).",
      "Built a FastAPI prediction workflow with background removal, YOLO classification, and prediction storage in PostgreSQL on Neon.",
      "Connected image uploads and webcam captures to a React interface with predicted classes, confidence scores, and a dashboard aggregating saved predictions.",
      "Deployed the React / Vite frontend and FastAPI backend together in a Docker-based Hugging Face Space.",
    ],
    technologies: ["YOLO", "OpenCV", "FastAPI", "React / Vite", "PostgreSQL / Neon", "Docker", "Hugging Face Spaces"],
    focus: "Connecting model inference, image preprocessing, prediction history, and a usable supervision interface in a deployed prototype.",
    repository: "https://github.com/om2044/tomato-grading",
    demo: "https://huggingface.co/spaces/om440/tomato-grading-app",
    deploymentSource: "https://huggingface.co/spaces/om440/tomato-grading-app/tree/main",
    images: [{
      src: "/projects/tomato-dashboard.png",
      alt: "TomatoGrade supervision dashboard with image upload, class distribution, and rejection history.",
      caption: "TomatoGrade — supervision interface with class distribution and prediction history.",
      width: 1917,
      height: 885,
    }, {
      src: "/projects/tomato-scanner.png",
      alt: "TomatoGrade prototype scanner showing a captured tomato and a classification result.",
      caption: "Earlier scanner prototype — image capture and classification result. Legacy interface labels do not describe the current inference modes.",
      width: 1137,
      height: 605,
    }],
  },
  {
    id: "olist", number: "03", title: "Olist E-Commerce BI", category: "DATA ENGINEERING / BUSINESS INTELLIGENCE",
    summary: "From e-commerce records to a data warehouse and interactive business reporting.",
    context: "Data warehouse & analytics project · 2025",
    problem: "How can sales, payment, and customer-review data be brought together for business analysis?",
    contributions: [
      "Modeled a SQL Server data warehouse using a galaxy schema, with shared dimensions for sales, payments, and reviews.",
      "Built an SSIS ETL pipeline with staging, data cleaning, and dimension and fact loading.",
      "Developed an interactive Streamlit dashboard with Plotly visualizations for sales, payments, customer satisfaction, and logistics.",
    ],
    technologies: ["SQL Server", "SQL", "SSIS", "Python", "Streamlit", "Plotly"],
    focus: "Turning raw e-commerce data into a structured warehouse and a usable analytics interface.",
    repository: "https://github.com/om2044/Olist-BI-Solution-ETL-SSIS-visualisation-",
  },
  {
    id: "documents", number: "04", title: "OCR & Document Intelligence", category: "DOCUMENT AI",
    summary: "Helping machines make sense of the written world.",
    context: "NETALEK Services · July–August 2025 · Agadir",
    problem: "Recognizing handwriting in document images with multimodal language models and OCR.",
    contributions: ["Fine-tuned LLaMA 3.2 Vision on the RIMES dataset for handwriting recognition."],
    technologies: ["OCR", "LLaMA 3.2 Vision", "RIMES", "Multimodal LLMs"],
    focus: "Adapting a multimodal language model to the recognition of handwritten text.",
  },
  {
    id: "anomaly", number: "05", title: "Automated Visual Anomaly Detection", category: "COMPUTER VISION",
    summary: "Teaching a model to notice what doesn’t belong.",
    context: "Computer vision project",
    problem: "Detecting visual anomalies in bottle imagery using the MVTec AD Bottle dataset.",
    contributions: ["Worked with the MVTec AD Bottle dataset for visual anomaly detection.", "Used Canny edge detection and ResNet18 transfer learning to explore visual features and anomalies."],
    technologies: ["Computer Vision", "Canny Edge Detection", "ResNet18", "Transfer Learning", "MVTec AD"],
    focus: "Exploring classical image processing and deep learning approaches to visual inspection.",
  },
  {
    id: "portfolio", number: "06", title: "Personal Portfolio", category: "WEB DEVELOPMENT",
    summary: "A place to connect the projects, engineering work, and interests behind this portfolio.",
    context: "Personal website · Cloudflare · 2026",
    problem: "How can a portfolio make technical work easy to explore and verify?",
    contributions: [
      "Organized project case studies, experience, technical skills, and a downloadable résumé in a responsive Next.js website.",
      "Connected project descriptions to screenshots, source repositories, and deployed demos.",
      "Published a static export on Cloudflare, with keyboard-accessible navigation, reduced-motion support, and locally served fonts.",
    ],
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Motion", "Cloudflare"],
    focus: "Clear technical storytelling, accessible interaction, and a lightweight static deployment.",
    repository: "https://github.com/om2044/omar-portfolio",
  },
];
