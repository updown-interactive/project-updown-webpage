<script>
	import About from '$lib/components/landing/About.svelte';
	import Contact from '$lib/components/landing/Contact.svelte';
	import Footer from '$lib/components/landing/Footer.svelte';
	import Hero from '$lib/components/landing/Hero.svelte';
	import Projects from '$lib/components/landing/Projects.svelte';
	import Services from '$lib/components/landing/Services.svelte';
	import TopBar from '$lib/components/landing/TopBar.svelte';
</script>

<main>
	<TopBar />
	<Hero />
	<About />
	<Services />
	<Projects />
	<Contact />
	<Footer />
</main>
