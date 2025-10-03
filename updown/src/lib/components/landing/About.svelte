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
		<h1
			class="pb-16 text-left leading-tight font-extrabold tracking-tight text-gray-900 transition-all duration-1000 ease-out"
			class:opacity-100={isVisible}
			class:opacity-0={!isVisible}
			class:translate-y-0={isVisible}
			class:translate-y-12={!isVisible}
		>
			<span class="block text-6xl uppercase sm:text-7xl md:text-9xl lg:text-[6rem]">
				In freedom, we create.
			</span>
			<span class="mt-4 block text-6xl uppercase sm:text-7xl md:text-9xl lg:text-[6rem]">
				In creativity, we are free.
			</span>
		</h1>

		
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
						UpDown was created for freedom and creativity—so we can build what we love. We believe
						every business, no matter its size, should have access to world-class technology, and
						we're here to make that possible.
					</p>
					<p class="text-lg leading-relaxed text-gray-700">
						Our journey began with a simple belief: software should be more than functional—it
						should inspire freedom, spark creativity, and open new possibilities. At UpDown, we
						don't just follow trends; we reimagine them, exploring technologies in our own way while
						staying true to our passion for building meaningful, lasting solutions.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
