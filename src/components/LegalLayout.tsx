export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="pt-32 pb-24 bg-sc-offwhite min-h-screen">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <p className="ornament-divider text-xs uppercase tracking-widest2 text-sc-gold mb-4">
          Saint Catherine
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-sc-blue text-center">{title}</h1>
        {updated && (
          <p className="mt-3 text-center text-xs text-sc-blue/40">Última atualização: {updated}</p>
        )}
        <div className="mt-12 space-y-6 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-sc-blue [&_h2]:mt-10 [&_h2]:mb-3 [&_p]:text-sc-blue/75 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_li]:text-sc-blue/75">
          {children}
        </div>
      </div>
    </div>
  );
}
