"use client";
 
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { loginAction } from "./loginActions";
 
export default function LoginPage() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
 
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
 
    if (!username.trim() || !password.trim()) {
      setError("Completá usuario y contraseña.");
      return;
    }
 
    startTransition(async () => {
      const result = await loginAction(username.trim(), password);
 
      if (!result.success) {
        setError(result.message);
        return;
      }
 
      router.replace("/admin");
      router.refresh(); // refresca Server Components para que lean la cookie nueva
    });
  }
 
  return (
    <div
      className={`min-h-screen flex flex-col md:flex-row font-[family-name:var(--font-poppins)] bg-white text-[#2c2622]`}
    >
      {/* Left: brand panel */}
      <section className="relative flex-1 md:flex-[46] flex flex-col justify-between gap-8 p-8 md:p-16 min-h-[220px] md:min-h-screen overflow-hidden bg-[#f4ede0]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 15% 20%, rgba(240,168,174,0.35), transparent 55%), radial-gradient(circle at 85% 80%, rgba(143,196,214,0.30), transparent 50%)",
          }}
        />
        <div className="pointer-events-none absolute -right-28 -bottom-28 w-[420px] h-[420px] rounded-full bg-[#f0a8ae] opacity-20" />
 
        <div className="relative z-10">
          <div className="flex items-baseline gap-0.5 font-[family-name:var(--font-fraunces)] font-semibold text-3xl tracking-wide">
            <span className="text-[#e08891]">LORE</span>
            <span className="text-[#8fc4d6]">CUNAS</span>
          </div>
          <div className="mt-1 text-[11px] tracking-[3px] uppercase text-[#6b6259] font-medium">
            Calidad · Diseño · Seguridad · Dedicación
          </div>
        </div>
 
        <div className="relative z-10 max-w-md hidden md:block">
          <span className="inline-block text-xs tracking-[2px] uppercase font-semibold text-[#e08891] bg-[#f0a8ae]/20 border border-[#e08891]/35 px-3.5 py-1.5 rounded-full mb-5">
            Panel privado
          </span>
          <h1 className="font-[family-name:var(--font-fraunces)] italic font-medium text-3xl md:text-4xl leading-tight mb-4">
            El espacio de administración de tu tienda
          </h1>
          <p className="text-sm leading-relaxed text-[#6b6259]">
            Ingresá con tus credenciales de administrador para gestionar
            productos, pedidos y categorías de Lorecunas.
          </p>
        </div>
 
        <div className="relative z-10 hidden md:block">
          <svg
            viewBox="0 0 120 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-28 h-auto opacity-90"
          >
            <rect
              x="10"
              y="20"
              width="100"
              height="45"
              rx="6"
              stroke="#e08891"
              strokeWidth="2.5"
            />
            <line
              x1="10"
              y1="20"
              x2="10"
              y2="80"
              stroke="#e08891"
              strokeWidth="2.5"
            />
            <line
              x1="110"
              y1="20"
              x2="110"
              y2="80"
              stroke="#e08891"
              strokeWidth="2.5"
            />
            {[25, 40, 55, 70, 85, 95].map((x) => (
              <line
                key={x}
                x1={x}
                y1="20"
                x2={x}
                y2="65"
                stroke="#e08891"
                strokeWidth="1.6"
                opacity="0.6"
              />
            ))}
            <line
              x1="15"
              y1="80"
              x2="15"
              y2="88"
              stroke="#8fc4d6"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <line
              x1="105"
              y1="80"
              x2="105"
              y2="88"
              stroke="#8fc4d6"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </section>
 
      {/* Right: form panel */}
      <section className="flex-1 md:flex-[54] flex items-center justify-center p-6 md:p-10 bg-white">
        <div className="w-full max-w-sm">
          <div className="text-[11px] tracking-[2px] uppercase font-semibold text-[#6b6259] mb-2.5">
            Acceso administrador
          </div>
          <h2 className="font-[family-name:var(--font-fraunces)] font-semibold text-3xl mb-2">
            Bienvenido de nuevo
          </h2>
          <p className="text-sm text-[#6b6259] mb-9 leading-relaxed">
            Iniciá sesión para continuar administrando Lorecunas.
          </p>
 
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4.5 space-y-4.5"
          >
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-semibold mb-1.5"
              >
                Usuario
              </label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="admin"
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#e7ddcd] bg-[#f4ede0] text-sm text-[#2c2622] placeholder:text-[#b7ab9a] outline-none transition focus:border-[#e08891] focus:bg-white focus:ring-4 focus:ring-[#e08891]/15"
              />
            </div>
 
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold mb-1.5"
              >
                Contraseña
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 pr-14 rounded-xl border border-[#e7ddcd] bg-[#f4ede0] text-sm text-[#2c2622] placeholder:text-[#b7ab9a] outline-none transition focus:border-[#e08891] focus:bg-white focus:ring-4 focus:ring-[#e08891]/15"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#6b6259] hover:text-[#e08891]"
                >
                  {showPassword ? "Ocultar" : "Ver"}
                </button>
              </div>
            </div>
 
            {error && (
              <p className="text-sm text-[#c0525b] bg-[#c0525b]/8 border border-[#c0525b]/25 px-3.5 py-2.5 rounded-xl">
                {error}
              </p>
            )}
 
            <button
              type="submit"
              disabled={isPending}
              className="mt-1 flex items-center justify-center gap-2 rounded-full bg-[#e08891] hover:bg-[#d5717c] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm px-5 py-3.5 transition active:scale-[0.98] group"
            >
              {isPending ? (
                <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>Iniciar sesión</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </>
              )}
              {isPending && <span>Ingresando...</span>}
            </button>
          </form>
 
          <p className="text-center text-xs text-[#6b6259] mt-7">
            Acceso exclusivo para el equipo de Lorecunas
          </p>
        </div>
      </section>
    </div>
  );
}
 