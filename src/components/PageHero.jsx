import { Link } from "react-router-dom";
export default function PageHero({
  title,
  description,
  children,
  logoTo = null,
  className = "",
}) {
  const logo = (
    <img src="/hero.png" alt="KEY MASTER" className="w-[170px] mb-10" />
  );

  return (
    <section
      className={`relative bg-transparent text-white px-8 pt-16 pb-10 ${className}`}
    >
      <div className="relative z-10">
        {logoTo ? (
          <Link
            to={logoTo}
            className="block w-fit outline-none focus:outline-none"
          >
            {logo}
          </Link>
        ) : (
          logo
        )}

        <h1 className="text-[31px] leading-[1.12] font-[700] tracking-[-0.03em] mb-5 max-w-[320px] uppercase">
          {title}
        </h1>

        <p className="text-[#d5d7dc] text-[18px] leading-[1.45] font-[500] max-w-[340px]">
          {description}
        </p>

        {children && <div className="mt-7">{children}</div>}
      </div>
    </section>
  );
}
