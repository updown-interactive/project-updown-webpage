<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Updown Interactive</title>
	<meta
		name="description"
		content="Updown Interactive helps businesses scale up and optimize their digital infrastructure with cutting-edge technology."
	/>

	<!-- SEO / Social -->
	<meta property="og:title" content="Updown Interactive" />
	<meta property="og:description" content="In freedom we create. in creativity we are free" />
	<meta property="og:url" content="https://www.updown-interactive.in" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/un_logo.png" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

{@render children()}
