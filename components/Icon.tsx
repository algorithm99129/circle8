import type { IconName } from "@/content/site";

type Props = { name: IconName; className?: string; label?: string };

/* Renders an icon from the sprite. Decorative by default; pass `label` to make it meaningful. */
export function Icon({ name, className, label }: Props) {
  return (
    <svg className={className} aria-hidden={label ? undefined : true} role={label ? "img" : undefined} aria-label={label}>
      <use href={`#ic-${name}`} />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true">
      <use href="#i-logo" />
    </svg>
  );
}
