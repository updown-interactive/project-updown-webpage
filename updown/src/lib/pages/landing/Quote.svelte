<script>
    const lines = [
        "IN FREEDOM",
        "WE CREATE"
    ];
</script>

<section class="quote-section">
    <div class="bg-grid"></div>

    <div class="content-wrapper">
        {#each lines as line}
            <div class="word-row">
                {#each line.split(" ") as word, wordIndex}
                    <div class="word-container">
                        {#each word.split("") as char}
                            <span class="char quote-size">{char}</span>
                        {/each}
                    </div>
                    
                    {#if wordIndex < line.split(" ").length - 1}
                        <span class="word-spacer"></span>
                    {/if}
                {/each}
            </div>
        {/each}

        <div class="accent-mark">
            <span class="dot"></span>
        </div>
    </div>
</section>

<style>
    :global(:root) {
        --primary: #FE8D07;
    }

    .quote-section {
        position: relative;
        width: 100%;
        min-height: 100vh; 
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #ffffff;
        overflow: hidden;
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

    .content-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        perspective: 1000px; 
        z-index: 10;
        width: 100%;
    }

    .word-row {
        display: flex;
        line-height: 0.9; 
        overflow: visible;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap; /* Keep on one line for desktop */
    }

    .word-container {
        display: flex;
        white-space: nowrap;
    }

    /* === THE FIX: WORD SPACER === */
    .word-spacer {
        display: inline-block;
        /* Matches the font scaling so the space is proportional to the text */
        width: clamp(1.5rem, 4vw, 4rem); 
    }

    .char {
        display: inline-block;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-weight: 900; 
        cursor: default;
        position: relative;
        color: #5e5e5e; 
        
        text-shadow: 
            inset 1px 1px 2px rgba(0,0,0,0.1),
            -1px -1px 0px rgba(255,255,255,0.8);

        transform: translateY(0);
        transition: transform 0.5s cubic-bezier(0.2, 1, 0.3, 1), 
                    color 0.4s ease, 
                    text-shadow 0.4s ease;
        
        will-change: transform, color;
        -webkit-tap-highlight-color: transparent;
    }

    .quote-size {
        font-size: clamp(3rem, 12vw, 15rem);
        letter-spacing: -0.04em;
        padding: 0 2px;
    }

    .char:hover, .char:active {
        color: var(--primary);
        text-shadow: 
            0px 8px 15px rgba(254, 141, 7, 0.25),
            0px 0px 30px rgba(254, 141, 7, 0.1);
        transform: translateY(-20px) scale(1.08);
        z-index: 20;
    }

    .accent-mark {
        margin-top: 4rem;
        opacity: 0.6;
    }

    .dot {
        display: block;
        width: 8px;
        height: 8px;
        background: var(--primary);
        border-radius: 50%;
        box-shadow: 0 0 10px var(--primary);
    }

    /* === MOBILE OPTIMIZATION === */
    @media (max-width: 768px) {
        .word-row {
            flex-wrap: wrap; /* Allow wrapping on mobile */
            line-height: 1.1;
        }

        .word-spacer {
            display: none; /* Hide spacers when wrapping to avoid uneven lines */
        }

        .word-container {
            margin: 0 0.2em; /* Use margins for spacing on mobile wrap instead */
        }

        .quote-size {
            font-size: clamp(3rem, 16vw, 6rem); 
        }

        .char:hover, .char:active {
            transform: translateY(-10px) scale(1.05);
        }
    }
</style>