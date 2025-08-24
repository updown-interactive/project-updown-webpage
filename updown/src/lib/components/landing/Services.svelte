<script>
	import { goto } from '$app/navigation';
	import { allServices } from '$lib/utils/data';
	import { goToContact } from '$lib/utils/functions';
	import { onMount } from 'svelte';

	let isVisible = false;
	let activeService = 0;
	let currentStat = 0;

	const stats = [
		// { number: '100+', label: 'Projects Delivered' },
		// { number: '50+', label: 'Happy Clients' },
		// { number: '5+', label: 'Years Experience' },
		{ number: '24/7', label: 'Support Available' }
	];

	const services = allServices;

	onMount(() => {
		const timer = setTimeout(() => {
			isVisible = true;
		}, 300);

		// Auto-rotate active service
		const interval = setInterval(() => {
			activeService = (activeService + 1) % services.length;
		}, 4000);

		// Stats rotation
		const statsTimer = setInterval(() => {
			currentStat = (currentStat + 1) % stats.length;
		}, 3000);

		return () => {
			clearTimeout(timer);
			clearInterval(interval);
		};
	});
</script>

<section id="services" class="min-h-screen">
	<!-- Header Section -->
	<div class="container mx-auto px-4 pt-20 pb-16">
		<div class="mb-16 text-center">
			<h1
				class="mb-6 text-5xl font-bold text-black transition-all duration-1000 ease-out md:text-7xl"
				class:opacity-100={isVisible}
				class:opacity-0={!isVisible}
				class:translate-y-0={isVisible}
				class:translate-y-12={!isVisible}
			>
				Our Services
			</h1>
			<div
				class="mx-auto mb-8 h-1 w-24 bg-black transition-all delay-200 duration-1000 ease-out"
				class:scale-x-100={isVisible}
				class:scale-x-0={!isVisible}
			></div>
			<p
				class="mx-auto max-w-3xl text-xl text-gray-600 transition-all delay-300 duration-1000 ease-out"
				class:opacity-100={isVisible}
				class:opacity-0={!isVisible}
				class:translate-y-0={isVisible}
				class:translate-y-8={!isVisible}
			>
				Comprehensive digital solutions designed to elevate your business and transform your ideas
				into reality
			</p>
		</div>

		<!-- Services Grid -->
		<div class="mb-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each services as service, index}
				<button
					on:mouseenter={() => (activeService = index)}
					on:click={() => (window.location.href = '/services/' + service.id)}
				>
					<div
						class="group relative overflow-hidden rounded-2xl bg-gradient-to-br {service.color} transform cursor-pointer p-8 text-white transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl"
						class:opacity-100={isVisible}
						class:opacity-0={!isVisible}
						class:translate-y-0={isVisible}
						class:translate-y-20={!isVisible}
						style="transition-delay: {index * 100 + 400}ms"
					>
						<!-- Background animation -->
						<div
							class="absolute inset-0 -translate-x-full -skew-x-12 transform bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-full group-hover:opacity-10"
						></div>

						<!-- Service icon -->
						<div
							class="mb-4 transform text-4xl transition-transform duration-300 group-hover:scale-110"
						>
							{service.icon}
						</div>

						<!-- Service title -->
						<h3
							class="mb-4 text-2xl font-bold transition-colors duration-300 group-hover:text-gray-100"
						>
							{service.title}
						</h3>

						<!-- Service description -->
						<p class="mb-6 leading-relaxed text-gray-200">
							{service.description}
						</p>

						<!-- Features list -->
						<ul class="space-y-2">
							{#each service.features as feature}
								<li class="flex items-center text-sm text-gray-300">
									<span
										class="mr-3 h-1 w-1 rounded-full bg-white transition-colors duration-300 group-hover:bg-gray-200"
									></span>
									{feature}
								</li>
							{/each}
						</ul>

						<!-- Hover indicator -->
						<div
							class="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 transform bg-white transition-transform duration-300 group-hover:scale-x-100"
						></div>
					</div>
				</button>
			{/each}
		</div>

		<!-- Featured Service Spotlight -->
		<div class="relative overflow-hidden rounded-3xl bg-black p-12 text-white md:p-16">
			<div class="relative z-10">
				<div class="grid items-center gap-12 md:grid-cols-2">
					<div>
						<h2 class="mb-6 text-4xl font-bold md:text-5xl">Featured Service</h2>
						<div class="mb-6 animate-pulse text-6xl">
							{services[activeService].icon}
						</div>
						<h3 class="mb-4 text-3xl font-semibold text-gray-100">
							{services[activeService].title}
						</h3>
						<p class="mb-8 text-xl leading-relaxed text-gray-300">
							{services[activeService].description}
						</p>
						<button
							class="group relative overflow-hidden rounded-full bg-white px-8 py-4 font-semibold text-black transition-all duration-300 hover:bg-[var(--accentColor)] hover:shadow-lg"
						>
							<span class="relative z-10">Learn More</span>
							<div
								class="absolute inset-0 origin-left scale-x-0 transform bg-gradient-to-r from-[var(--accentColor)] to-[var(--accentColor)] transition-transform duration-300 group-hover:scale-x-100"
							></div>
						</button>
					</div>
					<div class="space-y-4">
						<h4 class="mb-4 text-xl font-semibold text-gray-200">Key Features:</h4>
						{#each services[activeService].features as feature, index}
							<div
								class="flex transform items-center rounded-lg bg-gray-800 p-4 transition-all duration-300 hover:bg-gray-700"
								style="animation-delay: {index * 100}ms"
							>
								<div class="mr-4 h-3 w-3 rounded-full bg-white"></div>
								<span class="text-gray-200">{feature}</span>
							</div>
						{/each}
					</div>
				</div>
			</div>

			<!-- Background pattern -->
			<div class="absolute inset-0 opacity-5">
				<div class="absolute inset-0 bg-gradient-to-br from-white via-transparent to-white"></div>
			</div>
		</div>

		<!-- Animated Stats -->
		<!-- <div class="mt-10 rounded-xl bg-black p-8">
			<div class="text-center">
				<div class="mb-2 text-4xl font-bold text-white">
					{stats[currentStat].number}
				</div>
				<div class="text-sm font-medium tracking-wide text-gray-300 uppercase">
					{stats[currentStat].label}
				</div>
			</div>
			<div class="mt-4 flex justify-center space-x-2">
				{#each stats as _, index}
					<div
						class="h-2 w-8 rounded-full transition-all duration-300"
						class:bg-white={index === currentStat}
						class:bg-gray-600={index !== currentStat}
					></div>
				{/each}
			</div>
		</div> -->
		<div class="mt-10 rounded-3xl bg-black p-12 text-center text-white md:p-16">
			<h2 class="mb-6 text-4xl font-bold md:text-5xl">Our Services</h2>
			<p class="mx-auto mb-8 max-w-3xl text-xl leading-relaxed opacity-90">
				Explore the range of services we provide to help you achieve your goals. From strategy to
				execution, we deliver innovative solutions tailored to your needs.
			</p>
			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<button
					class="transform rounded-full bg-white px-8 py-4 text-lg font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-gray-100"
					on:click={() => goto('/services')}
				>
					View Services
				</button>
				<button
					class="transform rounded-full border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black"
					on:click={() => goToContact('service')}
				>
					Contact Us
				</button>
			</div>
		</div>

		<!-- Process Section -->
		<!-- <div class="mt-20 text-center">
			<h2 class="mb-12 text-4xl font-bold text-black">Our Process</h2>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-4">
				{#each ['Discover', 'Design', 'Develop', 'Deploy'] as step, index}
					<div class="relative">
						<div
							class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-black text-xl font-bold text-white"
						>
							{index + 1}
						</div>
						<h3 class="mb-2 text-xl font-semibold">{step}</h3>
						<div
							class="absolute top-8 left-1/2 h-px w-full -translate-y-1/2 transform bg-gray-300 {index ===
							3
								? 'hidden md:hidden'
								: 'hidden md:block'}"
						></div>
					</div>
				{/each}
			</div>
		</div> -->

		<!-- CTA Section -->
		<!-- <div class="mt-20 rounded-3xl bg-gray-50 p-12 text-center">
			<h2 class="mb-4 text-3xl font-bold text-black">Ready to Get Started?</h2>
			<p class="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
				Let's discuss how our services can help transform your business ideas into powerful digital
				solutions.
			</p>
			<button
				class="transform rounded-full bg-black px-12 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-gray-800 hover:shadow-xl"
			>
				Contact Us Today
			</button>
		</div> -->
	</div>
</section>

<style>
	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-fadeInUp {
		animation: fadeInUp 0.6s ease-out forwards;
	}
</style>
