<!-- src/routes/services/+page.svelte -->
<script lang="ts">
	import { goto } from '$app/navigation';
	import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	// Import services data
	import { allServices, type Service } from '$lib/utils/data';
	import { goToContact } from '$lib/utils/functions';

	let services = allServices;
	let selectedFilter = 'All';
	let searchQuery = '';
	let isLoading = false;

	// Filter options based on categories
	const categories = [...new Set(services.map((s) => s.category))];
	const filters = ['All', ...categories];

	// Reactive filtering
	$: filteredServices = services.filter((service) => {
		const matchesFilter = selectedFilter === 'All' || service.category === selectedFilter;
		const matchesSearch =
			searchQuery === '' ||
			service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			service.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
			service.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
			service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
			service.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase())) ||
			service.features.some((feature) => feature.toLowerCase().includes(searchQuery.toLowerCase()));

		return matchesFilter && matchesSearch;
	});

	// Navigation functions
	function navigateToService(serviceId: number) {
		isLoading = true;
		setTimeout(() => {
			goto(`/services/${serviceId}`);
		}, 150);
	}

	function goHome() {
		goto('/');
	}

	// Get category styling
	function getCategoryStyle(category: string) {
		const styles = {
			'Web Development': 'bg-blue-100 text-blue-800 border-blue-200',
			'Mobile Development': 'bg-green-100 text-green-800 border-green-200',
			'Backend Development': 'bg-purple-100 text-purple-800 border-purple-200',
			DevOps: 'bg-orange-100 text-orange-800 border-orange-200',
			'AI/ML': 'bg-red-100 text-red-800 border-red-200',
			Consulting: 'bg-indigo-100 text-indigo-800 border-indigo-200',
			Design: 'bg-pink-100 text-pink-800 border-pink-200'
		};
		return styles[category as keyof typeof styles] || 'bg-gray-100 text-gray-800 border-gray-200';
	}

	// Get tech stack color
	function getTechColor(tech: string) {
		const colors = {
			Svelte: 'bg-orange-500',
			React: 'bg-blue-500',
			'Next.js': 'bg-black',
			Vue: 'bg-green-500',
			Angular: 'bg-red-500',
			Typescript: 'bg-blue-600',
			Javascript: 'bg-yellow-500',
			'Node.js': 'bg-green-600',
			Python: 'bg-green-500',
			Rust: 'bg-red-600',
			Golang: 'bg-cyan-500',
			Flutter: 'bg-blue-400',
			'React Native': 'bg-blue-400',
			AWS: 'bg-orange-400',
			Docker: 'bg-blue-700',
			Kubernetes: 'bg-indigo-600',
			PostgreSQL: 'bg-blue-800',
			MongoDB: 'bg-green-700',
			Redis: 'bg-red-600',
			'Machine Learning': 'bg-purple-500',
			TensorFlow: 'bg-orange-600',
			PyTorch: 'bg-red-400'
		};
		return colors[tech as keyof typeof colors] || 'bg-gray-500';
	}

	// Parse delivery time for sorting/display
	function parseDeliveryTime(timeStr: string): number {
		const match = timeStr.match(/(\d+)/);
		return match ? parseInt(match[1]) : 0;
	}

	let scrollY = 0;
</script>

<svelte:window bind:scrollY />

<svelte:head>
	<title>Services - Professional Development Solutions</title>
	<meta name="description" content="Explore our comprehensive development services and solutions" />
</svelte:head>

<!-- Hero Section -->
<section
	class="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 py-24"
