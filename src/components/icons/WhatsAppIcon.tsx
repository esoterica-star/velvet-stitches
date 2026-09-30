export default function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Z" />
      <path d="M8.8 8.6c.3-.7.6-.7 1-.7h.7c.2 0 .5 0 .7.6l.9 2.1c.1.3 0 .5-.1.7l-.5.6c-.2.2-.3.4-.1.7.4.7 1.5 1.9 2.7 2.4.3.2.5.1.7-.1l.6-.7c.2-.2.4-.3.7-.2l2 .9c.4.2.5.4.5.6 0 .9-.6 2-1.8 2.2-.9.2-2.1 0-4-.9a10 10 0 0 1-4-3.8c-.7-1.2-.9-2.2-.7-3 .2-.9 1-1.6 1.7-1.7Z" />
    </svg>
  );
}
