import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, ArrowRight, BookOpen, Palette, Scale } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface HomeProps {
  onNavigate: (subjectId: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  // Boutons principaux avec icônes Lucide et descriptions associées
  const subjectsList = [
    { 
      label: "Stratégie de com", 
      id: "bloc1", 
      icon: <BookOpen className="w-8 h-8" />, 
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20", 
      description: "Le plan de communication complet en 8 étapes (D.P.P.O.C.M.B.K), le cadre légal et les outils de veille."
    },
    { 
      label: "Cultures de la Com", 
      id: "culture", 
      icon: <Palette className="w-8 h-8" />, 
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20", 
      description: "Analyse culturelle et sémiologique des grands thèmes transversaux du BTS (La Rue, Le Repas, L'Excès)."
    },
    { 
      label: "CEJM", 
      id: "cejm", 
      icon: <Scale className="w-8 h-8" />, 
      color: "bg-amber-500/10 text-amber-500 border-amber-500/20", 
      description: "Culture Économique, Juridique et Managériale pour la 1ère et 2ème année, avec méthodologie du syllogisme."
    }
  ];

  return (
    <div className="flex-1 text-text-main flex flex-col pb-10 px-4 md:px-6">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-8 md:gap-12 flex-1">
        
        {/* Section Hero Banner */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full bg-bg-card border border-border-theme rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative shadow-lg"
        >
          {/* Background decorative gradient */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left z-10">
            <span className="text-[10px] uppercase font-black text-accent tracking-[3px] bg-accent/10 px-3 py-1.5 rounded-full mb-4">
              Plateforme de Révision
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none mb-4 uppercase">
              Révisez votre <br className="hidden md:inline" />
              <span className="text-accent">BTS Communication</span>
            </h1>
            <p className="text-xs md:text-base text-text-muted font-medium max-w-md leading-relaxed">
              Toutes les fiches de cours, méthodologies et cas pratiques officiels réunis sur une seule plateforme intuitive et interactive.
            </p>
          </div>

          <div className="w-[200px] h-[200px] md:w-[260px] md:h-[260px] flex-shrink-0 flex items-center justify-center">
            <DotLottieReact
              src="https://lottie.host/d4eadce2-a738-4f03-86d7-6c655288b5aa/bt50OB3IhZ.lottie"
              loop
              autoplay
              className="w-full h-full"
            />
          </div>
        </motion.div>

        {/* Section Matières */}
        <div className="flex flex-col gap-4">
          <h2 className="text-lg md:text-2xl font-black tracking-tight uppercase flex items-center gap-3">
            <div className="w-1.5 h-6 bg-accent rounded-full" />
            Matières disponibles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subjectsList.map((btn, index) => (
              <motion.button
                key={btn.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + (index * 0.1) }}
                onClick={() => onNavigate(btn.id)}
                className="group text-left p-6 md:p-8 bg-bg-card border border-border-theme hover:border-accent/40 hover:shadow-accent/5 rounded-3xl flex flex-col justify-between items-start transition-all duration-300 cursor-pointer shadow-md min-h-[220px]"
              >
                <div className="w-full">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border shadow-inner transition-transform group-hover:scale-105 duration-300 ${btn.color}`}>
                    {btn.icon}
                  </div>
                  <h3 className="text-xl font-bold tracking-tight mb-3 text-text-main group-hover:text-accent transition-colors">
                    {btn.label}
                  </h3>
                  <p className="text-xs text-text-muted font-medium leading-relaxed">
                    {btn.description}
                  </p>
                </div>
                
                <div className="w-full flex justify-end mt-6">
                  <div className="w-9 h-9 rounded-xl border border-border-theme bg-bg-page flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                    <ArrowRight size={16} className="text-text-muted group-hover:text-black transition-colors" />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Footer / Section Contact */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-bg-card p-6 md:p-8 rounded-3xl border border-border-theme shadow-md flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-base md:text-lg font-black uppercase mb-2 tracking-tight">Une question ou suggestion ?</h3>
            <p className="text-xs text-text-muted font-medium">N'hésitez pas à me contacter via l'un de mes réseaux professionnels ci-dessous.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a 
              href="mailto:Tharsananarul@gmail.com" 
              className="flex items-center justify-center gap-3 text-xs text-text-main font-bold hover:text-black hover:bg-accent hover:border-accent transition-all duration-300 bg-bg-page px-5 py-3.5 rounded-2xl border border-border-theme"
            >
              <Mail size={16} /> Tharsananarul@gmail.com
            </a>
            <a 
              href="https://www.linkedin.com/in/tharsanan-arulananthaselvam/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-3 text-xs text-text-main font-bold hover:text-black hover:bg-accent hover:border-accent transition-all duration-300 bg-bg-page px-5 py-3.5 rounded-2xl border border-border-theme"
            >
              <Linkedin size={16} /> Profil LinkedIn
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
