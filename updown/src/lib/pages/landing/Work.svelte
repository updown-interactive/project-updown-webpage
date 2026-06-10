<script>
	const works = [
		{
			name: 'uBilly',
			logo: '/assets/ubilly.png',
			eyebrow: 'FREE BILLING SOFTWARE',
			tagline: 'Free billing software for everyday businesses',
			footer: 'uBILLY IS BUILT FOR SMALL BUSINESSES.',
			link: 'https://ubilly.com',
			features: [
				{
					id: '01',
					title: 'FAST BILLING',
					tagline: 'NO COUNTER DELAYS',
					desc: 'Lightning-fast billing designed for busy shops, groceries, and restaurants where every second matters.'
				},
				{
					id: '02',
					title: 'OFFLINE-FIRST',
					tagline: 'WORKS WITHOUT INTERNET',
					desc: 'Billy runs locally so billing continues even during internet outages, ensuring uninterrupted sales.'
				},
				{
					id: '03',
					title: 'SMART INVENTORY',
					tagline: 'TRACK PRODUCTS EASILY',
					desc: 'Automatic inventory updates and stock tracking help shop owners stay organized without extra effort.'
				},
				{
					id: '04',
					title: 'BUILT FOR INDIA',
					tagline: 'LOCAL BUSINESS READY',
					desc: 'Designed for Indian shops with GST support, simple product management, and fast invoice generation.'
				}
			]
		},
		{
			name: 'Mash',
			logo: '/assets/mash.png',
			eyebrow: 'PERSONALIZED STUDY APP',
			tagline: 'Learn smarter, build study habits, and master subjects',
			footer: 'MASH GUIDES YOUR ACADEMIC JOURNEY.',
			link: 'https://mash-study.app',
			features: [
				{
					id: '01',
					title: 'SMART SCHEDULING',
					tagline: 'STUDY PLANNER',
					desc: 'Personalized calendars and study sessions optimized for your targets, exams, and daily routines.'
				},
				{
					id: '02',
					title: 'SUBJECT ANALYTICS',
					tagline: 'TRACK YOUR PROGRESS',
					desc: 'Deep visual progress tracking, mock test results, and subject strengths identified automatically.'
				},
				{
					id: '03',
					title: 'COLLABORATIVE HUBS',
					tagline: 'STUDY TOGETHER',
					desc: 'Private shared study rooms, instant peer-to-peer discussion hubs, and collaborative notes.'
				},
				{
					id: '04',
					title: 'EXPERT GUIDANCE',
					tagline: '24/7 AI TUTORS',
					desc: 'Immediate conceptual answers, step-by-step explanations, and real-time guidance whenever you get stuck.'
				}
			]
		}

		// {
		// 	name: 'InMyCity',
		// 	logo: '/assets/inmycity.png',
		// 	eyebrow: 'EVENT DISCOVERY PLATFORM',
		// 	tagline: 'Never miss what’s happening in your city',
		// 	footer: 'INMYCITY HELPS YOU DISCOVER THE CITY.',
		// 	link: 'https://inmycity.today',
		// 	features: [
		// 		{
		// 			id: '01',
		// 			title: 'LIVE EVENTS',
		// 			tagline: 'WHAT’S HAPPENING NOW',
		// 			desc: 'Discover concerts, festivals, workshops, meetups, and experiences happening around you in real time.'
		// 		},
		// 		{
		// 			id: '02',
		// 			title: 'SMART DISCOVERY',
		// 			tagline: 'EVENTS YOU’LL LOVE',
		// 			desc: 'Personalized recommendations based on your interests, location, and the events your friends attend.'
		// 		},
		// 		{
		// 			id: '03',
		// 			title: 'INSTANT BOOKING',
		// 			tagline: 'RESERVE IN SECONDS',
		// 			desc: 'Secure tickets and reserve spots instantly without complicated checkout flows.'
		// 		},
		// 		{
		// 			id: '04',
		// 			title: 'CITY PULSE',
		// 			tagline: 'DON’T MISS OUT',
		// 			desc: 'Stay updated with trending events, hidden experiences, and local gatherings you didn’t know existed.'
		// 		}
		// 	]
		// }
	];
</script>

