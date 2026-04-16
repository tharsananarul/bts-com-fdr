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
} from 'lucide-react';
import { cn } from './lib/utils';
import { SUBJECTS, CEJM_CHAPTERS, Subject, Section, ChapterContent } from './data/content';

export default function App() {
  const [activeSubject, setActiveSubject] = useState<Subject>(SUBJECTS[0]);
  const [activeSection, setActiveSection] = useState<Section>(SUBJECTS[0].sections[0]);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // CEJM chapter drill-down state
  const [activeCejmChapter, setActiveCejmChapter] = useState<ChapterContent | null>(null);

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
        setActiveSubject(SUBJECTS[0]);
        setActiveSection(SUBJECTS[0].sections[0]);
        setActiveCejmChapter(null);
        return;
      }

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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --------------- CONTENT RENDERERS ---------------

  const renderSwot = (content: any) => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border-theme border border-border-theme">
        {content.items.map((item: any) => (
          <div key={item.title} className="p-5 md:p-6 bg-bg-page group">
            <h4 className={cn(
              "text-xs md:text-sm font-black mb-4 flex items-center gap-2",
              item.color === 'green' && "text-emerald-400",
              item.color === 'red' && "text-rose-400",
              item.color === 'blue' && "text-blue-400",
              item.color === 'amber' && "text-amber-400",
            )}>{item.title}</h4>
            <ul className="space-y-2 md:space-y-3 mb-6">
              {item.items.map((li: string) => (
                <li key={li} className="text-[11px] md:text-xs text-muted font-medium flex items-start gap-3">
                  <div className="w-1 h-1 bg-accent mt-1.5 flex-shrink-0" />
                  {li}
                </li>
              ))}
            </ul>
            <p className="text-[9px] md:text-[10px] uppercase font-bold text-muted/50 tracking-widest">
              {item.example}
            </p>
          </div>
        ))}
      </div>
      {content.warning && (
        <div className="p-4 bg-rose-500/10 border border-rose-500/20 flex gap-3">
          <AlertCircle className="text-rose-500 flex-shrink-0" size={16} />
          <p className="text-[10px] md:text-xs text-rose-200 font-bold italic">{content.warning}</p>
        </div>
      )}
    </div>
  );

  const renderTable = (content: any) => (
    <div className="space-y-8">
      <div className="overflow-x-auto border border-border-theme">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-border-theme">
              {content.headers.map((header: string) => (
                <th key={header} className="p-4 text-[10px] md:text-xs font-black uppercase tracking-widest text-white border-r border-bg-card last:border-0">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {content.rows.map((row: string[], i: number) => (
              <tr key={i} className="border-b border-border-theme last:border-0 hover:bg-white/5 transition-colors">
                {row.map((cell, j) => (
                  <td key={j} className="p-4 text-[11px] md:text-xs text-muted font-medium border-r border-border-theme last:border-0">
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
          <h4 className="text-xs md:text-sm font-black uppercase tracking-tighter">{content.extra.title}</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.extra.items.map((item: any) => (
              <div key={item.label} className="p-5 bg-bg-page border border-border-theme">
                <span className={cn(
                  "text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-3 block",
                  item.color === 'green' ? "text-emerald-400" : "text-rose-400"
                )}>
                  {item.label}
                </span>
                <ul className="space-y-2">
                  {item.list.map((li: string) => (
                    <li key={li} className="text-[11px] md:text-xs text-muted font-medium flex items-center gap-2">
                      <div className={cn("w-1 h-1 rounded-full", item.color === 'green' ? "bg-emerald-400" : "bg-rose-400")} />
                      {li}
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

  const renderFormula = (content: any) => (
    <div className="space-y-6 md:space-y-8">
      <div className="p-6 md:p-10 bg-bg-page border-l-4 border-accent">
        <p className="text-[9px] md:text-[10px] text-accent font-black uppercase tracking-[2px] md:tracking-[3px] mb-4">Structure Obligatoire</p>
        <p className="text-lg md:text-2xl font-black leading-tight">
          {content.formula}
        </p>
      </div>
      <div className="grid gap-px bg-border-theme">
        {content.examples.map((ex: any) => (
          <div key={ex.label} className="p-5 md:p-6 bg-bg-page">
            <span className="text-[9px] md:text-[10px] font-black text-muted uppercase tracking-widest mb-3 block">{ex.label}</span>
            <p className="text-xs md:text-sm text-white font-medium italic">"{ex.text}"</p>
          </div>
        ))}
      </div>
      {content.tip && (
        <div className="p-4 bg-accent/10 border border-accent/20 flex gap-3">
          <Lightbulb className="text-accent flex-shrink-0" size={16} />
          <p className="text-[10px] md:text-xs text-accent font-bold italic">{content.tip}</p>
        </div>
      )}
    </div>
  );

  const renderGrid = (content: any) => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border-theme border border-border-theme">
        {content.items.map((item: any) => (
          <div key={item.title} className="p-5 md:p-6 bg-bg-page hover:bg-bg-card transition-colors">
            <h4 className={cn(
              "text-xs md:text-sm font-black mb-3",
              item.color === 'blue' && "text-blue-400",
              item.color === 'green' && "text-emerald-400",
              item.color === 'amber' && "text-amber-400",
              item.color === 'red' && "text-rose-400",
              item.color === 'purple' && "text-purple-400",
              item.color === 'teal' && "text-teal-400",
            )}>
              {item.title}
            </h4>
            <div className="space-y-3">
              {Array.isArray(item.text) ? (
                item.text.map((p: string, i: number) => (
                  <p key={i} className={cn("text-[11px] md:text-xs font-medium", p.startsWith('Ex.') || p.startsWith('->') ? "text-muted italic" : "text-muted")}>
                    {p}
                  </p>
                ))
              ) : (
                <p className="text-[11px] md:text-xs text-muted font-medium">{item.text}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      {content.formula && (
        <div className="p-6 bg-bg-page border-l-4 border-accent">
          <p className="text-[9px] md:text-[10px] text-accent font-black uppercase tracking-widest mb-2">Formule de rédaction</p>
          <p className="text-xs md:text-sm font-black italic">"{content.formula}"</p>
        </div>
      )}
      {content.example && (
        <div className="p-4 bg-accent/5 border border-border-theme">
          <p className="text-[10px] md:text-xs text-muted font-medium"><span className="text-accent font-black uppercase mr-2">Exemple :</span>{content.example}</p>
        </div>
      )}
    </div>
  );

  const renderList = (content: any) => (
    <div className="grid gap-px bg-border-theme border border-border-theme">
      {content.items.map((item: any) => (
        <div key={item.title} className="p-5 md:p-6 bg-bg-page flex items-start gap-4 group hover:bg-bg-card transition-colors">
          <div className="w-1 h-1 bg-accent mt-2 flex-shrink-0" />
          <div className="flex-1">
            <h4 className="text-xs md:text-sm font-black mb-3">{item.title}</h4>
            <div className="space-y-3">
              {Array.isArray(item.text) ? (
                item.text.map((p: string, i: number) => (
                  <p key={i} className={cn("text-[11px] md:text-xs font-medium", p.startsWith('Référence') || p.startsWith('Campagne') ? "text-white font-bold" : "text-muted")}>
                    {p}
                  </p>
                ))
              ) : (
                <p className="text-[11px] md:text-xs text-muted font-medium">{item.text}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCases = (content: any) => (
    <div className="space-y-4">
      {content.items.map((item: any) => (
        <div
          key={item.title}
          className="p-6 md:p-8 bg-bg-page border-l-4 border-border-theme hover:border-accent transition-all duration-300"
        >
          <span className="text-[9px] md:text-[10px] font-black text-muted uppercase tracking-widest mb-2 block">
            {item.brand}
          </span>
          <h4 className="text-base md:text-lg font-black mb-4">{item.title}</h4>
          <div className="space-y-4 mb-6">
            {Array.isArray(item.body) ? (
              item.body.map((p: string, i: number) => (
                <p key={i} className="text-xs md:text-sm text-muted font-medium leading-relaxed mb-3">
                  {p}
                </p>
              ))
            ) : (
              <p className="text-xs md:text-sm text-muted font-medium leading-relaxed">{item.body}</p>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag: string) => (
              <span key={tag} className="text-[9px] md:text-[10px] px-2 md:px-3 py-1 border border-border-theme text-muted font-bold uppercase tracking-widest">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderPlaceholder = (content: any) => (
    <div className="flex flex-col items-center justify-center py-16 md:py-20 text-center border border-dashed border-border-theme">
      <div className="w-12 h-12 md:w-16 md:h-16 bg-border-theme flex items-center justify-center mb-6">
        <Lightbulb className="text-muted" size={24} />
      </div>
      <p className="text-muted font-bold uppercase tracking-widest text-[10px] md:text-xs px-4">{content.text}</p>
    </div>
  );

  const renderConstruction = (content: any) => (
    <div className="flex flex-col items-center justify-center py-20 md:py-28 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative mb-8"
      >
        <div className="w-20 h-20 md:w-24 md:h-24 bg-accent/10 border-2 border-dashed border-accent/30 flex items-center justify-center">
          <Construction className="text-accent" size={32} />
        </div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-2 -right-2 w-6 h-6 bg-accent flex items-center justify-center"
        >
          <span className="text-black text-[10px] font-black">⚙</span>
        </motion.div>
      </motion.div>
      <h4 className="text-lg md:text-xl font-black tracking-tighter uppercase mb-3">En Construction</h4>
      <p className="text-muted font-medium text-xs md:text-sm max-w-md px-4">{content.text}</p>
      <div className="mt-8 flex items-center gap-2 text-[10px] text-muted font-bold uppercase tracking-widest">
        <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
        Bientôt disponible
      </div>
    </div>
  );

  // Generic renderer for complex sections comprised of multiple sub-blocks
  const renderSubsections = (subsections: any[]) => (
    <div className="space-y-10 md:space-y-14">
      {subsections.map((sub: any) => (
        <div key={sub.id}>
          <h3 className="text-base md:text-xl font-black tracking-tighter uppercase mb-5 flex items-center gap-3">
            <div className="w-1 h-6 bg-accent flex-shrink-0" />
            {sub.title}
          </h3>
          {sub.type === 'grid' && renderGrid({ items: sub.items })}
          {sub.type === 'cases' && renderCases({ items: sub.items })}
          {sub.type === 'list' && renderList({ items: sub.items })}
          {sub.type === 'table' && renderTable({ headers: sub.headers, rows: sub.rows, extra: sub.extra })}
        </div>
      ))}
    </div>
  );

  // --------------- CEJM CHAPTER RENDERERS ---------------

  const renderCejmChapters = (content: any) => {
    const chapters: ChapterContent[] = CEJM_CHAPTERS[content.year as keyof typeof CEJM_CHAPTERS];

    // If a chapter is selected, show its content
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
            className="flex items-center gap-2 text-accent text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 hover:text-white transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Retour aux chapitres
          </button>

          <div className="p-6 md:p-10 bg-bg-page border border-border-theme mb-6">
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-3xl md:text-5xl font-black text-accent/20 tracking-tighter">{activeCejmChapter.number}</span>
              <div>
                <h3 className="text-lg md:text-2xl font-black tracking-tighter leading-tight">{activeCejmChapter.title}</h3>
                <span className="text-[9px] md:text-[10px] font-bold text-muted uppercase tracking-widest mt-1 block">{activeCejmChapter.tag}</span>
              </div>
            </div>
          </div>

          {Array.isArray(activeCejmChapter.content) ? (
            <div className="mt-8">
              {renderSubsections(activeCejmChapter.content)}
            </div>
          ) : (
            <div className="p-6 md:p-10 border border-dashed border-border-theme flex flex-col items-center justify-center text-center py-16">
              <BookOpen className="text-muted mb-4" size={32} />
              <p className="text-muted font-bold uppercase tracking-widest text-[10px] md:text-xs mb-2">Fiche de révision</p>
              <p className="text-white/60 text-sm font-medium">{activeCejmChapter.content}</p>
            </div>
          )}
        </motion.div>
      );
    }

    // Chapter grid
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
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
            className="group text-left p-5 md:p-6 bg-bg-page border border-border-theme hover:border-accent/40 transition-all duration-300 hover:bg-bg-card"
          >
            <div className="flex items-start justify-between mb-3">
              <span className="text-2xl md:text-3xl font-black text-accent/15 group-hover:text-accent/40 transition-colors tracking-tighter">{chapter.number}</span>
              <ChevronRight className="text-muted group-hover:text-accent transition-colors" size={16} />
            </div>
            <h4 className="text-xs md:text-sm font-bold leading-snug mb-2 group-hover:text-white transition-colors">{chapter.title}</h4>
            <span className="text-[9px] md:text-[10px] text-muted uppercase font-bold tracking-widest">{chapter.tag}</span>
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
      default: return <p className="text-muted text-sm">Contenu introuvable.</p>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg-page selection:bg-accent selection:text-black">
      {/* Header */}
      <header className="h-16 md:h-20 border-b border-border-theme px-4 md:px-10 flex items-center justify-between sticky top-0 bg-bg-page/95 backdrop-blur-md z-50">
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={handleGoHome}
        >
          <div className="w-9 h-9 md:w-10 md:h-10 bg-accent flex items-center justify-center overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL}images/logo-t.png`}
              alt="Logo T"
              className="w-full h-full object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
                if (e.target instanceof HTMLElement && e.target.nextElementSibling instanceof HTMLElement) {
                  e.target.nextElementSibling.style.display = 'flex';
                }
              }}
            />
            <span className="hidden text-black font-black text-xl">T</span>
          </div>
          <div className="text-lg md:text-2xl font-black tracking-tighter group-hover:text-white transition-colors">
            BTS <span className="text-accent">COM</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-6 text-[10px] uppercase tracking-[2px] font-bold">
            {SUBJECTS.map((s) => (
              <li
                key={s.id}
                onClick={() => handleSubjectChange(s)}
                className={cn(
                  "cursor-pointer transition-colors duration-300 py-1",
                  activeSubject.id === s.id
                    ? "text-accent border-b-2 border-accent"
                    : "text-muted hover:text-white"
                )}
              >
                {s.title}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-muted hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 lg:hidden bg-bg-page/98 backdrop-blur-sm pt-20 px-6"
          >
            <div className="flex flex-col gap-1 mt-4">
              {SUBJECTS.map((s, i) => (
                <motion.button
                  key={s.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => handleSubjectChange(s)}
                  className={cn(
                    "w-full p-5 text-left text-lg font-black uppercase tracking-tighter border-b border-border-theme flex items-center justify-between",
                    activeSubject.id === s.id ? "text-accent" : "text-white"
                  )}
                >
                  <span>{s.title}</span>
                  <span className="text-[10px] tracking-widest text-muted font-bold">{s.tag}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content — Full width, single column SPA */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 md:px-10 py-6 md:py-10">
        {/* Subject Header */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSubject.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            className="mb-8 md:mb-12"
          >
            <p className="text-[10px] md:text-xs font-bold text-muted uppercase tracking-widest mb-2">{activeSubject.tag}</p>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-[-2px] md:tracking-[-3px] mb-4 md:mb-6">
              {activeSubject.title}
            </h1>
            <p className="text-muted text-xs md:text-base max-w-xl font-medium">{activeSubject.description}</p>
          </motion.div>
        </AnimatePresence>

        {/* Section Tabs */}
        <div className="flex bg-border-theme gap-[1px] mb-8 overflow-x-auto no-scrollbar">
          {activeSubject.sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleSectionChange(section)}
              className={cn(
                "flex-1 min-w-[90px] md:min-w-[120px] p-3 md:p-4 text-[9px] md:text-[11px] uppercase font-bold tracking-wider transition-all whitespace-nowrap",
                activeSection.id === section.id
                  ? "bg-bg-card text-accent"
                  : "bg-bg-page text-muted hover:text-white"
              )}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeSection.id}-${activeCejmChapter?.id || 'none'}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-6 flex-1"
          >
            <div className="bg-bg-card p-5 md:p-10 border border-border-theme">
              {/* Section Title */}
              {!activeCejmChapter && (
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                  <h3 className="text-xl md:text-3xl font-black tracking-tighter flex items-center gap-3 md:gap-4">
                    {activeSection.title}
                    {activeSection.badge && (
                      <span className={cn(
                        "text-[9px] md:text-[10px] px-2 md:px-3 py-1 rounded-full font-black uppercase tracking-widest",
                        activeSection.badgeColor === 'blue' && "bg-blue-500 text-white",
                        activeSection.badgeColor === 'purple' && "bg-purple-500 text-white",
                        activeSection.badgeColor === 'green' && "bg-emerald-500 text-white",
                        activeSection.badgeColor === 'amber' && "bg-amber-500 text-black",
                        activeSection.badgeColor === 'teal' && "bg-teal-500 text-white",
                      )}>
                        {activeSection.badge}
                      </span>
                    )}
                  </h3>
                </div>
              )}

              {/* Dynamic Content */}
              <div className="space-y-8 md:space-y-10">
                {renderContent(activeSection.content)}
              </div>
            </div>

            {/* Tips & Warnings — only show for non-construction/non-chapter content in bloc1 */}
            {activeSubject.id === 'bloc1' && activeSection.content.type !== 'construction' && activeSection.content.type !== 'cejm-chapters' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 md:p-6 bg-bg-card border border-border-theme flex gap-4">
                  <CheckCircle2 className="text-accent flex-shrink-0" size={18} />
                  <div>
                    <h5 className="text-[9px] md:text-[10px] font-black text-accent uppercase tracking-widest mb-2">Conseil Expert</h5>
                    <p className="text-[11px] md:text-xs text-muted font-medium">Justifie toujours tes choix par rapport aux cibles pour gagner des points.</p>
                  </div>
                </div>
                <div className="p-5 md:p-6 bg-bg-card border border-border-theme flex gap-4">
                  <AlertCircle className="text-rose-500 flex-shrink-0" size={18} />
                  <div>
                    <h5 className="text-[9px] md:text-[10px] font-black text-rose-500 uppercase tracking-widest mb-2">Piège à éviter</h5>
                    <p className="text-[11px] md:text-xs text-muted font-medium">Ne confonds pas objectif affectif (image) et conatif (action).</p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>



      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-20 md:bottom-24 right-4 md:right-8 w-10 h-10 md:w-12 md:h-12 bg-accent text-black shadow-2xl flex items-center justify-center z-50 hover:bg-white transition-colors"
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
