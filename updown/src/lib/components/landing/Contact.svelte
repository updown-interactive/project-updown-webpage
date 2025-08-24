<script lang="ts">
	import { onMount } from 'svelte';

	let name = '';
	let email = '';
	let phone = '';
	let subject = '';
	let message = '';
	let error = '';
	let success = '';
	let isSubmitting = false;
	let formElement: HTMLFormElement;

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
</script>

<section
	class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-6 py-16"
	id="contact"
>
	<div class="mx-auto max-w-4xl">
		<!-- Header Section -->
		<div class="mb-16 text-center">
			<div class="inline-block">
				<h2 class="t mb-6 text-5xl font-bold md:text-6xl">Get In Touch</h2>
				<div class="mx-auto mb-6 h-1 w-24 rounded-full bg-black"></div>
			</div>
			<p class="mx-auto max-w-2xl text-xl leading-relaxed text-gray-600">
				Have a question, suggestion, or just want to say hello? We'd love to hear from you. Send us
				a message and we'll respond as soon as possible.
			</p>
		</div>

		<!-- Contact Info Cards -->
		<div class="mb-16 grid gap-6 md:grid-cols-3">
			<div
				class="rounded-2xl border border-white/50 bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
			>
				<div
					class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-gray-900 via-black to-gray-800"
				>
					<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
						/>
					</svg>
				</div>
				<h3 class="mb-2 font-semibold text-gray-800">Email Us</h3>
				<p class="text-sm text-gray-600">support@updownco.in</p>
			</div>

			<div
				class="rounded-2xl border border-white/50 bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
			>
				<div
					class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-gray-900 via-black to-gray-800"
				>
					<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
						/>
					</svg>
				</div>
				<h3 class="mb-2 font-semibold text-gray-800">Call Us</h3>
				<p class="text-sm text-gray-600">+91 8075164393</p>
			</div>

			<div
				class="rounded-2xl border border-white/50 bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
			>
				<div
					class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-gray-900 via-black to-gray-800"
				>
					<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
				</div>
				<h3 class="mb-2 font-semibold text-gray-800">Visit Us</h3>
				<p class="text-sm text-gray-600"></p>
			</div>
		</div>

		<!-- Contact Form -->
		<div
			class="overflow-hidden rounded-3xl border border-white/50 bg-white/80 shadow-2xl backdrop-blur-sm"
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
							class="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 transition-all duration-200 outline-none hover:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
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
							class="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 transition-all duration-200 outline-none hover:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
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
							placeholder="+1 (555) 123-4567"
							class="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 transition-all duration-200 outline-none hover:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
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
							class="w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 transition-all duration-200 outline-none hover:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
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
							class="w-full resize-none rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 transition-all duration-200 outline-none hover:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
							class:border-red-300={error && (!message.trim() || message.trim().length < 10)}
						></textarea>
						<div class="absolute right-4 bottom-3 text-xs text-gray-400">
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
		<!-- Additional Contact Information -->
		<div class="mt-16 text-center">
			<div class="rounded-2xl border border-white/50 bg-white/60 p-8 shadow-lg backdrop-blur-sm">
				<h4 class="mb-4 text-xl font-semibold text-gray-800">Business Hours</h4>
				<div class="text-gray-600">
					<p class="font-medium">24/7 Support</p>
					<p class="text-sm">We're available around the clock to assist you.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	/* Custom scrollbar for textarea */
	textarea::-webkit-scrollbar {
		width: 8px;
	}

	textarea::-webkit-scrollbar-track {
		background: #f1f5f9;
		border-radius: 4px;
	}

	textarea::-webkit-scrollbar-thumb {
		background: #cbd5e1;
		border-radius: 4px;
	}

	textarea::-webkit-scrollbar-thumb:hover {
		background: #94a3b8;
	}

	/* Smooth focus transitions */
	input:focus,
	select:focus,
	textarea:focus {
		transform: translateY(-1px);
		box-shadow: 0 10px 25px -5px rgba(79, 70, 229, 0.1);
	}

	/* Button hover effects */
	button:not(:disabled):hover {
		background-size: 110% 110%;
	}

	/* Loading animation refinement */
	.animate-spin {
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
