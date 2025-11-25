import React, { useState, useMemo, useEffect } from 'react';
import { User, Sliders, ChevronRight, CheckCircle2, RefreshCw, Printer, AlertTriangle } from 'lucide-react';
import Button from './components/Button';
import RadarChart from './components/RadarChart';
import { CATEGORIES, Category, Question, Scores, UserState } from './types';
import { QUESTIONS } from './constants';

// --- Screens Components defined inline for simplicity given file constraints ---

// 1. Welcome Screen
const WelcomeScreen = ({ onStart }: { onStart: (user: UserState) => void }) => {
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');

  const canProceed = firstName.trim().length > 0 && surname.trim().length > 0;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center animate-fade-in bg-black overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-violet-900/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-orange-900/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mb-8 z-10">
        <div className="bg-gradient-to-br from-violet-600 to-orange-500 p-[1px] rounded-full">
          <div className="bg-black p-6 rounded-full">
            <User size={48} className="text-white" />
          </div>
        </div>
      </div>
      
      <div className="bg-zinc-900/80 backdrop-blur-md border border-white/5 p-8 rounded-3xl w-full max-w-md shadow-2xl z-10">
        <h1 className="text-3xl font-bold mb-2 text-white">
          Employability<br/>Skill Analyser
        </h1>
        <p className="text-zinc-400 mb-8 mt-2">Discover your professional strengths through self-reflection and objective analysis.</p>

        <div className="space-y-4">
          <div className="text-left">
            <label className="block text-sm font-medium text-zinc-500 mb-1 ml-1">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-4 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
              placeholder="Enter your first name"
            />
          </div>
          <div className="text-left">
            <label className="block text-sm font-medium text-zinc-500 mb-1 ml-1">Surname</label>
            <input
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-4 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
              placeholder="Enter your surname"
            />
          </div>
        </div>

        <Button 
          className="mt-8" 
          fullWidth 
          disabled={!canProceed}
          onClick={() => onStart({ firstName, surname })}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

// 2. Self Assessment Screen
const SelfAssessmentScreen = ({ onComplete }: { onComplete: (scores: Scores) => void }) => {
  const [scores, setScores] = useState<Scores>(() => {
    const initial = {} as Scores;
    CATEGORIES.forEach(c => initial[c] = 5);
    return initial;
  });

  const handleSliderChange = (cat: Category, val: number) => {
    setScores(prev => ({ ...prev, [cat]: val }));
  };

  const getLabel = (val: number) => {
    if (val <= 4) return "Developing";
    if (val <= 7) return "Competent";
    return "Advanced";
  };

  return (
    <div className="min-h-screen p-6 pb-24 animate-fade-in bg-black relative">
       {/* Ambient Light */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-violet-900/20 blur-[100px] pointer-events-none" />

      <header className="mb-10 flex flex-col md:flex-row items-start md:items-center gap-6 max-w-6xl mx-auto relative z-10">
        <div className="p-4 bg-zinc-900 rounded-2xl border border-white/5">
          <Sliders className="text-orange-400" size={28} />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-white">Self Assessment</h2>
          <p className="text-zinc-400 mt-1">Rate your confidence level for each skill from 0 to 10.</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
        {CATEGORIES.map(cat => {
          const score = scores[cat];
          const isHigh = score > 7;
          
          return (
            <div key={cat} className="bg-zinc-900/60 border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:bg-zinc-900 transition-colors group">
              <div>
                <h3 className="text-lg font-medium mb-1 text-zinc-100">{cat}</h3>
                <div className="flex justify-between items-end mb-6">
                  <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">{getLabel(score)}</span>
                  <span className={`text-4xl font-bold transition-colors ${score > 7 ? 'text-orange-400' : score > 4 ? 'text-violet-400' : 'text-zinc-600'}`}>
                    {score}
                  </span>
                </div>
              </div>
              
              <div className="relative h-2 bg-zinc-800 rounded-full w-full">
                 {/* Custom range input styling simulation */}
                 <div 
                   className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-violet-600 to-orange-500 pointer-events-none opacity-80" 
                   style={{ width: `${score * 10}%` }}
                 />
                 <input
                  type="range"
                  min="0"
                  max="10"
                  step="1"
                  value={score}
                  onChange={(e) => handleSliderChange(cat, parseInt(e.target.value))}
                  className="absolute top-[-8px] left-0 w-full h-6 opacity-0 cursor-pointer z-10"
                />
                {/* Thumb indicator */}
                <div 
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg pointer-events-none transition-all"
                  style={{ left: `calc(${score * 10}% - 8px)` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="fixed bottom-6 right-6 z-20">
        <Button onClick={() => onComplete(scores)} className="flex items-center gap-2 shadow-2xl shadow-orange-500/20">
          Start Assessment Test <ChevronRight size={20} />
        </Button>
      </div>
    </div>
  );
};

// 3. Quiz Screen
const QuizScreen = ({ onComplete }: { onComplete: (answers: Record<number, number>) => void }) => {
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [selectedOptionIdx, setSelectedOptionIdx] = useState<number | null>(null);

  useEffect(() => {
    // Shuffle questions on mount
    const shuffled = [...QUESTIONS].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  }, []);

  const currentQ = shuffledQuestions[currentIdx];

  const handleNext = () => {
    if (selectedOptionIdx === null || !currentQ) return;
    
    // Save points
    const points = currentQ.options[selectedOptionIdx].points;
    const newAnswers = { ...answers, [currentQ.id]: points };
    setAnswers(newAnswers);
    setSelectedOptionIdx(null);

    if (currentIdx < shuffledQuestions.length - 1) {
      setCurrentIdx(prev => prev + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  if (!currentQ) return <div className="min-h-screen bg-black flex items-center justify-center text-zinc-500">Loading...</div>;

  const progress = ((currentIdx) / shuffledQuestions.length) * 100;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative max-w-4xl mx-auto animate-fade-in bg-black">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-violet-900/20 blur-[100px] pointer-events-none" />
      
      {/* Progress Bar */}
      <div className="w-full fixed top-0 left-0 h-1.5 bg-zinc-900 z-50">
        <div 
          className="h-full bg-gradient-to-r from-violet-600 to-orange-500 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="fixed top-6 right-8 text-zinc-500 font-mono text-sm z-50">
        {Math.round(progress)}%
      </div>

      <div className="w-full mb-12 relative z-10">
        <div className="inline-block px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-orange-400 text-xs font-bold tracking-wider uppercase mb-6">
          Question {currentIdx + 1} of {shuffledQuestions.length}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white">
          {currentQ.text}
        </h2>
      </div>

      <div className="w-full space-y-4 relative z-10">
        {currentQ.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedOptionIdx(idx)}
            className={`w-full p-6 rounded-2xl text-left transition-all border group ${
              selectedOptionIdx === idx 
                ? 'border-orange-500/50 bg-orange-500/10' 
                : 'border-white/5 bg-zinc-900/50 hover:bg-zinc-800 hover:border-white/10'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                selectedOptionIdx === idx ? 'border-orange-500 bg-orange-500' : 'border-zinc-600 group-hover:border-zinc-400'
              }`}>
                {selectedOptionIdx === idx && <CheckCircle2 size={14} className="text-black" />}
              </div>
              <span className={`text-lg ${selectedOptionIdx === idx ? 'text-white' : 'text-zinc-300'}`}>
                {opt.text}
              </span>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-10 flex justify-end w-full relative z-10">
        <Button 
          disabled={selectedOptionIdx === null} 
          onClick={handleNext}
          className="px-12"
        >
          {currentIdx === shuffledQuestions.length - 1 ? 'Finish Test' : 'Next Question'}
        </Button>
      </div>
    </div>
  );
};

// 4. Results Screen
const ResultsScreen = ({ 
  user, 
  selfScores, 
  quizAnswers, 
  onRestart 
}: { 
  user: UserState; 
  selfScores: Scores; 
  quizAnswers: Record<number, number>; 
  onRestart: () => void 
}) => {
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [showRestartConfirm, setShowRestartConfirm] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  // Calculate Test Scores
  const testScores = useMemo(() => {
    const result: Scores = {} as Scores;
    const catTotals: Record<Category, number> = {} as any;
    
    // Sum points per category
    Object.entries(quizAnswers).forEach(([qId, points]) => {
      const q = QUESTIONS.find(q => q.id === parseInt(qId));
      if (q) {
        catTotals[q.category] = (catTotals[q.category] || 0) + points;
      }
    });

    // Normalize to 0-10 (Max points per category is 5 questions * 10 points = 50)
    CATEGORIES.forEach(cat => {
      const total = catTotals[cat] || 0;
      result[cat] = Math.round((total / 50) * 10);
    });

    return result;
  }, [quizAnswers]);

  const handlePrint = () => {
    const element = document.getElementById('download-area');
    
    // Check if html2pdf is loaded
    if (element && (window as any).html2pdf) {
      setIsDownloading(true);
      const opt = {
        margin: 0,
        filename: `Employability-Report-${user.firstName}-${user.surname}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

      (window as any).html2pdf().set(opt).from(element).save().then(() => {
        setIsDownloading(false);
      }).catch((err: any) => {
        console.error("PDF generation failed", err);
        setIsDownloading(false);
        // Fallback
        window.print();
      });
    } else {
      // Fallback for when library isn't loaded
      window.print();
    }
  };

  const today = new Date().toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  });

  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* App Header (No-Print) */}
      <header className="p-4 border-b border-white/5 bg-black/80 backdrop-blur-md flex justify-between items-center no-print sticky top-0 z-30">
        <div className="flex items-center gap-4">
           <div className="p-2 bg-gradient-to-br from-violet-600 to-orange-500 rounded-lg">
             <User className="text-white" size={20} />
           </div>
           <div>
             <h1 className="font-bold text-white text-lg leading-none">{user.firstName} {user.surname}</h1>
             <p className="text-xs text-zinc-500 mt-1">Results Dashboard</p>
           </div>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" onClick={() => setShowPrintModal(true)} className="flex items-center gap-2 px-4 py-2 text-sm bg-zinc-800 hover:bg-zinc-700 border-zinc-700">
            <Printer size={16} /> Save PDF
          </Button>
          <Button variant="secondary" onClick={() => setShowRestartConfirm(true)} className="flex items-center gap-2 px-4 py-2 text-sm text-red-400 hover:text-red-300 border-transparent hover:bg-red-900/20">
            <RefreshCw size={16} /> Restart
          </Button>
        </div>
      </header>

      <div className="flex-1 p-6 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 no-print">
        
        {/* Left Column: Data Breakdown */}
        <div className="space-y-6">
          <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-8 h-full">
            <h2 className="text-xl font-bold mb-8 flex items-center gap-3 text-white">
              <span className="w-1.5 h-8 bg-gradient-to-b from-violet-500 to-orange-500 rounded-full"></span>
              Performance Breakdown
            </h2>
            
            <div className="space-y-8">
              {CATEGORIES.map(cat => (
                <div key={cat}>
                  <div className="flex justify-between mb-3 items-baseline">
                    <span className="font-medium text-zinc-300 text-sm">{cat}</span>
                    <div className="flex gap-4 text-xs font-mono">
                       <span className="text-violet-400">Self: {selfScores[cat]}</span>
                       <span className="text-orange-400">Test: {testScores[cat]}</span>
                    </div>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full overflow-hidden flex relative">
                    {/* Comparison Bars */}
                    <div className="h-full relative w-full">
                      {/* Self Marker - Purple */}
                       <div 
                        className="absolute top-0 h-full bg-violet-600 rounded-full z-10 opacity-70 transition-all duration-1000"
                        style={{ width: `${selfScores[cat] * 10}%` }}
                      ></div>
                       {/* Test Marker - Yellow/Orange */}
                       <div 
                        className="absolute top-0 h-full bg-orange-500 rounded-full border-l-2 border-black z-20 transition-all duration-1000"
                        style={{ width: `${testScores[cat] * 10}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 pt-6 border-t border-white/5 flex gap-8 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-violet-600"></div>
                <span className="text-zinc-400">Self Assessment</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                <span className="text-zinc-400">Test Result</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Radar Chart */}
        <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-6 flex flex-col items-center justify-center min-h-[500px]">
          <RadarChart selfScores={selfScores} testScores={testScores} size={450} />
          <p className="mt-8 text-center text-zinc-500 text-sm max-w-md">
            The orange shape represents your objective performance. Compare it against the purple shape (your self-assessment) to identify blind spots or hidden talents.
          </p>
        </div>
      </div>

      {/* Print View Modal Overlay */}
      {showPrintModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 no-print">
          <div className="bg-white text-slate-900 rounded-xl max-w-4xl w-full h-[90vh] flex flex-col overflow-hidden shadow-2xl">
            <div className="p-4 border-b flex justify-between items-center bg-zinc-50">
              <h3 className="font-bold text-lg text-black">Print Preview</h3>
              <div className="flex gap-2">
                <Button variant="secondary" className="!text-zinc-600 !bg-zinc-200 hover:!bg-zinc-300 !border-transparent" onClick={() => setShowPrintModal(false)}>Close</Button>
                {/* Download Button */}
                <Button onClick={handlePrint} disabled={isDownloading}>
                  {isDownloading ? 'Downloading...' : 'Download'}
                </Button>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-8 bg-zinc-100 flex justify-center">
               {/* Paper Simulation - Targeted by ID for PDF generation */}
               <div id="download-area" className="w-[210mm] min-h-[297mm] bg-white shadow-xl p-12 flex flex-col gap-8 border border-zinc-200">
                  <PrintContent user={user} selfScores={selfScores} testScores={testScores} date={today} />
               </div>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {showRestartConfirm && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
           <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl max-w-sm w-full shadow-2xl">
              <div className="flex items-center gap-3 text-orange-400 mb-4">
                <AlertTriangle />
                <h3 className="font-bold text-lg text-white">Restart Assessment?</h3>
              </div>
              <p className="text-zinc-400 mb-8">All progress will be lost. Would you like to save your PDF first?</p>
              <div className="space-y-3">
                <Button fullWidth onClick={() => { setShowRestartConfirm(false); setShowPrintModal(true); }}>Yes, Save PDF First</Button>
                <Button fullWidth variant="secondary" onClick={onRestart}>No, Just Restart</Button>
                <button onClick={() => setShowRestartConfirm(false)} className="w-full text-center text-zinc-500 text-sm py-2 hover:text-zinc-300">Cancel</button>
              </div>
           </div>
        </div>
      )}

      {/* Hidden Print Content (For when direct window.print() is called without modal) */}
      <div className="print-only">
        <PrintContent user={user} selfScores={selfScores} testScores={testScores} date={today} />
      </div>
    </div>
  );
};

// Reusable Print Content Layout
const PrintContent = ({ user, selfScores, testScores, date }: { user: UserState, selfScores: Scores, testScores: Scores, date: string }) => {
  return (
    <div className="font-sans text-black">
      <div className="border-b-2 border-black pb-4 mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold uppercase tracking-wider">Employability Report</h1>
          <p className="text-slate-600 mt-1">Skills Assessment & Analysis</p>
        </div>
        <div className="text-right">
          <p className="font-bold text-xl">{user.firstName} {user.surname}</p>
          <p className="text-sm text-slate-500">{date}</p>
        </div>
      </div>

      <div className="flex justify-center mb-10">
         <RadarChart selfScores={selfScores} testScores={testScores} size={500} printMode={true} />
      </div>

      <div className="grid grid-cols-2 gap-x-12 gap-y-4">
        {CATEGORIES.map(cat => (
          <div key={cat} className="flex items-center justify-between border-b border-dotted border-slate-300 pb-2">
            <span className="font-semibold">{cat}</span>
            <div className="flex gap-6 font-mono text-sm">
               {/* Updated Label Text */}
               <span>Self: <strong className="text-base">{selfScores[cat]}</strong></span>
               <span>Test: <strong className="text-base">{testScores[cat]}</strong></span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-4 border border-slate-300 bg-slate-50 rounded">
        <h4 className="font-bold mb-2 uppercase text-xs tracking-wider text-slate-500">Legend</h4>
        <div className="flex gap-8 text-sm">
           <div className="flex items-center gap-2">
             <div className="w-4 h-0.5 border-t-2 border-dashed border-black"></div>
             {/* Updated Label Text */}
             <span>Self Assessment</span>
           </div>
           <div className="flex items-center gap-2">
             <div className="w-4 h-0.5 border-t-2 border-solid border-black"></div>
             {/* Updated Label Text */}
             <span>Test Result</span>
           </div>
        </div>
      </div>
    </div>
  );
};


// --- Main App Component ---

type Step = 'welcome' | 'self' | 'quiz' | 'results';

const App = () => {
  const [step, setStep] = useState<Step>('welcome');
  const [user, setUser] = useState<UserState>({ firstName: '', surname: '' });
  const [selfScores, setSelfScores] = useState<Scores>({} as Scores);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});

  const handleStart = (userData: UserState) => {
    setUser(userData);
    setStep('self');
  };

  const handleSelfComplete = (scores: Scores) => {
    setSelfScores(scores);
    setStep('quiz');
  };

  const handleQuizComplete = (answers: Record<number, number>) => {
    setQuizAnswers(answers);
    setStep('results');
  };

  const handleRestart = () => {
    setStep('welcome');
    setUser({ firstName: '', surname: '' });
    setSelfScores({} as Scores);
    setQuizAnswers({});
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500/30">
      {step === 'welcome' && <WelcomeScreen onStart={handleStart} />}
      {step === 'self' && <SelfAssessmentScreen onComplete={handleSelfComplete} />}
      {step === 'quiz' && <QuizScreen onComplete={handleQuizComplete} />}
      {step === 'results' && <ResultsScreen user={user} selfScores={selfScores} quizAnswers={quizAnswers} onRestart={handleRestart} />}
    </div>
  );
};

export default App;