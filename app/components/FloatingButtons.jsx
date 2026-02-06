"use client";

export default function FloatingButtons() {
  return (
    <>
      <a
        href="https://wa.me/919597508874"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-btn"
      >
        WhatsApp
      </a>

      <button
        className="scroll-up"
        onClick={() =>
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
      >
        ↑
      </button>
    </>
  );
}
