<script>
	import { onMount } from 'svelte';
	import { AppPng } from '$lib/utils/assets';

	let collapsed = true;
	let currentFeature = 0;

	onMount(() => {
		const timer = setTimeout(() => {
			collapsed = false;
		}, 600);

		const handleScroll = () => {
			collapsed = window.scrollY > 50;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<section id="home">
	<div class=" flex min-h-screen flex-col items-center justify-center px-4 pt-12">
		<!-- Original arrow and title animation -->
		<div
			class="relative flex flex-row items-center justify-center transition-all duration-700 ease-in-out"
		>
			<!-- Left arrow -->
			<img
				src={AppPng.arrowUp}
				alt="App Logo"
				class="h-48 w-48 transition-all duration-700 ease-in-out sm:h-48 sm:w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 xl:h-96 xl:w-96"
				class:translate-x-16={collapsed}
				class:sm:translate-x-18={collapsed}
				class:md:translate-x-22={collapsed}
				class:lg:translate-x-24={collapsed}
				class:xl:translate-x-32={collapsed}
				class:-translate-x-8={!collapsed}
				class:sm:-translate-x-12={!collapsed}
				class:md:-translate-x-16={!collapsed}
				class:lg:-translate-x-20={!collapsed}
				class:xl:-translate-x-30={!collapsed}
			/>

			<!-- Title -->
			<h1
				class="pointer-events-none absolute inset-0 flex items-center justify-center text-5xl font-bold text-black transition-all duration-700 ease-in-out sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl"
				class:opacity-100={!collapsed}
				class:opacity-0={collapsed}
				class:scale-100={!collapsed}
				class:scale-0={collapsed}
			>
				UpDown
			</h1>

			<!-- Right arrow -->
			<img
				src={AppPng.arrowDown}
				alt="App Logo"
				class="h-48 w-48 transition-all duration-700 ease-in-out sm:h-48 sm:w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 xl:h-96 xl:w-96"
				class:-translate-x-16={collapsed}
				class:sm:-translate-x-18={collapsed}
				class:md:-translate-x-22={collapsed}
				class:lg:-translate-x-24={collapsed}
				class:xl:-translate-x-32={collapsed}
				class:translate-x-8={!collapsed}
				class:sm:translate-x-12={!collapsed}
				class:md:translate-x-16={!collapsed}
				class:lg:translate-x-20={!collapsed}
				class:xl:translate-x-30={!collapsed}
			/>
		</div>
		<!-- Description -->
		<div
			class="mt-6 max-w-2xl text-center transition-all delay-300 duration-1000 ease-out"
			class:opacity-100={!collapsed}
			class:opacity-0={collapsed}
			class:translate-y-0={!collapsed}
			class:translate-y-12={collapsed}
		>
			<h2 class="mb-4 text-2xl font-semibold text-gray-800">
				Elevating businesses through innovative software solutions
			</h2>
			<p class="text-lg leading-relaxed text-gray-600">
				We craft cutting-edge applications, streamline workflows, and transform ideas into powerful
				digital experiences.
			</p>
		</div>

		<!-- Services ticker -->
		<div
			class="mx-auto mt-12 w-full max-w-4xl overflow-hidden rounded-xl bg-gray-100 p-4 transition-all delay-700 duration-1000 ease-out"
			class:opacity-100={!collapsed}
			class:opacity-0={collapsed}
			class:translate-y-0={!collapsed}
			class:translate-y-20={collapsed}
		>
			<div class="animate-scroll flex whitespace-nowrap">
				<div class="flex items-center space-x-8 font-medium text-gray-600">
					<span>• Web Applications</span>
					<span>• Mobile Development</span>
					<span>• Cloud Solutions</span>
					<span>• API Development</span>
					<span>• DevOps & Automation</span>
					<span>• UI/UX Design</span>
					<span>• Web Applications</span>
					<span>• Mobile Development</span>
					<span>• Cloud Solutions</span>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	.animate-scroll {
		animation: scroll 20s linear infinite;
	}
</style>
