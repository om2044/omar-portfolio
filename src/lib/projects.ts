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
      "Built a fuel-consumption modeling pipeline using MATLAB / Simulink and Python.",
      "Performed exploratory analysis and feature engineering over 30-second sliding windows.",
      "Split training, validation, and test data by vehicle to prevent data leakage, and compared machine learning models with the physical model.",
      "Connected the simulation to a web interface for driving-session replay, eco-driving feedback, and estimated fuel savings.",
    ],
    technologies: ["Python", "MATLAB", "Simulink", "Machine Learning", "Data Engineering", "Docker"],
    focus: "Data traceability, vehicle-level evaluation, and comparison between physical and machine learning models for fuel-consumption estimation.",
    images: [
      { src: "/projects/ecodrive-interface.png", alt: "ECODRIVE driving-session replay interface with vehicle signals and eco-driving feedback.", caption: "Simulation and replay interface — feedback and savings are model estimates, not measured on-road gains.", width: 1612, height: 882 },
      { src: "/projects/ecodrive-trip.png", alt: "ECODRIVE trip analysis with consumption curves and estimated savings.", caption: "Trip analysis — comparing modeled consumption and estimated savings across recorded journeys.", width: 1872, height: 956 },
    ],
  },
  {
    id: "tomato", number: "02", title: "TomatoGrade", category: "COMPUTER VISION / FULL-STACK",
    summary: "A deployed computer vision prototype for tomato quality classification and prediction tracking.",
    context: "Full-stack MVP · Hugging Face Spaces · 2026",
    problem: "How can image classification help distinguish export-grade tomatoes, local-market produce, and rejects?",
    contributions: [
      "Prepared an image dataset through a Medallion pipeline for three quality classes: A (export), B (local market), and C (reject).",
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
    images: [
      { src: "/projects/olist-sales.png", alt: "Olist Streamlit sales dashboard with category revenue and sales trends.", caption: "Sales dashboard — revenue, product categories, and trends explored with Streamlit and Plotly.", width: 966, height: 521 },
      { src: "/projects/olist-warehouse.png", alt: "SQL Server warehouse diagram showing shared dimensions and fact tables.", caption: "Data warehouse — shared dimensions connect sales, payments, and customer reviews.", width: 1556, height: 640 },
      { src: "/projects/olist-finance.png", alt: "Olist finance dashboard showing payment methods and installments.", caption: "Financial analysis — payment methods, installments, and transaction distribution.", width: 1160, height: 597 },
    ],
  },
  {
    id: "documents", number: "04", title: "OCR & Document Intelligence", category: "DOCUMENT AI",
    summary: "Helping machines make sense of the written world.",
    context: "NETALEK Services · July–August 2025 · Agadir",
    problem: "Recognizing handwriting in document images with multimodal language models and OCR.",
    contributions: [
      "Prepared French handwritten document examples from RIMES for multimodal training.",
      "Explored LoRA fine-tuning of LLaMA 3.2 Vision using Transformers / PEFT and 4-bit Unsloth experiments.",
      "Built an OCR interface prototype using the base vision model through the Hugging Face API.",
    ],
    technologies: ["OCR", "LLaMA 3.2 Vision", "RIMES", "Transformers", "PEFT / LoRA", "Unsloth"],
    focus: "Exploring handwriting recognition with multimodal models. The interface uses the base model; quantitative evaluation of the fine-tuning experiments remains incomplete.",
    images: [{ src: "/projects/ocr-prototype.png", alt: "Document OCR prototype displaying an input form beside its extracted text.", caption: "OCR interface prototype from the internship report — this demo uses the base vision model, independently of the fine-tuning experiments.", width: 1891, height: 900 }],
  },
  {
    id: "anomaly", number: "05", title: "Automated Visual Anomaly Detection", category: "COMPUTER VISION",
    summary: "Teaching a model to notice what doesn’t belong.",
    context: "Computer vision project",
    problem: "Detecting visual anomalies in bottle imagery using the MVTec AD Bottle dataset.",
    contributions: [
      "Compared a classical OpenCV / Canny approach with supervised bottle-defect classification on MVTec AD Bottle images.",
      "Adapted an ImageNet-pretrained ResNet18 by training its final block and classification head, with data augmentation and a stratified train / validation split.",
      "Built a Gradio demo for uploading bottle images and inspecting predicted defect probabilities.",
    ],
    technologies: ["PyTorch", "OpenCV", "Canny Edge Detection", "ResNet18", "Transfer Learning", "MVTec AD", "Gradio"],
    focus: "Comparing classical image processing and transfer learning for visual inspection. Example predictions illustrate model behavior rather than establish production accuracy.",
    demo: "https://huggingface.co/spaces/om440/industrial-bottle-defect-cnn-resnet18",
    images: [{ src: "/projects/anomaly-predictions.png", alt: "Eight bottle images with ground-truth and ResNet18 predicted labels.", caption: "Prediction examples — ground-truth and predicted bottle labels. These examples are not a held-out performance benchmark.", width: 1200, height: 800 }],
  },
  {
    id: "portfolio", number: "06", title: "Personal Portfolio", category: "WEB DEVELOPMENT",
    summary: "A place to connect the projects, engineering work, and interests behind this portfolio.",
    context: "Personal website · Cloudflare Pages · 2026",
    problem: "How can a portfolio make technical work easy to explore and verify?",
    contributions: [
      "Organized project case studies, experience, technical skills, and a downloadable résumé in a responsive Next.js website.",
      "Connected project descriptions to screenshots, source repositories, and deployed demos.",
      "Published a static export on Cloudflare Pages, with keyboard-accessible navigation, reduced-motion support, and locally served fonts.",
    ],
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Motion", "Cloudflare Pages"],
    focus: "Clear technical storytelling, accessible interaction, and a lightweight static deployment.",
    repository: "https://github.com/om2044/omar-portfolio",
  },
];
