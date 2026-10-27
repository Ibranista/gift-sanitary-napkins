import { Courgette, Fraunces, Plus_Jakarta_Sans } from "next/font/google";

// Display serif for headings: soft, warm and highly legible at large sizes.
export const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "opsz"],
  display: "swap",
  variable: "--font-fraunces",
});

// Body sans: friendly geometric shapes that stay crisp at small sizes.
export const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

// Brush script matching the "Gift" lettering on the packaging. Used only for
// the logo lockup.
export const courgette = Courgette({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-courgette",
});
