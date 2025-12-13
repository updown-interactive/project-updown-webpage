<script>
	import { logoOrange } from "$lib";
	import { onMount, onDestroy } from "svelte";
	import { browser } from "$app/environment";

	let animate = false;
	let showHero = false;
	let scrollY = 0;

	function handleScroll() {
		scrollY = window.scrollY;
	}

	onMount(() => {
		setTimeout(() => (animate = true), 2000);
		setTimeout(() => (showHero = true), 2500);

		if (browser) {
			window.addEventListener("scroll", handleScroll);
		}

     

	});

	onDestroy(() => {
		if (browser) {
			window.removeEventListener("scroll", handleScroll);
		}
	});


</script>

<!-- LOGO -->
<div class="logo-container" class:animate>
	<img src={logoOrange} alt="Main Logo" />
</div>

<!-- PARTICLES -->
<div class="particles">
	{#each Array(30) as _, i}
		<span
			style="
				left: {Math.random() * 100}%;
				top: {Math.random() * 100}%;
				animation-delay: {Math.random() * 10}s;
				animation-duration: {14 + Math.random() * 10}s;
			"
		></span>
	{/each}
</div>

<!-- COMETS -->
<div class="comets">
	{#each Array(6) as _}
		<div class="comet"></div>
	{/each}
</div>

<!-- 👽 FLOATING ALIEN -->
<div class="alien">
	🛸
</div>

<!-- HERO -->
<section
    id="home"
	class="hero-container {showHero ? 'showHero' : ''}"
	style="transform: translateY({scrollY * 0.25}px);"
>
	<h1 class="hero-text">
		<span>UPDOWN</span><br />
		<span>INTERACTIVE</span>
	</h1>
</section>

<style>
/* ---------------- LOGO ---------------- */
.logo-container {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	transition: all 1s ease-in-out;
	z-index: 1000;
}

.logo-container.animate {
	top: 20px;
	left: 20px;
	transform: translate(0, 0);
}

.logo-container img {
	width: 120px;
	transition: width 1s ease-in-out;
}

.logo-container.animate img {
	width: 40px;
}

/* ---------------- HERO ---------------- */
.hero-container {
	height: 100vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0;
	transition: opacity 1s ease;
	will-change: transform;
	position: relative;
	z-index: 3;
}

.hero-container.showHero {
	opacity: 1;
}

.hero-text {
	font-weight: 900;
	text-align: start;
	line-height: 0.88;
	color: white;

	font-size: clamp(4rem, 12vw, 22rem);
	letter-spacing: -0.05em;

	animation: floatText 8s ease-in-out infinite;
	filter: drop-shadow(0 40px 120px rgba(255, 120, 0, 0.18));
}

@keyframes floatText {
	0% { transform: translateY(0); }
	50% { transform: translateY(-18px); }
	100% { transform: translateY(0); }
}

/* ---------------- PARTICLES ---------------- */
.particles {
	position: absolute;
	inset: 0;
	pointer-events: none;
	z-index: 0;
}

.particles span {
	position: absolute;
	width: 3px;
	height: 3px;
	border-radius: 50%;
	background: rgba(255, 255, 255, 0.4);
	animation: float infinite ease-in-out;
}

@keyframes float {
	0% { transform: translate(0, 0); opacity: 0.2; }
	50% { transform: translate(30px, -50px); opacity: 0.8; }
	100% { transform: translate(0, 0); opacity: 0.2; }
}

/* ---------------- COMETS ---------------- */
.comets {
	position: absolute;
	inset: 0;
	pointer-events: none;
	z-index: 1;
}

.comet {
	position: absolute;
	top: -10%;
	left: -20%;
	width: 160px;
	height: 2px;
	background: linear-gradient(
		90deg,
		rgba(255,255,255,0),
		rgba(255,255,255,0.9),
		rgba(255,255,255,0)
	);
	filter: blur(1px);
	opacity: 0.7;
	animation: comet 8s linear infinite;
}

.comet:nth-child(1) { animation-delay: 0s; top: 20%; }
.comet:nth-child(2) { animation-delay: 2s; top: 40%; }
.comet:nth-child(3) { animation-delay: 4s; top: 60%; }
.comet:nth-child(4) { animation-delay: 6s; top: 80%; }
.comet:nth-child(5) { animation-delay: 1s; top: 30%; }
.comet:nth-child(6) { animation-delay: 3s; top: 70%; }

@keyframes comet {
	0% {
		transform: translateX(-200px) translateY(0) rotate(20deg);
		opacity: 0;
	}
	10% { opacity: 1; }
	100% {
		transform: translateX(140vw) translateY(40vh) rotate(20deg);
		opacity: 0;
	}
}

/* ---------------- 👽 ALIEN ---------------- */
.alien {
	position: absolute;
	left: 15%;
	top: 25%;
	font-size: 2.5rem;
	opacity: 0.6;
	filter: blur(0.3px);

	z-index: 2;
	pointer-events: none;

	animation: alienFloat 18s ease-in-out infinite;
}

@keyframes alienFloat {
	0% {
		transform: translate(0, 0) rotate(0deg);
	}
	50% {
		transform: translate(60px, -80px) rotate(12deg);
	}
	100% {
		transform: translate(0, 0) rotate(0deg);
	}
}
</style>
