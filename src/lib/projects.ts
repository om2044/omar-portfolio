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
};

export const projects: Project[] = [
  {
    id: "ecodrive", number: "01", title: "ECODRIVE-AI", category: "AI / DATA ENGINEERING",
    summary: "A smarter way to drive. A system designed to turn driving data into fuel-conscious decisions.",
    context: "Capgemini Engineering · July–August 2026 · Casablanca",
    problem: "How can vehicle behavior and driving data inform recommendations that aim to reduce fuel consumption and CO₂ emissions?",
    contributions: [
      "Modeled and simulated vehicle behavior with MATLAB and Simulink.",
      "Built pipelines for collecting, processing, and engineering features from driving and telemetry data.",
      "Developed machine learning models to estimate fuel consumption.",
      "Designed a real-time driving recommendation system, combining physics-based modeling with machine learning.",
    ],
    technologies: ["Python", "MATLAB", "Simulink", "Machine Learning", "Data Engineering"],
    focus: "Connecting physical models, driving data, and machine learning in an eco-driving assistant. Reduced consumption and emissions are the project’s objectives; no measured impact is claimed.",
  },
  {
    id: "anomaly", number: "02", title: "Automated Visual Anomaly Detection", category: "COMPUTER VISION",
    summary: "Teaching a model to notice what doesn’t belong.",
    context: "Computer vision project",
    problem: "Detecting visual anomalies in bottle imagery using the MVTec AD Bottle dataset.",
    contributions: ["Worked with the MVTec AD Bottle dataset for visual anomaly detection.", "Used Canny edge detection and ResNet18 transfer learning to explore visual features and anomalies."],
    technologies: ["Computer Vision", "Canny Edge Detection", "ResNet18", "Transfer Learning", "MVTec AD"],
    focus: "Exploring classical image processing and deep learning approaches to visual inspection.",
  },
  {
    id: "tomato", number: "03", title: "Tomato Grading System", category: "FULL-STACK / DEEP LEARNING",
    summary: "From computer vision to a complete intelligent platform.",
    context: "Full-stack intelligent application",
    problem: "Bringing computer vision and deep learning into an application for tomato grading.",
    contributions: ["Implemented a Medallion data pipeline and designed a CNN from scratch with TensorFlow and OpenCV.", "Processed and classified 5,000 images from a Kaggle dataset into three industrial grades.", "Worked across the application stack with FastAPI, React, and PostgreSQL."],
    technologies: ["TensorFlow", "OpenCV", "Deep Learning", "FastAPI", "React", "PostgreSQL"],
    focus: "Connecting a computer vision model with the backend, interface, and data layer of a full-stack grading system.",
  },
  {
    id: "documents", number: "04", title: "OCR & Document Intelligence", category: "DOCUMENT AI",
    summary: "Helping machines make sense of the written world.",
    context: "NET ALEK Services · July–August 2025 · Agadir",
    problem: "Recognizing handwriting in document images with multimodal language models and OCR.",
    contributions: ["Fine-tuned LLaMA 3.2 Vision on the RIMES handwriting dataset.", "Compared LoRA and Unsloth approaches.", "Deployed a real-time web prototype for handwriting recognition."],
    technologies: ["OCR", "LLaMA 3.2 Vision", "RIMES", "LoRA", "Unsloth"],
    focus: "Bringing multimodal fine-tuning into an interactive handwriting recognition prototype.",
  },
];