>
	<!-- Background animations -->
	<div class="absolute inset-0">
		<div
			class="absolute top-20 left-20 h-72 w-72 animate-pulse rounded-full bg-blue-500/10 blur-3xl"
		></div>
		<div
			class="absolute right-20 bottom-20 h-96 w-96 animate-pulse rounded-full bg-purple-500/10 blur-3xl"
			style="animation-delay: 2s;"
		></div>
		<div
			class="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 transform animate-pulse rounded-full bg-emerald-500/5 blur-3xl"
			style="animation-delay: 1s;"
		></div>
	</div>

	<!-- Navigation -->
	<nav class="relative z-10 mb-12">
		<div class="mx-auto max-w-7xl px-6">
			<div class="flex items-center gap-3 text-white/70">
				<button on:click={goHome} class="font-medium transition-colors hover:text-white">
					Home
				</button>
				<span>/</span>
				<span class="font-semibold text-white">Services</span>
			</div>
		</div>
	</nav>

	<!-- Hero Content -->
	<div class="relative z-10 mx-auto max-w-7xl px-6 text-center">
		<h1 class="mb-6 text-5xl font-black tracking-tight text-white md:text-7xl lg:text-8xl">
			Our Services
		</h1>
		<p class="mx-auto mb-8 max-w-3xl text-xl font-light text-white/80 md:text-2xl">
			Professional development solutions tailored to your business needs
		</p>
		<div class="flex flex-wrap items-center justify-center gap-6 text-white/60">
			{#each categories as category}
				<div class="flex items-center gap-2">
					<div class="h-2 w-2 rounded-full bg-blue-500"></div>
					<span class="text-sm"
						>{services.filter((s) => s.category === category).length} {category}</span
					>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Filters and Search -->
<section
	class="sticky top-0 z-40 border-b border-gray-200 bg-gray-50 py-12"
	class:shadow-lg={scrollY > 100}
>
	<div class="mx-auto max-w-7xl px-6">
		<div class="flex flex-col items-center justify-between gap-6 lg:flex-row">
			<!-- Search Bar -->
			<div class="relative max-w-md flex-1">
				<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
					<svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</div>
				<input
					type="text"
					placeholder="Search services, technologies, features..."
					bind:value={searchQuery}
					class="block w-full rounded-2xl border border-gray-300 bg-white py-3 pr-3 pl-10 leading-5 placeholder-gray-500 transition-all duration-200 focus:border-transparent focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
				/>
			</div>

			<!-- Filter Buttons -->
			<div class="flex flex-wrap gap-2 rounded-2xl border border-gray-200 bg-white p-2 shadow-sm">
				{#each filters as filter}
					<button
						on:click={() => (selectedFilter = filter)}
						class="rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200"
						class:bg-black={selectedFilter === filter}
						class:text-white={selectedFilter === filter}
						class:text-gray-600={selectedFilter !== filter}
						class:hover:bg-gray-100={selectedFilter !== filter}
					>
						{filter}
						{#if filter !== 'All'}
							<span class="ml-1 text-xs opacity-75">
								({services.filter((s) => s.category === filter).length})
							</span>
						{/if}
					</button>
				{/each}
			</div>

			<!-- Results Count -->
			<div class="text-sm font-medium text-gray-600">
				{filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''}
			</div>
		</div>
	</div>
</section>

<!-- Services Grid -->
<main class="bg-gray-50 py-16">
	<div class="mx-auto max-w-7xl px-6">
		{#if isLoading}
			<!-- Loading State -->
			<div class="flex items-center justify-center py-20">
				<div class="text-center">
					<div
						class="mx-auto mb-4 h-16 w-16 animate-spin rounded-full border-4 border-blue-500/20 border-t-blue-500"
					></div>
					<p class="text-gray-600">Loading service...</p>
				</div>
			</div>
		{:else if filteredServices.length === 0}
			<!-- Empty State -->
			<div class="py-20 text-center" in:fade={{ duration: 300 }}>
				<div
					class="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gray-200"
				>
					<svg
						class="h-12 w-12 text-gray-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</div>
				<h3 class="mb-2 text-2xl font-bold text-gray-900">No services found</h3>
				<p class="mb-6 text-gray-600">Try adjusting your search or filter criteria</p>
				<button
					on:click={() => {
						searchQuery = '';
						selectedFilter = 'All';
					}}
					class="rounded-xl bg-black px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
				>
					Clear filters
				</button>
			</div>
		{:else}
			<!-- Services Grid -->
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each filteredServices as service, index (service.id)}
					<div
						class="group transform cursor-pointer overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
						on:click={() => navigateToService(service.id)}
						on:keydown={(e) => e.key === 'Enter' && navigateToService(service.id)}
						tabindex="0"
						role="button"
						in:fly={{ y: 50, duration: 400, delay: index * 100, easing: cubicOut }}
					>
						<!-- Service Header -->
						<div class="relative overflow-hidden bg-gradient-to-br {service.color} p-8 text-white">
							<!-- Icon -->
							<div
								class="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm"
							>
								<span class="text-2xl">{service.icon}</span>
							</div>

							<!-- Category badge -->
							<div class="absolute top-4 right-4">
								<span
									class="rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-sm"
								>
									{service.category}
								</span>
							</div>

							<!-- Title and Subtitle -->
							<h3 class="mb-2 text-xl font-bold">
								{service.title}
							</h3>
							<p class="text-sm font-medium text-white/80">
								{service.subtitle}
							</p>

							<!-- Hover overlay -->
							<div
								class="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
							>
								<div
									class="flex translate-y-4 transform items-center gap-2 rounded-xl bg-white/90 px-4 py-2 font-semibold text-gray-900 backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0"
								>
									<span>View Details</span>
									<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 5l7 7-7 7"
										/>
									</svg>
								</div>
							</div>
						</div>

						<!-- Service Content -->
						<div class="p-6">
							<!-- Description -->
							<p class="mb-6 line-clamp-3 text-sm leading-relaxed text-gray-700">
								{service.description}
							</p>

							<!-- Key Features -->
							<div class="mb-6">
								<h4 class="mb-3 text-xs font-semibold tracking-wider text-gray-500 uppercase">
									Key Features
								</h4>
								<div class="space-y-1">
									{#each service.features.slice(0, 3) as feature}
										<div class="flex items-center gap-2 text-sm text-gray-600">
											<div class="h-1.5 w-1.5 rounded-full bg-green-500"></div>
											{feature}
										</div>
									{/each}
									{#if service.features.length > 3}
										<div class="pl-3.5 text-xs font-medium text-gray-500">
											+{service.features.length - 3} more features
										</div>
									{/if}
								</div>
							</div>

							<!-- Technologies -->
							<div class="mb-6">
								<h4 class="mb-3 text-xs font-semibold tracking-wider text-gray-500 uppercase">
									Technologies
								</h4>
								<div class="flex flex-wrap gap-1.5">
									{#each service.technologies.slice(0, 6) as tech}
										<span class="h-2.5 w-2.5 {getTechColor(tech)} rounded-full" title={tech}></span>
									{/each}
									{#if service.technologies.length > 6}
										<span class="ml-1 text-xs font-medium text-gray-500">
											+{service.technologies.length - 6}
										</span>
									{/if}
								</div>
							</div>

							<!-- Pricing and Delivery -->
							<div class="flex items-center justify-between rounded-xl bg-gray-50 p-4">
								<div>
									<div class="text-xs font-medium tracking-wider text-gray-500 uppercase">
										Starting From
									</div>
									<div class="text-lg font-bold text-gray-900">{service.startingPrice}</div>
								</div>
								<div class="text-right">
									<div class="text-xs font-medium tracking-wider text-gray-500 uppercase">
										Delivery
									</div>
									<div class="text-sm font-semibold text-gray-700">{service.deliveryTime}</div>
								</div>
							</div>
						</div>

						<!-- Bottom accent -->
						<div class="h-1 bg-gradient-to-r {service.color}"></div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</main>

<!-- Call to Action -->
<section class="bg-white py-16">
	<div class="mx-auto max-w-4xl px-6 text-center">
		<h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Ready to get started?</h2>
		<p class="mb-8 text-xl text-gray-600">
			Let's discuss your project requirements and find the perfect solution
		</p>
		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<button
				class="rounded-2xl bg-black px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700"
				on:click={() => goToContact('service')}
			>
				Get Free Consultation
			</button>
			<button
				class="rounded-2xl border border-gray-300 px-8 py-4 font-semibold text-gray-700 transition-all duration-300 hover:scale-105 hover:border-gray-400"
				on:click={() => goto('/projects')}
			>
				View Our Work
			</button>
		</div>
	</div>
</section>

<style>
	/* Line clamp utility */
	.line-clamp-3 {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	/* Enhanced animations */
	@keyframes pulse {
		0%,
		100% {
			opacity: 0.4;
		}
		50% {
			opacity: 0.8;
		}
	}

	.animate-pulse {
		animation: pulse 4s ease-in-out infinite;
	}

	/* Custom gradient colors */
	:global(.bg-emerald-600) {
		background-color: #059669;
	}
	:global(.bg-emerald-700) {
		background-color: #047857;
	}
	:global(.bg-purple-600) {
		background-color: #7c3aed;
	}
	:global(.bg-purple-700) {
		background-color: #6d28d9;
	}
	:global(.bg-red-600) {
		background-color: #dc2626;
	}
	:global(.bg-red-700) {
		background-color: #b91c1c;
	}
	:global(.bg-emerald-500) {
		background-color: #10b981;
	}
	:global(.bg-purple-500) {
		background-color: #8b5cf6;
	}
	:global(.bg-red-500) {
		background-color: #ef4444;
	}
	:global(.bg-orange-500) {
		background-color: #f97316;
	}
	:global(.bg-orange-600) {
		background-color: #ea580c;
	}
	:global(.bg-orange-400) {
		background-color: #fb923c;
	}
	:global(.bg-blue-500) {
		background-color: #3b82f6;
	}
	:global(.bg-blue-600) {
		background-color: #2563eb;
	}
	:global(.bg-blue-700) {
		background-color: #1d4ed8;
	}
	:global(.bg-blue-800) {
		background-color: #1e40af;
	}
	:global(.bg-cyan-500) {
		background-color: #06b6d4;
	}
	:global(.bg-blue-400) {
		background-color: #60a5fa;
	}
	:global(.bg-green-500) {
		background-color: #22c55e;
	}
	:global(.bg-green-600) {
		background-color: #16a34a;
	}
	:global(.bg-green-700) {
		background-color: #15803d;
	}
	:global(.bg-yellow-500) {
		background-color: #eab308;
	}
	:global(.bg-red-400) {
		background-color: #f87171;
	}
	:global(.bg-indigo-600) {
		background-color: #4f46e5;
	}
	:global(.bg-gray-500) {
		background-color: #6b7280;
	}

	/* Smooth scrolling */
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
