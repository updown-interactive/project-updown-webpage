<script>
	const testimonials = [
		{
			quote:
				'We used to lose sales every time the internet went down. uBilly works offline, so our billing never stops. It has been a game changer for our shop.',
			name: 'CLOUD MENSWEAR',
			role: 'CLOTHING RETAIL'
		},
		{
			quote:
				'Managing inventory across hundreds of pet products used to take hours every week. With uBilly, stock updates automatically with every sale. It just works.',
			name: 'BON BEANO PHARMA',
			role: 'PET PRODUCT STORE'
		},
		{
			quote:
				'We tried a few billing apps before, but nothing matched how simple uBilly is. My staff picked it up in minutes, and GST invoices are handled without any hassle.',
			name: 'SS STORE',
			role: 'GENERAL STORE'
		},
		{
			quote:
				'Our customers appreciate the fast, professional bills. And we love how easy it is to track sales and stock from one place. Exactly what a growing business needs.',
			name: 'GREEN VALLEY ORGANICS',
			role: 'ORGANIC PRODUCE'
		}
	];
</script>

<section class="testimonial-section">
	<div class="bg-grid"></div>

	<div class="container">
		<header class="section-header">
			<div class="header-meta">
				<span class="dot pulse"></span>
				<p class="eyebrow">TESTIMONIALS</p>
			</div>
			<h2 class="section-title">LOVED BY BUSINESSES</h2>
			<div class="product-badge">
				<img src="/assets/ubilly.png" alt="uBilly" class="badge-logo" />
				<span class="badge-label">POWERED BY uBILLY</span>
			</div>
		</header>

		<div class="testimonial-grid">
			{#each testimonials as testimonial}
				<div class="testimonial-card">
					<div class="quote-mark">
						<svg
							viewBox="0 0 24 24"
							width="28"
							height="28"
							stroke="var(--primary)"
							stroke-width="1.5"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path
								d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"
							/>
							<path
								d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
							/>
						</svg>
					</div>

					<div class="quote-body">
						{#each testimonial.quote.split(' ') as word}
							<span class="word">{word}</span>
						{/each}
					</div>

					<div class="card-footer">
						<div class="author-info">
							<div class="author-avatar">
								<span class="avatar-char">{testimonial.name[0]}</span>
							</div>
							<div>
								<p class="author-name">{testimonial.name}</p>
								<p class="author-role">{testimonial.role}</p>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	:global(:root) {
		--primary: #fe8d07;
	}

	.testimonial-section {
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

	.section-header {
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

	.section-title {
		font-size: clamp(3rem, 7vw, 7rem);
		font-weight: 900;
		line-height: 1;
		margin: 0 0 2rem 0;
		color: #222;
		letter-spacing: -0.04em;
	}

	.product-badge {
		display: inline-flex;
		align-items: center;
		gap: 12px;
		padding: 0.8rem 1.6rem;
		background: rgba(255, 255, 255, 0.03);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border: 1px solid rgba(0, 0, 0, 0.06);
		border-radius: 100px;
		transition: all 0.4s ease;
	}

	.product-badge:hover {
		border-color: rgba(254, 141, 7, 0.2);
	}

	.badge-logo {
		height: 24px;
		width: auto;
		filter: grayscale(1) brightness(0.7);
		transition: filter 0.4s ease;
	}

	.product-badge:hover .badge-logo {
		filter: grayscale(0) brightness(1);
	}

	.badge-label {
		font-family: monospace;
		font-size: 0.65rem;
		letter-spacing: 0.2em;
		color: #999;
	}

	.testimonial-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
		gap: 1px;
		background-color: #efefef;
		border: 1px solid #efefef;
	}

	.testimonial-card {
		background-color: #fff;
		padding: 4rem 3rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		transition: background-color 0.4s ease;
		cursor: default;
	}

	.testimonial-card:hover {
		background-color: #fafafa;
	}

	.quote-mark {
		opacity: 0.2;
		transition: opacity 0.4s ease;
	}

	.testimonial-card:hover .quote-mark {
		opacity: 0.6;
	}

	.quote-mark svg {
		display: block;
	}

	.quote-body {
		display: flex;
		flex-wrap: wrap;
		gap: 0 0.4em;
		font-size: clamp(1.1rem, 1.6vw, 1.4rem);
		font-weight: 300;
		line-height: 1.8;
		color: #666;
		transition: color 0.4s ease;
		flex: 1;
	}

	.word {
		display: inline-block;
		white-space: nowrap;
		transition: color 0.3s ease;
	}

	.testimonial-card:hover .word {
		color: #333;
	}

	.card-footer {
		border-top: 1px solid #f0f0f0;
		padding-top: 2rem;
		margin-top: auto;
	}

	.author-info {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.author-avatar {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		background: #f5f5f5;
		border: 1px solid #efefef;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.4s ease;
	}

	.testimonial-card:hover .author-avatar {
		background: var(--primary);
		border-color: var(--primary);
	}

	.avatar-char {
		font-weight: 900;
		font-size: 1.1rem;
		color: #aaa;
		transition: color 0.4s ease;
	}

	.testimonial-card:hover .avatar-char {
		color: #fff;
	}

	.author-name {
		font-size: 0.85rem;
		font-weight: 800;
		color: #444;
		margin: 0;
		letter-spacing: 0.05em;
		transition: color 0.4s ease;
	}

	.testimonial-card:hover .author-name {
		color: var(--primary);
	}

	.author-role {
		font-size: 0.7rem;
		font-weight: 600;
		color: #aaa;
		margin: 0.25rem 0 0 0;
		letter-spacing: 0.1em;
		font-family: monospace;
	}

	@media (max-width: 1024px) {
		.testimonial-grid {
			grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		}
	}

	@media (max-width: 768px) {
		.section-title {
			font-size: 13vw;
		}

		.testimonial-grid {
			grid-template-columns: 1fr;
		}

		.testimonial-card {
			padding: 3rem 1.5rem;
		}

		.quote-body {
			font-size: 1rem;
			line-height: 1.7;
		}
	}

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
</style>
