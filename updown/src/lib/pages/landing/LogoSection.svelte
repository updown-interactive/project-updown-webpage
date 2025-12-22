<div class="fixed inset-0 flex items-center justify-center z-50">
  <img
    src="/logo_orange.png"
    alt="Updown Logo"
    class="
      w-[28rem] sm:w-[32rem] lg:w-[40rem]
      animate-logo-hero
      will-change-transform
    "
  />
</div>

<style>
@keyframes logo-hero {
  0% {
    transform: translateY(0) scale(1) rotate(0deg);
  }
  30% {
    transform: translateY(-20px) scale(1.04) rotate(-0.5deg);
  }
  60% {
    transform: translateY(8px) scale(0.98) rotate(0.4deg);
  }
  100% {
    transform: translateY(0) scale(1) rotate(0deg);
  }
}

.animate-logo-hero {
  animation: logo-hero 3.2s cubic-bezier(0.22, 1, 0.36, 1) infinite;
}
</style>
