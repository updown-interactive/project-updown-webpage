<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { allProjects, type Project } from '$lib/utils/data';

	// Mock data based on your structure
	const projects: Project[] = allProjects;

	// Get the projectId from the URL parameter
	$: projectId = $page.params.projectId;

	// Find project by ID
	function getProject(id: number): Project | undefined {
		return projects.find((p) => p.id === Number(id));
	}

	$: project = getProject(Number(projectId));

	function goBack() {
		goto('/projects');
	}

	function goHome() {
		goto('/');
	}

	// Get status styling
	function getStatusStyle(status: string) {
		switch (status) {
			case 'In Development':
				return 'bg-yellow-100 text-yellow-800';
			case 'RnD':
				return 'bg-blue-100 text-blue-800';
			case 'Completed':
				return 'bg-green-100 text-green-800';
			default:
				return 'bg-gray-100 text-gray-800';
		}
	}

	// Get tech stack color
	function getTechColor(tech: string) {
		const colors = {
			Svelte: 'bg-orange-100 text-orange-800',
			Typescript: 'bg-blue-100 text-blue-800',
			Rust: 'bg-red-100 text-red-800',
			Golang: 'bg-cyan-100 text-cyan-800',
			Flutter: 'bg-blue-100 text-blue-800',
			Dart: 'bg-blue-100 text-blue-800',
			Python: 'bg-green-100 text-green-800',
			'Machine Learning': 'bg-purple-100 text-purple-800',
			Redis: 'bg-red-100 text-red-800',
			PostgreSQL: 'bg-blue-100 text-blue-800',
			Docker: 'bg-blue-100 text-blue-800',
			Kubernetes: 'bg-blue-100 text-blue-800'
		};
		return colors[tech as keyof typeof colors] || 'bg-gray-100 text-gray-800';
	}
</script>

<svelte:head>
	<title>{project ? `${project.title} - ${project.subtitle}` : 'Project Details'}</title>
</svelte:head>

