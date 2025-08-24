<script>
	import { onMount } from 'svelte';
	import { AppPng } from '$lib/utils/assets';

	let isVisible = false;
	let currentStat = 0;

	const stats = [
		// { number: '100+', label: 'Projects Delivered' },
		// { number: '50+', label: 'Happy Clients' },
		// { number: '5+', label: 'Years Experience' },
		{ number: '24/7', label: 'Support Available' }
	];

	const values = [
		{
			icon: '🚀',
			title: 'Innovation First',
			description:
				'We embrace cutting-edge technologies and creative solutions to stay ahead of the curve.'
		},
		{
			icon: '🎯',
			title: 'Quality Focus',
			description:
				'Every line of code is crafted with precision, ensuring robust and scalable applications.'
		},
		{
			icon: '🤝',
			title: 'Partnership',
			description:
				'We work closely with our clients as trusted partners in their digital transformation journey.'
		},
		{
			icon: '⚡',
			title: 'Agile Delivery',
			description:
				'Fast iteration cycles and continuous feedback loops ensure timely project completion.'
		}
	];

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						isVisible = true;
					}
				});
			},
			{ threshold: 0.2 }
		);

		const aboutSection = document.getElementById('about');
		if (aboutSection) {
			observer.observe(aboutSection);
		}

		// Stats rotation
		const statsTimer = setInterval(() => {
			currentStat = (currentStat + 1) % stats.length;
		}, 3000);

		return () => {
			observer.disconnect();
			clearInterval(statsTimer);
		};
	});
</script>

<section id="about" class="min-h-screenpy-20">
	<div class="container mx-auto px-4">
		<!-- Section Header -->
		<div
			class="mb-16 text-center transition-all duration-1000 ease-out"
			class:opacity-100={isVisible}
			class:opacity-0={!isVisible}
			class:translate-y-0={isVisible}
			class:translate-y-12={!isVisible}
		>
			<h2 class="mb-4 text-5xl font-bold text-black md:text-6xl lg:text-7xl">
				About <span class="text-black">UpDown</span>
			</h2>
			<div class="mx-auto h-1 w-24 bg-black"></div>
		</div>

		<!-- Main Content Grid -->
		<div class="grid gap-12 lg:grid-cols-1 lg:gap-16">
			<!-- Left Column - Story -->
			<div
				class="space-y-8 transition-all delay-200 duration-1000 ease-out"
				class:opacity-100={isVisible}
				class:opacity-0={!isVisible}
				class:translate-x-0={isVisible}
				class:-translate-x-12={!isVisible}
			>
				<div class="space-y-6">
					<h3 class="text-3xl font-semibold text-black">Our Story</h3>
					<p class="text-lg leading-relaxed text-gray-700">
						Founded with a vision to bridge the gap between ambitious ideas and digital reality,
						UpDown has been at the forefront of software innovation. We believe that every business,
						regardless of size, deserves access to world-class technology solutions.
					</p>
					<p class="text-lg leading-relaxed text-gray-700">
						Our journey began with a simple principle: create software that doesn't just work, but
						transforms how our clients operate and grow. Today, we continue to push boundaries,
						exploring new technologies while maintaining our commitment to excellence.
					</p>
				</div>

			
			</div>
		</div>
	</div>
</section>
