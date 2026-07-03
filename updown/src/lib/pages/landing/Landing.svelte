<script>
	import { onMount } from 'svelte';
	import Lenis from 'lenis'; // Import the smooth scroll library

	import About from './About.svelte';
	import Footer from './Footer.svelte';
	import Hero from './Hero.svelte';
	import Quote from './Quote.svelte';
	import Testimonial from './Testimonial.svelte';
	import Work from './Work.svelte';

	onMount(() => {
		// --- 1. INITIALIZE LENIS (Smooth Inertia Scroll) ---
		const lenis = new Lenis({
			duration: 1.2, // Higher = smoother/slower
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing
			orientation: 'vertical',
			smoothWheel: true
		});

		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);

		// --- 2. SCROLL REVEAL OBSERVER ---
		// This watches for when sections enter the viewport
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('visible');
					}
				});
			},
			{
				threshold: 0.1 // Trigger when 10% of element is visible
			}
		);

		// Grab all elements with class 'reveal-section' and observe them
		const sections = document.querySelectorAll('.reveal-section');
		sections.forEach((section) => observer.observe(section));
	});
</script>

<div class="main-container">
	<div class="hero-wrapper">
		<Hero />
	</div>

	<div class="content-flow">
		<section class="reveal-section">
			<Quote />
		</section>

		<section class="reveal-section">
			<About />
		</section>

		<section class="reveal-section">
			<Work />
		</section>

		<section class="reveal-section">
			<Testimonial />
		</section>

		<section class="reveal-section">
			<Footer />
		</section>
	</div>
</div>

<style>
	/* Global smooth feel */
	:global(html.lenis) {
		height: auto;
	}

	:global(.lenis.lenis-smooth) {
		scroll-behavior: auto;
	}

	.main-container {
		width: 100%;
		overflow: hidden;
	}

	/* Spacing between sections */
	section {
		margin-bottom: 5vh; /* Breathable spacing */
	}

	/* --- THE REVEAL ANIMATION --- */
	.reveal-section {
		opacity: 0;
		transform: translateY(100px); /* Start slightly down */
		transition: all 1s cubic-bezier(0.16, 1, 0.3, 1); /* "Expensive" ease */
		will-change: transform, opacity;
	}

	/* When the JS adds this class, it slides up */
	:global(.reveal-section.visible) {
		opacity: 1;
		transform: translateY(0);
	}
</style>
