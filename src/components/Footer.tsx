import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-sc-blue text-sc-offwhite/80 pt-16 pb-8 mt-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-sc-gold/20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/assets/menu.webp" alt="Saint Catherine" width={40} height={40} className="h-10 w-10 object-contain" />
              <span className="font-display text-lg tracking-widest2">SAINT CATHERINE</span>
            </div>
            <p className="text-sm leading-relaxed text-sc-offwhite/60">
              Mais do que visitar Santa Catarina. Colecionar experiências.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg mb-4 text-sc-gold">Navegue</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#passaporte" className="hover:text-sc-gold transition-colors">O Passaporte</Link></li>
              <li><Link href="/#destinos" className="hover:text-sc-gold transition-colors">Destinos</Link></li>
              <li><Link href="/#parceiros" className="hover:text-sc-gold transition-colors">Parceiros</Link></li>
              <li><Link href="/#mapa" className="hover:text-sc-gold transition-colors">Mapa</Link></li>
              <li><Link href="/#duvidas" className="hover:text-sc-gold transition-colors">Central de Dúvidas</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg mb-4 text-sc-gold">Privacidade &amp; LGPD</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/politica-de-privacidade" className="hover:text-sc-gold transition-colors">Política de Privacidade</Link></li>
              <li><Link href="/termos-de-uso" className="hover:text-sc-gold transition-colors">Termos de Uso</Link></li>
              <li><Link href="/politica-de-cookies" className="hover:text-sc-gold transition-colors">Política de Cookies</Link></li>
              <li><Link href="/exclusao-de-dados" className="hover:text-sc-gold transition-colors">Exclusão de Dados</Link></li>
              <li><Link href="/direitos-do-titular" className="hover:text-sc-gold transition-colors">Direitos do Titular</Link></li>
              <li><Link href="/consentimento-lgpd" className="hover:text-sc-gold transition-colors">Consentimento LGPD</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg mb-4 text-sc-gold">Adquira o seu</h3>
            <p className="text-sm text-sc-offwhite/60 mb-4">
              Edição exclusiva. Peça colecionável. Benefícios reais.
            </p>
            <Link
              href="/checkout"
              className="inline-block px-6 py-2.5 border border-sc-gold text-sc-gold text-sm uppercase tracking-widest2 hover:bg-sc-gold hover:text-sc-blue transition-colors"
            >
              Comprar Agora
            </Link>
          </div>
        </div>

        <p className="pt-8 text-center text-xs text-sc-offwhite/40 tracking-wide">
          © {new Date().getFullYear()} Saint Catherine. Todos os direitos reservados. Santa Catarina, Brasil.
        </p>
      </div>
    </footer>
  );
}