{#if project}
	<!-- Floating Navigation -->
	<nav class="fixed top-6 left-6 z-50 transition-all duration-300" class:opacity-90={scrollY > 100}>
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
				Projects
			</button>
			<span class="text-white/30">/</span>
			<span class="text-sm font-semibold text-white">{project.title}</span>
		</div>
	</nav>

	<!-- Hero Section with Immersive Design -->
	<section class="relative flex min-h-screen items-center justify-center overflow-hidden">
		<!-- Animated background -->
		<div class="absolute inset-0 bg-gradient-to-br {project.color}">
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
			<!-- Status and Year -->
			<div class="mb-8 flex items-center justify-center gap-4">
				<span
					class="rounded-full px-4 py-2 text-sm font-semibold backdrop-blur-sm {getStatusStyle(
						project.status
					)}"
				>
					{project.status}
				</span>
				<span
					class="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-sm"
				>
					{project.year}
				</span>
			</div>

			<!-- Main Title -->
			<h1 class="mb-6 text-6xl font-black tracking-tight text-white md:text-8xl lg:text-9xl">
				{project.title}
			</h1>

			<!-- Subtitle -->
			<h2 class="mb-8 text-2xl font-light tracking-wide text-white/90 md:text-4xl">
				{project.subtitle}
			</h2>

			<!-- Category -->
			<p class="mx-auto mb-12 max-w-2xl text-lg text-white/70 md:text-xl">
				{project.category}
			</p>

			<!-- CTA Buttons -->
			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<button
					class="group rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
				>
					<span class="flex items-center gap-2">
						View Live Demo
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
								d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
							/>
						</svg>
					</span>
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
		<!-- Project Image Section -->
		<section class="py-20">
			<div class="mx-auto max-w-7xl px-6">
				<div class="relative">
					<!-- Floating card effect -->
					<div class="-translate-y-20 transform rounded-3xl bg-white p-8 shadow-2xl">
						<div
							class="group relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200"
						>
							<img
								src={project.image}
								alt="{project.title} preview"
								class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
							/>
							<div
								class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
							></div>
							<!-- Play button overlay -->
							<div
								class="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100"
							>
								<button
									class="rounded-full bg-white/90 p-6 text-gray-900 shadow-xl backdrop-blur-sm transition-transform hover:scale-110"
									aria-label="Play video"
								>
									<svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
										<path d="M8 5v14l11-7z" />
									</svg>
								</button>
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
								<div class="h-12 w-2 bg-gradient-to-b {project.color} rounded-full"></div>
								About {project.title}
							</h3>
							<div class="prose prose-lg max-w-none prose-gray">
								<p class="mb-6 text-xl leading-relaxed text-gray-700">
									{project.description}
								</p>
								<p class="leading-relaxed text-gray-600">
									{project.longDescription}
								</p>
							</div>
						</div>

						<!-- Features Grid -->
						<div class="rounded-3xl bg-white p-10 shadow-lg">
							<h3 class="mb-8 flex items-center gap-4 text-4xl font-bold text-gray-900">
								<div class="h-12 w-2 bg-gradient-to-b {project.color} rounded-full"></div>
								Key Features
							</h3>
							<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
								{#each project.features as feature, index}
									<div
										class="group rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
									>
										<div class="flex items-start gap-4">
											<div
												class="h-8 w-8 flex-shrink-0 bg-gradient-to-br {project.color} flex items-center justify-center rounded-xl text-sm font-bold text-white"
											>
												{index + 1}
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
					</div>

					<!-- Sidebar -->
					<div class="lg:col-span-1">
						<div class="sticky top-8 space-y-6">
							<!-- Project Info Card -->
							<div class="rounded-3xl bg-white p-8 shadow-lg">
								<h4 class="mb-6 text-2xl font-bold text-gray-900">Project Details</h4>
								<div class="space-y-4">
									<div class="flex items-center justify-between rounded-xl bg-gray-50 p-4">
										<span class="font-medium text-gray-600">Status</span>
										<span
											class="rounded-full px-3 py-1 text-sm font-semibold {getStatusStyle(
												project.status
											)}"
										>
											{project.status}
										</span>
									</div>
									<div class="flex items-center justify-between rounded-xl bg-gray-50 p-4">
										<span class="font-medium text-gray-600">Year</span>
										<span class="font-bold text-gray-900">{project.year}</span>
									</div>
									<div class="rounded-xl bg-gray-50 p-4">
										<span class="mb-2 block font-medium text-gray-600">Category</span>
										<span class="text-sm leading-relaxed font-semibold text-gray-900"
											>{project.category}</span
										>
									</div>
								</div>
							</div>

							<!-- Tech Stack Card -->
							<div class="rounded-3xl bg-white p-8 shadow-lg">
								<h4 class="mb-6 text-2xl font-bold text-gray-900">Technology Stack</h4>
								<div class="flex flex-wrap gap-3">
									{#each project.techStack as tech}
										<span
											class="rounded-xl px-4 py-2 text-sm font-semibold {getTechColor(
												tech
											)} shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
										>
											{tech}
										</span>
									{/each}
								</div>
							</div>

							<!-- Action Buttons -->
							<div class="space-y-4">
								<button
									class="w-full bg-gradient-to-r {project.color} transform rounded-2xl px-6 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
								>
									<span class="flex items-center justify-center gap-2">
										<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
											/>
										</svg>
										Live Demo
									</span>
								</button>

								<button
									on:click={goBack}
									class="w-full rounded-2xl border-2 border-gray-200 bg-white px-6 py-4 font-semibold text-gray-700 transition-all duration-300 hover:border-gray-300 hover:bg-gray-50"
								>
									← Back to Projects
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
							d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
						/>
					</svg>
				</div>
				<div
					class="absolute inset-0 mx-auto h-32 w-32 animate-ping rounded-full bg-gradient-to-br from-red-500 to-pink-500 opacity-20"
				></div>
			</div>

			<h1 class="mb-4 text-4xl font-bold text-white">Project Not Found</h1>
			<p class="mb-8 text-lg text-gray-300">
				The project with ID "<span class="font-mono text-red-400">{projectId}</span>" could not be
				found.
			</p>

			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<button
					on:click={goBack}
					class="rounded-2xl bg-white px-8 py-3 font-semibold text-gray-900 transition-all duration-300 hover:scale-105 hover:bg-gray-100"
				>
					← Back to Projects
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

	/* Custom gradient colors with enhanced effects */
	:global(.bg-emerald-600) {
		background-color: #059669;
	}
	:global(.bg-emerald-700) {
		background-color: #047857;
	}
	:global(.hover\:bg-emerald-700:hover) {
		background-color: #047857;
	}
	:global(.bg-purple-600) {
		background-color: #7c3aed;
	}
	:global(.bg-purple-700) {
		background-color: #6d28d9;
	}
	:global(.hover\:bg-purple-700:hover) {
		background-color: #6d28d9;
	}
	:global(.bg-red-600) {
		background-color: #dc2626;
	}
	:global(.bg-red-700) {
		background-color: #b91c1c;
	}
	:global(.hover\:bg-red-700:hover) {
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
