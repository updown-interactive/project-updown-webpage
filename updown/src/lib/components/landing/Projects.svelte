<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { AppPng } from '$lib/utils/assets';
	import { allProjects, type Project } from '$lib/utils/data';
	import { goto } from '$app/navigation';
	import { goToContact } from '$lib/utils/functions';

	interface Stat {
		label: string;
		value: string;
		suffix: string;
	}

	let isVisible: boolean = false;
	let activeProject: number = 0;
	let hoveredProject: number | null = null;
	const projects: Project[] = allProjects;

	onMount(() => {
		if (!browser) return;

		const timer = setTimeout(() => {
			isVisible = true;
		}, 300);

		// Auto-rotate active project
		const interval = setInterval(() => {
			if (hoveredProject === null) {
				activeProject = (activeProject + 1) % projects.length;
			}
		}, 5000);

		return () => {
			clearTimeout(timer);
			clearInterval(interval);
		};
	});

	function setActiveProject(index: number): void {
		activeProject = index;
		hoveredProject = index;
	}

	function clearHover(): void {
		hoveredProject = null;
	}

	function handleProjectClick(projectId: number): void {
		// Navigate to project detail page
		goto(`/projects/${projectId}`);
		// console.log(`Navigate to project ${projectId}`);
	}

	function handleContactClick(): void {
		// Navigate to contact page
		// goto('/contact');
		console.log('Navigate to contact page');
	}
</script>

