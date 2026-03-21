@import "tailwindcss";
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&family=Inter:wght@400;500;600&display=swap');

@theme {
  --font-headline: "Manrope", sans-serif;
  --font-body: "Inter", sans-serif;
  --font-label: "Inter", sans-serif;

  --color-primary: #00513f;
  --color-primary-container: #006b54;
  --color-primary-fixed: #9ef3d6;
  --color-primary-fixed-dim: #82d7ba;
  
  --color-secondary: #45655d;
  --color-secondary-container: #c4e7dd;
  --color-secondary-fixed: #c7eae0;
  
  --color-surface: #faf9f9;
  --color-surface-bright: #faf9f9;
  --color-surface-dim: #dadad9;
  --color-surface-container: #eeeeed;
  --color-surface-container-low: #f4f3f3;
  --color-surface-container-lowest: #ffffff;
  --color-surface-container-high: #e8e8e8;
  --color-surface-container-highest: #e3e2e2;
  
  --color-on-surface: #1a1c1c;
  --color-on-surface-variant: #3e4944;
  
  --color-outline: #6f7a74;
  --color-outline-variant: #bec9c3;
  
  --radius-full: 9999px;
  --radius-xl: 0.75rem;
  --radius-lg: 0.25rem;
}

@layer base {
  body {
    @apply bg-surface text-on-surface font-body antialiased;
  }
}

.glass-effect {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.primary-gradient {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-container) 100%);
}

.scanner-mask {
  background: radial-gradient(circle, transparent 150px, rgba(26, 28, 28, 0.7) 150px);
}
