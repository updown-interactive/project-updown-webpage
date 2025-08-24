<!-- src/routes/projects/+page.svelte -->
<script lang="ts">
	import { goto } from '$app/navigation';
	import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	// Mock data - replace with your actual import
	import { allProjects, type Project } from '$lib/utils/data';
	import { goToContact } from '$lib/utils/functions';

	let projects = allProjects;
	let selectedFilter = 'All';
	let searchQuery = '';
	let isLoading = false;

	// Filter options
	const filters = ['All', 'In Development', 'RnD', 'Completed'];
	const categories = [...new Set(projects.map((p) => p.category))];

	// Reactive filtering
	$: filteredProjects = projects.filter((project) => {
		const matchesFilter = selectedFilter === 'All' || project.status === selectedFilter;
		const matchesSearch =
			searchQuery === '' ||
			project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
			project.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
			project.techStack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));

		return matchesFilter && matchesSearch;
	});

	// Navigation functions
	function navigateToProject(projectId: number) {
		isLoading = true;
		setTimeout(() => {
			goto(`/projects/${projectId}`);
		}, 150);
	}

	function goHome() {
		goto('/');
	}

	// Get status styling
	function getStatusStyle(status: string) {
		switch (status) {
			case 'In Development':
				return 'bg-amber-100 text-amber-800 border-amber-200';
			case 'RnD':
				return 'bg-blue-100 text-blue-800 border-blue-200';
			case 'Completed':
				return 'bg-green-100 text-green-800 border-green-200';
			default:
				return 'bg-gray-100 text-gray-800 border-gray-200';
		}
	}

	// Get tech stack color
	function getTechColor(tech: string) {
		const colors = {
			Svelte: 'bg-orange-500',
			Typescript: 'bg-blue-500',
			Rust: 'bg-red-500',
			Golang: 'bg-cyan-500',
			Flutter: 'bg-blue-400',
			Dart: 'bg-black',
			Python: 'bg-green-500',
			'Machine Learning': 'bg-purple-500',
			Redis: 'bg-red-600',
			PostgreSQL: 'bg-blue-700',
			Docker: 'bg-black',
			Kubernetes: 'bg-indigo-600'
		};
		return colors[tech as keyof typeof colors] || 'bg-gray-500';
	}

	let scrollY = 0;
</script>

<svelte:window bind:scrollY />

