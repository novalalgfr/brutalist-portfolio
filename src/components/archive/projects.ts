import { Project } from './ArchiveTable';

export const allProjects: Project[] = [
	{
		year: '2026',
		title: 'Tomato Leaf Disease Detection Web Application',
		category: 'ML / AI',
		stack: 'YOLOv11, Flask, Next.js',
		desc: 'Developed an intelligent web-based application for automated tomato leaf disease detection using YOLOv11 deep learning architecture, enabling farmers and general users to upload or capture leaf images through a browser and instantly receive visual diagnostic results with bounding boxes, disease labels, and confidence scores across nine classified conditions including Early Blight, Late Blight, Mosaic Virus, and Septoria Leaf Spot, built with a Next.js frontend and Python Flask backend integrated with a PyTorch-powered inference model.',
		image: '/archive/tomato-yolo.jpg'
	},
	{
		year: '2026',
		title: 'RAG-Based Academic Information Chatbot for Gunadarma University',
		category: 'ML / AI',
		stack: 'RAG, LLaMA, Groq API, ChromaDB, FastAPI, Python, Next.js, Playwright',
		desc: "Developed an intelligent web-based virtual assistant for Gunadarma University's academic bureau (BAAK) using Retrieval Augmented Generation architecture, enabling students to query course schedules, exam timetables, academic calendars, and administrative procedures in natural language with accurate, hallucination-free responses sourced from an automatically scraped and semantically indexed knowledge base, built with a FastAPI backend, ChromaDB vector store, Groq-powered LLaMA language model, and a responsive Next.js chat interface.",
		image: '/archive/baak-chat.jpg'
	},
	{
		year: '2026',
		title: 'Salient Object Detection with U-Net and Visual Attention Heatmap',
		category: 'ML / AI',
		stack: 'U-Net, Flask, Next.js, OpenCV',
		desc: 'Developed a deep learning-based web application for salient object detection using U-Net encoder-decoder architecture trained on the DUTS dataset, enabling users to upload any digital image and receive dual visual outputs including a binary segmentation mask and a color-gradient attention heatmap that highlights the most visually significant regions, built with a TensorFlow and Keras inference engine, Python Flask backend, OpenCV-powered heatmap overlay processing, and a responsive Next.js frontend for side-by-side result comparison.',
		image: '/archive/salient-vision.jpg'
	},
	{
		year: '2026',
		title: 'Road Infrastructure Damage Detection Web Application',
		category: 'ML / AI',
		stack: 'YOLOv11, Flask, Next.js',
		desc: 'Developed an intelligent web-based application for automated road infrastructure damage detection using YOLOv11 deep learning architecture, enabling road inspectors and authorities to upload or capture asphalt surface images through a browser and instantly receive visual diagnostic results with bounding boxes, damage type labels, and confidence scores across four classified conditions including pothole, alligator crack, longitudinal crack, and lateral crack, built with a Next.js frontend and Python Flask backend integrated with a PyTorch-powered inference model.',
		image: '/archive/road-damage.jpg'
	},
	{
		year: '2025',
		title: 'Portal SPMB Kota Bogor 2026',
		category: 'WEBSITE',
		stack: 'Laravel Inertia',
		desc: 'Developed the 2026 SPMB Portal for Bogor City with significant improvements from the previous version, separating SD and SMP level navigation with distinct visual branding using unique color schemes for each level, and implementing card data components as an alternative to table displays to enhance responsiveness and information readability on mobile devices.',
		image: '/archive/spmb-bogor-2026.jpg'
	},
	{
		year: '2025',
		title: 'Orbit App',
		category: 'SOFTWARE',
		stack: 'Java, Spring, Hibernate, Java Swing, FlatLaf',
		desc: "Developed a desktop project management application called 'Orbit' as a centralized ticketing system solution to address inefficiencies in manual task management methods, built using Java with MVC architecture implementation, Spring Framework for dependency injection, Hibernate ORM for database management, and Java Swing with FlatLaf for modern interface, enabling real-time task status monitoring, clear work distribution, and enhanced project progress transparency to support more structured and productive team collaboration.",
		image: '/archive/orbit-app.png'
	},
	{
		year: '2025',
		title: 'Toko Sinar Plastik',
		category: 'WEBSITE',
		stack: 'Next.js',
		desc: 'Led a team as Product Manager in developing an integrated e-commerce website with Point of Sale (POS) system, managing product roadmap, coordinating between developer and designer teams, and ensuring timely delivery of key features including inventory management, payment gateway, and real-time sales tracking aligned with business requirements.',
		image: '/archive/sinar-plastik.jpg',
		link: 'https://toko-sinar-plastik.vercel.app/'
	},
	{
		year: '2025',
		title: 'Authentication and Classification of Yogyakarta Batik',
		category: 'ML / AI',
		stack: 'EfficienNet, TensorFlow, Python',
		desc: 'Developed a machine learning-based authentication and classification system for Yogyakarta batik using EfficientNetB0 architecture for image classification, with full-stack implementation including responsive Next.js frontend and Flask backend as REST API, achieving high accuracy in identifying and classifying various traditional Yogyakarta batik patterns.',
		image: '/archive/batik-yogya.jpg',
		link: 'https://batik-yogya.my.id/'
	},
	{
		year: '2025',
		title: 'Portal SPMB Kota Bogor 2025',
		category: 'WEBSITE',
		stack: 'Next.js',
		desc: "Developed a comprehensive informational portal for Bogor City's 2025 SPMB program serving elementary and junior high school levels, providing centralized access to registration schedules, administrative requirements, enrollment procedures, result announcements, and complete admission guidelines for parents and prospective students.",
		image: '/archive/spmb-bogor-2025.jpg'
	},
	{
		year: '2025',
		title: 'Portal SPMB Kota Cilegon 2025',
		category: 'WEBSITE',
		stack: 'Next.js',
		desc: "Built an integrated information portal for Cilegon City's 2025 SPMB program for elementary and junior high school levels, presenting unified information on registration schedules, document requirements, selection mechanisms, result publications, and comprehensive admission guidelines to assist parents and prospective students.",
		image: '/archive/spmb-cilegon-2025.jpg'
	},
	{
		year: '2025',
		title: 'Portal SPMB Kota Palembang 2025',
		category: 'WEBSITE',
		stack: 'Next.js',
		desc: "Designed a comprehensive information portal for Palembang City's 2025 SPMB program covering elementary and junior high school levels, delivering complete information on registration timelines, administrative provisions, selection stages, acceptance announcements, and detailed admission guidelines for the community and prospective students.",
		image: '/archive/spmb-palembang-2025.jpg'
	},
	{
		year: '2024',
		title: 'Sistem Informasi Pendidikan Kab. Mimika',
		category: 'WEBSITE',
		stack: 'React.js',
		desc: 'Developed an educator information system for Mimika Regency that provides comprehensive data on all schools across education levels, covering institutional profiles, educator information, facilities, and education statistics to enhance transparency and accessibility of educational information throughout the Mimika region.',
		image: '/archive/sip-mimika.jpg',
		link: 'https://dinaspendidikan.mimikakab.go.id/'
	},
	{
		year: '2024',
		title: 'Company Profile Mardawa',
		category: 'WEBSITE',
		stack: 'FIGMA',
		desc: "Designed the UI/UX interface for PT Mardawa Intiguna Persada's corporate profile website, presenting the company's identity professionally through modern design, intuitive navigation, and optimal user experience to strengthen brand presence on digital platforms.",
		image: '/archive/mardawa.jpg',
		link: 'https://mardawa.id/'
	}
];
