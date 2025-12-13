<script>
	const features = [
		{
			id: "01",
			title: "Designed for Focus",
			tagline: "A calm interface that gets out of your way",
			desc: "EL OS uses a carefully tuned KDE-based desktop where every element serves a purpose. Animations are restrained, notifications are intentional, and visual noise is eliminated so users can stay in flow for longer periods."
		},
		{
			id: "02",
			title: "Rust-Powered Core",
			tagline: "Safety and performance by default",
			desc: "Critical system services are written in Rust to prevent memory corruption, race conditions, and system instability. This results in a more reliable OS that ages well over time, with fewer crashes and lower maintenance cost."
		},
		{
			id: "03",
			title: "AI, Done Locally",
			tagline: "Intelligence without surveillance",
			desc: "EL OS runs AI models directly on the device. Tasks like search, automation, and assistance happen locally — ensuring privacy, offline capability, and full user control over data."
		},
		{
			id: "04",
			title: "Built for India",
			tagline: "Optimized for real-world conditions",
			desc: "Designed with Indian users in mind, EL OS performs reliably on mid-range hardware, handles inconsistent connectivity gracefully, and supports regional workflows without unnecessary cloud dependence."
		}
	];
</script>

<section id="work" class="inverseSurface min-h-screen">
	<div class="mx-auto max-w-7xl px-6 py-28 space-y-24">

		<!-- Header -->
		<div class="max-w-3xl space-y-6">
			<p class="text-sm uppercase tracking-widest opacity-60">
				Our Work
			</p>

			<h2 class="text-4xl md:text-6xl font-semibold tracking-tight">
				EL OS
			</h2>

			<p class="text-lg md:text-xl leading-relaxed opacity-80">
				EL OS is a modern operating system built with a long-term mindset —
				focused on stability, privacy, and human-centric design rather than
				short-lived trends.
			</p>
		</div>

		<!-- Feature Sections -->
		<div class="space-y-20">
			{#each features as feature}
				<div
					class="
						group grid grid-cols-1 md:grid-cols-3 gap-8
						border-t border-black/10 pt-12
						transition-all duration-500 ease-out
					"
				>
					<!-- Left: Index -->
					<div class="text-sm uppercase tracking-widest opacity-50">
						{feature.id}
					</div>

					<!-- Middle: Title -->
					<div class="md:col-span-1 space-y-2">
						<h3 class="text-2xl md:text-3xl font-medium tracking-tight">
							{feature.title}
						</h3>
						<p class="text-sm opacity-60">
							{feature.tagline}
						</p>
					</div>

					<!-- Right: Description -->
					<div class="md:col-span-1 md:col-start-3">
						<p class="leading-relaxed opacity-75">
							{feature.desc}
						</p>
					</div>
				</div>
			{/each}
		</div>

		<!-- Closing Statement -->
		<div class="max-w-4xl pt-16 border-t border-black/10">
			<p class="text-xl md:text-2xl leading-relaxed font-light opacity-80">
				EL OS is not built to chase trends or lock users into ecosystems.
				<br />
				It is built to be trusted — quietly, securely, and for the long run.
			</p>
		</div>

	</div>
</section>
