import { StudioApp } from "@/components/studio/StudioApp";

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-8 sm:py-14">
      <header className="mb-10">
        <h1 className="font-display sign-text-cyan text-4xl font-semibold tracking-tight sm:text-5xl">Avatares</h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          Avatares hiperrealistas que hablan, voces naturales o clonadas y videos largos escena por escena — todo en un
          solo lugar.
        </p>
      </header>

      <StudioApp />

      <p className="mt-12 text-center text-xs leading-relaxed text-muted">
        Usa solo rostros y voces propios o con consentimiento expreso. Los contenidos generados con iA deben
        identificarse como tales al publicarse.
      </p>
    </main>
  );
}
