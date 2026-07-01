import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronUp,
  Menu,
  X,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Construction,
  BookOpen,
  ArrowLeft,
  ChevronRight,
  Home as HomeIcon,
  Palette,
  Scale,
  Sun,
  Moon,
  Users,
  Search,
  Layers,
  ShieldCheck,
  Compass,
  Coffee,
  Zap,
  Bookmark,
  GraduationCap
} from 'lucide-react';
import { cn } from './lib/utils';
import { SUBJECTS, CEJM_CHAPTERS, Subject, Section, ChapterContent } from './data/content';
import Home from './components/Home';

export default function App() {
  const [isHome, setIsHome] = useState(true);
  const [activeSubject, setActiveSubject] = useState<Subject>(SUBJECTS[0]);
  const [activeSection, setActiveSection] = useState<Section>(SUBJECTS[0].sections[0]);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCejmChapter, setActiveCejmChapter] = useState<ChapterContent | null>(null);

  // Gestion dynamique du thème Clair / Sombre
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    return (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const syncStateFromHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) {
        setIsHome(true);
        setActiveSubject(SUBJECTS[0]);
        setActiveSection(SUBJECTS[0].sections[0]);
        setActiveCejmChapter(null);
        return;
      }

      setIsHome(false);
      const parts = hash.split('/');
      const subjId = parts[0];
      const sectId = parts[1];
      const chapId = parts[2];

      const subj = SUBJECTS.find(s => s.id === subjId);
      if (subj) {
        setActiveSubject(subj);
        if (sectId) {
          const sect = subj.sections.find(s => s.id === sectId);
          if (sect) {
            setActiveSection(sect);
          } else {
            setActiveSection(subj.sections[0]);
          }
        } else {
          setActiveSection(subj.sections[0]);
        }

        if (chapId && subj.id === 'cejm') {
          const allChapters = [...CEJM_CHAPTERS.annee1, ...CEJM_CHAPTERS.annee2];
          const chap = allChapters.find(c => c.id === chapId);
          if (chap) setActiveCejmChapter(chap);
          else setActiveCejmChapter(null);
        } else {
          setActiveCejmChapter(null);
        }
      }
    };

    window.addEventListener('hashchange', syncStateFromHash);
    syncStateFromHash();

    return () => window.removeEventListener('hashchange', syncStateFromHash);
  }, []);

  const handleSubjectChange = (subject: Subject) => {
    window.location.hash = `#${subject.id}/${subject.sections[0].id}`;
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSectionChange = (section: Section) => {
    window.location.hash = `#${activeSubject.id}/${section.id}`;
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    window.location.hash = '';
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Mappage d'icônes Lucide pour les sujets
  const getSubjectIcon = (subjectId: string) => {
    switch (subjectId) {
      case 'bloc1': return <BookOpen size={18} />;
      case 'culture': return <Palette size={18} />;
      case 'cejm': return <Scale size={18} />;
      default: return <BookOpen size={18} />;
    }
  };

  // Mappage d'icônes Lucide pour les sections
  const getSectionIcon = (sectionId: string) => {
    switch (sectionId) {
      // Bloc 01
      case 'plan': return <Layers size={14} />;
      case 'legal': return <ShieldCheck size={14} />;
      case 'veille': return <Search size={14} />;
      case 'acteurs': return <Users size={14} />;
      // Culture
      case 'la-rue': return <Compass size={14} />;
      case 'le-repas': return <Coffee size={14} />;
      case 'exces': return <Zap size={14} />;
      // CEJM
      case 'methodologie': return <Bookmark size={14} />;
      case 'annee1': return <GraduationCap size={14} />;
      case 'annee2': return <GraduationCap size={14} />;
      default: return <BookOpen size={14} />;
    }
  };

  // --------------- CONTENT RENDERERS ---------------

  const renderSwot = (content: any) => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {content.items.map((item: any, i: number) => (
          <motion.div 
            key={item.title} 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            className="p-5 md:p-6 bg-bg-card border border-border-theme rounded-2xl group hover:border-accent/30 hover:shadow-[0_0_20px_rgba(251,191,36,0.03)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h4 className={cn(
                "text-xs md:text-sm font-black mb-4 flex items-center gap-2 uppercase tracking-wider",
                item.color === 'green' && "text-emerald-500",
                item.color === 'red' && "text-rose-500",
                item.color === 'blue' && "text-blue-500",
                item.color === 'amber' && "text-amber-500",
              )}>{item.title}</h4>
              <ul className="space-y-2 md:space-y-3 mb-6">
                {item.items.map((li: string) => (
                  <li key={li} className="text-xs text-text-muted font-medium flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-[10px] uppercase font-bold text-text-muted/60 tracking-wider">
              {item.example}
            </p>
          </motion.div>
        ))}
      </div>
      {content.warning && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl flex gap-3"
        >
          <AlertCircle className="text-rose-500 flex-shrink-0" size={16} />
          <p className="text-xs text-rose-300 font-bold italic">{content.warning}</p>
        </motion.div>
      )}
    </div>
  );

  const renderTable = (content: any) => {
    const renderMobileTable = () => (
      <div className="space-y-4 md:hidden">
        {content.rows.map((row: string[], i: number) => {
          // Si le tableau a 4 colonnes (ex: tableau Mémo D.P.P.O.C.M.B.K)
          if (content.headers.length === 4) {
            return (
              <div key={i} className="bg-bg-card border border-border-theme rounded-2xl p-5 space-y-3.5 shadow-sm">
                <div className="flex items-center gap-3 border-b border-border-theme pb-2.5">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent font-black text-sm border border-accent/20">
                    {row[0]}
                  </div>
                  <span className="text-sm font-black text-text-main uppercase tracking-tight">{row[1]}</span>
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  <div>
                    <span className="text-[10px] uppercase font-black tracking-wider text-text-muted block mb-0.5">{content.headers[2]}</span>
                    <span className="text-xs text-text-main font-medium">{row[2]}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-black tracking-wider text-rose-500 block mb-0.5">{content.headers[3]}</span>
                    <span className="text-xs text-text-main font-bold p-2.5 bg-rose-500/5 border border-rose-500/10 rounded-xl block leading-relaxed">{row[3]}</span>
                  </div>
                </div>
              </div>
            );
          }
          
          // Si le tableau a 3 colonnes (ex: Loi Évin)
          if (content.headers.length === 3) {
            return (
              <div key={i} className="bg-bg-card border border-border-theme rounded-2xl p-5 space-y-3.5 shadow-sm">
                <div className="border-b border-border-theme pb-2.5">
                  <span className="text-xs font-black text-text-main uppercase tracking-wider">{row[0]}</span>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <span className="text-[10px] uppercase font-black tracking-wider text-rose-500 block mb-0.5">{content.headers[1]}</span>
                    <span className="text-xs text-text-main font-medium p-2.5 bg-rose-500/5 border border-rose-500/10 rounded-xl block leading-relaxed">{row[1]}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-black tracking-wider text-emerald-500 block mb-0.5">{content.headers[2]}</span>
                    <span className="text-xs text-text-main font-medium p-2.5 bg-emerald-500/5 border border-emerald-500/10 rounded-xl block leading-relaxed">{row[2]}</span>
                  </div>
                </div>
              </div>
            );
          }

          // Rendu générique par défaut pour 2 colonnes ou autre
          return (
            <div key={i} className="bg-bg-card border border-border-theme rounded-2xl p-5 space-y-3 shadow-sm">
              <div className="border-b border-border-theme pb-2.5">
                <span className="text-xs font-black text-text-main uppercase tracking-wider">{row[0]}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-black tracking-wider text-text-muted block mb-0.5">{content.headers[1]}</span>
                <span className="text-xs text-text-main font-medium leading-relaxed">{row[1]}</span>
              </div>
            </div>
          );
        })}
      </div>
    );

    return (
      <div className="space-y-8">
        {/* Vue Mobile (Cartes adaptatives) */}
        {renderMobileTable()}

        {/* Vue Desktop (Tableau standard) */}
        <div className="hidden md:block overflow-x-auto border border-border-theme rounded-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-bg-page border-b border-border-theme">
                {content.headers.map((header: string) => (
                  <th key={header} className="p-4 text-[10px] md:text-xs font-black uppercase tracking-widest text-text-main border-r border-border-theme last:border-0">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {content.rows.map((row: string[], i: number) => (
                <tr key={i} className="border-b border-border-theme last:border-0 hover:bg-bg-page/40 transition-colors">
                  {row.map((cell, j) => (
                    <td key={j} className="p-4 text-xs text-text-muted font-medium border-r border-border-theme last:border-0">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {content.extra && (
          <div className="space-y-4">
            <h4 className="text-xs md:text-sm font-black uppercase tracking-tight text-text-main">{content.extra.title}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.extra.items.map((item: any) => (
                <div key={item.label} className="p-5 bg-bg-card border border-border-theme rounded-2xl">
                  <span className={cn(
                    "text-[10px] font-black uppercase tracking-wider mb-3 block",
                    item.color === 'green' ? "text-emerald-500" : "text-rose-500"
                  )}>
                    {item.label}
                  </span>
                  <ul className="space-y-2.5">
                    {item.list.map((li: string) => (
                      <li key={li} className="text-xs text-text-muted font-medium flex items-start gap-2">
                        <div className={cn("w-1.5 h-1.5 rounded-full mt-1.5", item.color === 'green' ? "bg-emerald-500" : "bg-rose-500")} />
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderFormula = (content: any) => (
    <div className="space-y-6 md:space-y-8">
      <div className="p-6 md:p-8 bg-bg-card border-l-4 border-accent rounded-r-2xl border border-y-border-theme border-r-border-theme">
        <p className="text-[10px] text-accent font-black uppercase tracking-[3px] mb-3">Structure de Rédaction</p>
        <p className="text-base md:text-xl font-black leading-tight text-text-main">
          {content.formula}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {content.examples.map((ex: any) => (
          <div key={ex.label} className="p-5 md:p-6 bg-bg-card border border-border-theme rounded-2xl hover:border-accent/30 hover:shadow-[0_0_20px_rgba(251,191,36,0.03)] hover:-translate-y-0.5 transition-all duration-300">
            <span className="text-[10px] font-black text-text-muted uppercase tracking-wider mb-2 block">{ex.label}</span>
            <p className="text-xs md:text-sm text-text-main font-medium italic">"{ex.text}"</p>
          </div>
        ))}
      </div>
      {content.tip && (
        <div className="p-4 bg-accent/10 border border-accent/20 rounded-xl flex gap-3">
          <Lightbulb className="text-accent flex-shrink-0" size={16} />
          <p className="text-xs text-accent font-bold italic">{content.tip}</p>
        </div>
      )}
    </div>
  );

  const renderGrid = (content: any) => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {content.items.map((item: any, i: number) => (
          <motion.div 
            key={item.title} 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            className="p-5 md:p-6 bg-bg-card border border-border-theme rounded-2xl hover:border-accent/30 hover:shadow-[0_0_20px_rgba(251,191,36,0.03)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h4 className={cn(
                "text-xs md:text-sm font-black mb-3 uppercase tracking-wider",
                item.color === 'blue' && "text-blue-500",
                item.color === 'green' && "text-emerald-500",
                item.color === 'amber' && "text-amber-500",
                item.color === 'red' && "text-rose-500",
                item.color === 'purple' && "text-purple-500",
                item.color === 'teal' && "text-teal-500",
              )}>
                {item.title}
              </h4>
              <div className="space-y-2.5">
                {Array.isArray(item.text) ? (
                  item.text.map((p: string, idx: number) => (
                    <p key={idx} className={cn("text-xs font-medium", p.startsWith('Ex.') || p.startsWith('->') ? "text-text-muted italic" : "text-text-muted")}>
                      {p}
                    </p>
                  ))
                ) : (
                  <p className="text-xs text-text-muted font-medium">{item.text}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {content.formula && (
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-5 bg-bg-card border-l-4 border-accent rounded-r-2xl border border-y-border-theme border-r-border-theme"
        >
          <p className="text-[10px] text-accent font-black uppercase tracking-wider mb-2">Formule de rédaction</p>
          <p className="text-xs md:text-sm font-black italic text-text-main">"{content.formula}"</p>
        </motion.div>
      )}
      {content.example && (
        <div className="p-4 bg-bg-card border border-border-theme rounded-xl">
          <p className="text-xs text-text-muted font-medium"><span className="text-accent font-black uppercase mr-2">Exemple :</span>{content.example}</p>
        </div>
      )}
    </div>
  );

  const renderList = (content: any) => (
    <div className="grid grid-cols-1 gap-4">
      {content.items.map((item: any, i: number) => (
        <motion.div 
          key={item.title} 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.3 }}
          className="p-5 md:p-6 bg-bg-card border border-border-theme rounded-2xl flex items-start gap-4 group hover:border-accent/30 hover:shadow-[0_0_20px_rgba(251,191,36,0.03)] hover:-translate-y-0.5 transition-all duration-300"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
          <div className="flex-1">
            <h4 className="text-xs md:text-sm font-black mb-3 text-text-main">{item.title}</h4>
            <div className="space-y-2.5">
              {Array.isArray(item.text) ? (
                item.text.map((p: string, idx: number) => (
                  <p key={idx} className={cn("text-xs font-medium", p.startsWith('Référence') || p.startsWith('Campagne') ? "text-text-main font-bold" : "text-text-muted")}>
                    {p}
                  </p>
                ))
              ) : (
                <p className="text-xs text-text-muted font-medium">{item.text}</p>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderCases = (content: any) => (
    <div className="space-y-4">
      {content.items.map((item: any) => (
        <div
          key={item.title}
          className="p-6 md:p-8 bg-bg-card border border-border-theme border-l-4 border-l-border-theme hover:border-l-accent rounded-r-2xl transition-all duration-300 shadow-sm"
        >
          <span className="text-[10px] font-black text-text-muted uppercase tracking-wider mb-2 block">
            {item.brand}
          </span>
          <h4 className="text-base md:text-lg font-black mb-4 text-text-main">{item.title}</h4>
          <div className="space-y-3.5 mb-6">
            {Array.isArray(item.body) ? (
              item.body.map((p: string, i: number) => (
                <p key={i} className="text-xs md:text-sm text-text-muted font-medium leading-relaxed">
                  {p}
                </p>
              ))
            ) : (
              <p className="text-xs md:text-sm text-text-muted font-medium leading-relaxed">{item.body}</p>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag: string) => (
              <span key={tag} className="text-[9px] px-2.5 py-1 border border-border-theme text-text-muted font-bold uppercase tracking-wider rounded-md bg-bg-page/40">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderPlaceholder = (content: any) => (
    <div className="flex flex-col items-center justify-center py-16 md:py-20 text-center border border-dashed border-border-theme rounded-2xl">
      <div className="w-12 h-12 md:w-16 md:h-16 bg-bg-page border border-border-theme flex items-center justify-center mb-6 rounded-2xl">
        <Lightbulb className="text-text-muted" size={24} />
      </div>
      <p className="text-text-muted font-bold uppercase tracking-widest text-[10px] md:text-xs px-4">{content.text}</p>
    </div>
  );

  const renderConstruction = (content: any) => (
    <div className="flex flex-col items-center justify-center py-20 md:py-28 text-center bg-bg-card border border-border-theme rounded-2xl">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative mb-8"
      >
        <div className="w-20 h-20 md:w-24 md:h-24 bg-accent/10 border-2 border-dashed border-accent/30 flex items-center justify-center rounded-2xl">
          <Construction className="text-accent" size={32} />
        </div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-2 -right-2 w-6 h-6 bg-accent flex items-center justify-center rounded-lg shadow-md"
        >
          <span className="text-black text-xs font-black">⚙</span>
        </motion.div>
      </motion.div>
      <h4 className="text-lg md:text-xl font-black tracking-tight uppercase mb-3 text-text-main">En Construction</h4>
      <p className="text-text-muted font-medium text-xs md:text-sm max-w-sm px-4 leading-relaxed">{content.text}</p>
      <div className="mt-8 flex items-center gap-2 text-[10px] text-text-muted font-bold uppercase tracking-widest">
        <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
        Bientôt disponible
      </div>
    </div>
  );

  // Rendu générique des sections à sous-blocs
  const renderSubsections = (subsections: any[]) => (
    <div className="space-y-10 md:space-y-14">
      {subsections.map((sub: any) => (
        <div key={sub.id} className="scroll-mt-24" id={sub.id}>
          <h3 className="text-base md:text-xl font-black tracking-tight uppercase mb-5 flex items-center gap-3 text-text-main border-b border-border-theme pb-3">
            <div className="w-1.5 h-6 bg-accent rounded-full flex-shrink-0" />
            {sub.title}
          </h3>
          {sub.type === 'grid' && renderGrid(sub)}
          {sub.type === 'cases' && renderCases(sub)}
          {sub.type === 'list' && renderList(sub)}
          {sub.type === 'table' && renderTable(sub)}
          {sub.type === 'formula' && renderFormula(sub)}
          {sub.type === 'construction' && renderConstruction(sub)}
        </div>
      ))}
    </div>
  );

  // --------------- CEJM CHAPTER RENDERERS ---------------

  const renderCejmChapters = (content: any) => {
    const chapters: ChapterContent[] = CEJM_CHAPTERS[content.year as keyof typeof CEJM_CHAPTERS];

    if (activeCejmChapter) {
      return (
        <motion.div
          key={activeCejmChapter.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
        >
          <button
            onClick={() => window.location.hash = `#${activeSubject.id}/${activeSection.id}`}
            className="flex items-center gap-2 text-accent text-[10px] md:text-xs font-bold uppercase tracking-wider mb-6 hover:text-text-main transition-colors group cursor-pointer"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Retour aux chapitres
          </button>

          <div className="p-6 md:p-8 bg-bg-page border border-border-theme rounded-2xl mb-8">
            <div className="flex items-baseline gap-4">
              <span className="text-3xl md:text-5xl font-black text-accent/20 tracking-tighter leading-none">{activeCejmChapter.number}</span>
              <div>
                <h3 className="text-lg md:text-2xl font-black tracking-tight leading-tight text-text-main">{activeCejmChapter.title}</h3>
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider mt-1.5 block">{activeCejmChapter.tag}</span>
              </div>
            </div>
          </div>

          {Array.isArray(activeCejmChapter.content) ? (
            <div className="mt-8">
              {renderSubsections(activeCejmChapter.content)}
            </div>
          ) : (
            <div className="p-8 border border-dashed border-border-theme flex flex-col items-center justify-center text-center py-16 rounded-2xl bg-bg-page">
              <BookOpen className="text-text-muted mb-4" size={32} />
              <p className="text-text-muted font-bold uppercase tracking-wider text-[10px] md:text-xs mb-2">Fiche de révision</p>
              <p className="text-text-main/80 text-sm font-medium leading-relaxed max-w-lg">{activeCejmChapter.content}</p>
            </div>
          )}
        </motion.div>
      );
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {chapters.map((chapter, i) => (
          <motion.button
            key={chapter.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            onClick={() => {
              window.location.hash = `#${activeSubject.id}/${activeSection.id}/${chapter.id}`;
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group text-left p-5 md:p-6 bg-bg-page border border-border-theme hover:border-accent/40 rounded-2xl transition-all duration-300 hover:bg-bg-card cursor-pointer flex flex-col justify-between min-h-[160px]"
          >
            <div className="w-full">
              <div className="flex items-start justify-between mb-4">
                <span className="text-2xl md:text-3xl font-black text-accent/15 group-hover:text-accent/40 transition-colors tracking-tighter leading-none">{chapter.number}</span>
                <ChevronRight className="text-text-muted group-hover:text-accent transition-colors" size={16} />
              </div>
              <h4 className="text-xs md:text-sm font-bold leading-snug mb-3 group-hover:text-text-main transition-colors text-text-muted">{chapter.title}</h4>
            </div>
            <span className="text-[9px] text-text-muted uppercase font-bold tracking-wider">{chapter.tag}</span>
          </motion.button>
        ))}
      </div>
    );
  };

  // --------------- CONTENT ROUTER ---------------

  const renderContent = (content: any) => {
    switch (content.type) {
      case 'swot': return renderSwot(content);
      case 'table': return renderTable(content);
      case 'formula': return renderFormula(content);
      case 'grid': return renderGrid(content);
      case 'list': return renderList(content);
      case 'cases': return renderCases(content);
      case 'placeholder': return renderPlaceholder(content);
      case 'construction': return renderConstruction(content);
      case 'exces-full': return renderSubsections(content.subsections);
      case 'subsections': return renderSubsections(content.subsections);
      case 'cejm-chapters': return renderCejmChapters(content);
      default: return <p className="text-text-muted text-sm">Contenu introuvable.</p>;
    }
  };

  const navigateFromHome = (subjectId: string) => {
    const subj = SUBJECTS.find(s => s.id === subjectId);
    if (subj) {
      window.location.hash = `#${subj.id}/${subj.sections[0].id}`;
    }
  };

  return (
    <div className="min-h-screen bg-bg-page text-text-main flex flex-col lg:flex-row transition-colors duration-300 font-sans selection:bg-accent selection:text-black">
      
      {/* 1. SIDEBAR DE NAVIGATION (DESKTOP) */}
      <aside className="hidden lg:flex flex-col w-72 border-r border-border-theme bg-bg-card h-screen sticky top-0 flex-shrink-0 z-30 transition-colors duration-300">
        
        {/* Header Sidebar */}
        <div className="h-20 border-b border-border-theme px-6 flex items-center justify-between">
          <div onClick={handleGoHome} className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 bg-white dark:bg-zinc-900 border border-border-theme flex items-center justify-center overflow-hidden rounded-xl shadow-sm">
              <img
                src={`${import.meta.env.BASE_URL}images/Logo%20T%20Orange.png`}
                alt="Logo T"
                className="w-full h-full object-contain p-1"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  const sibling = (e.target as HTMLElement).nextElementSibling;
                  if (sibling instanceof HTMLElement) {
                    sibling.style.display = 'flex';
                  }
                }}
              />
              <span className="hidden text-black font-black text-xl">T</span>
            </div>
            <div className="text-xl font-black tracking-tight uppercase group-hover:text-accent transition-colors">
              BTS <span className="text-accent">COM</span>
            </div>
          </div>
        </div>

        {/* Liens de navigation principale */}
        <nav className="flex-1 px-4 py-6 overflow-y-auto no-scrollbar space-y-8">
          <div className="space-y-1">
            <span className="text-[10px] text-text-muted font-black tracking-widest px-3 uppercase block mb-3">Navigation</span>
            <button
              onClick={handleGoHome}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-bold tracking-tight transition-all duration-200 cursor-pointer",
                isHome 
                  ? "bg-accent text-black shadow-lg shadow-accent/15" 
                  : "text-text-muted hover:text-text-main hover:bg-bg-page/50"
              )}
            >
              <HomeIcon size={18} />
              <span>Accueil</span>
            </button>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] text-text-muted font-black tracking-widest px-3 uppercase block mb-2">Matières</span>
            <div className="space-y-1.5">
              {SUBJECTS.map((subj) => {
                const isActive = !isHome && activeSubject.id === subj.id;
                return (
                  <div key={subj.id} className="space-y-1">
                    <button
                      onClick={() => handleSubjectChange(subj)}
                      className={cn(
                        "w-full flex items-center justify-between px-3 py-3 rounded-xl text-sm font-bold tracking-tight transition-all duration-200 cursor-pointer",
                        isActive 
                          ? "bg-accent/10 text-accent border border-accent/20" 
                          : "text-text-muted hover:text-text-main hover:bg-bg-page/50 border border-transparent"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        {getSubjectIcon(subj.id)}
                        <span>{subj.title}</span>
                      </div>
                      <ChevronRight size={14} className={cn("transition-transform duration-300", isActive && "rotate-90 text-accent")} />
                    </button>

                    {/* Sous-navigation interne de la matière si elle est active */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden pl-4 pr-1 py-1 space-y-1 border-l border-border-theme ml-5"
                        >
                          {subj.sections.map((sect) => {
                            const isSectionActive = activeSection.id === sect.id;
                            return (
                              <button
                                key={sect.id}
                                onClick={() => handleSectionChange(sect)}
                                className={cn(
                                  "w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer text-left",
                                  isSectionActive 
                                    ? "text-accent font-black" 
                                    : "text-text-muted hover:text-text-main"
                                )}
                              >
                                {getSectionIcon(sect.id)}
                                <span className="truncate">{sect.title}</span>
                              </button>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </nav>

        {/* Pied de la Sidebar (Sélecteur de Thème) */}
        <div className="p-4 border-t border-border-theme bg-bg-page/20 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl border border-border-theme bg-bg-page flex items-center justify-center text-text-muted">
              {theme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
            </div>
            <div>
              <p className="text-[10px] text-text-muted font-black uppercase tracking-wider leading-tight">Thème Actif</p>
              <p className="text-xs font-bold text-text-main tracking-tight leading-normal capitalize">{theme === 'dark' ? 'Sombre' : 'Clair'}</p>
            </div>
          </div>
          
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl border border-border-theme bg-bg-page hover:bg-accent hover:border-accent text-text-muted hover:text-black transition-all duration-300 flex items-center justify-center cursor-pointer shadow-md"
            title="Changer de thème"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </aside>

      {/* 2. HEADER MOBILE (MOBILE ONLY) */}
      <header className="lg:hidden flex h-16 border-b border-border-theme px-4 items-center justify-between sticky top-0 bg-bg-card/95 backdrop-blur-md z-45 transition-colors duration-300 shadow-sm">
        
        {/* Bouton Hamburger */}
        <button
          className="p-2 text-text-muted hover:text-text-main transition-colors cursor-pointer rounded-xl border border-border-theme bg-bg-page/40"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Logo */}
        <div onClick={handleGoHome} className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-white dark:bg-zinc-900 border border-border-theme flex items-center justify-center overflow-hidden rounded-lg shadow-xs">
            <img
              src={`${import.meta.env.BASE_URL}images/Logo%20T%20Orange.png`}
              alt="Logo T"
              className="w-full h-full object-contain p-1"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
                const sibling = (e.target as HTMLElement).nextElementSibling;
                if (sibling instanceof HTMLElement) {
                  sibling.style.display = 'flex';
                }
              }}
            />
            <span className="hidden text-black font-black text-sm">T</span>
          </div>
          <div className="text-base font-black tracking-tight uppercase">
            BTS <span className="text-accent">COM</span>
          </div>
        </div>

        {/* Bouton Thème Mobile */}
        <button
          onClick={toggleTheme}
          className="p-2 text-text-muted hover:text-accent transition-colors cursor-pointer rounded-xl border border-border-theme bg-bg-page/40"
          title="Changer de thème"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </header>

      {/* 3. MENU DRAWER MOBILE (MOBILE ONLY) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay d'ombrage */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 lg:hidden bg-black/60 backdrop-blur-xs"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] z-50 lg:hidden bg-bg-card border-r border-border-theme flex flex-col pt-4 pb-6 transition-colors duration-300"
            >
              <div className="px-6 flex items-center justify-between border-b border-border-theme pb-4 mb-4">
                <div className="text-lg font-black tracking-tight uppercase text-text-main">
                  BTS <span className="text-accent">COM</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded-xl border border-border-theme text-text-muted hover:text-text-main bg-bg-page/40"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-4 space-y-6 no-scrollbar">
                <div className="space-y-1">
                  <span className="text-[9px] text-text-muted font-black tracking-widest px-3 uppercase block mb-2">Navigation</span>
                  <button
                    onClick={handleGoHome}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-bold tracking-tight transition-all cursor-pointer",
                      isHome ? "bg-accent text-black" : "text-text-muted"
                    )}
                  >
                    <HomeIcon size={18} />
                    <span>Accueil</span>
                  </button>
                </div>

                <div className="space-y-2">
                  <span className="text-[9px] text-text-muted font-black tracking-widest px-3 uppercase block mb-2">Matières</span>
                  <div className="space-y-2">
                    {SUBJECTS.map((subj) => {
                      const isActive = !isHome && activeSubject.id === subj.id;
                      return (
                        <div key={subj.id} className="space-y-1">
                          <button
                            onClick={() => handleSubjectChange(subj)}
                            className={cn(
                              "w-full flex items-center justify-between px-3 py-3 rounded-xl text-sm font-bold tracking-tight border cursor-pointer",
                              isActive ? "bg-accent/15 text-accent border-accent/20" : "text-text-muted border-transparent"
                            )}
                          >
                            <div className="flex items-center gap-3">
                              {getSubjectIcon(subj.id)}
                              <span>{subj.title}</span>
                            </div>
                            <ChevronRight size={14} className={cn("transition-transform", isActive && "rotate-90 text-accent")} />
                          </button>

                          {isActive && (
                            <div className="pl-4 space-y-1 border-l border-border-theme ml-5 py-1">
                              {subj.sections.map((sect) => {
                                const isSectionActive = activeSection.id === sect.id;
                                return (
                                  <button
                                    key={sect.id}
                                    onClick={() => handleSectionChange(sect)}
                                    className={cn(
                                      "w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-bold text-left cursor-pointer",
                                      isSectionActive ? "text-accent font-black" : "text-text-muted"
                                    )}
                                  >
                                    {getSectionIcon(sect.id)}
                                    <span>{sect.title}</span>
                                  </button>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* 4. ZONE DE CONTENU (MAIN VIEWPORT) */}
      <main className="flex-1 min-w-0 flex flex-col h-screen overflow-y-auto no-scrollbar bg-bg-page transition-colors duration-300">
        
        {/* Desktop Breadcrumbs Bar (Top Bar) */}
        <header className="hidden lg:flex h-16 border-b border-border-theme px-8 items-center justify-between bg-bg-card/45 backdrop-blur-md sticky top-0 z-20 transition-colors duration-300">
          <div className="flex items-center gap-2 text-[10px] uppercase font-black tracking-widest text-text-muted">
            <span className="hover:text-text-main cursor-pointer" onClick={handleGoHome}>BTS COM</span>
            <ChevronRight size={10} />
            {isHome ? (
              <span className="text-text-main">Accueil</span>
            ) : (
              <>
                <span className="hover:text-text-main cursor-pointer" onClick={() => handleSubjectChange(activeSubject)}>{activeSubject.title}</span>
                <ChevronRight size={10} />
                <span className="text-text-main">{activeSection.title}</span>
                {activeCejmChapter && (
                  <>
                    <ChevronRight size={10} />
                    <span className="text-accent truncate max-w-[150px]">{activeCejmChapter.title}</span>
                  </>
                )}
              </>
            )}
          </div>
          
          <div className="flex items-center gap-4 text-xs font-bold text-text-muted">
            <span>Session de Révision</span>
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-soft" />
          </div>
        </header>

        {/* Scroll Container (Content) */}
        <div className="flex-1 p-4 md:p-8 lg:p-12 w-full max-w-6xl mx-auto flex flex-col">
          {isHome ? (
            <Home onNavigate={navigateFromHome} />
          ) : (
            <div className="space-y-8 flex-1 flex flex-col">
              
              {/* Subject Title Block */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSubject.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-bg-card border border-border-theme rounded-3xl p-6 md:p-8 transition-colors duration-300 shadow-sm"
                >
                  <span className="text-[10px] md:text-xs font-bold text-accent uppercase tracking-widest mb-2 block">{activeSubject.tag}</span>
                  <h1 className="text-2xl md:text-5xl font-black leading-tight tracking-tight mb-3 text-text-main uppercase">
                    {activeSubject.title}
                  </h1>
                  <p className="text-text-muted text-xs md:text-sm max-w-xl font-medium leading-relaxed">{activeSubject.description}</p>
                </motion.div>
              </AnimatePresence>

              {/* Section Tabs (Mobile Only) */}
              <div className="lg:hidden flex bg-border-theme gap-[1px] mb-2 overflow-x-auto no-scrollbar rounded-xl border border-border-theme shadow-sm">
                {activeSubject.sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => handleSectionChange(section)}
                    className={cn(
                      "flex-1 min-w-[90px] p-3 text-[9px] md:text-[10px] uppercase font-bold tracking-wider transition-all whitespace-nowrap cursor-pointer",
                      activeSection.id === section.id
                        ? "bg-bg-card text-accent font-black"
                        : "bg-bg-page text-text-muted hover:text-text-main"
                    )}
                  >
                    {section.title}
                  </button>
                ))}
              </div>

              {/* Page content Container */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeSection.id}-${activeCejmChapter?.id || 'none'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex-1"
                >
                  <div className="bg-bg-card p-5 md:p-8 lg:p-10 border border-border-theme rounded-3xl shadow-md transition-colors duration-300">
                    
                    {/* Inner Title (Only if CEJM Chapter is not selected) */}
                    {!activeCejmChapter && (
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-border-theme pb-5">
                        <h3 className="text-lg md:text-2xl font-black tracking-tight uppercase flex items-center gap-3 text-text-main">
                          {getSectionIcon(activeSection.id)}
                          <span>{activeSection.title}</span>
                          {activeSection.badge && (
                            <span className={cn(
                              "text-[9px] px-2 py-0.5 rounded font-black uppercase tracking-widest text-white",
                              activeSection.badgeColor === 'blue' && "bg-blue-500",
                              activeSection.badgeColor === 'purple' && "bg-purple-500",
                              activeSection.badgeColor === 'green' && "bg-emerald-500",
                              activeSection.badgeColor === 'amber' && "bg-amber-500 text-black",
                              activeSection.badgeColor === 'teal' && "bg-teal-500",
                              activeSection.badgeColor === 'red' && "bg-rose-500",
                            )}>
                              {activeSection.badge}
                            </span>
                          )}
                        </h3>
                      </div>
                    )}

                    {/* Content Router output */}
                    <div className="space-y-8 md:space-y-10">
                      {renderContent(activeSection.content)}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          )}
        </div>
      </main>

      {/* 5. BOUTON RETOUR EN HAUT (BACK TO TOP) */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-accent text-black shadow-2xl flex items-center justify-center z-45 hover:bg-white hover:scale-105 transition-all duration-300 cursor-pointer border border-accent/20"
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
