<script lang="ts">
	import { AppPng } from '$lib/utils/assets';
	import { allProjects, allServices } from '$lib/utils/data';
	import { onMount } from 'svelte';

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
		{
			name: 'Facebook',
			url: 'https://facebook.com/updownco',
			icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'
		},
		{
			name: 'Twitter',
			url: 'https://twitter.com/updownco',
			icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'
		},
		{
			name: 'LinkedIn',
			url: 'https://linkedin.com/company/updownco',
			icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
		},
		{
			name: 'Instagram',
			url: 'https://instagram.com/updownco',
			icon: 'M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.988-5.367 11.988-11.988C24.005 5.367 18.638.001 12.017.001zM8.449 12.017c0-1.981 1.587-3.568 3.568-3.568s3.568 1.587 3.568 3.568-1.587 3.568-3.568 3.568-3.568-1.587-3.568-3.568zm7.679-4.695c-.474 0-.857-.383-.857-.857s.383-.857.857-.857.857.383.857.857-.383.857-.857.857zm1.443 8.404c-.142.858-.417 1.614-.981 2.178-.564.564-1.32.839-2.178.981-1.734.098-6.927.098-8.661 0-.858-.142-1.614-.417-2.178-.981-.564-.564-.839-1.32-.981-2.178-.098-1.734-.098-6.927 0-8.661.142-.858.417-1.614.981-2.178.564-.564 1.32-.839 2.178-.981 1.734-.098 6.927-.098 8.661 0 .858.142 1.614.417 2.178.981.564.564.839 1.32.981 2.178.098 1.734.098 6.927 0 8.661z'
		},
		{
			name: 'YouTube',
			url: 'https://youtube.com/@updownco',
			icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'
		}
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
								class="flex-1 rounded-lg border border-slate-600 bg-slate-700 px-4 py-3 text-white placeholder-slate-400 transition-all outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
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
				<div class="flex items-center space-x-6">
					<span class="text-sm font-medium text-slate-400">Follow Us:</span>
					<div class="flex space-x-4">
						{#each socialLinks as social}
							<a
								href={social.url}
								target="_blank"
								rel="noopener noreferrer"
								class="group flex h-10 w-10 transform items-center justify-center rounded-lg bg-slate-800 transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600"
								aria-label="Follow us on {social.name}"
							>
								<svg
									class="h-5 w-5 text-slate-400 transition-colors group-hover:text-white"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d={social.icon} />
								</svg>
							</a>
						{/each}
					</div>
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
