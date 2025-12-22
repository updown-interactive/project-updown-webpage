<script>
    import { onMount, onDestroy } from "svelte";

    // Text Configuration
    const line1 = "UP".split("");
    const line2 = "DOWN".split("");
    const footer = "INTERACTIVE".split("");

    // State for auto-animation
    let activeIndex = -1; // -1 means no auto-animation active
    let isInteracting = false;
    let autoInterval;

    // --- AUTO ANIMATION (The "Wave") ---
    // This plays a piano-like scale across the letters when idle
    const startAutoPlay = () => {
        let tick = 0;
        const allCharsLength = line1.length + line2.length;
        
        autoInterval = setInterval(() => {
            if (!isInteracting) {
                // Cycle through 0 to length
                activeIndex = tick % allCharsLength;
                tick++;
            } else {
                activeIndex = -1; // Reset if user is in control
            }
        }, 1000); // Speed of the wave
    };

    const stopAutoPlay = () => {
        clearInterval(autoInterval);
        activeIndex = -1;
    };

    // --- HANDLERS ---
    const handleInteractionStart = () => { isInteracting = true; };
    const handleInteractionEnd = () => { isInteracting = false; };

    onMount(() => {
        startAutoPlay();
    });

    onDestroy(() => {
        stopAutoPlay();
    });
</script>

<div class="logo-container">
    <img src="/logo_orange.png" alt="Logo" class="logo" />
</div>

<section 
    class="hero" 
    id="home"
    on:mouseenter={handleInteractionStart}
    on:mousemove={handleInteractionStart}
    on:mouseleave={handleInteractionEnd}
    on:touchstart={handleInteractionStart}
    on:touchend={handleInteractionEnd}
	aria-label="Hero section with interactive Up Down Interactive text"
>
    
    <div class="bg-grid"></div>

    <div class="center-stage">
        
        <div class="word-row">
            {#each line1 as char, i}
                <span 
                    class="char big" 
                    class:auto-active={activeIndex === i}
                >
                    {char}
                </span>
            {/each}
        </div>

        <div class="word-row">
            {#each line2 as char, i}
                <span 
                    class="char big"
                    class:auto-active={activeIndex === (i + line1.length)}
                >
                    {char}
                </span>
            {/each}
        </div>

        <div class="footer-row">
            {#each footer as char}
                <span class="char small">{char}</span>
            {/each}
        </div>

    </div>

    <div class="scroll-hint">
        <span class="dot"></span> EST 2025
    </div>

</section>

<style>
    :global(body) {
        margin: 0;
        --primary: #FE8D07; /* YOUR BRAND COLOR */
        color: #000;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }

    .logo-container {
        position: fixed;
        top: 2rem;
        left: 2rem;
        z-index: 100;
    }
    .logo { width: 50px; }

    /* === HERO LAYOUT === */
    .hero {
        position: relative;
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
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
		   width: 100%;
        min-height: 100vh; 
		background-color: #ffffff;
    }
	

    /* .bg-grid {
        position: absolute;
        inset: 0;
        background-image: 
            linear-gradient(#f4f4f4 1px, transparent 1px),
            linear-gradient(90deg, #f4f4f4 1px, transparent 1px);
        background-size: 40px 40px;
        opacity: 0.6;
        pointer-events: none;
    } */

    .center-stage {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0;
        z-index: 10;
        /* Slight perspective for the 3D lift effect */
        perspective: 1000px;
		
    }

    .word-row {
        display: flex;
        line-height: 0.85; /* Tight vertical stacking */
        overflow: visible;
    }
/* === CHARACTER STYLING: THE "CUT-OUT" === */
    .char {
        display: inline-block;
        font-weight: 900; /* Extra bold for better negative space */
        cursor: default;
        position: relative;
        
        /* THE VISUAL REPLACEMENT FOR STROKE */
        /* We make the letter slightly darker than the white bg to show the shape */
        color: #5e5e5e; 
        
        /* Subtle inner-shadow makes it look like it's carved into the grid */
        text-shadow: 
            inset 1px 1px 2px rgba(0,0,0,0.1),
            -1px -1px 0px rgba(255,255,255,0.8);

        transform: translateY(0);
        transition: 
            transform 0.5s cubic-bezier(0.2, 1, 0.3, 1), 
            color 0.4s ease, 
            text-shadow 0.4s ease,
            filter 0.4s ease;
    }

    /* SIZE VARIANTS */
    .char.big {
        font-size: clamp(6rem, 25vw, 25rem);
        letter-spacing: -0.06em; /* Tighter for negative space impact */
        padding: 0 2px;
    }

    .char.small {
        font-size: clamp(0.8rem, 1.5vw, 1.2rem);
        margin-top: 3rem;
        letter-spacing: 1em;
        font-weight: 700;
        color: #2e2e2e;
    }

    /* === THE HOVER / ACTIVE STATE: THE "REVEAL" === */
    .char:hover, .char.auto-active {
        /* 1. Becomes the Solid Primary Color */
        color: var(--primary);
        
        /* 2. Swaps the "carved-in" look for a "floating-above" look */
        text-shadow: 
            0px 10px 20px rgba(254, 141, 7, 0.3),
            0px 0px 40px rgba(254, 141, 7, 0.1);
        
        /* 3. Physical Pop-Up */
        transform: translateY(-30px) scale(1.08);
        
        /* 4. Brightness boost */
        filter: brightness(1.1);
        
        z-index: 20;
    }

    /* Small text specific hover */
    .char.small:hover {
        transform: translateY(-10px);
        color: #000; /* Footer text turns black instead of orange for classiness */
    }

    /* === FOOTER HINT === */
    .scroll-hint {
        position: absolute;
        bottom: 2rem;
        left: 2rem;
        font-size: 0.7rem;
        letter-spacing: 0.1em;
        font-family: monospace;
        color: #999;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .dot {
        width: 6px;
        height: 6px;
        background: var(--primary);
        border-radius: 50%;
        animation: blink 3s infinite;
    }
    
    @keyframes blink { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }


    /* === MOBILE OPTIMIZATION === */
    @media (max-width: 768px) {
        .logo-container { top: 1.5rem; left: 1.5rem; }
        
        .char.big {
            font-size: 20vw;
            -webkit-text-stroke: 1px #ccc;
        }

        /* On mobile, reduce the jump height so it doesn't look glitchy */
        .char:hover, .char.auto-active {
            transform: translateY(-10px);
        }
    }
</style>