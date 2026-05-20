export default function Footer({ className = "" }) {
  return (
    <footer
      className={`bg-transparent text-gray-400 text-center px-6 pt-4 pb-10 text-sm ${className}`}
    >
      <p className="font-medium tracking-wide">KEY MASTER</p>

      <p className="mt-2">© 2026</p>

      <p className="mt-4 text-xs leading-relaxed text-gray-500">
        Сайт разработан и поддерживается:
        <br />

        <a
          href="https://www.instagram.com/sledagency_/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 font-semibold underline underline-offset-4 hover:text-[#3B93FF] transition"
        >
          SLED — Агентство цифровых решений
        </a>
      </p>
    </footer>
  );
}