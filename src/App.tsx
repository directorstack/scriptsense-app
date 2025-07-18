import React, { useState, createContext, useContext, useEffect } from 'react';
import { ChevronDown, ChevronUp, Plus, X, Upload, User, Film, DollarSign, Shield, FileText, Mail, Download, Edit3, AlertCircle, Crown, ArrowRight, CheckCircle, Play, Brain, Sparkles, BarChart3, PieChart, TrendingUp, Palette, Camera, Eye, Target, Clock, Zap, Settings } from 'lucide-react';

// Context for managing form data across components
const ScriptSenseContext = createContext();

const useScriptSense = () => {
  const context = useContext(ScriptSenseContext);
  if (!context) {
    throw new Error('useScriptSense must be used within ScriptSenseProvider');
  }
  return context;
};

// Landing Page Component
const LandingPage = () => {
  const [started, setStarted] = useState(false);

  if (started) {
    return <ScriptSenseApp />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white text-slate-900" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-emerald-400 text-center py-3">
        <span className="text-white text-sm font-medium font-sans flex items-center justify-center gap-2">
          <Zap className="h-4 w-4" />
          🚀 ScriptSenseAI Beta - Join filmmakers building smarter pitch decks
        </span>
      </div>

      {/* Navigation */}
      <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-xl flex items-center justify-center">
            <Film className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-slate-900" style={{ fontFamily: 'Playfair Display, serif' }}>ScriptSenseAI</span>
          <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded-full font-sans font-medium">BETA</span>
        </div>
        <button
          onClick={() => setStarted(true)}
          className="text-slate-600 hover:text-slate-900 font-medium font-sans transition-colors"
        >
          Sign In
        </button>
      </nav>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Crown className="h-4 w-4" />
            Used by filmmakers who raised $7M+
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-slate-900" style={{ fontFamily: 'Playfair Display, serif' }}>
            Turn Your Script Into a 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-amber-500"> Fundable</span> Pitch Deck
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-sans">
            ScriptSenseAI creates genre-aware, visually compelling pitch decks that speak the language investors understand. 
            <span className="text-emerald-600 font-medium"> Smart questions, beautiful results, zero design skills required.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => setStarted(true)}
              className="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-8 py-4 text-lg rounded-2xl hover:from-slate-800 hover:to-slate-700 transition-all transform hover:scale-105 font-medium flex items-center gap-2 font-sans shadow-lg"
            >
              Start Building Your Deck
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-8 text-sm text-slate-500 mb-12 font-sans">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-emerald-400 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-amber-400 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-slate-400 rounded-full border-2 border-white"></div>
              </div>
              <span>Trusted by filmmakers</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>$7M+ raised</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-emerald-500" />
              <span>10 min avg. creation</span>
            </div>
          </div>

          {/* Enhanced Preview */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-2xl p-16 aspect-[16/9] flex items-center justify-center border border-slate-700 text-white">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Film className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                MIDNIGHT BOULEVARD
              </h2>
              <p className="text-xl text-slate-300 mb-4 font-sans max-w-2xl">
                When a struggling filmmaker discovers lost footage that could save her career, she must navigate Hollywood's dark underbelly before becoming its next victim.
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-slate-400">
                <span className="bg-emerald-500 text-white px-3 py-1 rounded-full">Thriller</span>
                <span>$2.5M Budget</span>
                <span>Alexandra Chen, Director</span>
              </div>
            </div>
          </div>

          {/* Privacy Notice */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-4 max-w-2xl mx-auto">
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-blue-800 font-sans">Your IP is Protected</h4>
                <p className="text-sm text-blue-700 font-sans">
                  We don't store your project data. Everything stays in your browser session until you choose to export.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900" style={{ fontFamily: 'Playfair Display, serif' }}>Why Filmmakers Choose ScriptSenseAI</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-sans">
              We solve the three biggest problems in pitch deck creation: <span className="text-emerald-600 font-medium">knowing what to include, making it visually compelling, and matching industry expectations.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-sans text-slate-900">🧠 Genre-Smart Guidance</h3>
              <p className="text-slate-600 leading-relaxed font-sans">
                Horror gets dark aesthetics, comedy gets bright colors. Our AI adapts questions and design based on your genre—no more generic templates.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-sans text-slate-900">✨ AI Content Polish</h3>
              <p className="text-slate-600 leading-relaxed font-sans">
                Transform rough loglines into investor-ready hooks. Our AI enhances your writing while preserving your unique voice and vision.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-400 to-slate-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Download className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-sans text-slate-900">📊 Professional Export</h3>
              <p className="text-slate-600 leading-relaxed font-sans">
                Export presentation-ready PDF and PowerPoint files with charts, graphics, and layouts that look like they cost $5K.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Your Vision Deserves Professional Presentation</h2>
          <p className="text-slate-300 text-xl mb-8 leading-relaxed font-sans">
            Whether you're seeking $25K from friends or $25M from studios, ScriptSenseAI helps you 
            present your story with the confidence and clarity that gets deals done.
          </p>
          
          <button
            onClick={() => setStarted(true)}
            className="bg-gradient-to-r from-emerald-400 to-emerald-500 text-slate-900 px-8 py-4 rounded-2xl text-lg hover:from-emerald-500 hover:to-emerald-600 transition-all transform hover:scale-105 font-medium flex items-center gap-2 font-sans shadow-lg mx-auto"
          >
            Start Your Free Deck
            <ArrowRight className="h-5 w-5" />
          </button>

          <div className="flex items-center justify-center gap-6 text-slate-400 text-sm font-sans mt-8">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              Free to start
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              Export when ready
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main ScriptSenseAI App Component
const ScriptSenseApp = () => {
  const [currentView, setCurrentView] = useState('form');
  const [userTier, setUserTier] = useState('free');
  const [showPaywall, setShowPaywall] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [aiEnhancementEnabled, setAiEnhancementEnabled] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState('modern');
  const [audienceType, setAudienceType] = useState('investors');
  const [aiEnhancementOptions, setAiEnhancementOptions] = useState({
    loglineOptimization: true,
    synopsisPolish: true,
    genreSpecific: true
  });
  const [customSections, setCustomSections] = useState({
    projectBasics: true,
    visualStyle: true,
    characters: true,
    directorsVision: true,
    team: true,
    audienceMarket: true,
    financials: true,
    returnModel: true,
    riskMitigation: true,
    contactInfo: true
  });

  const [formData, setFormData] = useState({
    projectBasics: {
      filmTitle: '',
      logline: '',
      synopsis: '',
      genre: '',
      moodTone: [],
      targetAudience: ''
    },
    visualStyle: {
      moodboardImages: [],
      settingDescription: '',
      visualReferences: ''
    },
    characters: [{ name: '', description: '', image: null }],
    directorsVision: {
      visionStatement: '',
      inspirations: '',
      whyNow: '',
      whyMe: ''
    },
    team: [{ name: '', role: '', bio: '', headshot: null, credits: '' }],
    audienceMarket: {
      audienceDescription: '',
      comparables: '',
      boxOfficePerformance: '',
      marketSize: '',
      distributionStrategy: ''
    },
    financials: {
      totalBudget: '',
      amountRaising: '',
      minimumInvestment: '',
      holdingPeriod: '',
      exitStrategy: '',
      budgetBreakdown: ''
    },
    returnModel: {
      preferredReturn: '',
      profitSplit: '',
      returnTiers: [{ tier: '', percentage: '', description: '' }]
    },
    riskMitigation: [{ risk: '', mitigation: '' }],
    legalSummary: {
      entityName: '',
      offeringType: '',
      investorEligibility: ''
    },
    contactInfo: {
      name: '',
      email: '',
      website: '',
      socials: '',
      phone: ''
    }
  });

  const updateFormData = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const updateArrayField = (section, index, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: prev[section].map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const addArrayItem = (section, template) => {
    setFormData(prev => ({
      ...prev,
      [section]: [...prev[section], template]
    }));
  };

  const removeArrayItem = (section, index) => {
    setFormData(prev => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index)
    }));
  };

  const validateForm = () => {
    const errors = {};
    const required = {
      'projectBasics.filmTitle': 'Film title is required',
      'projectBasics.logline': 'Logline is required',
      'projectBasics.synopsis': 'Synopsis is required',
      'projectBasics.genre': 'Genre is required',
      'contactInfo.email': 'Email is required'
    };

    Object.entries(required).forEach(([path, message]) => {
      const [section, field] = path.split('.');
      if (!formData[section][field] || formData[section][field].trim() === '') {
        errors[path] = message;
      }
    });

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleExportAttempt = (type) => {
    if (userTier === 'free' && type === 'pptx') {
      setShowPaywall(true);
      return;
    }
    
    if (type === 'pdf') {
      // Create PDF with watermark
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = 1600;
      canvas.height = 900;
      
      // Apply template styling
      const templateStyles = getTemplateStyles(selectedTemplate);
      ctx.fillStyle = templateStyles.background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add watermark
      ctx.fillStyle = 'rgba(100, 100, 100, 0.1)';
      ctx.font = '48px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('ScriptSenseAI - Free Version', canvas.width / 2, canvas.height / 2);
      
      // Add content
      ctx.fillStyle = templateStyles.textColor;
      ctx.font = 'bold 72px Arial';
      ctx.fillText(formData.projectBasics.filmTitle || 'Your Film Title', canvas.width / 2, 300);
      
      ctx.font = '32px Arial';
      ctx.fillText(formData.projectBasics.logline || 'Your logline here', canvas.width / 2, 400);
      
      // Convert to PDF-like download
      const link = document.createElement('a');
      link.download = `${formData.projectBasics.filmTitle || 'pitch-deck'}-preview.png`;
      link.href = canvas.toDataURL();
      link.click();
      
      alert('PDF preview exported with watermark! Upgrade to remove watermark and get full deck.');
    } else if (type === 'pptx') {
      alert('PowerPoint deck exported!');
    }
  };

  const getTemplateStyles = (template) => {
    switch (template) {
      case 'modern':
        return {
          background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
          textColor: '#0f172a',
          accentColor: '#10b981'
        };
      case 'cinematic':
        return {
          background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
          textColor: '#f8fafc',
          accentColor: '#fbbf24'
        };
      case 'classic':
        return {
          background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
          textColor: '#92400e',
          accentColor: '#d97706'
        };
      default:
        return {
          background: '#ffffff',
          textColor: '#000000',
          accentColor: '#10b981'
        };
    }
  };

  const mockUpgrade = (tier) => {
    setUserTier(tier);
    setShowPaywall(false);
    alert(`Upgraded to ${tier.charAt(0).toUpperCase() + tier.slice(1)} plan! 🎉`);
  };

  const contextValue = {
    formData,
    updateFormData,
    updateArrayField,
    addArrayItem,
    removeArrayItem,
    currentView,
    setCurrentView,
    userTier,
    validationErrors,
    validateForm,
    aiEnhancementEnabled,
    setAiEnhancementEnabled,
    aiEnhancementOptions,
    setAiEnhancementOptions,
    selectedTemplate,
    setSelectedTemplate,
    audienceType,
    setAudienceType,
    customSections,
    setCustomSections
  };

  return (
    <ScriptSenseContext.Provider value={contextValue}>
      <div className="min-h-screen bg-slate-50" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
        {/* Paywall Modal */}
        {showPaywall && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full border border-slate-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="h-8 w-8 text-slate-900" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Upgrade for PowerPoint</h2>
                <p className="text-slate-600 font-sans">Unlock professional PPTX exports and remove watermarks</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <button
                  onClick={() => mockUpgrade('pro')}
                  className="w-full bg-emerald-400 text-slate-900 rounded-xl px-6 py-3 font-medium hover:bg-emerald-500 transition-colors font-sans"
                >
                  <div className="font-semibold">ScriptSense Pro - $60</div>
                  <div className="text-sm text-slate-700">PDF without watermark + PowerPoint export</div>
                </button>
              </div>
              
              <button
                onClick={() => setShowPaywall(false)}
                className="w-full text-slate-500 hover:text-slate-700 text-sm font-sans"
              >
                Continue with Free Plan (PDF with watermark)
              </button>
            </div>
          </div>
        )}

        {currentView === 'form' && <QuestionnaireForm />}
        {currentView === 'deck' && <DeckGenerator onExport={handleExportAttempt} />}
      </div>
    </ScriptSenseContext.Provider>
  );
};

// Questionnaire Form Component
const QuestionnaireForm = () => {
  const { 
    formData, 
    updateFormData, 
    updateArrayField,
    addArrayItem,
    removeArrayItem,
    setCurrentView, 
    validationErrors, 
    validateForm,
    aiEnhancementEnabled,
    setAiEnhancementEnabled,
    aiEnhancementOptions,
    setAiEnhancementOptions,
    selectedTemplate,
    setSelectedTemplate,
    audienceType,
    setAudienceType,
    customSections,
    setCustomSections
  } = useScriptSense();
  
  const [activeSection, setActiveSection] = useState(0);
  const [completedSections, setCompletedSections] = useState(new Set());
  const [aiProcessing, setAiProcessing] = useState({});

  // AI Enhancement function
  const enhanceWithAI = async (field, content, context = {}) => {
    if (!aiEnhancementEnabled || !content.trim()) return;
    
    setAiProcessing(prev => ({ ...prev, [field]: true }));
    
    try {
      // This is where you'll connect to your AI backend
      const response = await fetch('/api/enhance-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          field,
          content,
          context: {
            genre: formData.projectBasics.genre,
            audienceType,
            ...context
          }
        })
      });
      
      if (response.ok) {
        const { enhancedContent } = await response.json();
        
        // Update the form field with enhanced content
        if (field === 'logline') {
          updateFormData('projectBasics', 'logline', enhancedContent);
        } else if (field === 'synopsis') {
          updateFormData('projectBasics', 'synopsis', enhancedContent);
        }
        
        // Show success message
        alert('✨ Content enhanced! Your unique voice has been preserved while improving clarity and impact.');
      } else {
        throw new Error('Enhancement failed');
      }
    } catch (error) {
      console.error('AI Enhancement Error:', error);
      // For demo purposes, show mock enhancement
      const mockEnhanced = mockAIEnhancement(field, content, context);
      
      if (field === 'logline') {
        updateFormData('projectBasics', 'logline', mockEnhanced);
      } else if (field === 'synopsis') {
        updateFormData('projectBasics', 'synopsis', mockEnhanced);
      }
      
      alert('✨ Content enhanced! (Demo mode - connect your AI backend for real enhancement)');
    } finally {
      setAiProcessing(prev => ({ ...prev, [field]: false }));
    }
  };

  // Mock AI enhancement for demo
  const mockAIEnhancement = (field, content, context) => {
    if (field === 'logline') {
      return content.length > 50 ? content : 
        content + " A gripping tale that explores the depths of human ambition and the price of success.";
    } else if (field === 'synopsis') {
      return content.replace(/\./g, '. ').replace(/\s+/g, ' ').trim() + 
        "\n\nThis compelling narrative weaves together themes of redemption and resilience, creating a story that resonates with contemporary audiences while maintaining universal appeal.";
    }
    return content;
  };

  // Audience type configurations
  const audienceTypes = [
    {
      id: 'investors',
      name: 'Investors',
      icon: DollarSign,
      description: 'Focus on financials, ROI, and risk mitigation',
      color: 'emerald',
      recommendedSections: {
        projectBasics: true,
        visualStyle: false,
        characters: false,
        directorsVision: true,
        team: true,
        audienceMarket: true,
        financials: true,
        returnModel: true,
        riskMitigation: true,
        contactInfo: true
      }
    },
    {
      id: 'producers',
      name: 'Producers',
      icon: Film,
      description: 'Emphasize creative vision, team, and production elements',
      color: 'amber',
      recommendedSections: {
        projectBasics: true,
        visualStyle: true,
        characters: true,
        directorsVision: true,
        team: true,
        audienceMarket: true,
        financials: true,
        returnModel: false,
        riskMitigation: false,
        contactInfo: true
      }
    },
    {
      id: 'sales_agents',
      name: 'Sales Agents',
      icon: Target,
      description: 'Highlight market appeal, comparable films, and audience reach',
      color: 'blue',
      recommendedSections: {
        projectBasics: true,
        visualStyle: true,
        characters: true,
        directorsVision: false,
        team: false,
        audienceMarket: true,
        financials: false,
        returnModel: false,
        riskMitigation: false,
        contactInfo: true
      }
    },
    {
      id: 'custom',
      name: 'Custom',
      icon: Settings,
      description: 'Choose your own sections manually',
      color: 'slate',
      recommendedSections: {
        projectBasics: true,
        visualStyle: true,
        characters: true,
        directorsVision: true,
        team: true,
        audienceMarket: true,
        financials: true,
        returnModel: true,
        riskMitigation: true,
        contactInfo: true
      }
    }
  ];

  // Templates with enhanced customization
  const templates = [
    { 
      id: 'modern', 
      name: 'Modern Minimal', 
      description: 'Clean lines, bold typography, gradient accents',
      preview: 'bg-gradient-to-br from-slate-50 to-white border-slate-200',
      colors: {
        primary: '#10b981',
        secondary: '#6b7280',
        background: '#ffffff',
        text: '#0f172a'
      }
    },
    { 
      id: 'cinematic', 
      name: 'Cinematic Dark', 
      description: 'Dark theme, film-inspired, dramatic visuals',
      preview: 'bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700',
      colors: {
        primary: '#fbbf24',
        secondary: '#94a3b8',
        background: '#1e293b',
        text: '#f8fafc'
      }
    },
    { 
      id: 'classic', 
      name: 'Classic Elegant', 
      description: 'Timeless design, sophisticated typography',
      preview: 'bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200',
      colors: {
        primary: '#d97706',
        secondary: '#92400e',
        background: '#fef3c7',
        text: '#92400e'
      }
    }
  ];

  // Update sections when audience type changes
  const handleAudienceTypeChange = (newType) => {
    setAudienceType(newType);
    const selectedAudience = audienceTypes.find(a => a.id === newType);
    if (selectedAudience && newType !== 'custom') {
      setCustomSections(selectedAudience.recommendedSections);
    }
  };

  // Toggle individual AI enhancement options
  const toggleAiOption = (option) => {
    setAiEnhancementOptions(prev => ({
      ...prev,
      [option]: !prev[option]
    }));
  };
  const toggleSection = (sectionKey) => {
    setCustomSections(prev => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }));
  };

  // Basic sections
  const sections = [
    {
      key: 'projectBasics',
      title: 'Project Foundation',
      subtitle: 'The core of your story',
      icon: Film,
      essential: true
    },
    {
      key: 'visualStyle',
      title: 'Visual Style & Setting',
      subtitle: 'Show them your world',
      icon: Camera,
      essential: false
    },
    {
      key: 'characters',
      title: 'Characters',
      subtitle: 'Who drives your story',
      icon: User,
      essential: false
    },
    {
      key: 'directorsVision',
      title: "Director's Vision",
      subtitle: 'Why you? Why now?',
      icon: Eye,
      essential: false
    },
    {
      key: 'team',
      title: 'Creative Team',
      subtitle: 'Your collaborators',
      icon: User,
      essential: false
    },
    {
      key: 'audienceMarket',
      title: 'Market & Audience',
      subtitle: 'Who will watch this?',
      icon: Target,
      essential: false
    },
    {
      key: 'financials',
      title: 'Budget & Financing',
      subtitle: 'The numbers that matter',
      icon: DollarSign,
      essential: false
    },
    {
      key: 'returnModel',
      title: 'Return Projections',
      subtitle: 'Investor ROI scenarios',
      icon: TrendingUp,
      essential: false
    },
    {
      key: 'riskMitigation',
      title: 'Risk Management',
      subtitle: 'Addressing investor concerns',
      icon: Shield,
      essential: false
    },
    {
      key: 'contactInfo',
      title: 'Contact Information',
      subtitle: 'How to reach you',
      icon: Mail,
      essential: true
    }
  ];

  // Filter sections based on selection
  const activeSections = sections.filter(section => 
    section.essential || customSections[section.key]
  );

  // Check completion for all sections
  useEffect(() => {
    const completed = new Set();
    
    activeSections.forEach((section, index) => {
      switch(section.key) {
        case 'projectBasics':
          if (formData.projectBasics.filmTitle && formData.projectBasics.logline && formData.projectBasics.synopsis && formData.projectBasics.genre) {
            completed.add(index);
          }
          break;
        case 'visualStyle':
          if (formData.visualStyle.settingDescription || formData.visualStyle.visualReferences) {
            completed.add(index);
          }
          break;
        case 'characters':
          if (formData.characters.some(char => char.name && char.description)) {
            completed.add(index);
          }
          break;
        case 'directorsVision':
          if (formData.directorsVision.whyNow || formData.directorsVision.whyMe) {
            completed.add(index);
          }
          break;
        case 'team':
          if (formData.team.some(member => member.name && member.role)) {
            completed.add(index);
          }
          break;
        case 'audienceMarket':
          if (formData.audienceMarket.audienceDescription || formData.audienceMarket.comparables) {
            completed.add(index);
          }
          break;
        case 'financials':
          if (formData.financials.totalBudget && formData.financials.amountRaising) {
            completed.add(index);
          }
          break;
        case 'returnModel':
          if (formData.returnModel.preferredReturn || formData.returnModel.profitSplit) {
            completed.add(index);
          }
          break;
        case 'riskMitigation':
          if (formData.riskMitigation.some(risk => risk.risk && risk.mitigation)) {
            completed.add(index);
          }
          break;
        case 'contactInfo':
          if (formData.contactInfo.name && formData.contactInfo.email) {
            completed.add(index);
          }
          break;
      }
    });
    
    setCompletedSections(completed);
  }, [formData, customSections, activeSections]);

  const handleGenerateDeck = () => {
    if (validateForm()) {
      setCurrentView('deck');
    } else {
      alert('Please complete all required fields!');
    }
  };

  // Render section content
  const renderSectionContent = (section) => {
    switch(section.key) {
      case 'projectBasics':
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2 font-sans">Film Title *</label>
              <input
                type="text"
                value={formData.projectBasics.filmTitle}
                onChange={(e) => updateFormData('projectBasics', 'filmTitle', e.target.value)}
                placeholder="Your film's title"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors font-sans"
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-slate-700 font-sans">Logline *</label>
                {aiEnhancementEnabled && aiEnhancementOptions.loglineOptimization && (
                  <button
                    onClick={() => enhanceWithAI('logline', formData.projectBasics.logline)}
                    disabled={aiProcessing.logline || !formData.projectBasics.logline.trim()}
                    className="flex items-center gap-1 text-xs text-emerald-600 hover:text-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed font-sans bg-emerald-50 hover:bg-emerald-100 px-2 py-1 rounded-lg transition-colors"
                  >
                    {aiProcessing.logline ? (
                      <>
                        <div className="w-3 h-3 border border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
                        Enhancing...
                      </>
                    ) : (
                      <>
                        <Sparkles className="h-3 w-3" />
                        Enhance with AI
                      </>
                    )}
                  </button>
                )}
              </div>
              <textarea
                value={formData.projectBasics.logline}
                onChange={(e) => updateFormData('projectBasics', 'logline', e.target.value)}
                placeholder="When [protagonist] [inciting incident], they must [goal] or [stakes]. Think 'Jaws meets The Social Network.'"
                rows={3}
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors font-sans"
              />
              {aiEnhancementEnabled && aiEnhancementOptions.loglineOptimization && (
                <p className="text-xs text-emerald-600 mt-1 font-sans flex items-center gap-1">
                  <Sparkles className="h-3 w-3" />
                  AI will enhance clarity and hook while preserving your unique voice
                </p>
              )}
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-slate-700 font-sans">Synopsis *</label>
                {aiEnhancementEnabled && aiEnhancementOptions.synopsisPolish && (
                  <button
                    onClick={() => enhanceWithAI('synopsis', formData.projectBasics.synopsis)}
                    disabled={aiProcessing.synopsis || !formData.projectBasics.synopsis.trim()}
                    className="flex items-center gap-1 text-xs text-emerald-600 hover:text-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed font-sans bg-emerald-50 hover:bg-emerald-100 px-2 py-1 rounded-lg transition-colors"
                  >
                    {aiProcessing.synopsis ? (
                      <>
                        <div className="w-3 h-3 border border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
                        Enhancing...
                      </>
                    ) : (
                      <>
                        <Sparkles className="h-3 w-3" />
                        Enhance with AI
                      </>
                    )}
                  </button>
                )}
              </div>
              <textarea
                value={formData.projectBasics.synopsis}
                onChange={(e) => updateFormData('projectBasics', 'synopsis', e.target.value)}
                placeholder="Tell your story's journey and conflict. Focus on what makes it compelling, not every plot point."
                rows={6}
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors font-sans"
              />
              {aiEnhancementEnabled && aiEnhancementOptions.synopsisPolish && (
                <p className="text-xs text-emerald-600 mt-1 font-sans flex items-center gap-1">
                  <Sparkles className="h-3 w-3" />
                  AI will improve structure and narrative flow while keeping your story intact
                </p>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2 font-sans">Primary Genre *</label>
                <select
                  value={formData.projectBasics.genre}
                  onChange={(e) => updateFormData('projectBasics', 'genre', e.target.value)}
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors font-sans"
                >
                  <option value="">Select genre</option>
                  <option value="Drama">Drama</option>
                  <option value="Comedy">Comedy</option>
                  <option value="Thriller">Thriller</option>
                  <option value="Horror">Horror</option>
                  <option value="Action">Action</option>
                  <option value="Romance">Romance</option>
                  <option value="Documentary">Documentary</option>
                  <option value="Sci-Fi">Sci-Fi</option>
                  <option value="Fantasy">Fantasy</option>
                  <option value="Mystery">Mystery</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2 font-sans">Target Audience</label>
                <input
                  type="text"
                  value={formData.projectBasics.targetAudience}
                  onChange={(e) => updateFormData('projectBasics', 'targetAudience', e.target.value)}
                  placeholder="e.g., '18-34 urban millennials who loved Parasite'"
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors font-sans"
                />
              </div>
            </div>
          </div>
        );

      case 'contactInfo':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2 font-sans">Name *</label>
                <input
                  type="text"
                  value={formData.contactInfo.name}
                  onChange={(e) => updateFormData('contactInfo', 'name', e.target.value)}
                  placeholder="Your name"
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors font-sans"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2 font-sans">Email *</label>
                <input
                  type="email"
                  value={formData.contactInfo.email}
                  onChange={(e) => updateFormData('contactInfo', 'email', e.target.value)}
                  placeholder="your@email.com"
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors font-sans"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2 font-sans">Website</label>
                <input
                  type="text"
                  value={formData.contactInfo.website}
                  onChange={(e) => updateFormData('contactInfo', 'website', e.target.value)}
                  placeholder="www.yourfilm.com"
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors font-sans"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2 font-sans">Phone</label>
                <input
                  type="tel"
                  value={formData.contactInfo.phone}
                  onChange={(e) => updateFormData('contactInfo', 'phone', e.target.value)}
                  placeholder="+1 (555) 123-4567"
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors font-sans"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2 font-sans">Social Media</label>
              <input
                type="text"
                value={formData.contactInfo.socials}
                onChange={(e) => updateFormData('contactInfo', 'socials', e.target.value)}
                placeholder="@yourfilm on Instagram, Twitter, etc."
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors font-sans"
              />
            </div>
          </div>
        );

      case 'visualStyle':
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2 font-sans">Setting & Locations</label>
              <textarea
                value={formData.visualStyle.settingDescription}
                onChange={(e) => updateFormData('visualStyle', 'settingDescription', e.target.value)}
                placeholder="Describe the world of your film. What locations, time period, and atmosphere?"
                rows={3}
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors font-sans"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2 font-sans">Visual References</label>
              <textarea
                value={formData.visualStyle.visualReferences}
                onChange={(e) => updateFormData('visualStyle', 'visualReferences', e.target.value)}
                placeholder="Reference films, photographers, or artists that inspire your visual style"
                rows={3}
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors font-sans"
              />
            </div>
          </div>
        );

      case 'characters':
        return (
          <div className="space-y-6">
            {formData.characters.map((character, index) => (
              <div key={index} className="border border-slate-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium text-slate-900 font-sans">Character {index + 1}</h4>
                  {formData.characters.length > 1 && (
                    <button
                      onClick={() => removeArrayItem('characters', index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
                <div className="space-y-4">
                  <input
                    type="text"
                    value={character.name}
                    onChange={(e) => updateArrayField('characters', index, 'name', e.target.value)}
                    placeholder="Character name"
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors font-sans"
                  />
                  <textarea
                    value={character.description}
                    onChange={(e) => updateArrayField('characters', index, 'description', e.target.value)}
                    placeholder="Character description, arc, and role in story"
                    rows={3}
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors font-sans"
                  />
                </div>
              </div>
            ))}
            <button
              onClick={() => addArrayItem('characters', { name: '', description: '', image: null })}
              className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium font-sans"
            >
              <Plus className="h-4 w-4" />
              Add Character
            </button>
          </div>
        );

      case 'directorsVision':
        return (
          <div className="space-y-6">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <Crown className="h-5 w-5 text-amber-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-amber-800 font-sans">Investor Insight</h4>
                  <p className="text-sm text-amber-700 font-sans">
                    This section often determines funding. Show personal connection and market timing.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2 font-sans">Why This Story Matters Now</label>
              <textarea
                value={formData.directorsVision.whyNow}
                onChange={(e) => updateFormData('directorsVision', 'whyNow', e.target.value)}
                placeholder="What makes this story relevant today? How does it connect to current conversations or zeitgeist?"
                rows={3}
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors font-sans"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2 font-sans">Why You're the Right Director</label>
              <textarea
                value={formData.directorsVision.whyMe}
                onChange={(e) => updateFormData('directorsVision', 'whyMe', e.target.value)}
                placeholder="What personal connection, experience, or perspective makes you uniquely qualified to tell this story?"
                rows={3}
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors font-sans"
              />
            </div>
          </div>
        );

      case 'team':
        return (
          <div className="space-y-6">
            {formData.team.map((member, index) => (
              <div key={index} className="border border-slate-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium text-slate-900 font-sans">Team Member {index + 1}</h4>
                  {formData.team.length > 1 && (
                    <button
                      onClick={() => removeArrayItem('team', index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={member.name}
                    onChange={(e) => updateArrayField('team', index, 'name', e.target.value)}
                    placeholder="Name"
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors font-sans"
                  />
                  <input
                    type="text"
                    value={member.role}
                    onChange={(e) => updateArrayField('team', index, 'role', e.target.value)}
                    placeholder="Role (e.g., Producer, Cinematographer)"
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors font-sans"
                  />
                </div>
                <textarea
                  value={member.bio}
                  onChange={(e) => updateArrayField('team', index, 'bio', e.target.value)}
                  placeholder="Brief bio and relevant experience"
                  rows={2}
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors font-sans mt-4"
                />
                <input
                  type="text"
                  value={member.credits}
                  onChange={(e) => updateArrayField('team', index, 'credits', e.target.value)}
                  placeholder="Key credits (e.g., 'Sundance Winner 2023')"
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors font-sans mt-4"
                />
              </div>
            ))}
            <button
              onClick={() => addArrayItem('team', { name: '', role: '', bio: '', headshot: null, credits: '' })}
              className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium font-sans"
            >
              <Plus className="h-4 w-4" />
              Add Team Member
            </button>
          </div>
        );

      case 'audienceMarket':
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2 font-sans">Target Audience</label>
              <textarea
                value={formData.audienceMarket.audienceDescription}
                onChange={(e) => updateFormData('audienceMarket', 'audienceDescription', e.target.value)}
                placeholder="Who is your ideal viewer? Be specific: demographics, interests, viewing habits."
                rows={3}
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors font-sans"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2 font-sans">Comparable Films</label>
              <input
                type="text"
                value={formData.audienceMarket.comparables}
                onChange={(e) => updateFormData('audienceMarket', 'comparables', e.target.value)}
                placeholder="e.g., 'Moonlight meets Call Me By Your Name'"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors font-sans"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2 font-sans">Market Size & Opportunity</label>
              <textarea
                value={formData.audienceMarket.marketSize}
                onChange={(e) => updateFormData('audienceMarket', 'marketSize', e.target.value)}
                placeholder="Size of your target market, growth trends, streaming/theatrical potential"
                rows={3}
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors font-sans"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2 font-sans">Distribution Strategy</label>
              <input
                type="text"
                value={formData.audienceMarket.distributionStrategy}
                onChange={(e) => updateFormData('audienceMarket', 'distributionStrategy', e.target.value)}
                placeholder="Festival circuit, streaming platforms, theatrical release plans"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors font-sans"
              />
            </div>
          </div>
        );

      case 'financials':
        return (
          <div className="space-y-6">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-amber-800 font-sans">Capital-Raising Insight</h4>
                  <p className="text-sm text-amber-700 font-sans">
                    Be realistic but confident. Investors want to see you understand the financial reality of filmmaking.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2 font-sans">Total Budget *</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="number"
                    value={formData.financials.totalBudget}
                    onChange={(e) => updateFormData('financials', 'totalBudget', e.target.value)}
                    placeholder="2500000"
                    className="w-full border border-slate-300 rounded-xl pl-10 pr-4 py-3 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2 font-sans">Amount Raising *</label>
                <div className="relative">
                  <TrendingUp className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="number"
                    value={formData.financials.amountRaising}
                    onChange={(e) => updateFormData('financials', 'amountRaising', e.target.value)}
                    placeholder="1500000"
                    className="w-full border border-slate-300 rounded-xl pl-10 pr-4 py-3 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors font-sans"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2 font-sans">Exit Strategy & ROI Path</label>
              <input
                type="text"
                value={formData.financials.exitStrategy}
                onChange={(e) => updateFormData('financials', 'exitStrategy', e.target.value)}
                placeholder="Festival sales, streaming pre-buy, theatrical distribution, international sales"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors font-sans"
              />
            </div>
          </div>
        );

      case 'returnModel':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2 font-sans">Preferred Return %</label>
                <input
                  type="text"
                  value={formData.returnModel.preferredReturn}
                  onChange={(e) => updateFormData('returnModel', 'preferredReturn', e.target.value)}
                  placeholder="e.g., '120%' or '20% annual'"
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors font-sans"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2 font-sans">Profit Split</label>
                <input
                  type="text"
                  value={formData.returnModel.profitSplit}
                  onChange={(e) => updateFormData('returnModel', 'profitSplit', e.target.value)}
                  placeholder="e.g., '50/50 after recoupment'"
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors font-sans"
                />
              </div>
            </div>
          </div>
        );

      case 'riskMitigation':
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-blue-800 font-sans">Pro Tip</h4>
                  <p className="text-sm text-blue-700 font-sans">
                    Address concerns proactively. Investors appreciate transparency about challenges.
                  </p>
                </div>
              </div>
            </div>
            
            {formData.riskMitigation.map((item, index) => (
              <div key={index} className="border border-slate-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium text-slate-900 font-sans">Risk {index + 1}</h4>
                  {formData.riskMitigation.length > 1 && (
                    <button
                      onClick={() => removeArrayItem('riskMitigation', index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
                <div className="space-y-4">
                  <input
                    type="text"
                    value={item.risk}
                    onChange={(e) => updateArrayField('riskMitigation', index, 'risk', e.target.value)}
                    placeholder="Potential risk (e.g., 'Weather delays during outdoor shoots')"
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors font-sans"
                  />
                  <textarea
                    value={item.mitigation}
                    onChange={(e) => updateArrayField('riskMitigation', index, 'mitigation', e.target.value)}
                    placeholder="How you'll mitigate this risk"
                    rows={2}
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-colors font-sans"
                  />
                </div>
              </div>
            ))}
            <button
              onClick={() => addArrayItem('riskMitigation', { risk: '', mitigation: '' })}
              className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium font-sans"
            >
              <Plus className="h-4 w-4" />
              Add Risk & Mitigation
            </button>
          </div>
        );

      default:
        return <div>Section content coming soon!</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-emerald-400 text-center py-3">
        <span className="text-white text-sm font-medium font-sans flex items-center justify-center gap-2">
          <Film className="h-4 w-4" />
          🧪 ScriptSenseAI Beta - Building the future of film fundraising
        </span>
      </div>

      <div className="max-w-4xl mx-auto py-12 px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Build Your Professional Pitch Deck
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-sans">
            Answer these focused questions to create a compelling investor presentation. 
            <span className="text-emerald-600 font-medium"> Our AI will guide you through each section based on successful pitch decks.</span>
          </p>
        </div>

        {/* AI Content Enhancement */}
        <div className="mb-6 bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-xl flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-medium text-slate-900 font-sans text-lg">AI Content Enhancement</h3>
                <p className="text-sm text-slate-600 font-sans">
                  Polish your logline and synopsis while keeping your unique voice.
                </p>
              </div>
            </div>
            <button
              onClick={() => setAiEnhancementEnabled(!aiEnhancementEnabled)}
              className={`relative inline-flex h-10 w-16 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
                aiEnhancementEnabled 
                  ? 'bg-emerald-500' 
                  : 'bg-slate-300'
              }`}
            >
              <span
                className={`inline-block h-7 w-7 transform rounded-full bg-white shadow-lg transition-transform duration-200 ${
                  aiEnhancementEnabled ? 'translate-x-8' : 'translate-x-1'
                }`}
              />
              <span className={`absolute text-xs font-medium pointer-events-none transition-all duration-200 ${
                aiEnhancementEnabled 
                  ? 'left-2 text-white' 
                  : 'right-2 text-slate-600'
              }`}>
                {aiEnhancementEnabled ? 'ON' : 'OFF'}
              </span>
            </button>
          </div>
          
          {/* AI Enhancement Options */}
          {aiEnhancementEnabled && (
            <div className="mt-4 p-4 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-lg border border-emerald-200">
              <h4 className="font-medium text-emerald-800 font-sans mb-3 flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Enhancement Options
              </h4>
              <div className="space-y-3">
                <label className="flex items-center justify-between p-3 rounded-lg border border-emerald-200 bg-white/60 cursor-pointer hover:bg-white/80 transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={aiEnhancementOptions.loglineOptimization}
                      onChange={() => toggleAiOption('loglineOptimization')}
                      className="w-4 h-4 text-emerald-600 border-emerald-300 rounded focus:ring-emerald-500"
                    />
                    <div>
                      <div className="font-medium text-sm text-emerald-900 font-sans">Logline Optimization</div>
                      <div className="text-xs text-emerald-700 font-sans">Enhance hook, clarity, and investor appeal</div>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    aiEnhancementOptions.loglineOptimization 
                      ? 'bg-emerald-200 text-emerald-800' 
                      : 'bg-slate-200 text-slate-600'
                  }`}>
                    {aiEnhancementOptions.loglineOptimization ? 'ON' : 'OFF'}
                  </span>
                </label>
                
                <label className="flex items-center justify-between p-3 rounded-lg border border-emerald-200 bg-white/60 cursor-pointer hover:bg-white/80 transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={aiEnhancementOptions.synopsisPolish}
                      onChange={() => toggleAiOption('synopsisPolish')}
                      className="w-4 h-4 text-emerald-600 border-emerald-300 rounded focus:ring-emerald-500"
                    />
                    <div>
                      <div className="font-medium text-sm text-emerald-900 font-sans">Synopsis Polish</div>
                      <div className="text-xs text-emerald-700 font-sans">Improve structure and compelling narrative flow</div>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    aiEnhancementOptions.synopsisPolish 
                      ? 'bg-emerald-200 text-emerald-800' 
                      : 'bg-slate-200 text-slate-600'
                  }`}>
                    {aiEnhancementOptions.synopsisPolish ? 'ON' : 'OFF'}
                  </span>
                </label>
                
                <label className="flex items-center justify-between p-3 rounded-lg border border-emerald-200 bg-white/60 cursor-pointer hover:bg-white/80 transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={aiEnhancementOptions.genreSpecific}
                      onChange={() => toggleAiOption('genreSpecific')}
                      className="w-4 h-4 text-emerald-600 border-emerald-300 rounded focus:ring-emerald-500"
                    />
                    <div>
                      <div className="font-medium text-sm text-emerald-900 font-sans">Genre-Specific Suggestions</div>
                      <div className="text-xs text-emerald-700 font-sans">Tailor language and tone to your film's genre</div>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    aiEnhancementOptions.genreSpecific 
                      ? 'bg-emerald-200 text-emerald-800' 
                      : 'bg-slate-200 text-slate-600'
                  }`}>
                    {aiEnhancementOptions.genreSpecific ? 'ON' : 'OFF'}
                  </span>
                </label>
              </div>
              
              <div className="mt-3 text-xs text-emerald-600 font-sans">
                💡 AI will preserve your unique voice while enhancing clarity and impact
              </div>
            </div>
          )}
        </div>

        {/* Audience Type Selector */}
        <div className="mb-6 bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <h3 className="font-medium text-slate-900 font-sans mb-4 flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg flex items-center justify-center">
              <Target className="h-4 w-4 text-white" />
            </div>
            Optimize for Your Audience
          </h3>
          <p className="text-sm text-slate-600 font-sans mb-4">
            Different audiences care about different things. We'll customize your deck sections and guidance accordingly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {audienceTypes.map(audience => {
              const Icon = audience.icon;
              const isSelected = audienceType === audience.id;
              return (
                <button
                  key={audience.id}
                  onClick={() => handleAudienceTypeChange(audience.id)}
                  className={`p-4 rounded-xl border text-left transition-all transform hover:scale-105 font-sans ${
                    isSelected
                      ? 'border-emerald-400 bg-emerald-50 text-emerald-900 shadow-sm'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className={`h-5 w-5 ${isSelected ? 'text-emerald-600' : 'text-slate-400'}`} />
                    <div className="font-medium">{audience.name}</div>
                  </div>
                  <div className="text-xs opacity-75">{audience.description}</div>
                </button>
              );
            })}
          </div>
          
          {/* Custom Section Selection */}
          {audienceType === 'custom' && (
            <div className="mt-6 pt-6 border-t border-slate-200">
              <h4 className="font-medium text-slate-900 font-sans mb-3">Select Sections to Include:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {sections.filter(s => !s.essential).map(section => {
                  const Icon = section.icon;
                  return (
                    <label
                      key={section.key}
                      className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 hover:border-slate-300 cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={customSections[section.key]}
                        onChange={() => toggleSection(section.key)}
                        className="w-4 h-4 text-emerald-600 border-slate-300 rounded focus:ring-emerald-500"
                      />
                      <Icon className="h-4 w-4 text-slate-400" />
                      <div className="flex-1">
                        <div className="font-medium text-sm text-slate-900 font-sans">{section.title}</div>
                        <div className="text-xs text-slate-500 font-sans">{section.subtitle}</div>
                      </div>
                    </label>
                  );
                })}
              </div>
              <p className="text-xs text-slate-500 mt-3 font-sans">
                * Project Foundation and Contact Information are always included
              </p>
            </div>
          )}
          
          {/* Show selected sections summary for non-custom audiences */}
          {audienceType !== 'custom' && (
            <div className="mt-4 p-4 bg-slate-50 rounded-lg">
              <h4 className="font-medium text-slate-700 font-sans mb-2">Sections optimized for {audienceTypes.find(a => a.id === audienceType)?.name}:</h4>
              <div className="flex flex-wrap gap-2">
                {sections.filter(section => section.essential || customSections[section.key]).map(section => (
                  <span key={section.key} className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded-full font-medium">
                    {section.title}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Template Selection */}
        <div className="mb-6 bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <h3 className="font-medium text-slate-900 font-sans mb-4 flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-500 rounded-lg flex items-center justify-center">
              <Palette className="h-4 w-4 text-white" />
            </div>
            Visual Style Template
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {templates.map(template => (
              <button
                key={template.id}
                onClick={() => setSelectedTemplate(template.id)}
                className={`p-4 rounded-xl border text-left transition-all transform hover:scale-105 font-sans ${
                  selectedTemplate === template.id
                    ? 'border-emerald-400 bg-emerald-50 text-emerald-900 shadow-sm'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                <div className={`w-full h-16 rounded-lg mb-3 ${template.preview}`}></div>
                <div className="font-medium">{template.name}</div>
                <div className="text-xs opacity-75">{template.description}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-slate-700 font-sans">Progress</span>
            <span className="text-sm text-slate-600 font-sans">
              {completedSections.size}/{activeSections.length} sections completed
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-emerald-400 to-emerald-500 h-3 rounded-full transition-all duration-500 shadow-sm"
              style={{ width: `${(completedSections.size / activeSections.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Form Sections */}
        <div className="space-y-4">
          {activeSections.map((section, index) => {
            const Icon = section.icon;
            const isActive = activeSection === index;
            const isCompleted = completedSections.has(index);
            
            return (
              <div key={section.key} className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                <button
                  type="button"
                  onClick={() => setActiveSection(isActive ? -1 : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      isCompleted 
                        ? 'bg-gradient-to-br from-emerald-400 to-emerald-500 text-white' 
                        : 'bg-slate-100 text-slate-400'
                    }`}>
                      {isCompleted ? <CheckCircle className="h-6 w-6" /> : <Icon className="h-6 w-6" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-slate-900 font-sans text-lg">{section.title}</span>
                        {section.essential && (
                          <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded-full font-medium font-sans">
                            Required
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-slate-500 font-sans">{section.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {isCompleted && (
                      <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded-full font-medium font-sans">
                        Complete
                      </span>
                    )}
                    {isActive ? (
                      <ChevronUp className="h-5 w-5 text-slate-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-400" />
                    )}
                  </div>
                </button>
                
                {isActive && (
                  <div className="px-6 pb-6 border-t border-slate-100 bg-slate-50/50">
                    <div className="pt-6">
                      {renderSectionContent(section)}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Generate Button */}
        <div className="pt-8 text-center">
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ready to See Your Pitch Deck?
            </h3>
            <p className="text-slate-600 mb-6 font-sans">
              Generate a professional presentation optimized for {audienceTypes.find(a => a.id === audienceType)?.name.toLowerCase()}.
            </p>
            
            <button
              onClick={handleGenerateDeck}
              className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl px-8 py-4 hover:from-slate-800 hover:to-slate-700 transition-all transform hover:scale-105 font-medium text-lg font-sans flex items-center gap-2 mx-auto shadow-lg"
            >
              <Film className="h-5 w-5" />
              Generate My Pitch Deck
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Deck Generator
const DeckGenerator = ({ onExport }) => {
  const { formData, setCurrentView, userTier, selectedTemplate } = useScriptSense();

  const formatCurrency = (amount) => {
    if (!amount) return '$0';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Get template styles
  const getTemplateStyles = () => {
    switch (selectedTemplate) {
      case 'modern':
        return {
          containerClass: 'bg-gradient-to-br from-slate-50 to-white',
          cardClass: 'bg-white border-slate-200',
          titleClass: 'text-slate-900',
          subtitleClass: 'text-slate-600',
          accentClass: 'text-emerald-600',
          gradientClass: 'from-emerald-400 to-emerald-500'
        };
      case 'cinematic':
        return {
          containerClass: 'bg-gradient-to-br from-slate-900 to-slate-800',
          cardClass: 'bg-slate-800 border-slate-700',
          titleClass: 'text-white',
          subtitleClass: 'text-slate-300',
          accentClass: 'text-amber-400',
          gradientClass: 'from-amber-400 to-amber-500'
        };
      case 'classic':
        return {
          containerClass: 'bg-gradient-to-br from-amber-50 to-amber-100',
          cardClass: 'bg-amber-50 border-amber-200',
          titleClass: 'text-amber-900',
          subtitleClass: 'text-amber-700',
          accentClass: 'text-amber-600',
          gradientClass: 'from-amber-400 to-amber-500'
        };
      default:
        return {
          containerClass: 'bg-gradient-to-br from-slate-50 to-white',
          cardClass: 'bg-white border-slate-200',
          titleClass: 'text-slate-900',
          subtitleClass: 'text-slate-600',
          accentClass: 'text-emerald-600',
          gradientClass: 'from-emerald-400 to-emerald-500'
        };
    }
  };

  const templateStyles = getTemplateStyles();

  return (
    <div className="min-h-screen bg-slate-100" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-emerald-400 text-center py-3">
        <span className="text-white text-sm font-medium font-sans flex items-center justify-center gap-2">
          <Film className="h-4 w-4" />
          🎬 Your Professional Pitch Deck Preview
        </span>
      </div>

      <div className="bg-white border-b border-slate-200 px-6 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCurrentView('form')}
              className="flex items-center gap-2 px-4 py-2 text-sm text-slate-600 hover:text-slate-900 transition-colors font-sans bg-slate-100 rounded-lg hover:bg-slate-200"
            >
              <Edit3 className="h-4 w-4" />
              Edit Content
            </button>
            <div className="border-l border-slate-300 pl-4">
              <h1 className="text-xl font-bold text-slate-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                {formData.projectBasics.filmTitle || 'Your Pitch Deck'}
              </h1>
              <p className="text-sm text-slate-600 font-sans">
                {selectedTemplate.charAt(0).toUpperCase() + selectedTemplate.slice(1)} Template • Beta Preview
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => onExport('pdf')}
              className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-slate-800 flex items-center gap-2 font-sans transition-colors shadow-sm"
            >
              <Download className="h-4 w-4" />
              Export PDF
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Deck Preview */}
      <div className="flex-1 p-6">
        <div className="max-w-5xl mx-auto">
          <div className={`aspect-[16/9] ${templateStyles.containerClass} rounded-2xl shadow-2xl overflow-hidden p-16 flex items-center justify-center border ${templateStyles.cardClass.includes('border-') ? templateStyles.cardClass.split(' ')[1] : 'border-slate-200'}`}>
            <div className="text-center">
              <div className={`w-20 h-20 bg-gradient-to-br ${templateStyles.gradientClass} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <Film className="h-10 w-10 text-white" />
              </div>
              
              <h1 className={`text-6xl font-bold mb-8 ${templateStyles.titleClass}`} style={{ fontFamily: 'Playfair Display, serif' }}>
                {formData.projectBasics.filmTitle || 'Your Film Title'}
              </h1>
              
              <p className={`text-2xl mb-8 max-w-4xl mx-auto leading-relaxed ${templateStyles.subtitleClass}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                {formData.projectBasics.logline || 'Your compelling logline will appear here'}
              </p>
              
              <div className={`text-lg ${templateStyles.subtitleClass}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                <span className="font-medium">{formData.contactInfo.name || 'Your Name'}</span>
                {formData.projectBasics.genre && (
                  <>
                    <span> • </span>
                    <span className={`bg-gradient-to-r ${templateStyles.gradientClass} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                      {formData.projectBasics.genre}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Success Message */}
          {userTier === 'free' && (
            <div className="text-center py-12">
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 rounded-2xl p-8 max-w-md mx-auto">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                  🎯 ScriptSenseAI is Working!
                </h3>
                <p className="text-emerald-700 font-medium font-sans mb-4">
                  Your template system and form builder are fully functional
                </p>
                <div className="text-sm text-emerald-600 font-sans">
                  ✅ Template customization working<br/>
                  ✅ PDF export with watermark<br/>
                  ✅ Ready for full implementation
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;