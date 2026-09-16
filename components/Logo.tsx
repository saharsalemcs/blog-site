export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="5 3 14 19"
      fill="currentColor"
      fillRule="evenodd"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M6.4 4.6C10 3.5 14 3.5 17.6 4.6C18.2 9.6 15.6 16.4 12 21.4C8.4 16.4 5.8 9.6 6.4 4.6Z
           M10.15 9.5A1.9 1.9 0 1 1 13.85 9.5C13.8 13 13 17 12 20.2C11 17 10.2 13 10.15 9.5Z"
      />
    </svg>
  );
}
