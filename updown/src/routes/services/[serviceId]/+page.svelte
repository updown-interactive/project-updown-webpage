<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { allServices, type Service } from '$lib/utils/data';

	// Services data
	const serviceDetails: Service[] = allServices;

	// Get the serviceId from the URL parameter
	$: serviceId = $page.params.serviceId;

	// Find service by ID
	function getService(id: number): Service | undefined {
		return serviceDetails.find((s) => s.id === Number(id));
	}

	$: service = getService(Number(serviceId));

	function goBack() {
		goto('/services');
	}

	function goHome() {
		goto('/');
	}

	// Get feature color variations
	function getFeatureColor(index: number) {
		const colors = [
			'from-blue-500 to-purple-600',
			'from-purple-500 to-pink-600',
			'from-pink-500 to-red-600',
			'from-red-500 to-orange-600',
			'from-orange-500 to-yellow-600',
			'from-green-500 to-teal-600',
			'from-teal-500 to-cyan-600',
			'from-cyan-500 to-blue-600'
		];
		return colors[index % colors.length];
	}
</script>

<svelte:head>
	<title>{service ? `${service.title} - ${service?.subtitle}` : 'Service Details'}</title>
</svelte:head>

{#if service && serviceDetails}
	<!-- Floating Navigation -->
	<nav class="fixed top-6 left-6 z-50 transition-all duration-300">
		<div
			class="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/80 px-6 py-3 backdrop-blur-xl"
		>
			<button
				on:click={goHome}
				class="text-sm font-medium text-white/70 transition-colors hover:text-white"
			>
				Home
			</button>
			<span class="text-white/30">/</span>
			<button
				on:click={goBack}
				class="text-sm font-medium text-white/70 transition-colors hover:text-white"
			>
				Services
			</button>
			<span class="text-white/30">/</span>
			<span class="text-sm font-semibold text-white">{service.title}</span>
		</div>
	</nav>

	<!-- Hero Section with Immersive Design -->
	<section class="relative flex min-h-screen items-center justify-center overflow-hidden">
		<!-- Animated background -->
		<div class="absolute inset-0 bg-gradient-to-br {service.color}">
			<div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
			<!-- Floating elements -->
			<div
				class="absolute top-20 left-20 h-64 w-64 animate-pulse rounded-full bg-white/5 blur-3xl"
			></div>
			<div
				class="absolute right-20 bottom-20 h-96 w-96 animate-pulse rounded-full bg-white/3 blur-3xl"
				style="animation-delay: 2s;"
			></div>
			<div
				class="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 transform animate-pulse rounded-full bg-white/2 blur-3xl"
				style="animation-delay: 1s;"
			></div>
		</div>

		<!-- Content -->
		<div class="relative z-10 mx-auto max-w-5xl px-6 text-center">
			<!-- Service Icon -->
			<div class="mb-8 flex justify-center">
				<div class="rounded-full border border-white/20 bg-white/10 p-6 text-6xl backdrop-blur-sm">
					{service.icon}
				</div>
			</div>

			<!-- Main Title -->
			<h1 class="mb-6 text-6xl font-black tracking-tight text-white md:text-8xl lg:text-9xl">
				{service.title}
			</h1>

			<!-- Subtitle -->
			<h2 class="mb-8 text-2xl font-light tracking-wide text-white/90 md:text-4xl">
				{service.subtitle}
			</h2>

			<!-- Category -->
			<p class="mx-auto mb-12 max-w-2xl text-lg text-white/70 md:text-xl">
				{service.category}
			</p>

			<!-- CTA Buttons -->
			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<button
					class="group rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
				>
					<span class="flex items-center gap-2">
						Get Quote
						<svg
							class="h-5 w-5 transition-transform group-hover:translate-x-1"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					</span>
				</button>
				<button
					class="rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20"
				>
					Schedule Consultation
				</button>
			</div>
		</div>

		<!-- Scroll indicator -->
		<div class="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce text-white/60">
			<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M19 14l-7 7m0 0l-7-7m7 7V3"
				/>
			</svg>
		</div>
	</section>

	<!-- Main Content -->
	<main class="relative bg-gray-50">
		<!-- Service Overview Section -->
		<section class="py-20">
			<div class="mx-auto max-w-7xl px-6">
				<div class="relative">
					<!-- Floating card effect -->
					<div class="-translate-y-20 transform rounded-3xl bg-white p-8 shadow-2xl">
						<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
							<!-- Delivery Time -->
							<div class="text-center">
								<div class="mb-4 flex justify-center">
									<div class="rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 p-4">
										<svg
											class="h-8 w-8 text-white"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
									</div>
								</div>
								<h3 class="mb-2 text-xl font-bold text-gray-900">Delivery Time</h3>
								<p class="text-2xl font-bold text-blue-600">{service.deliveryTime}</p>
							</div>

							<!-- Starting Price -->
							<div class="text-center">
								<div class="mb-4 flex justify-center">
									<div class="rounded-xl bg-gradient-to-r from-green-500 to-teal-600 p-4">
										<svg
											class="h-8 w-8 text-white"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
											/>
										</svg>
									</div>
								</div>
								<h3 class="mb-2 text-xl font-bold text-gray-900">Starting From</h3>
								<p class="text-2xl font-bold text-green-600">{service.startingPrice}</p>
							</div>

							<!-- Technologies -->
							<div class="text-center">
								<div class="mb-4 flex justify-center">
									<div class="rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 p-4">
										<svg
											class="h-8 w-8 text-white"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
											/>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
											/>
										</svg>
									</div>
								</div>
								<h3 class="mb-2 text-xl font-bold text-gray-900">Technologies</h3>
								<p class="text-lg font-semibold text-purple-600">
									{service.technologies.length}+ Tools
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Content Grid -->
		<section class="pb-20">
			<div class="mx-auto max-w-7xl px-6">
				<div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
					<!-- Main Content Column -->
					<div class="space-y-16 lg:col-span-2">
						<!-- About Section -->
						<div class="rounded-3xl bg-white p-10 shadow-lg">
							<h3 class="mb-8 flex items-center gap-4 text-4xl font-bold text-gray-900">
								<div
									class="h-12 w-2 rounded-full bg-gradient-to-b from-blue-500 to-purple-600"
								></div>
								About This Service
							</h3>
							<div class="prose prose-lg max-w-none prose-gray">
								<p class="mb-6 text-xl leading-relaxed text-gray-700">
									{service.description}
								</p>
								<p class="leading-relaxed text-gray-600">
									{service.longDescription}
								</p>
							</div>
						</div>

						<!-- Key Features Grid -->
						<div class="rounded-3xl bg-white p-10 shadow-lg">
							<h3 class="mb-8 flex items-center gap-4 text-4xl font-bold text-gray-900">
								<div
									class="h-12 w-2 rounded-full bg-gradient-to-b from-green-500 to-teal-600"
								></div>
								What's Included
							</h3>
							<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
								{#each service.features as feature, index}
									<div
										class="group rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
									>
										<div class="flex items-start gap-4">
											<div
												class="h-8 w-8 flex-shrink-0 bg-gradient-to-br {getFeatureColor(
													index
												)} flex items-center justify-center rounded-xl text-sm font-bold text-white"
											>
												✓
											</div>
											<div>
												<h4
													class="font-semibold text-gray-900 transition-colors group-hover:text-gray-700"
												>
													{feature}
												</h4>
											</div>
										</div>
									</div>
								{/each}
							</div>
						</div>

						<!-- Benefits Section -->
						<div class="rounded-3xl bg-white p-10 shadow-lg">
							<h3 class="mb-8 flex items-center gap-4 text-4xl font-bold text-gray-900">
								<div
									class="h-12 w-2 rounded-full bg-gradient-to-b from-purple-500 to-pink-600"
								></div>
								Key Benefits
							</h3>
							<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
								{#each service.benefits as benefit, index}
									<div
										class="group rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
									>
										<div class="flex items-start gap-4">
											<div
												class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-600 text-sm font-bold text-white"
											>
												{index + 1}
											</div>
											<div>
												<h4
													class="font-semibold text-gray-900 transition-colors group-hover:text-gray-700"
												>
													{benefit}
												</h4>
											</div>
										</div>
									</div>
								{/each}
							</div>
						</div>
					</div>

					<!-- Sidebar -->
					<div class="lg:col-span-1">
						<div class="sticky top-8 space-y-6">
							<!-- Service Info Card -->
							<div class="rounded-3xl bg-white p-8 shadow-lg">
								<h4 class="mb-6 text-2xl font-bold text-gray-900">Service Details</h4>
								<div class="space-y-4">
									<div class="flex items-center justify-between rounded-xl bg-gray-50 p-4">
										<span class="font-medium text-gray-600">Category</span>
										<span class="font-bold text-gray-900">{service.category}</span>
									</div>
									<div class="flex items-center justify-between rounded-xl bg-gray-50 p-4">
										<span class="font-medium text-gray-600">Delivery</span>
										<span class="font-bold text-gray-900">{service.deliveryTime}</span>
									</div>
									<div class="flex items-center justify-between rounded-xl bg-gray-50 p-4">
										<span class="font-medium text-gray-600">Starting From</span>
										<span class="font-bold text-green-600">{service.startingPrice}</span>
									</div>
								</div>
							</div>

							<!-- Technologies Card -->
							<div class="rounded-3xl bg-white p-8 shadow-lg">
								<h4 class="mb-6 text-2xl font-bold text-gray-900">Technologies Used</h4>
								<div class="flex flex-wrap gap-3">
									{#each service.technologies as tech}
										<span
											class="rounded-xl bg-gradient-to-r from-gray-700 to-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
										>
											{tech}
										</span>
									{/each}
								</div>
							</div>

							<!-- Action Buttons -->
							<div class="space-y-4">
								<button
									class="w-full transform rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
								>
									<span class="flex items-center justify-center gap-2">
										<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
											/>
										</svg>
										Get Quote
									</span>
								</button>

								<button
									class="w-full transform rounded-2xl bg-gray-900 px-6 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-800 hover:shadow-xl"
								>
									<span class="flex items-center justify-center gap-2">
										<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a1 1 0 011 1v9a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1h3z"
											/>
										</svg>
										Schedule Call
									</span>
								</button>

								<button
									on:click={goBack}
									class="w-full rounded-2xl border-2 border-gray-200 bg-white px-6 py-4 font-semibold text-gray-700 transition-all duration-300 hover:border-gray-300 hover:bg-gray-50"
								>
									← Back to Services
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
{:else}
	<!-- Enhanced Error State -->
	<div
		class="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 to-black px-6"
	>
		<div class="max-w-md text-center">
			<div class="relative mb-8">
				<div
					class="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-pink-500"
				>
					<svg class="h-16 w-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"
						/>
					</svg>
				</div>
				<div
					class="absolute inset-0 mx-auto h-32 w-32 animate-ping rounded-full bg-gradient-to-br from-red-500 to-pink-500 opacity-20"
				></div>
			</div>

			<h1 class="mb-4 text-4xl font-bold text-white">Service Not Found</h1>
			<p class="mb-8 text-lg text-gray-300">
				The service with ID "<span class="font-mono text-red-400">{serviceId}</span>" could not be
				found.
			</p>

			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<button
					on:click={goBack}
					class="rounded-2xl bg-white px-8 py-3 font-semibold text-gray-900 transition-all duration-300 hover:scale-105 hover:bg-gray-100"
				>
					← Back to Services
				</button>
				<button
					on:click={goHome}
					class="rounded-2xl border-2 border-white bg-transparent px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-gray-900"
				>
					Go Home
				</button>
			</div>
		</div>
	</div>
{/if}

<style>
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

	/* Smooth scrolling */
	:global(html) {
		scroll-behavior: smooth;
	}

	/* Custom scrollbar */
	:global(::-webkit-scrollbar) {
		width: 8px;
	}

	:global(::-webkit-scrollbar-track) {
		background: #f1f1f1;
	}

	:global(::-webkit-scrollbar-thumb) {
		background: #c1c1c1;
		border-radius: 4px;
	}

	:global(::-webkit-scrollbar-thumb:hover) {
		background: #a1a1a1;
	}
</style>
