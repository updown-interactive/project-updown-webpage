<script>
    import { onMount } from "svelte";

    let visible = false;

    // Split text for individual letter interaction logic
    const manifesto = ["SOFTWARE", "SHOULD", "FEEL", "HUMAN"];

    onMount(() => {
        visible = true;
    });
</script>

<section id="about" class="about-section">
    <div class="bg-grid"></div>
    
    <div class="container">
        <div class="manifesto-side" class:reveal={visible}>
            {#each manifesto as word, wordIdx}
                <div class="word-row">
                    <div class="word-container">
                        {#each word.split("") as char}
                            <span 
                                class="char manifesto-text" 
                                style="transition-delay: {wordIdx * 0.1}s"
                            >
                                {char}
                            </span>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>

        <div class="description-side" class:reveal={visible}>
            <div class="text-block">
              
<p>
    We believe good software respects attention.
    Every interaction has purpose.
    Every detail earns its place.
    When design is done right, complexity fades into the background.
</p>

<p>
    The best systems do not demand focus.
    They create space for it — allowing people to move, decide,
    and create with confidence.
</p>

                <p>
                    This philosophy is at the core of everything we build, including
                </p>
               
            </div>
        </div>
    </div>
</section>

<style>
    :global(:root) {
        --primary: #FE8D07;
    }

    .about-section {
        position: relative;
        width: 100%;
        min-height: 100vh;
        background-color: #ffffff;
        display: flex;
        align-items: center;
        overflow: hidden;
        padding: 4rem 0;
        /* Critical for mobile touch flow */
        touch-action: pan-y;
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
        width: 100%;
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 2rem;
        display: grid;
        grid-template-columns: 1fr;
        gap: 4rem;
        z-index: 10;
    }

    @media (min-width: 768px) {
        .container {
            grid-template-columns: 1.2fr 0.8fr;
            gap: 2rem;
        }
    }

    /* === MANIFESTO SIDE === */
    .manifesto-side {
        display: flex;
        flex-direction: column;
        justify-content: center;
        opacity: 0;
        transform: translateX(-30px);
        transition: all 1s ease-out;
        perspective: 1000px;
    }

    .manifesto-side.reveal {
        opacity: 1;
        transform: translateX(0);
    }

    .word-row {
        display: flex;
        line-height: 0.85;
        overflow: visible;
    }

    .word-container {
        display: flex;
        white-space: nowrap;
    }

    .manifesto-text {
        display: inline-block;
        font-size: clamp(3.5rem, 8vw, 8rem);
        font-weight: 900;
        cursor: default;
        position: relative;
        
        /* DEFAULT: Carved into the grid */
        color: #5e5e5e; 
        text-shadow: 
            inset 1px 1px 2px rgba(0,0,0,0.1),
            -1px -1px 0px rgba(255,255,255,0.8);

        transition: transform 0.5s cubic-bezier(0.2, 1, 0.3, 1), 
                    color 0.4s ease, 
                    text-shadow 0.4s ease,
                    filter 0.4s ease;
        padding-right: 0.05em;

        /* Mobile touch optimization */
        -webkit-tap-highlight-color: transparent;
        will-change: transform, color;
    }

    /* HOVER & ACTIVE (Touch) */
    .manifesto-text:hover, .manifesto-text:active {
        color: var(--primary);
        text-shadow: 
            0px 10px 20px rgba(254, 141, 7, 0.3),
            0px 0px 40px rgba(254, 141, 7, 0.1);
        transform: translateY(-15px) scale(1.1);
        filter: brightness(1.1);
        z-index: 20;
    }

    /* === DESCRIPTION SIDE === */
    .description-side {
        display: flex;
        align-items: center;
        opacity: 0;
        transform: translateX(30px);
        transition: all 1s ease-out 0.3s;
    }

    .description-side.reveal {
        opacity: 1;
        transform: translateX(0);
    }

    .text-block {
        max-width: 450px;
        font-size: 1.15rem;
        line-height: 1.7;
        color: #333;
    }

    .text-block p {
        margin-bottom: 1.5rem;
    }

    /* === MOBILE ADJUSTMENTS === */
    @media (max-width: 768px) {
        .container {
            padding: 0 1.5rem;
            gap: 3rem;
        }

        .about-section {
            padding: 4rem 0;
        }
        
        .manifesto-text {
            /* Slightly smaller relative size to prevent edge-bleeding */
            font-size: clamp(2.8rem, 14vw, 5rem);
        }

        .manifesto-text:hover, .manifesto-text:active {
            /* Smaller jump on mobile to keep it under the finger */
            transform: translateY(-8px) scale(1.05);
        }

        .word-row {
            line-height: 1.1; /* More vertical breathing room for carved shadows */
        }

        .text-block {
            font-size: 1rem;
        }
    }
</style>