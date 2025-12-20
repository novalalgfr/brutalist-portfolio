import {
	MarqueeDemo,
	AccordionDemo,
	CursorDemo,
	GlitchDemo,
	PixelGridDemo,
	ClipRevealDemo,
	TiltDemo,
	ParallaxDemo,
	MagneticDemo
} from './LabComponents';

export const experiments = [
	// --- EASY ---
	{
		id: 'EXP-001',
		title: 'VISUAL NOISE',
		tags: ['SVG', 'FILTER'],
		desc: 'Marquee style layout with rotated text background using pure CSS.',
		difficulty: 'EASY',
		component: <MarqueeDemo />,
		code: `/* CSS ONLY MARQUEE */
.container { 
  position: relative; 
  overflow: hidden; 
}
.bg-text {
  transform: rotate(-12deg) scale(1.25);
  opacity: 0.2;
}
.badge {
  transform: rotate(-5deg);
  border-top: 4px solid black;
  border-bottom: 4px solid black;
}`
	},
	{
		id: 'EXP-002',
		title: 'SIMPLE ACCORDION',
		tags: ['REACT', 'STATE'],
		desc: 'Classic expand/collapse component with GSAP height animation.',
		difficulty: 'EASY',
		component: <AccordionDemo />,
		code: `// --- ACCORDION SNIPPET ---
const [isOpen, setIsOpen] = useState(false);

useEffect(() => {
  gsap.to(contentRef.current, {
    height: isOpen ? 'auto' : 0,
    duration: 0.4,
    ease: 'power2.out'
  });
}, [isOpen]);`
	},
	{
		id: 'EXP-003',
		title: 'CURSOR FOLLOWER',
		tags: ['GSAP', 'MOUSE'],
		desc: 'Custom cursor element that trails the mouse position with delay.',
		difficulty: 'EASY',
		component: <CursorDemo />,
		code: `// --- CURSOR FOLLOWER ---
const onMove = (e) => {
  // Simple offset calculation
  gsap.to(cursorRef.current, {
    x: e.clientX - rect.left - 16,
    y: e.clientY - rect.top - 16,
    duration: 0.2 // Delay effect
  });
};`
	},
	{
		id: 'EXP-004',
		title: 'HACKER TEXT',
		tags: ['JS', 'ALGO'],
		desc: 'Random character shuffling effect that resolves to original text on hover.',
		difficulty: 'EASY',
		component: <GlitchDemo />,
		code: `// --- HACKER TEXT LOGIC ---
intervalRef.current = setInterval(() => {
  setText(prev => prev.split("").map((char, index) => {
    if (index < iterations) return originalText[index];
    return chars[Math.floor(Math.random() * chars.length)];
  }).join(""));
  
  iterations += 1 / 3;
}, 30);`
	},

	// --- MEDIUM ---
	{
		id: 'EXP-005',
		title: 'PIXEL REVEAL',
		tags: ['GRID', 'CSS'],
		desc: 'Interactive grid overlay that vanishes on hover to reveal content.',
		difficulty: 'MEDIUM',
		component: <PixelGridDemo />,
		code: `// --- PIXEL GRID ---
// Generate 80 divs
{[...Array(80)].map((_, i) => (
  <div 
    className="w-[10%] h-[20%] hover:opacity-0 transition-opacity"
  />
))}`
	},
	{
		id: 'EXP-006',
		title: 'CLIP REVEAL',
		tags: ['GSAP', 'MASK'],
		desc: 'Text animation using CSS clip-path inset property driven by GSAP.',
		difficulty: 'MEDIUM',
		component: <ClipRevealDemo />,
		code: `// --- CLIP PATH ANIMATION ---
const onHover = () => {
  gsap.to(textRef.current, { 
    clipPath: 'inset(0% 0% 0% 0%)', 
    duration: 0.5, 
    ease: 'power4.inOut' 
  });
};`
	},
	{
		id: 'EXP-007',
		title: '3D TILT CARD',
		tags: ['GSAP', 'MATH'],
		desc: 'Interactive 3D rotation based on mouse coordinates relative to element.',
		difficulty: 'MEDIUM',
		component: <TiltDemo />,
		code: `// --- 3D CALCULATION ---
const rotateX = ((y - centerY) / centerY) * -20;
const rotateY = ((x - centerX) / centerX) * 20;

gsap.to(card, { rotateX, rotateY, scale: 1.1 });`
	},

	// --- HARD ---
	{
		id: 'EXP-008',
		title: 'PARALLAX DEPTH',
		tags: ['GSAP', 'MOUSE'],
		desc: 'Multi-layer parallax effect reacting to mouse position intensity.',
		difficulty: 'HARD',
		component: <ParallaxDemo />,
		code: `// --- PARALLAX LAYERS ---
const x = (e.clientX / width - 0.5) * 2;
const y = (e.clientY / height - 0.5) * 2;

// Layer 1 moves slow
gsap.to(layer1, { x: x * 20, y: y * 20 });
// Layer 2 moves fast
gsap.to(layer2, { x: x * 50, y: y * 50 });`
	},
	{
		id: 'EXP-009',
		title: 'MAGNETIC BTN',
		tags: ['GSAP', 'PHYSICS'],
		desc: 'Button element that acts like a magnet, attracted to cursor position.',
		difficulty: 'HARD',
		component: <MagneticDemo />,
		code: `// --- MAGNETIC PHYSICS ---
const x = e.clientX - (rect.left + rect.width / 2);
const y = e.clientY - (rect.top + rect.height / 2);

gsap.to(btn, { 
  x: x * 0.5, // Resistance factor
  y: y * 0.5, 
  ease: 'power2.out' 
});`
	}
];
