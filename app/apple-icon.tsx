import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

const svg = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" width="512" height="512">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="34" y2="56" gradientUnits="userSpaceOnUse">
      <stop offset="0%"   stop-color="#1e6070"/>
      <stop offset="50%"  stop-color="#1a5565"/>
      <stop offset="100%" stop-color="#153d50"/>
    </linearGradient>
    <radialGradient id="hl" cx="14" cy="11" r="40" gradientUnits="userSpaceOnUse">
      <stop offset="0%"   stop-color="#ffffff" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="gd" x1="23" y1="19" x2="32" y2="35" gradientUnits="userSpaceOnUse">
      <stop offset="0%"   stop-color="#e8c547"/>
      <stop offset="50%"  stop-color="#c9a227"/>
      <stop offset="100%" stop-color="#a07c10"/>
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="56" height="56" rx="10" fill="url(#bg)"/>
  <rect x="0" y="0" width="56" height="56" rx="10" fill="url(#hl)"/>
  <rect x="8" y="7" width="40" height="42" rx="6" fill="white" fill-opacity="0.13" stroke="white" stroke-opacity="0.22" stroke-width="0.8"/>
  <path d="M 28 27 Q 21 24 15.1 27 L 15.1 38.2 Q 21.5 36 28 38.2 Z" fill="none" stroke="white" stroke-opacity="0.90" stroke-width="1.2" stroke-linejoin="round" stroke-linecap="round"/>
  <path d="M 28 27 Q 35.1 24 40.9 27 L 40.9 38.2 Q 34.5 36 28 38.2 Z" fill="none" stroke="white" stroke-opacity="0.90" stroke-width="1.2" stroke-linejoin="round" stroke-linecap="round"/>
  <line x1="28" y1="27" x2="28" y2="38.2" stroke="white" stroke-opacity="0.90" stroke-width="1.2" stroke-linecap="round"/>
  <path d="M 29.7 23.4 C 32.3 23.4, 32.3 27.8, 27.6 28 C 22.9 28.2, 22.9 32.6, 29.7 32.6" fill="none" stroke="url(#gd)" stroke-width="2.0" stroke-linecap="round"/>
  <circle cx="30.3" cy="22.2" r="1.9" fill="url(#gd)"/>
</svg>`);

export default function AppleIcon() {
  return new ImageResponse(
    // eslint-disable-next-line @next/next/no-img-element
    <img src={`data:image/svg+xml,${svg}`} width={512} height={512} alt="" />,
    { ...size }
  );
}
