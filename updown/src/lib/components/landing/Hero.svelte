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
		
		<div class="h-1/3 w-1/3">
			<img src={AppPng.logoBlack} alt="">
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
