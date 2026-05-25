import { Bebas_Neue, Montserrat } from "next/font/google";
import CopyEmailButton from "@/components/CopyEmailButton";

const bebasNeueCyrillic = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div className="relative flex min-h-dvh flex-1 overflow-x-hidden font-sans">
      <div className="animated-background" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="blob blob-4" />
        <div className="blob blob-5" />
        <div className="blob blob-6" />
      </div>

      <main className="relative z-10 flex min-h-dvh w-full items-end justify-center px-4 pb-[max(2rem,env(safe-area-inset-bottom))] pt-[max(2rem,env(safe-area-inset-top))] sm:items-center sm:px-12 sm:py-16 lg:px-20">
        <div className="w-full max-w-3xl bg-gradient-to-r from-white/80 via-white/45 to-white/10 py-6 pl-5 pr-5 text-left backdrop-blur-sm sm:from-white/75 sm:via-white/35 sm:to-transparent sm:py-10 sm:pl-10 sm:pr-28 lg:max-w-4xl lg:py-12 lg:pl-12 lg:pr-36">
          <h1
            className={`${bebasNeueCyrillic.className} max-w-[14ch] text-[2.5rem] leading-[0.95] tracking-wide text-[#450508] sm:max-w-none sm:text-6xl sm:leading-none lg:text-7xl`}
          >
            Culture as Infrastructure
          </h1>

          <div
            className={`${montserrat.className} survey-reveal mt-6 space-y-1 sm:mt-8`}
          >
            <p className="text-base font-medium leading-snug text-[#3e693f] sm:text-xl sm:leading-relaxed">
              Help shape the future of cultural spaces in Toronto:
            </p>
            <a
              href="https://bit.ly/cultureasinfrastructuresurvey"
              target="_blank"
              rel="noopener noreferrer"
              className="block break-all text-base font-medium text-[#2788A7] underline decoration-2 underline-offset-4 transition-colors hover:text-[#450508] hover:decoration-[#450508] sm:break-normal sm:text-xl"
            >
              bit.ly/cultureasinfrastructuresurvey
            </a>
          </div>

          <div className="icons-reveal mt-5 flex items-center gap-5 sm:mt-6 sm:gap-4">
            <CopyEmailButton />
            <a
              href="https://www.instagram.com/cultureasinfrastructure/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @cultureasinfrastructure"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center text-[#450508] transition-colors hover:text-[#2788A7] sm:h-7 sm:w-7"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 sm:h-7 sm:w-7"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
