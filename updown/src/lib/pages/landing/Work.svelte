<script>
    const works = [
        {
            name: "EL OS",
            eyebrow: "Research and Development Desktop Environment",
            tagline: "Simply Human",
            footer: "EL OS IS BUILT FOR HUMAN.",
            features: [
                {
                    id: "01",
                    title: "FOCUS-DRIVEN",
                    tagline: "CLARITY OVER CLUTTER",
                    desc: "A tuned desktop environment where every element serves a purpose, reducing noise and preserving focus."
                },
                {
                    id: "02",
                    title: "RUST-CORE",
                    tagline: "SAFETY BY DEFAULT",
                    desc: "Critical system services are written in Rust to prevent memory corruption and ensure long-term reliability."
                },
                {
                    id: "03",
                    title: "LOCAL-AI",
                    tagline: "PRIVATE INTELLIGENCE",
                    desc: "On-device intelligence enables private search and automation without cloud dependence."
                },
                {
                    id: "04",
                    title: "OPTIMIZED",
                    tagline: "REAL-WORLD PERFORMANCE",
                    desc: "Designed to perform reliably on mid-range hardware and inconsistent connectivity."
                }
            ]
        },
        {
            name: "Mangrove",
            eyebrow: "RESTAURANT Management SYSTEM",
            tagline: "Calm, reliable billing for real kitchens",
            footer: "MANGROVE IS BUILT FOR DAILY OPERATIONS.",
            features: [
                {
                    id: "01",
                    title: "FAST BILLING",
                    tagline: "NO COUNTER DELAYS",
                    desc: "Billing flows optimized for peak restaurant hours, minimizing wait times and operator stress."
                },
                {
                    id: "02",
                    title: "RUST-POWERED",
                    tagline: "SAFE AND STABLE CORE",
                    desc: "The billing engine and critical services are built in Rust, ensuring memory safety and stability."
                },
                {
                    id: "03",
                    title: "LOCAL-FIRST",
                    tagline: "WORKS OFFLINE",
                    desc: "Runs entirely on local infrastructure, keeping billing uninterrupted during internet outages."
                },
                {
                    id: "04",
                    title: "HUMAN FLOWS",
                    tagline: "DESIGNED FOR STAFF",
                    desc: "Interfaces mirror real restaurant workflows, reducing training time and friction."
                }
            ]
        }
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
            <h2 class="project-title">{work.name}</h2>
            <p class="project-desc">{work.tagline}</p>
        </header>

        <div class="feature-grid">
            {#each work.features as feature}
                <div class="feature-card">
                    <div class="card-top">
                        <span class="id">{feature.id}</span>
                        <span class="tagline">{feature.tagline}</span>
                    </div>

                    <div class="title-wrap">
                        {#each feature.title.split(" ") as word}
                            <div class="word-box">
                                {#each word.split("") as char}
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
        --primary: #FE8D07;
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
        margin: 0 0 1.5rem 0;
        color: #222;
        letter-spacing: -0.04em;
    }

    .project-desc {
        max-width: 600px;
        font-size: 1.25rem;
        line-height: 1.6;
        color: #666;
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
            inset 1px 1px 2px rgba(0,0,0,0.1),
            -1px -1px 0px rgba(255,255,255,0.8);

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
        0% { box-shadow: 0 0 0 0 rgba(254, 141, 7, 0.7); }
        70% { box-shadow: 0 0 0 10px rgba(254, 141, 7, 0); }
        100% { box-shadow: 0 0 0 0 rgba(254, 141, 7, 0); }
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