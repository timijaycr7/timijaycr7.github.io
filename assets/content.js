/* Edit this file to update your portfolio.
   Add verified project URLs, results, role dates, and your LinkedIn URL as available.
   Empty links and dates are deliberately omitted from the rendered website. */
window.PORTFOLIO = {
  name: "Timilehin Liberty",
  initials: "TL",
  role: "AI | Machine Learning Engineer",
  availability: "Research. Build. Put intelligence to work.",
  location: "Working at the intersection of research & engineering",
  intro: "I’m Timilehin, an AI and machine learning engineer. I turn data into intelligent systems — from computer vision and language models to practical, everyday automation.",
  philosophy: "Curiosity drives the research. Engineering makes it useful. I connect machine learning, thoughtful experimentation, and practical deployment to build systems that solve real problems.",
  learning: "Multimodal AI, large language models & production machine learning",
  email: "rayesomotimilehin@gmail.com",
  socials: [
    { label: "GitHub", url: "https://github.com/timijaycr7" },
    // { label: "LinkedIn", url: "https://www.linkedin.com/in/YOUR_USERNAME/" },
  ],
  skills: [
    { title: "Machine learning", subtitle: "Finding patterns. Building intelligence.", icon: "spark", number: "01", tags: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "LLM Fine-Tuning", "PyTorch", "TensorFlow", "Scikit-learn"], note: "From an idea to a trained model." },
    { title: "AI engineering", subtitle: "Taking models beyond the notebook.", icon: "code", number: "02", tags: ["Python", "FastAPI", "Docker", "AWS", "Git / GitHub", "Model deployment", "Faster-Whisper"], note: "Built to work in the real world." },
    { title: "Data & automation", subtitle: "Connecting information to action.", icon: "layers", number: "03", tags: ["Data Engineering", "Pandas", "BeautifulSoup", "ETL pipelines", "Power Automate", "SharePoint", "Microsoft Forms"], note: "Less repetition. More possibility." },
  ],
  // Card illustrations represent each project; they are not application screenshots.
  projects: [
    {
      id: "farmer", name: "Farmer RAG Agent",
      subtitle: "Agricultural knowledge, one conversation away.",
      category: "Language AI", type: "Agricultural AI assistant", visual: "farmer",
      tags: ["LangGraph", "FAISS", "Groq", "FastAPI", "RAGAS"], featured: true,
      description: "An agricultural question-answering assistant that combines a browser chat interface with retrieval-augmented generation over a local farming knowledge base.",
      challenge: "Connect farming questions to relevant agricultural reference material and turn retrieved context into readable answers.",
      approach: "Hugging Face embeddings and FAISS support semantic retrieval. A LangGraph agent calls the retriever tool and uses a Groq-hosted language model to generate responses, served through FastAPI. The repository also includes RAGAS evaluation and experiment tracking.",
      focus: "Retrieval-augmented generation · Tool-calling agents · Semantic search · RAG evaluation",
      url: "", source: "https://github.com/timijaycr7/farmer-rag-agent",
    },
    {
      id: "speech", name: "Speech-to-Text AI",
      subtitle: "From audio uploads to timestamped transcripts.",
      category: "Language AI", type: "Speech & cloud engineering", visual: "speech",
      tags: ["Faster-Whisper", "FastAPI", "Amazon S3", "Amazon SQS", "Docker"], featured: true,
      description: "A speech transcription API with immediate transcription and asynchronous job processing, powered by Faster-Whisper.",
      challenge: "Support both direct audio transcription and queued background jobs while validating uploads and returning structured results.",
      approach: "FastAPI accepts audio files and returns transcript text, detected language, duration, and timestamped segments. The asynchronous path stores audio in Amazon S3, queues jobs through Amazon SQS, and uses a worker to transcribe audio and save results. The repository includes Docker packaging, automated tests, and CI configuration.",
      focus: "Speech recognition · API development · Asynchronous processing · AWS integration",
      url: "", source: "https://github.com/timijaycr7/speech-to-text-ai",
    },
    {
      id: "malaria", name: "Malaria Parasite Classification & Stage Detection",
      subtitle: "Exploring parasite species, stages, and localization.",
      category: "Computer Vision", type: "Medical imaging research", visual: "malaria",
      tags: ["ResNet", "Random Forest", "XGBoost", "HOG", "Computer Vision"], featured: false,
      description: "A malaria microscopy research project exploring a hierarchical workflow: classify parasite species first, then detect infection stages and parasite locations.",
      challenge: "Study species classification in stained blood-smear images and compare deep learning with traditional machine learning approaches.",
      approach: "Classification notebooks explore ResNet alongside HOG-based Random Forest and XGBoost models. The README describes a second stage using species-specific Faster R-CNN, RT-DETR, and YOLO detectors for stage identification and localization; the checked-in notebooks focus on classification and deployment experiments.",
      focus: "Microscopy image classification · Feature extraction · Model comparison · Hierarchical detection design",
      url: "", source: "https://github.com/timijaycr7/Malaria-Parasite-Classification-Stage-Detection",
    },
  ],
  experienceIntro: "My work spans AI engineering, machine learning research, automation, and teaching — different ways of making intelligence useful.",
  // Add exact dates and responsibilities when ready. No chronology is implied.
  experience: [
    { role: "AI Engineer", company: "Dala Innovation", period: "", type: "Engineering", current: false, description: "AI engineering, connecting machine learning with practical applications.", highlights: [], tags: ["Artificial intelligence", "Engineering"] },
    { role: "Machine Learning Researcher", company: "", period: "", type: "Research", current: false, description: "Machine learning research and exploration of intelligent systems.", highlights: [], tags: ["Machine learning", "Research"] },
    { role: "AI & Automation Engineer", company: "", period: "", type: "Automation", current: false, description: "AI and automation, bringing intelligent tools into practical workflows.", highlights: [], tags: ["AI systems", "Automation"] },
    { role: "AI & Machine Learning Instructor", company: "TechCrush", period: "", type: "Teaching", current: false, description: "Instruction in artificial intelligence and machine learning.", highlights: [], tags: ["AI education", "Machine learning"] },
  ],
  educationTitle: "Build. Research. Share what you learn.",
  educationDescription: "Engineering, research, and teaching each bring a different perspective to the same work: making AI useful and understandable.",
};
