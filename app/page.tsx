"use client";

import React, { useState } from 'react';
import { 
  Terminal, 
  Cpu, 
  Shield, 
  Database, 
  Bot, 
  Settings, 
  Code2, 
  MessageCircle, 
  Phone 
} from 'lucide-react';

export default function AgencyLanding() {
  const [lang, setLang] = useState('es');

  // CONFIGURATION: 
  // phoneLink: Needs country code (57) and NO spaces for WhatsApp
  // phoneDisplay: Updated to 305 429 60 65
  const phoneLink = "573054296065"; 
  const phoneDisplay = "305 429 60 65"; 

  const content = {
    en: {
      nav: ["Solutions", "Contact"],
      heroTitle: "High-Performance",
      heroSubtitle: "Engineering Solutions",
      heroDesc: "A multidisciplinary engineering team delivering high-tier solutions in Automation, Intelligence, and Infrastructure.",
      servicesTitle: "Our Full Service Catalog",
      s1: { t: "Industrial Robotics", d: "Autonomous systems using Arduino, L298N, and sensors for obstacle avoidance." },
      s2: { t: "Data Intelligence", d: "Financial sentiment analysis and large-scale data processing using Python and R." },
      s3: { t: "Cybersecurity", d: "Secure network architecture and technical support for high-demand systems." },
      s4: { t: "AI & Agents", d: "Developing intelligent agents and LLM integrations using Ollama and SageMaker." },
      s5: { t: "Industrial Design", d: "Mechanical modeling and chassis design using Creo Parametric and GrabCAD." },
      s6: { t: "Full-Stack Dev", d: "Scalable web applications built with Next.js, Java, C#, and SQL/Oracle." },
      contactTitle: "Ready to Start a Project?",
      contactDesc: "Reach out to our engineering team for a technical consultation.",
      ctaWhatsapp: "Chat on WhatsApp",
      footer: "Vantix Engineering Group © 2026 - Innovation in Motion."
    },
    es: {
      nav: ["Soluciones", "Contacto"],
      heroTitle: "Ingeniería de",
      heroSubtitle: "Alto Rendimiento",
      heroDesc: "Equipo de ingeniería multidisciplinario que entrega soluciones de alto nivel en Automatización, Inteligencia e Infraestructura.",
      servicesTitle: "Catálogo Completo de Servicios",
      s1: { t: "Robótica Industrial", d: "Sistemas autónomos con Arduino, L298N y sensores para evasión de obstáculos." },
      s2: { t: "Inteligencia de Datos", d: "Análisis de sentimiento financiero y procesamiento de datos a gran escala con Python y R." },
      s3: { t: "Ciberseguridad", d: "Arquitectura de red segura y soporte técnico para sistemas de alta demanda." },
      s4: { t: "IA y Agentes", d: "Desarrollo de agentes inteligentes e integración de LLMs con Ollama y SageMaker." },
      s5: { t: "Diseño Industrial", d: "Modelado mecánico y diseño de chasis en Creo Parametric y GrabCAD." },
      s6: { t: "Desarrollo Full-Stack", d: "Aplicaciones web escalables con Next.js, Java, C# y SQL/Oracle." },
      contactTitle: "¿Listo para iniciar un proyecto?",
      contactDesc: "Contacte a nuestro equipo de ingeniería hoy para una consulta técnica.",
      ctaWhatsapp: "Hablar por WhatsApp",
      footer: "Vantix Engineering Group © 2026 - Innovación en Movimiento."
    }
  };

  const t = lang === 'en' ? content.en : content.es;

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans scroll-smooth">
      {/* Navigation */}
      <nav className="p-6 max-w-7xl mx-auto flex justify-between items-center sticky top-0 bg-[#020617]/80 backdrop-blur-md z-50 border-b border-slate-800/50">
        <div className="flex items-center gap-2">
          <Terminal className="text-blue-500" size={28} />
          <span className="text-xl font-bold tracking-tighter uppercase">VANTIX <span className="text-blue-500">ENG</span></span>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            className="px-4 py-1.5 border border-slate-700 rounded-full text-xs font-bold hover:bg-slate-800 transition-all text-blue-400"
          >
            {lang === 'en' ? 'ESPAÑOL' : 'ENGLISH'}
          </button>
          <a href="#contact" className="hidden sm:block px-6 py-2 bg-blue-600 rounded-full text-sm font-bold hover:bg-blue-500 transition-all">
            {t.nav[1]}
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-24 px-6 text-center">
        <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter italic">
          {t.heroTitle} <br/><span className="text-blue-600 not-italic">{t.heroSubtitle}</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">{t.heroDesc}</p>
      </header>

      {/* Services Grid */}
      <section id="services" className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-sm font-bold mb-12 text-center uppercase tracking-[0.3em] text-blue-500">{t.servicesTitle}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <ServiceCard icon={<Cpu/>} title={t.s1.t} desc={t.s1.d} />
          <ServiceCard icon={<Database/>} title={t.s2.t} desc={t.s2.d} />
          <ServiceCard icon={<Shield/>} title={t.s3.t} desc={t.s3.d} />
          <ServiceCard icon={<Bot/>} title={t.s4.t} desc={t.s4.d} />
          <ServiceCard icon={<Settings/>} title={t.s5.t} desc={t.s5.d} />
          <ServiceCard icon={<Code2/>} title={t.s6.t} desc={t.s6.d} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto py-32 px-6 text-center">
        <div className="bg-gradient-to-b from-blue-600/20 to-transparent p-12 rounded-[3rem] border border-blue-500/20">
          <h2 className="text-4xl font-bold mb-4">{t.contactTitle}</h2>
          <p className="text-slate-400 mb-10">{t.contactDesc}</p>
          
          <div className="flex flex-col items-center gap-8">
            {/* Visual Display of Number */}
            <div className="flex items-center gap-4 bg-slate-900/50 px-8 py-4 rounded-2xl border border-slate-800 group hover:border-blue-500/50 transition-all">
              <Phone className="text-blue-500 animate-pulse" size={24} />
              <span className="text-2xl md:text-3xl font-mono font-bold tracking-widest text-white">
                {phoneDisplay}
              </span>
            </div>

            {/* WhatsApp Link */}
            <a 
              href={`https://wa.me/${phoneLink}`} 
              target="_blank"
              className="flex items-center justify-center gap-3 px-10 py-4 bg-[#25D366] text-white font-bold rounded-2xl hover:scale-105 transition-all shadow-lg shadow-green-500/20"
            >
              <MessageCircle size={20} />
              {t.ctaWhatsapp}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-slate-900">
        <div className="flex justify-center gap-8 mb-6 opacity-30 grayscale text-xs font-mono tracking-widest">
          <span>PYTHON</span> <span>REACT</span> <span>SQL</span> <span>ARDUINO</span>
        </div>
        <p className="opacity-50 text-xs">{t.footer}</p>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="p-8 bg-slate-900/30 border border-slate-800 rounded-3xl hover:border-blue-500/40 transition-all group cursor-default">
      <div className="text-blue-500 mb-6 group-hover:rotate-12 transition-transform">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}