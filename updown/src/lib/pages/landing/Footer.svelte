<script>
    const year = new Date().getFullYear();
    const brand = "UPDOWN".split("");
</script>

<footer class="footer-section">
    <div class="bg-grid"></div>

    <div class="container">
        <div class="footer-hero">
            <div class="brand-wrap">
                {#each brand as char}
                    <span class="char">{char}</span>
                {/each}
            </div>
            <p class="tagline">IN FREEDOM, WE CREATE.</p>
        </div>

        <div class="link-grid">
            <div class="link-group">
                <p class="eyebrow">EXPLORE</p>
                <nav>
                    <a href="#home">HOME</a>
                    <a href="#about">ABOUT</a>
                    <a href="#work">WORK</a>
                    <a href="mailto:admin@updown-interactive.in?subject=Contact%20Updown&body=Hello%20Updown%20Team,">CONTACT</a>
                </nav>
            </div>

            <div class="link-group">
                <p class="eyebrow">CONNECT</p>
                <nav>
                    <a href="https://linkedin.com/company/updownco" target="_blank">LINKEDIN</a>
                    <a href="https://github.com/updown-interactive" target="_blank">GITHUB</a>
                    <a href="https://x.com/UpDown_2025" target="_blank">X (TWITTER)</a>
                    <a href="https://youtube.com/@updown_co" target="_blank">YOUTUBE</a>
                </nav>
            </div>

            <div class="link-group newsletter">
                <p class="eyebrow">SYSTEM STATUS</p>
                <div class="status-box">
                    <span class="dot pulse"></span>
                    <span class="status-text">ALL SYSTEMS OPERATIONAL</span>
                </div>
                <p class="legal">© {year} UPDOWN INTERACTIVE PVT LTD.</p>
            </div>
        </div>

        <div class="bottom-bar">
            <div class="logo-mark">
                <img src="/logo_orange.png" alt="Logo" class="mini-logo" />
            </div>
            <p class="location">THIRUVANANTHAPURAM, IN // 8.772741° N, 76.881240° E</p>
        </div>
    </div>
</footer>

<style>
    :global(:root) {
        --primary: #FE8D07;
    }

    .footer-section {
        position: relative;
        width: 100%;
        background-color: #ffffff;
        padding: 8rem 0 4rem 0;
        border-top: 1px solid #efefef;
        overflow: hidden;
    }

    .bg-grid {
        position: absolute;
        inset: 0;
        background-image: 
            linear-gradient(#f8f8f8 1px, transparent 1px),
            linear-gradient(90deg, #f8f8f8 1px, transparent 1px);
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

    /* === FOOTER HERO === */
    .footer-hero {
        text-align: center;
        margin-bottom: 8rem;
    }

    .brand-wrap {
        display: flex;
        justify-content: center;
        perspective: 1000px;
    }

    .char {
        display: inline-block;
        font-size: clamp(4rem, 15vw, 12rem);
        font-weight: 900;
        color: #5e5e5e;
        text-shadow: 
            inset 1px 1px 2px rgba(0,0,0,0.1),
            -1px -1px 0px rgba(255,255,255,0.8);
        transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);
        padding: 0 0.05em;
        cursor: default;
    }

    .char:hover {
        color: var(--primary);
        text-shadow: 0px 10px 20px rgba(254, 141, 7, 0.2);
        transform: translateY(-15px) scale(1.05);
    }

    .tagline {
        font-family: monospace;
        font-size: 0.8rem;
        letter-spacing: 0.5em;
        color: #aaa;
        margin-top: 2rem;
    }

    /* === LINK GRID === */
    .link-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 4rem;
        padding-bottom: 6rem;
    }

    .eyebrow {
        font-family: monospace;
        font-size: 0.75rem;
        letter-spacing: 0.2em;
        color: #999;
        margin-bottom: 1.5rem;
    }

    nav {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
    }

    nav a {
        text-decoration: none;
        color: #666;
        font-size: 0.9rem;
        font-weight: 600;
        transition: all 0.3s ease;
        width: fit-content;
    }

    nav a:hover {
        color: var(--primary);
        transform: translateX(8px);
    }

    /* === STATUS BOX === */
    .status-box {
        display: flex;
        align-items: center;
        gap: 12px;
        background: #fbfbfb;
        border: 1px solid #efefef;
        padding: 1rem;
        width: fit-content;
        margin-bottom: 1.5rem;
    }

    .status-text {
        font-family: monospace;
        font-size: 0.7rem;
        color: #666;
    }

    .dot {
        width: 8px;
        height: 8px;
        background: #00ca4e;
        border-radius: 50%;
    }

    .pulse {
        animation: pulse-green 2s infinite;
    }

    @keyframes pulse-green {
        0% { box-shadow: 0 0 0 0 rgba(0, 202, 78, 0.7); }
        70% { box-shadow: 0 0 0 10px rgba(0, 202, 78, 0); }
        100% { box-shadow: 0 0 0 0 rgba(0, 202, 78, 0); }
    }

    .legal {
        font-size: 0.75rem;
        color: #bbb;
    }

    /* === BOTTOM BAR === */
    .bottom-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid #efefef;
        padding-top: 2rem;
    }

    .mini-logo {
        width: 30px;
        filter: grayscale(1) opacity(0.5);
        transition: all 0.3s ease;
    }

    .mini-logo:hover {
        filter: grayscale(0) opacity(1);
    }

    .location {
        font-family: monospace;
        font-size: 0.7rem;
        color: #ccc;
    }

    @media (max-width: 768px) {
        .footer-hero { margin-bottom: 4rem; }
        .link-grid { gap: 3rem; }
        .bottom-bar {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
        }
    }
</style>