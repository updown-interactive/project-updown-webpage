<script>
	let { data } = $props();
	const details = data.employeeDetails;
	const { employee, employmentInfo, systemAccess } = details;

	const joinDate = new Date(employmentInfo.start_date).toLocaleDateString('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric'
	});
</script>

<svelte:head>
	<title>{employee.full_name} — {employmentInfo.job_title} · UpDown</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
</svelte:head>

<div class="member-page">
	<!-- Thin accent strip at top -->
	<div class="accent-strip"></div>

	<div class="layout">
		<!-- LEFT: Photo + Identity -->
		<aside class="identity-col">
			<div class="photo-frame">
				{#if employee.dp}
					<img src={employee.dp} alt={employee.full_name} />
				{:else}
					<div class="photo-fallback">{employee.full_name.charAt(0)}</div>
				{/if}
			</div>

			<div class="id-block">
				<span class="mono">{employmentInfo.empl_id}</span>
			</div>

			<div class="tags">
				{#if systemAccess.admin_access}
					<span class="tag tag--accent">Admin</span>
				{/if}
				<span class="tag">{employee.status}</span>
				<span class="tag">{employee.blood_group}</span>
			</div>
		</aside>

		<!-- RIGHT: Information -->
		<main class="info-col">
			<!-- Name — big, editorial -->
			<header class="name-header">
				<h1>{employee.full_name}</h1>
				<p class="role">
					{employmentInfo.job_title}<span class="dot"></span>{employmentInfo.department}
				</p>
			</header>

			<!-- Two-column data rows -->
			<section class="data-grid">
				<div class="data-section">
					<h2>Work</h2>
					<dl>
						<div class="row">
							<dt>Type</dt>
							<dd>{employmentInfo.employment_type}</dd>
						</div>
						<div class="row">
							<dt>Location</dt>
							<dd>{employmentInfo.work_location}</dd>
						</div>
						<div class="row">
							<dt>Since</dt>
							<dd>{joinDate}</dd>
						</div>
						<div class="row">
							<dt>Email</dt>
							<dd class="mono">{systemAccess.company_email}</dd>
						</div>
						{#if employmentInfo.reporting_line}
							<div class="row">
								<dt>Reports to</dt>
								<dd>{employmentInfo.reporting_line}</dd>
							</div>
						{/if}
					</dl>
				</div>

				<div class="data-section">
					<h2>Personal</h2>
					<dl>
						<div class="row">
							<dt>Nationality</dt>
							<dd>{employee.nationality}</dd>
						</div>
						<div class="row">
							<dt>Gender</dt>
							<dd>{employee.gender}</dd>
						</div>
						<div class="row">
							<dt>Phone</dt>
							<dd class="mono">{employee.personal_phone}</dd>
						</div>
						<div class="row">
							<dt>Emergency</dt>
							<dd class="mono">{employee.emergency_contact}</dd>
						</div>
						<div class="row">
							<dt>Email</dt>
							<dd class="mono truncate">{employee.personal_email}</dd>
						</div>
					</dl>
				</div>
			</section>

			<!-- Address — full width -->
			<section class="address-block">
				<h2>Address</h2>
				<p>{employee.home_address}</p>
			</section>

			<footer class="page-footer">
				<a href="/" class="back-link">
					<span class="arrow">←</span> updown-interactive.in
				</a>
			</footer>
		</main>
	</div>
</div>

<style>
	/* ===== Base ===== */
	.member-page {
		font-family: 'Inter', system-ui, -apple-system, sans-serif;
		background: var(--surfaceColor);
		color: var(--onSurface);
		min-height: 100vh;
		opacity: 0;
		animation: reveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
	}

	@keyframes reveal {
		from {
			opacity: 0;
			transform: translateY(12px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.mono {
		font-family: 'Space Mono', 'SF Mono', 'Fira Code', monospace;
		font-size: 0.85em;
		letter-spacing: -0.02em;
	}

	/* ===== Accent Strip ===== */
	.accent-strip {
		height: 3px;
		background: var(--accentColor);
		width: 100%;
		position: sticky;
		top: 0;
		z-index: 100;
	}

	/* ===== Layout ===== */
	.layout {
		max-width: 1100px;
		margin: 0 auto;
		padding: 4rem 2rem 6rem;
		display: grid;
		grid-template-columns: 220px 1fr;
		gap: 4rem;
		align-items: start;
	}

	/* ===== Left Column: Identity ===== */
	.identity-col {
		position: sticky;
		top: 3rem;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.photo-frame {
		width: 100%;
		aspect-ratio: 3 / 4;
		overflow: hidden;
		border: 1px solid var(--borderColor);
	}

	.photo-frame img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		filter: grayscale(100%);
		transition: filter 0.8s ease;
	}

	.photo-frame:hover img {
		filter: grayscale(0%);
	}

	.photo-fallback {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 4rem;
		font-weight: 300;
		color: var(--borderColor);
		background: #e0e0e0;
	}

	.id-block {
		padding: 0.6rem 0;
		border-top: 1px solid var(--borderColor);
		border-bottom: 1px solid var(--borderColor);
		text-align: center;
	}

	.id-block .mono {
		font-size: 0.7rem;
		letter-spacing: 0.08em;
		color: var(--onSurface);
		opacity: 0.5;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
	}

	.tag {
		font-size: 0.6rem;
		font-weight: 600;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		padding: 0.3rem 0.6rem;
		border: 1px solid var(--borderColor);
		color: var(--onSurface);
		opacity: 0.6;
	}

	.tag--accent {
		border-color: var(--accentColor);
		color: var(--accentColor);
		opacity: 1;
	}

	/* ===== Right Column: Info ===== */
	.info-col {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	/* Name Header */
	.name-header h1 {
		font-size: clamp(2.4rem, 5vw, 4.5rem);
		font-weight: 300;
		line-height: 1.05;
		letter-spacing: -0.04em;
		margin: 0;
		color: var(--onSurfacePrimary);
	}

	.role {
		margin-top: 0.75rem;
		font-size: 0.85rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		color: var(--onSurface);
		opacity: 0.5;
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.dot {
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background: var(--accentColor);
		display: inline-block;
	}

	/* Data Grid */
	.data-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
	}

	.data-section h2 {
		font-size: 0.6rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.2em;
		color: var(--accentColor);
		margin: 0 0 1.2rem;
		padding-bottom: 0.6rem;
		border-bottom: 1px solid var(--borderColor);
	}

	dl {
		margin: 0;
	}

	.row {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		padding: 0.55rem 0;
		border-bottom: 1px solid transparent;
		transition: border-color 0.3s;
	}

	.row:hover {
		border-bottom-color: var(--borderColor);
	}

	dt {
		font-size: 0.75rem;
		font-weight: 400;
		color: var(--onSurface);
		opacity: 0.4;
		text-transform: uppercase;
		letter-spacing: 0.06em;
	}

	dd {
		margin: 0;
		font-size: 0.85rem;
		font-weight: 500;
		color: var(--onSurfacePrimary);
		text-align: right;
	}

	.truncate {
		max-width: 180px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	/* Address */
	.address-block h2 {
		font-size: 0.6rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.2em;
		color: var(--accentColor);
		margin: 0 0 0.8rem;
	}

	.address-block p {
		margin: 0;
		font-size: 0.85rem;
		line-height: 1.7;
		color: var(--onSurface);
		opacity: 0.6;
		max-width: 500px;
	}

	/* Footer */
	.page-footer {
		padding-top: 2rem;
		border-top: 1px solid var(--borderColor);
	}

	.back-link {
		font-size: 0.75rem;
		font-weight: 500;
		letter-spacing: 0.06em;
		color: var(--onSurface);
		opacity: 0.35;
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		transition: opacity 0.3s, gap 0.3s;
	}

	.back-link:hover {
		opacity: 1;
		gap: 0.75rem;
	}

	.arrow {
		font-size: 1.1em;
		transition: transform 0.3s;
	}

	.back-link:hover .arrow {
		transform: translateX(-3px);
	}

	/* ===== Responsive ===== */
	@media (max-width: 768px) {
		.layout {
			grid-template-columns: 1fr;
			gap: 2.5rem;
			padding: 2.5rem 1.5rem 4rem;
		}

		.identity-col {
			position: static;
			flex-direction: row;
			align-items: start;
			gap: 1.2rem;
		}

		.photo-frame {
			width: 100px;
			aspect-ratio: 1;
			flex-shrink: 0;
		}

		.id-block {
			text-align: left;
		}

		.data-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.name-header h1 {
			font-size: 2rem;
		}
	}
</style>
