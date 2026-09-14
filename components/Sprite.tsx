/* Every icon and shop part on the site is defined once here and referenced with <use href="#..."> */
export function Sprite() {
  const line = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" } as const;
  const thin = { ...line, strokeWidth: 1.6 } as const;
  return (
    <svg className="sprite" aria-hidden="true" focusable="false">
      <defs>
        <symbol id="i-logo" viewBox="0 0 32 32">
          <circle cx="27" cy="16" r="3" fill="#12715B" /><circle cx="23.78" cy="23.78" r="3" fill="#12715B" /><circle cx="16" cy="27" r="3" fill="#12715B" /><circle cx="8.22" cy="23.78" r="3" fill="#12715B" /><circle cx="5" cy="16" r="3" fill="#12715B" /><circle cx="8.22" cy="8.22" r="3" fill="#12715B" /><circle cx="16" cy="5" r="3" fill="#B7791F" /><circle cx="23.78" cy="8.22" r="3" fill="#12715B" />
        </symbol>

        {/* shop parts for the street illustration */}
        <symbol id="sf" viewBox="0 0 84 70">
          <rect x="6" y="21" width="72" height="47" rx="2" fill="#FFFFFF" stroke="#172220" strokeWidth="1.5" />
          <rect x="12" y="40" width="16" height="14" rx="1" fill="#F5F8F6" stroke="#172220" strokeWidth="1.2" />
          <rect x="56" y="40" width="16" height="14" rx="1" fill="#F5F8F6" stroke="#172220" strokeWidth="1.2" />
          <rect x="35" y="44" width="14" height="24" rx="1" fill="#E3F1EB" stroke="#172220" strokeWidth="1.2" />
          <circle cx="46" cy="57" r="1" fill="#172220" />
          <rect x="16" y="3" width="52" height="18" rx="3" fill="#FFFFFF" stroke="#172220" strokeWidth="1.5" />
        </symbol>
        <symbol id="sf-awning" viewBox="0 0 84 70">
          <path d="M6 21h72v4a6 6 0 0 1-12 0a6 6 0 0 1-12 0a6 6 0 0 1-12 0a6 6 0 0 1-12 0a6 6 0 0 1-12 0a6 6 0 0 1-12 0z" stroke="#172220" strokeWidth="1.2" />
        </symbol>

        {/* line icons, 24x24, stroke = currentColor */}
        <symbol id="ic-cafe" viewBox="0 0 24 24" {...line}><path d="M4 8h11v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8zM15 9h2a2.5 2.5 0 0 1 0 5h-2M6.5 4v2M9.5 3v3M12.5 4v2" /></symbol>
        <symbol id="ic-gym" viewBox="0 0 24 24" {...line}><path d="M3 10v4M6 8v8M18 8v8M21 10v4M6 12h12" /></symbol>
        <symbol id="ic-salon" viewBox="0 0 24 24" {...line}><circle cx="6" cy="6" r="2.5" /><circle cx="6" cy="18" r="2.5" /><path d="M20 4 8.3 15.4M20 20 8.3 8.6" /></symbol>
        <symbol id="ic-florist" viewBox="0 0 24 24" {...line}><circle cx="12" cy="10" r="2.2" /><circle cx="12" cy="5.5" r="2.2" /><circle cx="16.5" cy="10" r="2.2" /><circle cx="12" cy="14.5" r="2.2" /><circle cx="7.5" cy="10" r="2.2" /><path d="M12 17v4M12 20c-2 0-3.5-1-4-2.5M12 20c2 0 3.5-1 4-2.5" /></symbol>
        <symbol id="ic-clinic" viewBox="0 0 24 24" {...line}><circle cx="12" cy="12" r="9" /><path d="M12 8v8M8 12h8" /></symbol>
        <symbol id="ic-book" viewBox="0 0 24 24" {...line}><path d="M4 4h6a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H4V4zM20 4h-6a2 2 0 0 0-2 2v14a2 2 0 0 1 2-2h6V4z" /></symbol>
        <symbol id="ic-tailor" viewBox="0 0 24 24" {...line}><path d="M5 5h8v14H5zM5 8.5h8M5 15.5h8M18 3v18" /><circle cx="18" cy="7" r="1.6" /></symbol>
        <symbol id="ic-bakery" viewBox="0 0 24 24" {...line}><path d="M4 13c0-4 3.5-7 8-7s8 3 8 7v4H4v-4zM8 12.5v-2M12 11.5v-2M16 12.5v-2" /></symbol>

        <symbol id="ic-join" viewBox="0 0 24 24" {...line}><rect x="6" y="3" width="12" height="18" rx="2" /><path d="M10 18h4M9 8h6M9 11.5h4" /></symbol>
        <symbol id="ic-match" viewBox="0 0 24 24" {...line}><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M4 9.5h16M8 3v4M16 3v4M12 17.5l-2.2-2.2a1.5 1.5 0 0 1 2.2-2.1 1.5 1.5 0 0 1 2.2 2.1L12 17.5z" /></symbol>
        <symbol id="ic-tap" viewBox="0 0 24 24" {...line}><path d="M9 12V5a2 2 0 0 1 4 0v6M13 10.5a2 2 0 0 1 4 0V12M17 12a2 2 0 0 1 3 1.7V16a5 5 0 0 1-5 5h-2.2a5 5 0 0 1-4.3-2.5L6.2 15a1.8 1.8 0 0 1 2.9-2L9 13" /></symbol>
        <symbol id="ic-number" viewBox="0 0 24 24" {...line}><path d="M5 20v-8M11 20V5M17 20v-6M2 20h20" /></symbol>

        <symbol id="ic-storefront" viewBox="0 0 24 24" {...thin}><path d="M3.5 9l1.5-5h14l1.5 5M3.5 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0M5 11.5V20h14v-8.5M10 20v-5h4v5" /></symbol>
        <symbol id="ic-growth" viewBox="0 0 24 24" {...thin}><path d="M3 18l5.5-6 4 3.5L20 7M15 7h5v5" /></symbol>
        <symbol id="ic-gift" viewBox="0 0 24 24" {...thin}><path d="M4 11h16v9H4zM3 7h18v4H3zM12 7v13M12 7c-2 0-4-1.2-4-2.8S10 2 12 5c2-3 4-2.4 4-.8S14 7 12 7z" /></symbol>
        <symbol id="ic-shield" viewBox="0 0 24 24" {...line}><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zM9 12l2 2 4-4" /></symbol>
        <symbol id="ic-eye-off" viewBox="0 0 24 24" {...line}><path d="M3 3l18 18M10.6 10.6a2 2 0 0 0 2.8 2.8M7.2 7.4C4.6 9 3 12 3 12s3.5 6 9 6c1.5 0 2.9-.4 4.1-1M12 6c5.5 0 9 6 9 6s-.7 1.3-2.1 2.7" /></symbol>
        <symbol id="ic-lock" viewBox="0 0 24 24" {...line}><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M9 11V7a3 3 0 0 1 6 0v4" /></symbol>
        <symbol id="ic-scale" viewBox="0 0 24 24" {...thin}><path d="M12 3v18M6 21h12M4 7h16M7 7l-3.5 7a3.5 3.5 0 0 0 7 0L7 7zM17 7l-3.5 7a3.5 3.5 0 0 0 7 0L17 7z" /></symbol>
      </defs>
    </svg>
  );
}