{#each works as work}
	<section class="work-section" id="work">
		<div class="bg-grid"></div>

		<div class="container">
			<header class="work-header">
				<div class="header-meta">
					<span class="dot pulse"></span>
					<p class="eyebrow">{work.eyebrow}</p>
				</div>
				<div class="title-logo-row">
					<h2 class="project-title">{work.name}</h2>
					{#if work.link}
						<a href={work.link} target="_blank" rel="noopener noreferrer" class="logo-badge">
							<div class="logo-glow"></div>
							<img src={work.logo} alt="{work.name} logo" class="project-logo" />
						</a>
					{:else}
						<div class="logo-badge">
							<div class="logo-glow"></div>
							<img src={work.logo} alt="{work.name} logo" class="project-logo" />
						</div>
					{/if}
				</div>
				<div class="desc-link-row">
					<p class="project-desc">{work.tagline}</p>
					{#if work.link}
						<a href={work.link} target="_blank" rel="noopener noreferrer" class="project-link">
							<span>Visit Website</span>
							<svg
								viewBox="0 0 24 24"
								width="16"
								height="16"
								stroke="currentColor"
								stroke-width="2.5"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="arrow-icon"
							>
								<line x1="7" y1="17" x2="17" y2="7"></line>
								<polyline points="7 7 17 7 17 17"></polyline>
							</svg>
						</a>
					{/if}
				</div>
			</header>

			<div class="feature-grid">
				{#each work.features as feature}
					<div class="feature-card">
						<div class="card-top">
							<span class="id">{feature.id}</span>
							<span class="tagline">{feature.tagline}</span>
						</div>

						<div class="title-wrap">
							{#each feature.title.split(' ') as word}
								<div class="word-box">
									{#each word.split('') as char}
										<span class="char">{char}</span>
									{/each}
								</div>
							{/each}
						</div>

						<div class="card-bottom">
							<p>{feature.desc}</p>
						</div>
					</div>
				{/each}
			</div>

			<footer class="work-footer">
				<p>{work.footer}</p>
			</footer>
		</div>
	</section>
{/each}

<style>
	:global(:root) {
		--primary: #fe8d07;
	}

	.work-section {
		position: relative;
		width: 100%;
		min-height: 100vh;
		background-color: #ffffff;
		padding: 8rem 0;
		overflow: hidden;
	}

	.bg-grid {
		position: absolute;
		inset: 0;
		background-image:
			linear-gradient(#f4f4f4 1px, transparent 1px),
			linear-gradient(90deg, #f4f4f4 1px, transparent 1px);
		background-size: 40px 40px;
		pointer-events: none;
	}

	.container {
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 2rem;
		position: relative;
		z-index: 10;
	}

	/* === HEADER === */
	.work-header {
		margin-bottom: 6rem;
	}

	.header-meta {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-bottom: 1rem;
	}

	.eyebrow {
		font-family: monospace;
		font-size: 0.75rem;
		letter-spacing: 0.28em;
		color: #999;
		text-transform: uppercase;
	}

	.project-title {
		font-size: clamp(3.5rem, 8vw, 8rem);
		font-weight: 900;
		line-height: 1;
		margin: 0;
		color: #222;
		letter-spacing: -0.04em;
	}

	.title-logo-row {
		display: flex;
		align-items: center;
		gap: 3rem;
		margin-bottom: 2rem;
		flex-wrap: wrap;
	}

	.logo-badge {
		position: relative;
		height: clamp(4rem, 8vw, 6.5rem);
		padding: 1.2rem 2.4rem;
		display: flex;
		align-items: center;
		justify-content: center;

		background: rgba(255, 255, 255, 0.03);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border: 1px solid rgba(0, 0, 0, 0.05);
		border-radius: 100px;

		box-shadow:
			0 4px 24px -1px rgba(0, 0, 0, 0.05),
			inset 0 0 20px rgba(255, 255, 255, 0.5);

		transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
		animation: float 6s ease-in-out infinite;
	}

	.logo-glow {
		position: absolute;
		inset: 0;
		border-radius: 100px;
		background: var(--primary);
		filter: blur(40px);
		opacity: 0;
		transition: opacity 0.6s ease;
		z-index: -1;
	}

	.project-logo {
		height: 100%;
		width: auto;
		object-fit: contain;
		filter: grayscale(1) brightness(0.8);
		transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
		position: relative;
		z-index: 1;
	}

	.work-section:hover .logo-badge {
		background: rgba(255, 255, 255, 0.8);
		border-color: rgba(254, 141, 7, 0.2);
		transform: scale(1.08) translateY(-10px) rotate(2deg);
		box-shadow:
			0 20px 40px -10px rgba(254, 141, 7, 0.15),
			inset 0 0 20px rgba(255, 255, 255, 1);
	}

	.work-section:hover .logo-glow {
		opacity: 0.15;
	}

	.work-section:hover .project-logo {
		filter: grayscale(0) brightness(1);
		transform: scale(1.05);
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
	}

	.project-desc {
		max-width: 600px;
		font-size: 1.25rem;
		line-height: 1.6;
		color: #666;
		margin: 0;
	}

	.desc-link-row {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 1.25rem;
	}

	.project-link {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		color: #222;
		text-decoration: none;
		font-weight: 700;
		font-size: 0.9rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		transition: all 0.3s ease;
		position: relative;
		padding-bottom: 2px;
	}

	.project-link::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 2px;
		background-color: var(--primary);
		transform: scaleX(0);
		transform-origin: right;
		transition: transform 0.35s cubic-bezier(0.25, 1, 0.5, 1);
	}

	.project-link:hover::after {
		transform: scaleX(1);
		transform-origin: left;
	}

	.project-link:hover {
		color: var(--primary);
	}

	.arrow-icon {
		transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
	}

	.project-link:hover .arrow-icon {
		transform: translate(3px, -3px);
	}

	/* === FEATURE GRID === */
	.feature-grid {
		display: grid;
		/* INCREASED min-width to 450px to ensure wider cards on desktop */
		grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
		gap: 1px;
		background-color: #efefef;
		border: 1px solid #efefef;
	}

	.feature-card {
		background-color: #fff;
		padding: 4rem 3rem;
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
		transition: background-color 0.4s ease;
		cursor: default;
	}

	.feature-card:hover {
		background-color: #fafafa;
	}

	.card-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.id {
		font-family: monospace;
		color: var(--primary);
		font-weight: 800;
		font-size: 1.1rem;
	}

	.tagline {
		font-size: 0.75rem;
		letter-spacing: 0.2em;
		color: #aaa;
		text-transform: uppercase;
		font-weight: 600;
	}

	/* === TITLE LOGIC === */
	.title-wrap {
		display: flex;
		flex-wrap: wrap; /* Allows wrapping between words */
		gap: 0 0.4em; /* Spacing between words */
		perspective: 1000px;
	}

	.word-box {
		display: flex;
		white-space: nowrap; /* Prevents characters in a word from splitting */
	}

	.char {
		display: inline-block;
		font-size: clamp(1.6rem, 2.5vw, 2.4rem);
		font-weight: 900;
		line-height: 1;
		color: #5e5e5e;

		/* Carved Negative Space Effect */
		text-shadow:
			inset 1px 1px 2px rgba(0, 0, 0, 0.1),
			-1px -1px 0px rgba(255, 255, 255, 0.8);

		transition:
			transform 0.4s cubic-bezier(0.2, 1, 0.3, 1),
			color 0.3s ease,
			text-shadow 0.3s ease;

		padding-right: 0.02em;
	}

	.feature-card:hover .char {
		color: var(--primary);
		text-shadow:
			0px 8px 15px rgba(254, 141, 7, 0.25),
			0px 0px 30px rgba(254, 141, 7, 0.1);
		transform: translateY(-8px) scale(1.05);
	}

	/* Staggered jump for characters */
	.feature-card:hover .char:nth-child(even) {
		transform: translateY(-12px) scale(1.08);
	}

	.card-bottom p {
		font-size: 1.1rem;
		line-height: 1.7;
		color: #888;
		transition: color 0.4s ease;
	}

	.feature-card:hover .card-bottom p {
		color: #222;
	}

	/* === FOOTER === */
	.work-footer {
		margin-top: 8rem;
		padding-top: 4rem;
		border-top: 1px solid #f0f0f0;
		text-align: center;
	}

	.work-footer p {
		font-size: clamp(1rem, 2.2vw, 1.6rem);
		font-weight: 300;
		color: #ccc;
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}

	/* === ACCENTS === */
	.dot {
		width: 8px;
		height: 8px;
		background: var(--primary);
		border-radius: 50%;
	}

	.pulse {
		animation: pulse-glow 2s infinite;
	}

	@keyframes pulse-glow {
		0% {
			box-shadow: 0 0 0 0 rgba(254, 141, 7, 0.7);
		}
		70% {
			box-shadow: 0 0 0 10px rgba(254, 141, 7, 0);
		}
		100% {
			box-shadow: 0 0 0 0 rgba(254, 141, 7, 0);
		}
	}

	/* === RESPONSIVE FIXES === */
	@media (max-width: 1024px) {
		.feature-grid {
			/* On tablet, allow cards to be a bit narrower to stay in 2 columns */
			grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		}
	}

	@media (max-width: 768px) {
		.project-title {
			font-size: 15vw;
		}

		.feature-grid {
			grid-template-columns: 1fr;
		}

		.feature-card {
			padding: 3rem 1.5rem;
		}

		.char {
			/* Ensure text stays within card on mobile */
			font-size: clamp(1.4rem, 8vw, 2rem);
		}

		.word-row {
			line-height: 1.1;
		}
	}
</style>