<section id="projects" class="min-h-screen">
	<!-- Hero Section -->
	<div class="container mx-auto px-4 pt-20 pb-16">
		<div class="mb-20 text-center">
			<h1
				class="mb-6 text-5xl font-bold text-black transition-all duration-1000 ease-out md:text-7xl"
				class:opacity-100={isVisible}
				class:opacity-0={!isVisible}
				class:translate-y-0={isVisible}
				class:translate-y-12={!isVisible}
			>
				Our Projects
			</h1>
			<div
				class="mx-auto mb-8 h-1 w-32 bg-black transition-all delay-200 duration-1000 ease-out"
				class:scale-x-100={isVisible}
				class:scale-x-0={!isVisible}
			></div>
			<p
				class="mx-auto max-w-4xl text-xl text-gray-600 transition-all delay-300 duration-1000 ease-out"
				class:opacity-100={isVisible}
				class:opacity-0={!isVisible}
				class:translate-y-0={isVisible}
				class:translate-y-8={!isVisible}
			>
				Innovative solutions crafted with precision and passion. Each project represents our
				commitment to excellence and technological advancement.
			</p>
		</div>

		<!-- Featured Project Showcase -->
		<div class="relative mb-20">
			<div
				class="relative overflow-hidden rounded-3xl bg-gradient-to-br {projects[activeProject]
					.color} text-white"
			>
				<!-- Background Pattern -->
				<div class="absolute inset-0 opacity-10">
					<div class="absolute inset-0 bg-gradient-to-br from-white via-transparent to-white"></div>
					<div
						class="absolute top-0 left-0 h-full w-full"
						style="background-image: radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), 
								radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%);"
					></div>
				</div>

				<div class="relative z-10 p-8 md:p-16">
					<div class="grid items-center gap-12 md:grid-cols-2">
						<div>
							<div class="mb-4 flex items-center">
								<span
									class="bg-opacity-20 mr-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-black"
								>
									{projects[activeProject].status}
								</span>
								<span class="text-sm opacity-80">{projects[activeProject].year}</span>
							</div>

							<img
								class="mb-5 transform text-4xl transition-transform duration-300 group-hover:scale-110"
								src={projects[activeProject].image}
								alt={projects[activeProject].title}
								width="350"
								height="350"
							/>

							<p class="mb-2 text-sm font-medium tracking-wider uppercase opacity-80">
								{projects[activeProject].category}
							</p>

							<h2 class="mb-2 text-4xl font-bold md:text-6xl">
								{projects[activeProject].title}
							</h2>

							<h3 class="mb-6 text-2xl font-light opacity-90">
								{projects[activeProject].subtitle}
							</h3>

							<p class="mb-8 text-lg leading-relaxed opacity-90">
								{projects[activeProject].longDescription}
							</p>

							<div class="mb-8 flex flex-wrap gap-2">
								{#each projects[activeProject].techStack as tech}
									<span
										class="bg-opacity-20 rounded-full bg-white px-3 py-1 text-sm font-medium text-black"
									>
										{tech}
									</span>
								{/each}
							</div>

							<button
								class="group relative transform overflow-hidden rounded-full bg-white px-8 py-4 text-lg font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl"
								on:click={() => handleProjectClick(projects[activeProject].id)}
							>
								<span class="relative z-10">View Details</span>
								<div
									class="absolute inset-0 origin-left scale-x-0 transform bg-gray-100 transition-transform duration-300 group-hover:scale-x-100"
								></div>
							</button>
						</div>

						<div class="space-y-4">
							<h4 class="mb-6 text-xl font-semibold opacity-90">Key Features</h4>
							{#each projects[activeProject].features as feature, index}
								<div
									class="bg-opacity-10 hover:bg-opacity-20 flex transform items-center rounded-xl bg-white p-4 text-black backdrop-blur-sm transition-all duration-300 hover:scale-105"
									style="animation-delay: {index * 100}ms"
								>
									<div class="mr-4 h-3 w-3 flex-shrink-0 rounded-full bg-white text-black"></div>
									<span class="font-medium">{feature}</span>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>

			<!-- Project Navigation -->
			<div class="mt-8 flex justify-center space-x-4">
				{#each projects as project, index}
					<button
						class="h-4 w-4 rounded-full transition-all duration-300 {activeProject === index
							? 'scale-125 bg-black'
							: 'bg-gray-300 hover:bg-gray-400'}"
						on:click={() => setActiveProject(index)}
						aria-label="Select project {project.title}"
					></button>
				{/each}
			</div>
		</div>

		<!-- Projects Grid -->
		<div class="mb-20 grid grid-cols-1 gap-8 md:grid-cols-3">
			{#each projects as project, index}
				<div
					class="group relative overflow-hidden rounded-2xl bg-gradient-to-br {project.color} transform cursor-pointer text-white transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl"
					class:opacity-100={isVisible}
					class:opacity-0={!isVisible}
					class:translate-y-0={isVisible}
					class:translate-y-20={!isVisible}
					class:ring-4={activeProject === index}
					class:ring-white={activeProject === index}
					class:ring-opacity-50={activeProject === index}
					style="transition-delay: {index * 150 + 600}ms"
					on:mouseenter={() => setActiveProject(index)}
					on:mouseleave={clearHover}
					on:click={() => handleProjectClick(project.id)}
					on:keydown={(e) => e.key === 'Enter' && handleProjectClick(project.id)}
					role="button"
					tabindex="0"
				>
					<!-- Shine effect -->
					<div
						class="absolute inset-0 -translate-x-full -skew-x-12 transform bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-all duration-1000 group-hover:translate-x-full group-hover:opacity-20"
					></div>

					<div class="relative z-10 flex h-full flex-col p-8">
						<!-- Status Badge -->
						<div class="mb-4 flex items-start justify-between">
							<span
								class="bg-opacity-20 rounded-full bg-white px-2 py-1 text-xs font-semibold text-black"
							>
								{project.status}
							</span>
							<img
								class="transform text-4xl transition-transform duration-300 group-hover:scale-110"
								src={project.image}
								alt={project.title}
								width="48"
								height="48"
							/>
						</div>

						<!-- Category -->
						<p class="mb-2 text-xs font-medium tracking-wider uppercase opacity-80">
							{project.category}
						</p>

						<!-- Title -->
						<h3
							class="group-hover:text-opacity-90 mb-2 text-2xl font-bold transition-all duration-300"
						>
							{project.title}
						</h3>

						<h4 class="mb-4 text-lg font-light opacity-90">
							{project.subtitle}
						</h4>

						<!-- Description -->
						<p class="mb-6 flex-grow text-sm leading-relaxed opacity-90">
							{project.description}
						</p>

						<!-- Tech Stack -->
						<div class="mb-4 flex flex-wrap gap-1">
							{#each project.techStack.slice(0, 3) as tech}
								<span class="bg-opacity-20 rounded bg-white px-2 py-1 text-xs text-black">
									{tech}
								</span>
							{/each}
							{#if project.techStack.length > 3}
								<span class="text-xs text-black">+{project.techStack.length - 3}</span>
							{/if}
						</div>

						<!-- Bottom indicator -->
						<div
							class="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 transform bg-white transition-transform duration-500 group-hover:scale-x-100"
						></div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Stats Section -->
		<div class="mb-20 grid grid-cols-2 gap-8 md:grid-cols-4">
			{#each [{ label: 'Products', value: '3', suffix: '' }, { label: 'Technologies Used', value: '15', suffix: '+' }, { label: 'Lines of Code', value: '200', suffix: 'K+' }, { label: 'User Satisfaction', value: '100', suffix: '%' }] as stat, index}
				<div
					class="transform rounded-xl bg-gray-50 p-6 text-center transition-all duration-500 hover:scale-105 hover:bg-gray-100"
					class:opacity-100={isVisible}
					class:opacity-0={!isVisible}
					class:translate-y-0={isVisible}
					class:translate-y-10={!isVisible}
					style="transition-delay: {index * 100 + 1000}ms"
				>
					<div class="mb-2 text-3xl font-bold text-black md:text-4xl">
						{stat.value}<span class="text-gray-600">{stat.suffix}</span>
					</div>
					<div class="text-sm font-medium tracking-wide text-gray-600 uppercase">
						{stat.label}
					</div>
				</div>
			{/each}
		</div>

		<!-- CTA Section -->
		<div class="rounded-3xl bg-black p-12 text-center text-white md:p-16">
			<h2 class="mb-6 text-4xl font-bold md:text-5xl">Have a Project in Mind?</h2>
			<p class="mx-auto mb-8 max-w-3xl text-xl leading-relaxed opacity-90">
				Let's collaborate to bring your vision to life. We specialize in creating innovative
				solutions that drive results and exceed expectations.
			</p>
			<div class="flex flex-col justify-center gap-4 sm:flex-row">
				<button
					class="transform rounded-full bg-white px-8 py-4 text-lg font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-gray-100"
					on:click={() => goToContact('project')}
				>
					Start a Project
				</button>
				<button
					class="transform rounded-full border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black"
					on:click={() => goto('/projects')}
				>
					View All Work
				</button>
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes float {
		0%,
		100% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-10px);
		}
	}

	.animate-float {
		animation: float 6s ease-in-out infinite;
	}

	@keyframes pulse-glow {
		0%,
		100% {
			box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
		}
		50% {
			box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
		}
	}

	.pulse-glow {
		animation: pulse-glow 3s ease-in-out infinite;
	}
</style>
