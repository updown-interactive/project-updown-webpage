<script>
	import { goto } from '$app/navigation';
	import { AppPng } from '$lib/utils/assets';
	import { goToContact } from '$lib/utils/functions';
	let scrollY = 0;
	let menuOpen = false;

	function goHome() {
		window.location.href = '#home';
	}
</script>

<svelte:window bind:scrollY />

<!-- Dark Glassmorphic Navigation -->
<nav
	class="fixed top-6 left-1/2 z-50 w-[90%] max-w-5xl -translate-x-1/2 transition-all duration-300"
	class:opacity-90={scrollY > 100}
>
	<div
		class="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/80 px-6 py-3 backdrop-blur-xl"
	>
		<!-- Logo -->
		<button on:click={goHome} class="flex items-center transition-opacity hover:opacity-80">
			<img src={AppPng.simpleArrowWhite} alt="logo" class="h-6 w-6" />
		</button>

		<!-- Desktop Nav Links -->
		<div class="hidden items-center gap-3 md:flex">
			<a href="#home" class="text-sm font-medium text-white/70 hover:text-white"> Home </a>
			<span class="text-white/30">/</span>
			<a href="#about" class="text-sm font-medium text-white/70 hover:text-white"> About </a>
			<span class="text-white/30">/</span>
			<a href="#services" class="text-sm font-medium text-white/70 hover:text-white"> Services </a>
			<span class="text-white/30">/</span>
			<a href="#projects" class="text-sm font-medium text-white/70 hover:text-white"> Projects </a>
		</div>

		<!-- Call to Action (Desktop) -->
		<div class="hidden md:block">
			<button
				class="rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/20"
				on:click={() => goto("#contact")}
			>
				Contact Us
			</button>
		</div>

		<!-- Hamburger (Mobile) -->
		<button
			class="flex flex-col gap-1 md:hidden"
			on:click={() => (menuOpen = !menuOpen)}
			aria-label="Toggle menu"
		>
			<span
				class="block h-0.5 w-6 bg-white transition-all"
				class:rotate-45={menuOpen}
				class:translate-y-1.5={menuOpen}
			></span>
			<span class="block h-0.5 w-6 bg-white transition-all" class:opacity-0={menuOpen}></span>
			<span
				class="block h-0.5 w-6 bg-white transition-all"
				class:-rotate-45={menuOpen}
				class:-translate-y-1.5={menuOpen}
			></span>
		</button>
	</div>

	<!-- Mobile Menu -->
	{#if menuOpen}
		<div
			class="mt-2 flex flex-col gap-4 rounded-2xl border border-white/10 bg-black/90 px-6 py-4 backdrop-blur-xl md:hidden"
		>
			<a href="#home" class="text-sm font-medium text-white/70 hover:text-white"> Home </a>
			<a href="#about" class="text-sm font-medium text-white/70 hover:text-white"> About </a>
			<a href="#services" class="text-sm font-medium text-white/70 hover:text-white"> Services </a>
			<a href="#projects" class="text-sm font-medium text-white/70 hover:text-white"> Projects </a>

			<button
				class="rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/20"
			>
				Contact Us
			</button>
		</div>
	{/if}
</nav>
