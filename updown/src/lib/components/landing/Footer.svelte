<script lang="ts">
	import { AppPng } from '$lib/utils/assets';
	import { allProjects, allServices } from '$lib/utils/data';
	import { onMount } from 'svelte';
	import { Facebook, X, Linkedin, Instagram, Youtube } from '@lucide/svelte';

	let currentYear = new Date().getFullYear();
	let email = '';
	let isSubscribing = false;
	let subscriptionMessage = '';

	// Newsletter subscription handler
	async function handleNewsletterSubmit(e: Event) {
		e.preventDefault();

		if (!email) {
			subscriptionMessage = 'Please enter your email address.';
			return;
		}

		if (!/\S+@\S+\.\S+/.test(email)) {
			subscriptionMessage = 'Please enter a valid email address.';
			return;
		}

		isSubscribing = true;
		subscriptionMessage = '';

		// Simulate API call
		try {
			await new Promise((resolve) => setTimeout(resolve, 1500));
			subscriptionMessage = 'Thanks for subscribing! 🎉';
			email = '';
		} catch (error) {
			subscriptionMessage = 'Something went wrong. Please try again.';
		} finally {
			isSubscribing = false;
		}
	}

	// Scroll to top function
	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	// Social media links
	const socialLinks = [
		{ name: 'Facebook', url: '', icon: Facebook },
		{ name: 'Twitter', url: 'https://x.com/UpDown_2025', icon: X },
		{ name: 'LinkedIn', url: 'https://linkedin.com/company/updownco', icon: Linkedin },
		{ name: 'Instagram', url: 'https://www.instagram.com/updown_co/', icon: Instagram },
		{ name: 'YouTube', url: 'https://youtube.com/@updown_co?si=91UgWp92Rc_lF4Zz', icon: Youtube }
	];

	// Company links
	const companyLinks = [
		{ name: 'About Us', url: '#about' }
		// { name: 'Our Team', url: '/team' },
		// { name: 'Careers', url: '/careers' },
		// { name: 'Press', url: '/press' },
		// { name: 'Blog', url: '/blog' }
	];

	const serviceLinks = allServices;

	const legalLinks = [
		{ name: 'Privacy Policy', url: '/privacy' },
		{ name: 'Terms of Service', url: '/terms' },
		{ name: 'Cookie Policy', url: '/cookies' },
		{ name: 'GDPR', url: '/gdpr' }
	];
</script>