<svelte:head>
	<title>Projects - My Portfolio</title>
	<meta name="description" content="Explore my latest projects and development work" />
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
				<span class="font-semibold text-white">Projects</span>
			</div>
		</div>
	</nav>

	<!-- Hero Content -->
	<div class="relative z-10 mx-auto max-w-7xl px-6 text-center">
		<h1 class="mb-6 text-5xl font-black tracking-tight text-white md:text-7xl lg:text-8xl">
			All Projects
		</h1>
		<p class="mx-auto mb-8 max-w-3xl text-xl font-light text-white/80 md:text-2xl">
			A collection of innovative solutions and creative implementations
		</p>
		<div class="flex items-center justify-center gap-6 text-white/60">
			<div class="flex items-center gap-2">
				<div class="h-2 w-2 rounded-full bg-emerald-500"></div>
				<span class="text-sm"
					>{projects.filter((p) => p.status === 'Completed').length} Completed</span
				>
			</div>
			<div class="flex items-center gap-2">
				<div class="h-2 w-2 rounded-full bg-amber-500"></div>
				<span class="text-sm"
					>{projects.filter((p) => p.status === 'In Development').length} In Development</span
				>
			</div>
			<div class="flex items-center gap-2">
				<div class="h-2 w-2 rounded-full bg-blue-500"></div>
				<span class="text-sm">{projects.filter((p) => p.status === 'RnD').length} Research</span>
			</div>
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
					placeholder="Search projects, technologies..."
					bind:value={searchQuery}
					class="block w-full rounded-2xl border border-gray-300 bg-white py-3 pr-3 pl-10 leading-5 placeholder-gray-500 transition-all duration-200 focus:border-transparent focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
				/>
			</div>

			<!-- Filter Buttons -->
			<div class="flex gap-2 rounded-2xl border border-gray-200 bg-white p-2 shadow-sm">
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
								({projects.filter((p) => p.status === filter).length})
							</span>
						{/if}
					</button>
				{/each}
			</div>

			<!-- Results Count -->
			<div class="text-sm font-medium text-gray-600">
				{filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
			</div>
		</div>
	</div>
</section>

<!-- Projects Grid -->
<main class="bg-gray-50 py-16">
	<div class="mx-auto max-w-7xl px-6">
		{#if isLoading}
			<!-- Loading State -->
			<div class="flex items-center justify-center py-20">
				<div class="text-center">
					<div
						class="mx-auto mb-4 h-16 w-16 animate-spin rounded-full border-4 border-blue-500/20 border-t-blue-500"
					></div>
					<p class="text-gray-600">Loading project...</p>
				</div>
			</div>
		{:else if filteredProjects.length === 0}
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
				<h3 class="mb-2 text-2xl font-bold text-gray-900">No projects found</h3>
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
			<!-- Projects Grid -->
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each filteredProjects as project, index (project.id)}
					<div
						class="group transform cursor-pointer overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
						on:click={() => navigateToProject(project.id)}
						on:keydown={(e) => e.key === 'Enter' && navigateToProject(project.id)}
						tabindex="0"
						role="button"
						in:fly={{ y: 50, duration: 400, delay: index * 100, easing: cubicOut }}
					>
						<!-- Project Image -->
						<div class="relative overflow-hidden bg-gradient-to-br {project.color} h-48">
							<img
								src={project.image}
								alt="{project.title} preview"
								class="h-full w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
							/>
							<!-- Gradient overlay -->
							<div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

							<!-- Status badge -->
							<div class="absolute top-4 left-4">
								<span
									class="rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-sm {getStatusStyle(
										project.status
									)}"
								>
									{project.status}
								</span>
							</div>

							<!-- Year badge -->
							<div class="absolute top-4 right-4">
								<span
									class="rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm"
								>
									{project.year}
								</span>
							</div>

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

						<!-- Project Content -->
						<div class="p-6">
							<!-- Title and Subtitle -->
							<div class="mb-4">
								<h3
									class="mb-1 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600"
								>
									{project.title}
								</h3>
								<p class="text-sm font-medium text-gray-600">
									{project.subtitle}
								</p>
							</div>

							<!-- Category -->
							<div class="mb-4">
								<span class="text-xs font-semibold tracking-wider text-gray-500 uppercase">
									{project.category}
								</span>
							</div>

							<!-- Description -->
							<p class="mb-6 line-clamp-3 text-sm leading-relaxed text-gray-700">
								{project.description}
							</p>

							<!-- Tech Stack -->
							<div class="mb-4 flex flex-wrap gap-1.5">
								{#each project.techStack.slice(0, 4) as tech}
									<span class="h-2.5 w-2.5 {getTechColor(tech)} rounded-full" title={tech}></span>
								{/each}
								{#if project.techStack.length > 4}
									<span class="ml-1 text-xs font-medium text-gray-500">
										+{project.techStack.length - 4}
									</span>
								{/if}
							</div>

							<!-- Features Preview -->
							<div class="text-xs text-gray-500">
								{project.features.slice(0, 3).join(' • ')}
								{#if project.features.length > 3}
									<span class="font-semibold"> • +{project.features.length - 3} more</span>
								{/if}
							</div>
						</div>

						<!-- Bottom accent -->
						<div class="h-1 bg-gradient-to-r {project.color}"></div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</main>

<!-- Call to Action -->
<section class="bg-white py-16">
	<div class="mx-auto max-w-4xl px-6 text-center">
		<h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Interested in collaborating?</h2>
		<p class="mb-8 text-xl text-gray-600">Let's build something amazing together</p>
		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<button
				class="rounded-2xl bg-black px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700"
				on:click={() => goToContact('project')}
			>
				Get in Touch
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
	:global(.bg-blue-500) {
		background-color: #3b82f6;
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
	:global(.bg-blue-700) {
		background-color: #1d4ed8;
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
