import { telegramUrl } from "@/content/site";

export function TelegramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M21.94 4.3 18.7 19.6c-.24 1.08-.88 1.35-1.78.84l-4.93-3.63-2.38 2.29c-.26.26-.48.48-.99.48l.35-5.02 9.14-8.26c.4-.35-.09-.55-.62-.2L6.2 13.2 1.33 11.68c-1.06-.33-1.08-1.06.22-1.57L20.6 2.77c.88-.32 1.65.21 1.34 1.53Z" />
    </svg>
  );
}

type Props = {
  label: string;
  variant?: "solid" | "light" | "outline";
  size?: "md" | "lg";
  className?: string;
};

export function TelegramButton({ label, variant = "solid", size = "md", className = "" }: Props) {
  const variants = {
    solid: "bg-telegram text-white hover:bg-[#1b8cc2]",
    light: "bg-white text-forest-dark hover:bg-sand",
    outline: "border border-forest/30 text-forest hover:bg-forest hover:text-white",
  };
  const sizes = { md: "px-4 py-2.5 text-sm", lg: "px-6 py-3.5 text-base" };
  return (
    <a
      href={telegramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <TelegramIcon />
      {label}
    </a>
  );
}
