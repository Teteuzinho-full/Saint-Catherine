"use client";

const CONSENT_KEY = "sc_consent_v1";

export function DeclinedConsentActions() {
  function revisarTermos() {
    window.localStorage.removeItem(CONSENT_KEY);
    window.localStorage.removeItem(`${CONSENT_KEY}_ts`);
    window.location.assign("/");
  }

  function sairDoSite() {
    window.location.assign("https://www.google.com/");
  }

  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
      <button
        type="button"
        onClick={revisarTermos}
        className="w-full px-8 py-3 border border-sc-gold/50 text-sc-gold text-sm uppercase tracking-widest2 hover:bg-sc-gold hover:text-sc-blue transition-colors sm:w-auto"
      >
        Revisar termos
      </button>
      <button
        type="button"
        onClick={sairDoSite}
        className="w-full px-8 py-3 text-sc-offwhite/70 text-sm uppercase tracking-widest2 hover:text-sc-offwhite transition-colors sm:w-auto"
      >
        Sair do site
      </button>
    </div>
  );
}
