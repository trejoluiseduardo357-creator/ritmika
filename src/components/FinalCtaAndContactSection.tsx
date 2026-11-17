import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import {
  EMAIL_ADDRESS,
  INSTAGRAM_URL,
  LOCATION_TEXT,
  PHONE_DISPLAY,
  PHONE_HREF,
  SERVICE_OPTIONS,
  WHATSAPP_URL,
} from '../data/ritmikaData';
import {
  Reveal,
  SectionHeading,
  TricolorStrip,
  WavyRibbons,
  WhatsAppPostBox,
} from './BrandElements';

interface FinalCtaAndContactProps {
  preselectedService: string;
}

interface FormState {
  nombre: string;
  empresa: string;
  correo: string;
  telefono: string;
  servicio: string;
  mensaje: string;
}

interface FormErrors {
  nombre?: string;
  correo?: string;
  telefono?: string;
  mensaje?: string;
}

export const FinalCtaAndContactSection: React.FC<FinalCtaAndContactProps> = ({
  preselectedService,
}) => {
  const [form, setForm] = useState<FormState>({
    nombre: '',
    empresa: '',
    correo: '',
    telefono: '',
    servicio: SERVICE_OPTIONS[0],
    mensaje: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!preselectedService) return;
    const exactMatch = SERVICE_OPTIONS.find((opt) =>
      opt.toLowerCase().includes(preselectedService.toLowerCase()) ||
      preselectedService.toLowerCase().includes(opt.toLowerCase())
    );

    if (exactMatch) {
      setForm((prev) => ({ ...prev, servicio: exactMatch }));
    } else if (preselectedService.startsWith('Capacitación empresarial:')) {
      const courseName = preselectedService.replace('Capacitación empresarial:', '').trim();
      setForm((prev) => ({
        ...prev,
        servicio: 'Capacitación empresarial (Catálogo de 11 cursos)',
        mensaje:
          prev.mensaje ||
          `Hola, me interesa cotizar el curso "${courseName}" para mi equipo.`,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        servicio: SERVICE_OPTIONS[0],
        mensaje:
          prev.mensaje ||
          `Hola, me interesa recibir más información sobre: ${preselectedService}.`,
      }));
    }
  }, [preselectedService]);

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};
    if (!form.nombre.trim()) {
      nextErrors.nombre = 'Por favor escribe tu nombre.';
    }
    if (!form.correo.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo.trim())) {
      nextErrors.correo = 'Ingresa un correo electrónico válido.';
    }
    if (!form.telefono.trim() || form.telefono.replace(/\D/g, '').length < 8) {
      nextErrors.telefono = 'Ingresa un teléfono de al menos 8 dígitos.';
    }
    if (!form.mensaje.trim()) {
      nextErrors.mensaje = 'Cuéntanos brevemente qué necesita tu equipo.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = `Contacto Web Rítmika — ${form.servicio} (${form.empresa || form.nombre})`;
    const bodyLines = [
      `Nombre: ${form.nombre}`,
      `Empresa: ${form.empresa || 'No especificada'}`,
      `Correo: ${form.correo}`,
      `Teléfono: ${form.telefono}`,
      `Servicio de interés: ${form.servicio}`,
      '',
      'Mensaje:',
      form.mensaje,
    ];

    const mailtoUrl = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join('\n'))}`;

    setSubmitted(true);
    window.location.href = mailtoUrl;
  };

  return (
    <>
      {/* 9) CTA final grande */}
      <section className="relative overflow-hidden bg-[#2B3544]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center">
          <Reveal>
            <p className="font-sans text-[12px] font-bold uppercase tracking-[0.2em] text-[#F29400] mb-4">
              SIGUIENTE PASO
            </p>
            <h2 className="font-serif font-extrabold text-4xl sm:text-5xl lg:text-[56px] leading-[1.08] tracking-tight text-[#FFFDF8]">
              ¿List@s para{' '}
              <em className="italic font-extrabold text-[#F29400]">diseñar en conjunto?</em>
            </h2>
            <p className="mt-5 font-sans text-base sm:text-lg text-[#E4E9F0] max-w-2xl mx-auto leading-relaxed">
              Conversemos sin compromiso sobre los retos actuales de tu PyME y tracemos una ruta
              clara para tu equipo.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contacto-formulario"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#F29400] hover:bg-[#D98A0B] text-[#2B3544] font-sans font-bold text-base px-8 py-4 shadow-[0_12px_30px_rgba(242,148,0,0.3)] transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
              >
                <span>Agenda un diagnóstico</span>
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#FFFDF8]/30 hover:bg-[#FFFDF8]/10 text-[#FFFDF8] font-sans font-semibold text-base px-7 py-4 transition-colors whitespace-nowrap"
              >
                <span>Escribir por WhatsApp</span>
              </a>
            </div>
          </Reveal>
        </div>
        <TricolorStrip onDark />
      </section>

      {/* 10) Contacto */}
      <section id="contacto" className="relative overflow-hidden bg-[#FFFAF2]">
        <WavyRibbons
          variant="topRight"
          className="absolute -top-6 -right-8 w-64 sm:w-80 h-auto opacity-65"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="CONTACTO"
              titleBefore="Hablemos de"
              titleItalic="tu empresa."
              subtitle="Escríbenos directamente o envíanos tus datos para preparar un diagnóstico inicial."
            />
          </Reveal>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Columna izquierda: datos directos */}
            <Reveal delay={0.05} className="lg:col-span-5 space-y-6">
              <WhatsAppPostBox
                layout="stacked"
                subtitle="Atención directa en León y Bajío"
              />

              <div className="bg-[#FFFDF8] rounded-2xl p-7 sm:p-8 shadow-[0_10px_28px_rgba(43,53,68,0.06)] border border-[#2B3544]/8 space-y-5">
                <h3 className="font-serif font-extrabold text-xl text-[#2B3544]">
                  Canales de atención
                </h3>

                <div className="space-y-4 font-sans text-sm sm:text-[15px]">
                  <a
                    href={PHONE_HREF}
                    className="flex items-center gap-3.5 text-[#2B3544] hover:text-[#D9381E] transition-colors"
                  >
                    <span className="w-10 h-10 rounded-xl bg-[#F29400]/15 text-[#D98A0B] flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" aria-hidden="true" />
                    </span>
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#2B3544]/65">
                        Teléfono
                      </span>
                      <span className="font-semibold tabular-nums">{PHONE_DISPLAY}</span>
                    </div>
                  </a>

                  <a
                    href={`mailto:${EMAIL_ADDRESS}`}
                    className="flex items-center gap-3.5 text-[#2B3544] hover:text-[#D9381E] transition-colors"
                  >
                    <span className="w-10 h-10 rounded-xl bg-[#2E7D32]/15 text-[#2E7D32] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" aria-hidden="true" />
                    </span>
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#2B3544]/65">
                        Correo electrónico
                      </span>
                      <span className="font-semibold break-all">{EMAIL_ADDRESS}</span>
                    </div>
                  </a>

                  <div className="flex items-center gap-3.5 text-[#2B3544]">
                    <span className="w-10 h-10 rounded-xl bg-[#D9381E]/12 text-[#D9381E] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" aria-hidden="true" />
                    </span>
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#2B3544]/65">
                        Ubicación
                      </span>
                      <span className="font-semibold">{LOCATION_TEXT}</span>
                    </div>
                  </div>

                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 text-[#2B3544] hover:text-[#D9381E] transition-colors pt-2 border-t border-[#2B3544]/10"
                  >
                    <span className="w-10 h-10 rounded-xl bg-[#2B3544] text-[#FFFDF8] flex items-center justify-center shrink-0">
                      <Instagram className="w-4 h-4" aria-hidden="true" />
                    </span>
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#2B3544]/65">
                        Instagram
                      </span>
                      <span className="font-semibold">@psic.luistrejo</span>
                    </div>
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Columna derecha: formulario mailto */}
            <Reveal delay={0.12} className="lg:col-span-7">
              <form
                id="contacto-formulario"
                onSubmit={handleSubmit}
                noValidate
                className="bg-[#FFFDF8] rounded-2xl p-7 sm:p-9 shadow-[0_14px_34px_rgba(43,53,68,0.07)] border border-[#2B3544]/8"
              >
                <h3 className="font-serif font-extrabold text-2xl text-[#2B3544] mb-6">
                  Cuéntanos sobre tu proyecto
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="nombre"
                      className="block font-sans text-xs font-bold uppercase tracking-[0.12em] text-[#2B3544] mb-2"
                    >
                      Nombre completo *
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      value={form.nombre}
                      onChange={(e) => {
                        setForm((prev) => ({ ...prev, nombre: e.target.value }));
                        if (errors.nombre) setErrors((prev) => ({ ...prev, nombre: undefined }));
                      }}
                      placeholder="Ej. Laura Hernández"
                      className="w-full rounded-xl border border-[#2B3544]/20 bg-[#FFFAF2] px-4 py-3 text-sm text-[#2B3544] placeholder:text-[#2B3544]/45 focus:outline-none focus:border-[#F29400] focus:ring-2 focus:ring-[#F29400]/30"
                    />
                    {errors.nombre && (
                      <p className="mt-1.5 text-xs font-medium text-[#D9381E]">{errors.nombre}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="empresa"
                      className="block font-sans text-xs font-bold uppercase tracking-[0.12em] text-[#2B3544] mb-2"
                    >
                      Empresa
                    </label>
                    <input
                      id="empresa"
                      name="empresa"
                      type="text"
                      value={form.empresa}
                      onChange={(e) => setForm((prev) => ({ ...prev, empresa: e.target.value }))}
                      placeholder="Nombre de tu organización"
                      className="w-full rounded-xl border border-[#2B3544]/20 bg-[#FFFAF2] px-4 py-3 text-sm text-[#2B3544] placeholder:text-[#2B3544]/45 focus:outline-none focus:border-[#F29400] focus:ring-2 focus:ring-[#F29400]/30"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="correo"
                      className="block font-sans text-xs font-bold uppercase tracking-[0.12em] text-[#2B3544] mb-2"
                    >
                      Correo electrónico *
                    </label>
                    <input
                      id="correo"
                      name="correo"
                      type="email"
                      required
                      value={form.correo}
                      onChange={(e) => {
                        setForm((prev) => ({ ...prev, correo: e.target.value }));
                        if (errors.correo) setErrors((prev) => ({ ...prev, correo: undefined }));
                      }}
                      placeholder="nombre@empresa.com"
                      className="w-full rounded-xl border border-[#2B3544]/20 bg-[#FFFAF2] px-4 py-3 text-sm text-[#2B3544] placeholder:text-[#2B3544]/45 focus:outline-none focus:border-[#F29400] focus:ring-2 focus:ring-[#F29400]/30"
                    />
                    {errors.correo && (
                      <p className="mt-1.5 text-xs font-medium text-[#D9381E]">{errors.correo}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="telefono"
                      className="block font-sans text-xs font-bold uppercase tracking-[0.12em] text-[#2B3544] mb-2"
                    >
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      required
                      value={form.telefono}
                      onChange={(e) => {
                        setForm((prev) => ({ ...prev, telefono: e.target.value }));
                        if (errors.telefono) setErrors((prev) => ({ ...prev, telefono: undefined }));
                      }}
                      placeholder="477 000 0000"
                      className="w-full rounded-xl border border-[#2B3544]/20 bg-[#FFFAF2] px-4 py-3 text-sm text-[#2B3544] placeholder:text-[#2B3544]/45 focus:outline-none focus:border-[#F29400] focus:ring-2 focus:ring-[#F29400]/30"
                    />
                    {errors.telefono && (
                      <p className="mt-1.5 text-xs font-medium text-[#D9381E]">{errors.telefono}</p>
                    )}
                  </div>
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="servicio"
                    className="block font-sans text-xs font-bold uppercase tracking-[0.12em] text-[#2B3544] mb-2"
                  >
                    Servicio de interés
                  </label>
                  <select
                    id="servicio"
                    name="servicio"
                    value={form.servicio}
                    onChange={(e) => setForm((prev) => ({ ...prev, servicio: e.target.value }))}
                    className="w-full rounded-xl border border-[#2B3544]/20 bg-[#FFFAF2] px-4 py-3 text-sm text-[#2B3544] focus:outline-none focus:border-[#F29400] focus:ring-2 focus:ring-[#F29400]/30"
                  >
                    {SERVICE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="mensaje"
                    className="block font-sans text-xs font-bold uppercase tracking-[0.12em] text-[#2B3544] mb-2"
                  >
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    required
                    value={form.mensaje}
                    onChange={(e) => {
                      setForm((prev) => ({ ...prev, mensaje: e.target.value }));
                      if (errors.mensaje) setErrors((prev) => ({ ...prev, mensaje: undefined }));
                    }}
                    placeholder="Cuéntanos sobre el tamaño de tu equipo, retos actuales o fechas tentativas..."
                    className="w-full rounded-xl border border-[#2B3544]/20 bg-[#FFFAF2] px-4 py-3 text-sm text-[#2B3544] placeholder:text-[#2B3544]/45 focus:outline-none focus:border-[#F29400] focus:ring-2 focus:ring-[#F29400]/30"
                  />
                  {errors.mensaje && (
                    <p className="mt-1.5 text-xs font-medium text-[#D9381E]">{errors.mensaje}</p>
                  )}
                </div>

                {submitted && (
                  <div
                    role="status"
                    className="mt-5 rounded-xl bg-[#2E7D32]/10 border border-[#2E7D32]/25 px-4 py-3.5 flex items-start gap-3 text-sm text-[#2B3544]"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#2E7D32] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold">
                        Abrimos tu aplicación de correo para enviar el mensaje a{' '}
                        <span className="underline">{EMAIL_ADDRESS}</span>.
                      </p>
                      <p className="text-xs text-[#2B3544]/80 mt-1">
                        ¿Prefieres atención inmediata?{' '}
                        <a
                          href={WHATSAPP_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-[#D9381E] underline"
                        >
                          Escríbenos por WhatsApp al 477 397 0244
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                )}

                <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#F29400] hover:bg-[#D98A0B] text-[#2B3544] font-sans font-bold text-sm sm:text-[15px] px-7 py-3.5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                    <span>Enviar mensaje por correo</span>
                  </button>

                  <span className="font-sans text-xs text-[#2B3544]/65">
                    Se enviará a {EMAIL_ADDRESS}
                  </span>
                </div>
              </form>
            </Reveal>
          </div>
        </div>

        <TricolorStrip />
      </section>
    </>
  );
};
