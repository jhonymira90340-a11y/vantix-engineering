"use client";

import React, { useState } from 'react';
import { Terminal, MessageCircle, Phone } from 'lucide-react';

export default function AgencyLanding() {
  const [lang, setLang] = useState('es');

  const phoneLink = "573054296065"; 
  const phoneDisplay = "305 429 60 65"; 

  const content = {
    en: {
      nav: ["Solutions", "Contact"],
      heroTitle: "High-Performance",
      heroSubtitle: "Engineering Solutions",
      heroDesc: "A multidisciplinary engineering team delivering high-tier solutions in Automation, Intelligence, and Infrastructure.",
      servicesTitle: "Our Full Service Catalog",
      s1: { t: "Industrial Robotics", d: "Autonomous systems using Arduino and sensors." },
      s2: { t: "Data Intelligence", d: "Financial sentiment analysis using Python and R." },
      s3: { t: "Cybersecurity", d: "Secure network architecture and technical support." },
      s4: { t: "AI & Agents", d: "Developing intelligent agents and LLM integrations." },
      s5: { t: "Industrial Design", d: "Mechanical modeling and chassis design." },
      s6: { t: "Full-Stack Dev", d: "Scalable web applications built with Next.js and SQL." },
      contactTitle: "Ready to Start a Project?",
      contactDesc: "Reach out to our engineering team for a technical consultation.",
      ctaWhatsapp: "Chat on WhatsApp",
      footer: "Vantix Engineering Group © 2026 - Innovation in Motion."
    },
    es: {
      nav: ["Soluciones", "Contacto"],
      heroTitle: "Ingeniería de",
      heroSubtitle: "Alto Rendimiento",
      heroDesc: "Equipo de ingeniería multidisciplinario que entrega soluciones de alto nivel en Automatización e Infraestructura.",
      servicesTitle: "Catálogo Completo de Servicios",
      s1: { t: "Robótica Industrial", d: "Sistemas autónomos con Arduino y sensores." },
      s2: { t: "Inteligencia de Datos", d: "Análisis de sentimiento financiero con Python y R." },
      s3: { t: "Ciberseguridad", d: "Arquitectura de red segura y soporte técnico." },
      s4: { t: "IA y Agentes", d: "Desarrollo de agentes inteligentes e integración de LLMs." },
      s5: { t: "Diseño Industrial", d: "Modelado mecánico y diseño de chasis." },
      s6: { t: "Desarrollo Full-Stack", d: "Aplicaciones web escalables con Next.js y SQL." },
      contactTitle: "¿Listo para iniciar un proyecto?",
      contactDesc: "Contacte a nuestro equipo de ingeniería hoy para una consulta técnica.",
      ctaWhatsapp: "Hablar por WhatsApp",
      footer: "Vantix Engineering Group © 2026 - Innovación en Movimiento."
    }
  };

  const t = lang === 'en' ? content.en : content.es;

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans scroll-smooth">
      <nav className="p-6 max-w-7xl mx-auto flex justify-between items-center sticky top-0 bg-[#020617]/80 backdrop-blur-md z-50 border-b border-slate-800/50">
        <div className="flex items-center gap-2">
          <Terminal className="text-blue-500" size={28} />
          <span className="text-xl font-bold tracking-tighter uppercase">VANTIX <span className="text-blue-500">ENG</span></span>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => setLang(lang === 'en' ? 'es' : 'en')} className="px-4 py-1.5 border border-slate-700 rounded-full text-xs font-bold hover:bg-slate-800 transition-all text-blue-400">
            {lang === 'en' ? 'ESPAÑOL' : 'ENGLISH'}
          </button>
        </div>
      </nav>

      <header className="py-24 px-6 text-center">
        <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter italic">{t.heroTitle} <br/><span className="text-blue-600 not-italic">{t.heroSubtitle}</span></h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">{t.heroDesc}</p>
      </header>

      <section id="services" className="max-w-7xl mx-auto py-12 px-6">
        <div className="grid md:grid-cols-3 gap-6">
          <ServiceCard title={t.s1.t} desc={t.s1.d} />
          <ServiceCard title={t.s2.t} desc={t.s2.d} />
          <ServiceCard title={t.s3.t} desc={t.s3.d} />
          <ServiceCard title={t.s4.t} desc={t.s4.d} />
          <ServiceCard title={t.s5.t} desc={t.s5.d} />
          <ServiceCard title={t.s6.t} desc={t.s6.d} />
        </div>
      </section>

      <section id="contact" className="max-w-4xl mx-auto py-32 px-6 text-center">
        <div className="bg-gradient-to-b from-blue-600/20 to-transparent p-12 rounded-[3rem] border border-blue-500/20">
          <h2 className="text-4xl font-bold mb-4">{t.contactTitle}</h2>
          <p className="text-slate-400 mb-10">{t.contactDesc}</p>
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-4 bg-slate-900/50 px-8 py-4 rounded-2xl border border-slate-800">
              <Phone className="text-blue-500" size={24} />
              <span className="text-2xl md:text-3xl font-mono font-bold text-white">{phoneDisplay}</span>
            </div>
            <a href={`https://wa.me/${phoneLink}`} target="_blank" className="flex items-center gap-3 px-10 py-4 bg-[#25D366] text-white font-bold rounded-2xl hover:scale-105 transition-all shadow-lg shadow-green-500/20">
              <MessageCircle size={20} />
              {t.ctaWhatsapp}
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center opacity-50 text-xs">{t.footer}</footer>
    </div>
  );
}

function ServiceCard({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="p-8 bg-slate-900/30 border border-slate-800 rounded-3xl hover:border-blue-500/40 transition-all group">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}