<footer class="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
	<!-- Main Footer Content -->
	<div class="mx-auto max-w-7xl px-6 py-16">
		<div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
			<!-- Company Info & Newsletter -->
			<div class="space-y-8 lg:col-span-2">
				<!-- Logo and Description -->
				<div class="space-y-6">
					<div class="flex items-center space-x-3">
						<!-- Company Logo -->
						<img src={AppPng.simpleArrowWhite} alt="logo" class="h-20 w-20" />
						<div>
							<h3
								class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-2xl font-bold text-transparent"
							>
								Updown Co
							</h3>
							<p class="text-sm text-slate-400">Elevating Your Digital Presence</p>
						</div>
					</div>

					<p class="max-w-md leading-relaxed text-slate-300">
						We help businesses scale up and optimize their digital infrastructure with cutting-edge
						technology solutions. From web development to digital strategy, we've got you covered.
					</p>

					<!-- Contact Info -->
					<div class="space-y-3">
						<div class="flex items-center space-x-3 text-slate-300">
							<svg
								class="h-5 w-5 text-blue-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
							<span>support@updownco.in</span>
						</div>
						<div class="flex items-center space-x-3 text-slate-300">
							<svg
								class="h-5 w-5 text-blue-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
								/>
							</svg>
							<span>+91 8075164393</span>
						</div>
						<!-- <div class="flex items-center space-x-3 text-slate-300">
							<svg
								class="h-5 w-5 text-blue-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
							<span>123 Innovation Drive, Tech City, TC 12345</span>
						</div> -->
					</div>
				</div>

				<!-- Newsletter Signup -->
				<div class="rounded-2xl border border-slate-700 bg-slate-800/50 p-6">
					<h4 class="mb-3 text-lg font-semibold text-white">Stay Updated</h4>
					<p class="mb-4 text-sm text-slate-400">
						Subscribe to our newsletter for the latest updates, tips, and exclusive offers.
					</p>

					<form on:submit|preventDefault={handleNewsletterSubmit} class="space-y-3">
						<div class="flex flex-col gap-3 sm:flex-row">
							<input
								bind:value={email}
								type="email"
								placeholder="Enter your email"
								class="flex-1 rounded-lg border border-slate-600 bg-slate-700 px-4 py-3 text-white placeholder-slate-400 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
							/>
							<button
								type="submit"
								disabled={isSubscribing}
								class="flex min-w-[120px] items-center justify-center space-x-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 font-medium text-white transition-all duration-200 hover:from-orange-600 hover:to-orange-700 disabled:opacity-50"
							>
								{#if isSubscribing}
									<svg class="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
										<circle
											class="opacity-25"
											cx="12"
											cy="12"
											r="10"
											stroke="currentColor"
											stroke-width="4"
										></circle>
										<path
											class="opacity-75"
											fill="currentColor"
											d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
										></path>
									</svg>
									<span>Subscribing...</span>
								{:else}
									<span>Subscribe</span>
								{/if}
							</button>
						</div>

						{#if subscriptionMessage}
							<p
								class="text-sm"
								class:text-green-400={subscriptionMessage.includes('Thanks')}
								class:text-red-400={!subscriptionMessage.includes('Thanks')}
							>
								{subscriptionMessage}
							</p>
						{/if}
					</form>
				</div>
			</div>

			<!-- Company Links -->
			<div class="space-y-6">
				<h4 class="text-lg font-semibold text-white">Company</h4>
				<ul class="space-y-3">
					{#each companyLinks as link}
						<li>
							<a
								href={link.url}
								class="inline-block transform text-slate-300 transition-colors duration-200 hover:translate-x-1 hover:text-orange-400"
							>
								{link.name}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Services Links -->
			<div class="space-y-6">
				<h4 class="text-lg font-semibold text-white">Services</h4>
				<ul class="space-y-3">
					{#each serviceLinks as link}
						<li>
							<a
								href={'/services/' + link.id.toString()}
								class="inline-block transform text-slate-300 transition-colors duration-200 hover:translate-x-1 hover:text-orange-400"
							>
								{link.title}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<!-- Social Media & Additional Info -->
		<div class="mt-16 border-t border-slate-700 pt-8">
			<div class="flex flex-col items-center justify-between space-y-6 lg:flex-row lg:space-y-0">
				<!-- Social Media Links -->
				<div class="flex space-x-4">
					{#each socialLinks as social}
						<a
							href={social.url}
							target="_blank"
							rel="noopener noreferrer"
							class="group flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600"
							aria-label="Follow us on {social.name}"
						>
							<svelte:component
								this={social.icon}
								class="h-5 w-5 text-slate-400 group-hover:text-white"
							/>
						</a>
					{/each}
				</div>

				<!-- Back to Top Button -->
				<button
					on:click={scrollToTop}
					class="group flex items-center space-x-2 rounded-lg bg-slate-800 px-4 py-2 text-slate-300 transition-all duration-200 hover:bg-slate-700 hover:text-white"
				>
					<span>Back to Top</span>
					<svg
						class="h-4 w-4 transform transition-transform group-hover:-translate-y-1"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 15l7-7 7 7"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>

	<!-- Bottom Bar -->
	<div class="border-t border-slate-700 bg-slate-800/50">
		<div class="mx-auto max-w-7xl px-6 py-6">
			<div class="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
				<!-- Copyright -->
				<div class="text-sm text-slate-400">
					<p>&copy; {currentYear} Updown Co. All rights reserved.</p>
				</div>

				<!-- Legal Links -->
				<div class="flex flex-wrap justify-center space-x-6 md:justify-end">
					{#each legalLinks as link}
						<a
							href={link.url}
							class="text-sm text-slate-400 transition-colors duration-200 hover:text-blue-400"
						>
							{link.name}
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</footer>

<style>
	/* Custom animations */
	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	.animate-spin {
		animation: spin 1s linear infinite;
	}

	/* Smooth hover transitions */
	footer a {
		position: relative;
	}

	footer a:hover {
		text-decoration: none;
	}

	/* Custom focus states */
	footer button:focus,
	footer a:focus,
	footer input:focus {
		outline: 2px solid rgba(59, 130, 246, 0.5);
		outline-offset: 2px;
	}

	/* Responsive text sizes */
	@media (max-width: 640px) {
		footer h3 {
			font-size: 1.5rem;
		}

		footer h4 {
			font-size: 1rem;
		}
	}
</style>
