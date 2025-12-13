<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();

	const site = {
		name: 'UpDown Interactive',
		title: 'UpDown Interactive — We Build Calm, Human Software',
		description:
			'UpDown Interactive is a technology studio building calm, intentional, and human-centered software. Creators of EL OS.',
		url: 'https://updown-interactive.in' // replace with your real domain
	};
</script>

<svelte:head>
	<!-- Primary SEO -->
	<title>{site.title}</title>
	<meta name="description" content={site.description} />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="robots" content="index, follow" />

	<!-- Favicon -->
	<link rel="icon" href={favicon} type="image/svg+xml" />

	<!-- Open Graph (LinkedIn, Facebook, etc.) -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content={site.title} />
	<meta property="og:description" content={site.description} />
	<meta property="og:url" content={site.url} />
	<meta property="og:site_name" content={site.name} />
	<!-- Add when ready -->
	<!-- <meta property="og:image" content="{site.url}/og-image.png" /> -->

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={site.title} />
	<meta name="twitter:description" content={site.description} />
	<!-- <meta name="twitter:image" content="{site.url}/og-image.png" /> -->

	<!-- Theme -->
	<meta name="theme-color" content="#070707" />

	<!-- Apple / PWA hints -->
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
</svelte:head>

{@render children()}
