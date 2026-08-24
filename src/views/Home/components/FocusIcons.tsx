type IconProps = {
  className?: string;
};

function ReactIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="1.7" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.4" />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4"
        stroke="currentColor"
        strokeWidth="1.4"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4"
        stroke="currentColor"
        strokeWidth="1.4"
        transform="rotate(120 12 12)"
      />
    </svg>
  );
}

function TypeScriptIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <text
        x="12"
        y="15.6"
        textAnchor="middle"
        fill="currentColor"
        fontSize="7.5"
        fontWeight="700"
        fontFamily="ui-monospace, monospace"
      >
        TS
      </text>
    </svg>
  );
}

function FirebaseIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.2 16.8 9.4 4.6c.18-.68 1.12-.7 1.34-.03L12.4 9.2l2.08-1.86c.5-.45 1.3-.12 1.34.55L18 16.8 12.1 20.4 6.2 16.8Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M6.2 16.8 12.1 14l5.9 2.8" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function GcpIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8.2 17.5h8.4a3.6 3.6 0 0 0 .4-7.18 4.4 4.4 0 0 0-8.3-1.3A3.3 3.3 0 0 0 8.2 17.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ApiIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8.2 7.2 4.4 12l3.8 4.8M15.8 7.2 19.6 12l-3.8 4.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

function CursorIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5.5 4.4 18.8 12.2l-6.4 1.4-1.4 6.4L5.5 4.4Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ICONS = {
  react: ReactIcon,
  typescript: TypeScriptIcon,
  firebase: FirebaseIcon,
  gcp: GcpIcon,
  api: ApiIcon,
  cursor: CursorIcon,
} as const;

export type FocusIconName = keyof typeof ICONS;

export function FocusIcon({ name }: { name: FocusIconName }) {
  const Icon = ICONS[name];
  return <Icon className="focus-card__glyph" />;
}
