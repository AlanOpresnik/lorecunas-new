import Link from "next/link";
import { Heart, Instagram, Facebook, Mail, Music2Icon } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" fill="currentColor" />
              <span className="font-serif text-xl font-bold text-foreground">
                Lore Cunas
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Creamos espacios llenos de amor para los primeros años de tu bebe.
              Muebles premium con diseño y calidad excepcional.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/lorecunas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100064492640082 "
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.tiktok.com/@lorecunasfuncionales"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Tiktok"
                target="_blank"
              >
                <Music2Icon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 font-serif text-sm font-bold uppercase tracking-wider text-foreground">
              Tienda
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/catalogo"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Catalogo completo
                </Link>
              </li>
              <li>
                <Link
                  href="/catalogo?categoria=cunas-funcionales"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Cunas Funcionales
                </Link>
              </li>
              <li>
                <Link
                  href="/catalogo?categoria=cunas-estandar"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Cunas Estandar
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="mb-4 font-serif text-sm font-bold uppercase tracking-wider text-foreground">
              Informacion
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/nosotros"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href="/preguntas-frecuentes"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Preguntas frecuentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-serif text-sm font-bold uppercase tracking-wider text-foreground">
              Contacto
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>Moreno, Paso del Rey</li>
               <li>Provincia de Buenos Aires</li>
              <li>Tel: +54 11 6939-3427</li>
              <li className="pt-1">Mie a Vie: 14:30 - 18:00</li>
              <li>Sab: 09:00 - 13:00</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} LoreCunas. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
