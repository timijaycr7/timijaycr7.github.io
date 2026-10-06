/* Edit this file to update your portfolio.
   Add verified project URLs, results, role dates, and your LinkedIn URL as available.
   Empty links and dates are deliberately omitted from the rendered website. */
window.PORTFOLIO = {
  name: "Timilehin Liberty",
  initials: "TL",
  role: "AI | Machine Learning Engineer",
  availability: "Research. Build. Put intelligence to work.",
  location: "Working at the intersection of research & engineering",
  intro: "I’m Timilehin, an AI & Machine Learning Engineer focused on transforming data and emerging technologies into practical, scalable solutions across computer vision, LLMs, NLP, and intelligent automation.",
  philosophy: "Curiosity drives the research. Engineering makes it useful. I connect machine learning, thoughtful experimentation, and practical deployment to build systems that solve real problems.",
  learning: "Agentic AI Engineering, large language models & production machine learning",
  email: "rayesomotimilehin@gmail.com",
  socials: [
    { label: "GitHub", url: "https://github.com/timijaycr7" },
    { label: "WhatsApp · +234 810 660 8611", url: "https://wa.me/2348106608611" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/rayesomotl/" },
    { label: "X (Twitter)", url: "https://x.com/Rayesomotimi" },
  ],
  skills: [
    {
      title: "Python & machine learning", subtitle: "Turning data into models and insight.",
      icon: "code", number: "01",
      tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "Machine Learning", "Deep Learning", "Computer Vision"],
      note: "From an idea to a trained model.",
    },
    {
      title: "NLP & language", subtitle: "Making language useful to intelligent systems.",
      icon: "spark", number: "02",
      tags: ["NLP", "Text Classification", "Sentiment Analysis", "Summarization", "Concept Extraction", "Named Entity Recognition (NER)", "Embedding Vectors", "Faster-Whisper"],
      note: "Understand text. Extract meaning.",
    },
    {
      title: "LLMs & MLOps", subtitle: "Taking intelligent systems into production.",
      icon: "layers", number: "03",
      tags: ["LLM Fine-Tuning", "Prompt Engineering", "RAG", "OpenAI", "LangChain", "Airflow", "Kubeflow", "Model & API Deployment", "FastAPI", "ML Pipelines", "CI/CD", "MLflow", "Model Monitoring"],
      note: "Build, deploy, evaluate, and improve.",
    },
    {
      title: "Cloud & infrastructure", subtitle: "The foundations for scalable AI applications.",
      icon: "code", number: "04",
      tags: ["AWS", "Amazon SageMaker", "Amazon Bedrock", "GCP", "Docker", "Azure", "Hugging Face", "Git / GitHub", "GitHub Actions"],
      note: "From local experiments to cloud services.",
    },
    {
      title: "Data & databases", subtitle: "Collecting, preparing, and organizing information.",
      icon: "layers", number: "05",
      tags: ["PostgreSQL", "MongoDB", "BigQuery", "Data Engineering", "BeautifulSoup", "ETL Pipelines"],
      note: "Reliable data for the next step.",
    },
    {
      title: "Automation & orchestration", subtitle: "Connecting tools and streamlining workflows.",
      icon: "spark", number: "06",
      tags: ["n8n", "Zapier", "Workflow Automation", "API Integration", "Power Automate", "SharePoint", "Microsoft Forms"],
      note: "Less repetition. More possibility.",
    },
  ],
  // Projects can use an uploaded screenshot or an original illustration.
  projects: [
    {
      id: "farmer", name: "Farmer RAG Agent",
      subtitle: "Trusted farming knowledge. Context-aware answers.",
      category: "Language AI", type: "Agricultural AI assistant", visual: "farmer",
      image: "./assets/farmer-rag-agent.jpeg",
      imageAlt: "Farmer RAG Agent chat interface answering agricultural questions about livestock management.",
      tags: ["LangGraph", "FAISS", "Hugging Face", "Groq", "FastAPI", "RAGAS", "Python"],
      description: "An AI-powered agricultural assistant that retrieves trusted farming knowledge and generates context-aware answers.",
      caseStudy: {
        outcomes: [
          { title: "Semantic Retrieval", detail: "Implemented vector-based retrieval using FAISS and Hugging Face embeddings." },
          { title: "Grounded Generation", detail: "Built a RAG workflow that answers questions using retrieved agricultural context." },
          { title: "Agent Orchestration", detail: "Used LangGraph to manage retrieval and LLM response generation." },
          { title: "Evaluation Pipeline", detail: "Integrated RAGAS for systematic assessment of answer quality." },
          { title: "API Integration", detail: "Exposed the system through FastAPI for application integration." },
          { title: "End-to-End Pipeline", detail: "Connected the indexed knowledge base, retrieval, generation, evaluation, and serving in one workflow." },
        ],
        problem: "Farmers often need quick access to reliable agricultural information, but relevant knowledge may be scattered across multiple documents and resources. The goal was to build an AI assistant that retrieves relevant farming information and generates responses grounded in that knowledge.",
        solution: "Developed a retrieval-augmented generation system that combines semantic search, vector retrieval, agent orchestration, and a Groq-hosted language model to answer agricultural questions using a curated farming knowledge base. A browser chat interface and FastAPI endpoints make the system accessible to users and other applications.",
        architecture: [
          { title: "User Question", detail: "A farming question arrives through the chat interface or API." },
          { title: "LangGraph Agent", detail: "Orchestrates the interaction and invokes the retrieval tool." },
          { title: "FAISS Retriever", detail: "Uses Hugging Face embeddings to find semantically relevant content." },
          { title: "Farming Knowledge Base", detail: "Provides the indexed reference passages used as context." },
          { title: "Groq LLM", detail: "Uses the question and retrieved context to compose an answer." },
          { title: "Grounded Answer", detail: "Returns a readable, context-aware response through FastAPI." },
        ],
        contributions: [
          "Designed the end-to-end RAG architecture.",
          "Implemented semantic retrieval using Hugging Face embeddings and FAISS.",
          "Built agent orchestration and retrieval tool-calling with LangGraph.",
          "Integrated Groq-hosted LLM inference for context-aware answer generation.",
          "Developed the API layer with FastAPI.",
          "Implemented a RAG evaluation workflow using RAGAS.",
        ],
        evaluationIntro: "Assessment criteria cover the relevance and coverage of retrieved context, faithfulness of generated answers, and retrieval performance.",
        evaluation: [
          { title: "Context Precision", detail: "How much of the retrieved context is relevant to the question." },
          { title: "Context Recall", detail: "Whether retrieval captures the information needed to answer the question." },
          { title: "Faithfulness", detail: "Whether the generated answer is supported by the retrieved context." },
          { title: "Answer Relevance", detail: "How directly the response addresses the user’s question." },
          { title: "Retrieval Performance", detail: "Retrieval quality and latency across a defined evaluation set." },
        ],
      },
      url: "", source: "https://github.com/timijaycr7/farmer-rag-agent",
    },
    {
      id: "speech", name: "Speech-to-Text AI",
      subtitle: "Cloud-Deployed Speech Recognition & Asynchronous Processing System",
      category: "Language AI", type: "Machine Learning · Cloud · MLOps", visual: "speech",
      tags: ["Faster-Whisper", "FastAPI", "Docker", "AWS ECS", "S3", "SQS", "GitHub Actions"],
      description: "Built and deployed an end-to-end speech-to-text platform powered by Faster-Whisper, supporting both real-time API transcription and scalable asynchronous job processing on AWS.",
      technologies: "Faster-Whisper · FastAPI · Python · Docker · AWS ECS/Fargate · Amazon ECR · Amazon S3 · Amazon SQS · Application Load Balancer · CloudWatch · GitHub Actions",
      sections: [
        { title: "The Challenge", paragraphs: ["Design a reliable speech transcription system capable of handling direct audio requests and longer-running background jobs without blocking the API, while providing structured transcription results and scalable cloud deployment."] },
        { title: "The Approach", paragraphs: [
          "Developed a FastAPI-based transcription service using Faster-Whisper for speech recognition, returning transcript text, detected language, duration, and timestamped segments.",
          "Implemented an asynchronous processing architecture where uploaded audio is stored in Amazon S3, transcription jobs are queued through Amazon SQS, and a dedicated ECS worker processes jobs independently from the API.",
          "Containerized the API and worker with Docker and deployed both services to AWS ECS using Fargate. Configured an Application Load Balancer, target-group health checks, IAM permissions, and CloudWatch logging for reliable production-style operation.",
          "Automated testing, Docker builds, image publishing to Amazon ECR, and deployment workflows using GitHub Actions CI/CD."
        ] },
        { title: "Key Engineering Highlights", paragraphs: ["Cloud-native ML deployment · REST API development · Asynchronous job processing · Containerization · Message queues · Object storage · Load balancing · IAM & cloud security · Monitoring & logging · CI/CD · MLOps"] },
        { title: "Result", paragraphs: ["Delivered a working cloud-hosted speech-to-text system that accepts audio, processes transcription jobs asynchronously, and returns structured results through a publicly accessible API."] }
      ],
      liveLabel: "View Project", sourceLabel: "GitHub",
      url: "http://speech-to-text-alb-973824052.eu-west-1.elb.amazonaws.com/docs", source: "https://github.com/timijaycr7/speech-to-text-ai",
    },
    {
      id: "malaria", name: "Malaria Parasite Classification & Stage Detection",
      image: "./assets/result%201.png",
      imageAlt: "Microscopy prediction examples with parasite species labels and developmental-stage bounding boxes",
      resultFigures: [
        { image: "./assets/result%201.png", title: "Parasite localization & stage predictions", caption: "Example microscopy predictions showing species labels and bounding boxes for developmental stages. These are research model outputs." },
        { image: "./assets/result%202.png", title: "Training & validation performance", caption: "Detection training curves showing losses, precision, recall, mAP@50, and mAP@50–95 across epochs. These detection metrics are distinct from species-classification accuracy." },
        { image: "./assets/result%203.png", title: "F1 score & confidence threshold", caption: "Per-class and combined detection F1 curves. The supplied plot reports a combined F1 of 0.87 at a confidence threshold of 0.436." }
      ],
      subtitle: "Species recognition. Stage detection. Microscopy research.",
      category: "Computer Vision", type: "Medical Imaging · Computer Vision · Deep Learning", visual: "malaria",
      tags: ["Python", "ResNet", "YOLO", "RT-DETR", "Faster R-CNN", "Random Forest", "XGBoost", "HOG", "OpenCV"],
      description: "An AI-powered medical imaging research system for identifying malaria parasite species and detecting developmental stages from microscopic blood-smear images.",
      technologies: "Python · ResNet · YOLO · RT-DETR · Faster R-CNN · Random Forest · XGBoost · HOG · OpenCV",
      sections: [
        { title: "The Challenge", paragraphs: ["Manual examination of microscopic blood-smear images can be time-intensive and dependent on specialist expertise. The project explored how machine learning and computer vision could assist this analysis by automatically classifying malaria parasite species and localizing parasite developmental stages within microscopy images."] },
        { title: "The Approach", paragraphs: [
          "Developed a hierarchical computer-vision pipeline that first identifies malaria parasite species and then performs stage detection and localization.",
          "For species classification, deep-learning models including ResNet were evaluated alongside traditional machine-learning approaches using HOG feature extraction with Random Forest and XGBoost classifiers.",
          "For the detection stage, object-detection architectures including YOLO, RT-DETR, and Faster R-CNN were explored to identify parasite locations and developmental stages within blood-smear images.",
          "The workflow covered dataset preparation, image preprocessing, feature extraction, model training, comparative evaluation, inference, and visualization of model predictions."
        ] },
        { title: "Results", paragraphs: [
          "Achieved over 90% classification accuracy in parasite-species recognition while demonstrating the potential to substantially reduce the amount of manual image analysis required.",
          "The experiments also provided a comparative assessment of deep-learning and traditional machine-learning approaches, helping identify suitable architectures for different stages of the microscopy-analysis pipeline."
        ] },
        { title: "Focus Areas", paragraphs: ["Medical image analysis · Computer vision · Deep learning · Image classification · Object detection · Feature engineering · Model comparison · Experimental evaluation"] },
        { title: "Project Outcome", paragraphs: ["Built an end-to-end research pipeline for automated malaria microscopy analysis, combining species classification with parasite-stage detection and localization to support faster and more consistent analysis of microscopic blood images."] }
      ],
      researchNote: "Research prototype developed for machine-learning experimentation and decision support; not intended as a standalone clinical diagnostic system.",
      url: "", source: "https://github.com/timijaycr7/Malaria-Parasite-Classification-Stage-Detection",
    },
  ],
  experienceIntro: "I build scalable AI systems across machine learning, NLP, computer vision, Generative AI, RAG, and MLOps, transforming data into reliable solutions with measurable impact.",
  // Experience and achievements supplied in the owner's CV screenshots.
  experience: [
    {
      role: "AI Engineer", company: "Dala Innovation", period: "Jan 2026 — May 2026",
      location: "Akure, Nigeria · Remote", type: "Engineering", current: false,
      highlights: [
        "Designed and deployed end-to-end ML pipelines, improving workflow efficiency by 50%.",
        "Built scalable ETL data pipelines using Python, BeautifulSoup, and Pandas, reducing data collection time by 70%.",
        "Developed and fine-tuned a BERT-based machine translation model, achieving a BLEU score above 38 and improving translation accuracy by 30%.",
        "Implemented production-ready NLP systems with evaluation, monitoring, and reproducibility.",
        "Collaborated with engineering and product teams to integrate AI solutions into applications.",
      ],
      tags: ["Python", "BeautifulSoup", "Pandas", "BERT", "NLP", "ML Pipelines"],
    },
    {
      role: "ML Engineer", company: "Freelancing", period: "Mar 2022 — Present",
      location: "Akure, Nigeria · Remote", type: "Independent practice", current: true,
      highlights: [
        "Developed a risk-based scoring framework to help lenders reduce credit risk and improve farmers’ access to financing.",
        "Developed a deep learning-based medical imaging system for disease classification using X-ray images, achieving an F1-score above 0.90.",
        "Built an OCR and NLP pipeline for structured information extraction from student ID cards, including names, matric numbers, and departments.",
        "Designed a two-stage computer vision pipeline combining classification and object detection for malaria parasite detection and staging, achieving over 90% mean Average Precision (mAP).",
        "Improved model robustness and accuracy through data augmentation, feature engineering, and model optimization.",
        "Delivered end-to-end ML solutions from data preprocessing to model deployment, ensuring scalability and reliability.",
      ],
      tags: ["Computer Vision", "Deep Learning", "OCR", "NLP", "Feature Engineering", "Model Deployment"],
    },
    {
      role: "AI Engineer", company: "Energy Data Technology", period: "Nov 2025 — Mar 2026",
      location: "Akure, Nigeria · Remote", type: "Energy analytics", current: false,
      highlights: [
        "Led development of AI-driven analytics systems for energy utilities, improving operational efficiency and data-driven monitoring of power infrastructure using Python, Pandas, NumPy, and Scikit-learn.",
        "Designed and implemented machine learning models for power theft detection, identifying abnormal consumption patterns and non-technical losses in grid datasets using PyTorch, Scikit-learn, and anomaly detection.",
        "Architected scalable pipelines for high-volume energy consumption data, supporting model training and operational analytics with Python, SQL, Celery, and Redis for distributed task processing and asynchronous workloads.",
        "Developed predictive models for energy demand forecasting and grid performance optimization using PyTorch-based time-series modeling and statistical analysis, supporting efficient energy planning and system reliability.",
        "Collaborated with cross-functional engineering teams to integrate AI models into production-ready energy platforms, supporting scalable deployment for utilities and energy management systems.",
      ],
      tags: ["PyTorch", "Scikit-learn", "SQL", "Celery", "Redis", "Time-Series Forecasting"],
    },
    {
      role: "AI & Machine Learning Instructor", company: "TechCrush", period: "May 2026 — Aug 2026",
      location: "Remote · Contract", current: false,
      highlights: [
        "Delivered structured instruction in Python, machine learning, deep learning, and natural language processing, supporting learners from beginner to advanced levels.",
        "Taught Python programming and problem-solving through data structures, functions, object-oriented programming, and debugging.",
        "Trained learners in data preprocessing, model training and evaluation, neural networks, and optimization through practical machine-learning and deep-learning exercises.",
        "Guided learners through NLP applications, including text preprocessing, text classification, sentiment analysis, and language-based solutions.",
        "Mentored students through hands-on projects, coding exercises, and technical troubleshooting to develop practical AI and machine-learning skills."
      ],
      tags: ["Python", "Machine Learning", "Deep Learning", "NLP", "Technical Instruction", "Mentoring"],
    },
  ],
  education: [
    { degree: "MSc in Financial Engineering", institution: "WorldQuant University", period: "Jul 2026 — Jul 2028 (expected)", detail: "In progress" },
    { degree: "B.Tech. in Quantity Surveying", institution: "Federal University of Technology, Akure", period: "Jan 2020 — Nov 2025", detail: "CGPA: 4.46 / 5.00" }
  ],
  certifications: [
    { title: "Introduction to Data Science", issuer: "DataCamp" },
    { title: "Advanced Python Programming", issuer: "DataCamp" },
    { title: "Deep Learning Specialization", issuer: "Coursera · Andrew Ng" },
    { title: "Machine Learning Specialization", issuer: "Coursera · Andrew Ng" },
    { title: "Green Digital Skills", issuer: "INCO Academy" },
    { title: "AI Automation", issuer: "Witty Academy" }
  ],
};
