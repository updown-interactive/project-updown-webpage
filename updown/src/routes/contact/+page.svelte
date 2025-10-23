<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	interface ContactForm {
		name: string;
		email: string;
		company: string;
		subject: string;
		message: string;
		inquiryType: string;
	}

	interface ContactInfo {
		title: string;
		value: string;
		icon: string;
		link?: string;
	}

	let name = '';
	let email = '';
	let phone = '';
	let subject = '';
	let message = '';
	let error = '';
	let success = '';
	let isSubmitting = false;
	let formElement: HTMLFormElement;

	// Get query parameter for dynamic header
	$: queryTopic = $page.url.searchParams.get('topic') || 'Your Next Project';

	// Function to format the topic nicely
	function formatTopic(topic: string): string {
		return topic
			.split(/[-_\s]+/)
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
			.join(' ');
	}

	$: formattedTopic = formatTopic(queryTopic);

	const contactInfo: ContactInfo[] = [
		{
			title: 'Email',
			value: 'support@updown-interactive.in',
			icon: '📧',
			link: 'mailto:support@updown-interactive.in'
		},
		{
			title: 'Phone',
			value: '+91 8075164393',
			icon: '📞',
			link: '+91 8075164393'
		},
		{
			title: 'Address',
			value: 'Mahadevswaram, Kilimanoor, Thiruvananthapuram, Kerala, India',
			icon: '📍'
		},
		{
			title: 'Business Hours',
			value: 'Mon-Fri: 9:00 AM - 6:00 PM PST',
			icon: '🕒'
		}
	];

	const departments = [
		{ value: 'general', label: 'General Inquiry' },
		{ value: 'sales', label: 'Sales' },
		{ value: 'support', label: 'Technical Support' },
		{ value: 'partnership', label: 'Partnerships' },
		{ value: 'careers', label: 'Careers' },
		{ value: 'press', label: 'Press & Media' }
	];

	// Enhanced email validation
	function validateEmail(email: string) {
		const emailRegex =
			/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
		return emailRegex.test(email);
	}

	// Phone validation (optional)
	function validatePhone(phone: string) {
		if (!phone) return true; // Phone is optional
		const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
		return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
	}

	async function handleSubmit(e: Event) {
		e.preventDefault();
		error = '';
		success = '';
		isSubmitting = true;

		// Comprehensive validation
		if (!name.trim()) {
			error = 'Please enter your name.';
			isSubmitting = false;
			return;
		}

		if (name.trim().length < 2) {
			error = 'Name must be at least 2 characters long.';
			isSubmitting = false;
			return;
		}

		if (!email.trim()) {
			error = 'Please enter your email address.';
			isSubmitting = false;
			return;
		}

		if (!validateEmail(email)) {
			error = 'Please enter a valid email address.';
			isSubmitting = false;
			return;
		}

		if (phone && !validatePhone(phone)) {
			error = 'Please enter a valid phone number.';
			isSubmitting = false;
			return;
		}

		if (!subject.trim()) {
			error = 'Please enter a subject line.';
			isSubmitting = false;
			return;
		}

		if (!message.trim()) {
			error = 'Please enter your message.';
			isSubmitting = false;
			return;
		}

		if (message.trim().length < 10) {
			error = 'Message must be at least 10 characters long.';
			isSubmitting = false;
			return;
		}

		// Simulate API call with delay
		try {
			await new Promise((resolve) => setTimeout(resolve, 2000));

			// Mock submit logic — replace with actual API call
			console.log({ name, email, phone, subject, message });

			success = "Thank you! Your message has been sent successfully. We'll get back to you soon.";

			// Reset form
			name = '';
			email = '';
			phone = '';
			subject = '';
			message = '';
		} catch (err) {
			error = 'Something went wrong. Please try again later.';
		} finally {
			isSubmitting = false;
		}
	}

	// Character count for message
	$: messageLength = message.length;
	$: maxMessageLength = 1000;

	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Contact Us - TechCorp</title>
	<meta
		name="description"
		content="Get in touch with TechCorp. We're here to help with your technology needs."
	/>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
	<!-- Hero Section -->
	<section
		class="relative overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white"
	>
		<div class="absolute inset-0 bg-black/10"></div>
		<div class="container relative z-10 mx-auto px-4 py-16 sm:py-24">
			<div class="mx-auto max-w-3xl text-center">
				<h1 class="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
					Let's Talk About <span class="text-blue-200">{formattedTopic}</span>
				</h1>
				<p class="mb-8 text-xl leading-relaxed text-blue-100 sm:text-2xl">
					{#if queryTopic !== 'Your Next Project'}
						Ready to explore {formattedTopic.toLowerCase()} solutions? Our team is here to help you succeed.
					{:else}
						Ready to transform your business with cutting-edge technology? Our team is here to help
						you succeed.
					{/if}
				</p>
				<div class="flex flex-wrap justify-center gap-4">
					<div class="rounded-lg bg-white/20 px-6 py-3 backdrop-blur-sm">
						<span class="text-sm font-medium">⚡ Fast Response</span>
					</div>
					<div class="rounded-lg bg-white/20 px-6 py-3 backdrop-blur-sm">
						<span class="text-sm font-medium">🔒 Secure Communication</span>
					</div>
					<div class="rounded-lg bg-white/20 px-6 py-3 backdrop-blur-sm">
						<span class="text-sm font-medium">🎯 Expert Solutions</span>
					</div>
				</div>
			</div>
		</div>

		<!-- Animated background elements -->
		<div
			class="absolute left-10 top-10 h-20 w-20 animate-pulse rounded-full bg-blue-400/30 blur-xl"
		></div>
		<div
			class="absolute bottom-10 right-10 h-32 w-32 animate-pulse rounded-full bg-indigo-400/20 blur-2xl delay-1000"
		></div>
	</section>

	<!-- Main Content -->
	<section class="container mx-auto px-4 py-16">
		<div class="grid gap-12 lg:grid-cols-3">
			<!-- Contact Information -->
			<div class="lg:col-span-1">
				<div class="sticky top-8">
					<h2 class="mb-8 text-2xl font-bold text-gray-900">Get in Touch</h2>

					<div class="mb-8 space-y-6">
						{#each contactInfo as info}
							<div class="group flex items-start space-x-4">
								<div
									class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-xl transition-colors group-hover:bg-blue-200"
								>
									{info.icon}
								</div>
								<div>
									<h3 class="mb-1 font-semibold text-gray-900">{info.title}</h3>
									{#if info.link}
										<a href={info.link} class="text-gray-600 transition-colors hover:text-blue-600">
											{info.value}
										</a>
									{:else}
										<p class="text-gray-600">{info.value}</p>
									{/if}
								</div>
							</div>
						{/each}
					</div>

					<!-- Social Links -->
					<div class="border-t pt-6">
						<h3 class="mb-4 font-semibold text-gray-900">Follow Us</h3>
						<div class="flex space-x-3">
							{#each ['twitter', 'linkedin', 'github', 'youtube'] as social}
								<a
									href="#{social}"
									class="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 transition-all duration-200 hover:scale-110 hover:bg-blue-100"
								>
									<span class="text-sm font-semibold text-gray-700">{social[0].toUpperCase()}</span>
								</a>
							{/each}
						</div>
					</div>
				</div>
			</div>

			<!-- Contact Form -->
			<div
				class="overflow-hidden rounded-3xl border border-white/50 bg-white/80 shadow-2xl backdrop-blur-sm lg:col-span-2"
			>
				<div class="bg-gradient-to-r from-gray-900 via-black to-gray-800 p-8">
					<h3 class="text-center text-3xl font-bold text-white">Send us a Message</h3>
					<p class="mt-2 text-center text-blue-100">We typically respond within 24 hours</p>
				</div>

				<form
					bind:this={formElement}
					on:submit|preventDefault={handleSubmit}
					class="space-y-8 p-8 md:p-12"
				>
					<!-- Name and Email Row -->
					<div class="grid gap-6 md:grid-cols-2">
						<div class="space-y-2">
							<label for="name" class="block text-sm font-semibold text-gray-700">
								Full Name <span class="text-red-500">*</span>
							</label>
							<input
								id="name"
								bind:value={name}
								type="text"
								placeholder="John Doe"
								class="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 outline-none transition-all duration-200 hover:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
								class:border-red-300={error && !name.trim()}
							/>
						</div>

						<div class="space-y-2">
							<label for="email" class="block text-sm font-semibold text-gray-700">
								Email Address <span class="text-red-500">*</span>
							</label>
							<input
								id="email"
								bind:value={email}
								type="email"
								placeholder="john@example.com"
								class="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 outline-none transition-all duration-200 hover:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
								class:border-red-300={error && (!email.trim() || !validateEmail(email))}
							/>
						</div>
					</div>

					<!-- Phone and Subject Row -->
					<div class="grid gap-6 md:grid-cols-2">
						<div class="space-y-2">
							<label for="phone" class="block text-sm font-semibold text-gray-700">
								Phone Number <span class="text-xs text-gray-400">(optional)</span>
							</label>
							<input
								id="phone"
								bind:value={phone}
								type="tel"
								placeholder="+91 1234567890"
								class="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 outline-none transition-all duration-200 hover:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
								class:border-red-300={error && phone && !validatePhone(phone)}
							/>
						</div>

						<div class="space-y-2">
							<label for="subject" class="block text-sm font-semibold text-gray-700">
								Subject <span class="text-red-500">*</span>
							</label>
							<select
								id="subject"
								bind:value={subject}
								class="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 outline-none transition-all duration-200 hover:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
								class:border-red-300={error && !subject.trim()}
							>
								<option value="">Select a subject...</option>
								<option value="general">General Inquiry</option>
								<option value="support">Technical Support</option>
								<option value="sales">Sales Question</option>
								<option value="partnership">Partnership Opportunity</option>
								<option value="feedback">Feedback</option>
								<option value="other">Other</option>
							</select>
						</div>
					</div>

					<!-- Message -->
					<div class="space-y-2">
						<label for="message" class="block text-sm font-semibold text-gray-700">
							Message <span class="text-red-500">*</span>
						</label>
						<div class="relative">
							<textarea
								id="message"
								bind:value={message}
								rows="6"
								placeholder="Tell us about your project, question, or how we can help you..."
								maxlength={maxMessageLength}
								class="w-full resize-none rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 outline-none transition-all duration-200 hover:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
								class:border-red-300={error && (!message.trim() || message.trim().length < 10)}
							></textarea>
							<div class="absolute bottom-3 right-4 text-xs text-gray-400">
								{messageLength}/{maxMessageLength}
							</div>
						</div>
					</div>

					<!-- Submit Button -->
					<div class="pt-4">
						<button
							type="submit"
							disabled={isSubmitting}
							class="flex w-full min-w-[200px] transform items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-gray-900 via-black to-gray-800 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl disabled:transform-none disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
						>
							{#if isSubmitting}
								<svg class="h-5 w-5 animate-spin text-white" fill="none" viewBox="0 0 24 24">
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
								<span>Sending Message...</span>
							{:else}
								<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
									/>
								</svg>
								<span>Send Message</span>
							{/if}
						</button>
					</div>

					<!-- Feedback Messages -->
					{#if error}
						<div class="flex items-center space-x-3 rounded-xl border border-red-200 bg-red-50 p-4">
							<svg
								class="h-5 w-5 flex-shrink-0 text-red-500"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							<p class="text-sm font-medium text-red-700">{error}</p>
						</div>
					{/if}

					{#if success}
						<div
							class="flex items-center space-x-3 rounded-xl border border-green-200 bg-green-50 p-4"
						>
							<svg
								class="h-5 w-5 flex-shrink-0 text-green-500"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							<p class="text-sm font-medium text-green-700">{success}</p>
						</div>
					{/if}
				</form>
			</div>
		</div>
	</section>

	<!-- FAQ Section -->
	<section class="border-t bg-white">
		<div class="container mx-auto px-4 py-16">
			<div class="mb-12 text-center">
				<h2 class="mb-4 text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
				<p class="mx-auto max-w-2xl text-gray-600">
					Quick answers to common questions. Can't find what you're looking for? Contact us
					directly.
				</p>
			</div>

			<div class="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
				{#each [{ q: "What's your typical response time?", a: 'We respond to all inquiries within 24 hours during business days, often much sooner.' }, { q: 'Do you offer free consultations?', a: 'Yes! We offer free initial consultations to discuss your project needs and requirements.' }, { q: 'What industries do you serve?', a: 'We work with clients across various industries including healthcare, finance, e-commerce, and startups.' }, { q: 'Can you help with existing projects?', a: 'Absolutely! We can assist with maintaining, scaling, or modernizing your existing technology solutions.' }] as faq, i}
					<div class="rounded-xl bg-gray-50 p-6 transition-colors hover:bg-gray-100">
						<h3 class="mb-3 font-semibold text-gray-900">{faq.q}</h3>
						<p class="text-gray-600">{faq.a}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>
</div>

<style>
	:global(body) {
		font-family:
			'Inter',
			system-ui,
			-apple-system,
			sans-serif;
	}
</style>
