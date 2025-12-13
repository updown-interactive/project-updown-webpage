<script>
	const lines = [
		"In Freedom",
		"We Create"
	];

	const split = (text) => text.split("");
</script>

<section class="inverseSurface h-screen flex items-center justify-center overflow-hidden">
	<div class="px-6 text-center space-y-6">

		{#each lines as line, lineIndex}
			<h2
				class="
					font-semibold tracking-tight leading-none
					text-[clamp(3rem,10vw,10rem)]
					select-none
					transition-all duration-1000 ease-out
					animate-fade-up
				"
				style="animation-delay: {lineIndex * 200}ms"
			>
				{#each split(line) as letter}
					<span
						class="
							inline-block
							opacity-80
							transition-all duration-300 ease-out
							hover:-translate-y-4
							hover:scale-110
							hover:opacity-100
							hover:text-black
							cursor-default
						"
					>
						{letter === " " ? "\u00A0" : letter}
					</span>
				{/each}
			</h2>
		{/each}

		<!-- Accent line -->
		<div class="pt-8 flex justify-center">
			<div class="h-[2px] w-28 bg-black/40"></div>
		</div>

	</div>
</section>

<style>
	@keyframes fade-up {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-fade-up {
		animation: fade-up 1s cubic-bezier(0.22, 1, 0.36, 1) both;
	}
</style>
