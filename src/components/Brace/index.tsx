const BRACES_STAGGER_MAP = {
  0: 0.1,
  1: 0.18,
  2: 0.25,
  3: 0.5,
  4: 1,
} as const;

export const Brace = ({
  staggerIndex,
  type,
}: {
  staggerIndex: number;
  type: "open" | "close";
}) => (
  <svg
    width="233"
    height="936"
    viewBox="0 0 233 936"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      transform: type === "open" ? "" : "rotate(180deg)",
      height: "100%",
    }}
  >
    <path
      d="M72.4417 72.8834C72.4417 51.9582 78.8808 34.7257 91.759 21.1859C105.251 7.64607 122.422 0.87616 143.272 0.87616H232.5V67.3444H169.028C152.471 67.3444 144.192 76.5761 144.192 95.0395V390.454C144.192 411.379 137.446 428.611 123.955 442.151C111.076 455.691 93.9054 462.461 72.4417 462.461H61.4031V473.539H72.4417C93.9054 473.539 111.076 480.309 123.955 493.849C137.446 507.389 144.192 524.621 144.192 545.546V840.961C144.192 859.424 152.471 868.656 169.028 868.656H232.5V935.124H143.272C122.422 935.124 105.251 928.354 91.759 914.814C78.8808 901.274 72.4417 884.042 72.4417 863.117V544.623C72.4417 526.775 64.1628 517.851 47.605 517.851H0.691406V418.149H47.605C64.1628 418.149 72.4417 409.225 72.4417 391.377V72.8834Z"
      fill={`rgba(2, 27, 249, ${BRACES_STAGGER_MAP[staggerIndex]})`}
    />
  </svg>
);
