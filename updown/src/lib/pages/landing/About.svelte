<script>
	import { onMount } from "svelte";

	let showAbout = false;

	onMount(() => {
		setTimeout(() => (showAbout = true), 1500);
	});
</script>

<section id="about">
	<div class="inverseSurface min-h-screen flex items-center">
		<div class="mx-auto max-w-7xl px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

			<!-- LEFT : Emphasis / Manifesto -->
			<div
				class="
					space-y-6
					transition-all duration-1000 ease-out
					{showAbout ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}
				"
			>
				<h2 class="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
					<span class="zoom-word">Software</span><br />
					<span class="zoom-word">should</span>
					<span class="zoom-word">feel</span><br />
					<span class="zoom-word font-bold">human</span>.
				</h2>

				<h3 class="text-3xl md:text-5xl font-light leading-tight opacity-70">
					Not <span class="zoom-word">loud</span>.<br />
					Not <span class="zoom-word">bloated</span>.<br />
					Just <span class="zoom-word font-semibold">crafted</span>.
				</h3>
			</div>

			<!-- RIGHT : Calm explanation -->
			<div
				class="
					max-w-md text-lg leading-relaxed opacity-80
					transition-all duration-1000 delay-300 ease-out
					{showAbout ? 'opacity-80 translate-x-0' : 'opacity-0 translate-x-12'}
				"
			>
				<p>
					We design and build operating systems and software experiences
					that prioritize clarity over clutter.
				</p>

				<p class="mt-6">
					Every interaction is intentional. Every detail exists for a reason.
					We believe great software disappears — leaving only focus,
					control, and trust.
				</p>

				<p class="mt-6">
					This philosophy is at the core of everything we build, including
					EL&nbsp;OS.
				</p>
			</div>

		</div>
	</div>
</section>

<style>
	/* Zoom lens effect */
	.zoom-word {
		display: inline-block;
		position: relative;
		transition: transform 0.3s ease, filter 0.3s ease;
	}

	.zoom-word:hover {
		transform: scale(1.25);
		filter: brightness(1.15);
		z-index: 10;
	}
</style>
