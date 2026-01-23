import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Accreditations } from './components/Accreditations';
import { Capabilities } from './components/Capabilities';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Industries } from './components/Industries';
import { TheBAMMethod } from './components/TheBAMMethod';
import { Results } from './components/Results';
import { SiteVisitCTA } from './components/SiteVisitCTA';
import { Footer } from './components/Footer';
import { ServicesMain } from './components/ServicesMain';
import { CoolingTowerRestoration } from './components/CoolingTowerRestoration';
import { ContactPage } from './components/ContactPage';
import { AboutLayout } from './components/AboutLayout';
import { AboutHub } from './components/about/AboutHub';
import { AboutCompany } from './components/about/AboutCompany';
import { AboutMethod } from './components/about/AboutMethod';
import { AboutCompliance } from './components/about/AboutCompliance';
import { AboutSafety } from './components/about/AboutSafety';
import { AboutCoverage } from './components/about/AboutCoverage';
import { AboutLeadership } from './components/about/AboutLeadership';
import { AboutDocumentation } from './components/about/AboutDocumentation';
import { CareersPage } from './components/about/CareersPage';
import { HealthcarePage } from './components/industries/HealthcarePage';
import { K12Page } from './components/industries/K12Page';
import { HigherEdPage } from './components/industries/HigherEdPage';
import { GovernmentPage } from './components/industries/GovernmentPage';
import { IndustrialPage } from './components/industries/IndustrialPage';
import { CommercialPage } from './components/industries/CommercialPage';
import { SeniorCarePage } from './components/industries/SeniorCarePage';
import { RetailPage } from './components/industries/RetailPage';
import { ColdStoragePage } from './components/industries/ColdStoragePage';
import { LocationsHub } from './components/locations/LocationsHub';
import { PennsylvaniaPage } from './components/locations/PennsylvaniaPage';
import { NewJerseyPage } from './components/locations/NewJerseyPage';
import { MarylandPage } from './components/locations/MarylandPage';
import { DelawarePage } from './components/locations/DelawarePage';
import { NewYorkPage } from './components/locations/NewYorkPage';
import { PhiladelphiaPage } from './components/locations/PhiladelphiaPage';
import { BaltimorePage } from './components/locations/BaltimorePage';
import { WilmingtonPage } from './components/locations/WilmingtonPage';
import { SouthJerseyPage } from './components/locations/SouthJerseyPage';
import { HarrisburgYorkPage } from './components/locations/HarrisburgYorkPage';
import { RestorationValueEstimatorPage } from './components/tools/RestorationValueEstimatorPage';
import { IaqRiskScoreTool } from './components/tools/IaqRiskScoreTool';
import { ToolsIndexPage } from './components/tools/ToolsIndexPage';
import { ExitIntentModal } from './components/ExitIntentModal';

const EXIT_MODAL_STORAGE_KEY = 'bam_exit_intent_seen_v2';

// New Service Pages
import { ChillerRestoration } from './components/services/ChillerRestoration';
import { AHURestoration } from './components/services/AHURestoration';
import { DuctCleaning } from './components/services/DuctCleaning';
import { IAQService } from './components/services/IAQService';
import { MoldRemediation } from './components/services/MoldRemediation';
import { PreventiveMaintenance } from './components/services/PreventiveMaintenance';
import { EpoxyCoating } from './components/services/EpoxyCoating';
import { TubeBrushing } from './components/services/TubeBrushing';
import { BasinRestoration } from './components/services/BasinRestoration';
import { HEPAService } from './components/services/HEPAService';
import { UVCPurification } from './components/services/UVCPurification';
import { FireDamperService } from './components/services/FireDamperService';

export type Page = 
  | 'home' 
  | 'services' 
  | 'industries'
  | 'tools'
  | 'cooling-tower' 
  | 'chiller'
  | 'ahu'
  | 'ducts'
  | 'iaq'
  | 'mold'
  | 'pm'
  | 'epoxy'
  | 'tubes'
  | 'basin'
  | 'hepa'
  | 'uvc'
  | 'dampers'
  | 'contact' 
  | 'about-hub'
  | 'about-company'
  | 'about-method'
  | 'about-compliance'
  | 'about-safety'
  | 'about-coverage'
  | 'about-leadership'
  | 'about-documentation'
  | 'careers'
  | 'healthcare'
  | 'k12'
  | 'higher-ed'
  | 'government'
  | 'industrial'
  | 'commercial'
  | 'senior-care'
  | 'retail'
  | 'cold-storage'
  | 'locations'
  | 'pennsylvania'
  | 'new-jersey'
  | 'maryland'
  | 'delaware'
  | 'new-york'
  | 'philadelphia'
  | 'baltimore'
  | 'wilmington'
  | 'south-jersey'
  | 'harrisburg-york'
  | 'estimator'
  | 'iaq-risk-tool';

const PAGE_VALUES: Page[] = [
  'home',
  'services',
  'industries',
  'tools',
  'cooling-tower',
  'chiller',
  'ahu',
  'ducts',
  'iaq',
  'mold',
  'pm',
  'epoxy',
  'tubes',
  'basin',
  'hepa',
  'uvc',
  'dampers',
  'contact',
  'about-hub',
  'about-company',
  'about-method',
  'about-compliance',
  'about-safety',
  'about-coverage',
  'about-leadership',
  'about-documentation',
  'careers',
  'healthcare',
  'k12',
  'higher-ed',
  'government',
  'industrial',
  'commercial',
  'senior-care',
  'retail',
  'cold-storage',
  'locations',
  'pennsylvania',
  'new-jersey',
  'maryland',
  'delaware',
  'new-york',
  'philadelphia',
  'baltimore',
  'wilmington',
  'south-jersey',
  'harrisburg-york',
  'estimator',
  'iaq-risk-tool'
];

const PAGE_SET = new Set<Page>(PAGE_VALUES);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [exitModalOpen, setExitModalOpen] = useState(false);
  const [exitModalDismissed, setExitModalDismissed] = useState(false);

  const getPageFromHash = () => {
    const hash = window.location.hash.replace('#', '').trim();
    if (!hash) return null;
    return PAGE_SET.has(hash as Page) ? (hash as Page) : null;
  };

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.history.pushState({ page }, '', `#${page}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const initialPage = getPageFromHash();
    if (initialPage) {
      setCurrentPage(initialPage);
    }
  }, []);

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const statePage = event.state?.page;
      const hashPage = getPageFromHash();
      const nextPage = PAGE_SET.has(statePage) ? (statePage as Page) : hashPage || 'home';
      setCurrentPage(nextPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem(EXIT_MODAL_STORAGE_KEY)) {
      setExitModalDismissed(true);
    }

    const handleExitIntent = (e: MouseEvent) => {
      if (exitModalDismissed || exitModalOpen) return;
      if (e.clientY <= 0) {
        setExitModalOpen(true);
        sessionStorage.setItem(EXIT_MODAL_STORAGE_KEY, '1');
      }
    };

    const timer = setTimeout(() => {
      if (!exitModalDismissed && !exitModalOpen) {
        setExitModalOpen(true);
        sessionStorage.setItem(EXIT_MODAL_STORAGE_KEY, '1');
      }
    }, 45000);

    document.addEventListener('mouseleave', handleExitIntent);
    return () => {
      document.removeEventListener('mouseleave', handleExitIntent);
      clearTimeout(timer);
    };
  }, [exitModalDismissed, exitModalOpen]);

  const handleCloseExitModal = () => {
    setExitModalOpen(false);
    setExitModalDismissed(true);
    sessionStorage.setItem(EXIT_MODAL_STORAGE_KEY, '1');
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onNavigate={() => navigateTo('contact')} />
            <div className="bg-[#265A4A] py-4 flex items-center justify-center text-center">
              <button 
                onClick={() => navigateTo('services')}
                className="inline-flex items-center justify-center text-[#A7D7C5] text-xs font-bold uppercase tracking-widest hover:text-white transition-colors"
              >
                [ Preview Services Hub ]
              </button>
            </div>
            <Accreditations />
            <Capabilities onNavigate={navigateTo} />
            <WhyChooseUs />
            <Industries onNavigate={navigateTo} />
            <TheBAMMethod />
            <Results />
            <SiteVisitCTA onNavigate={() => navigateTo('contact')} />
          </>
        );
      case 'services':
        return <ServicesMain onServiceClick={() => navigateTo('cooling-tower')} onNavigate={navigateTo} />;
      case 'industries':
        return <Industries onNavigate={navigateTo} />;
      case 'contact':
        return <ContactPage />;
      case 'tools':
        return <ToolsIndexPage onNavigate={navigateTo} />;
      case 'estimator':
        return <RestorationValueEstimatorPage />;
      case 'iaq-risk-tool':
        return <IaqRiskScoreTool />;
      
      // Services Routing
      case 'cooling-tower':
        return <CoolingTowerRestoration />;
      case 'chiller':
        return <ChillerRestoration onNavigate={navigateTo} />;
      case 'ahu':
        return <AHURestoration onNavigate={navigateTo} />;
      case 'ducts':
        return <DuctCleaning onNavigate={navigateTo} />;
      case 'iaq':
        return <IAQService onNavigate={navigateTo} />;
      case 'mold':
        return <MoldRemediation onNavigate={navigateTo} />;
      case 'pm':
        return <PreventiveMaintenance onNavigate={navigateTo} />;
      case 'epoxy':
        return <EpoxyCoating onNavigate={navigateTo} />;
      case 'tubes':
        return <TubeBrushing onNavigate={navigateTo} />;
      case 'basin':
        return <BasinRestoration onNavigate={navigateTo} />;
      case 'hepa':
        return <HEPAService onNavigate={navigateTo} />;
      case 'uvc':
        return <UVCPurification onNavigate={navigateTo} />;
      case 'dampers':
        return <FireDamperService onNavigate={navigateTo} />;

      // Industries Routing
      case 'healthcare':
        return <HealthcarePage onNavigate={navigateTo} />;
      case 'k12':
        return <K12Page onNavigate={navigateTo} />;
      case 'higher-ed':
        return <HigherEdPage onNavigate={navigateTo} />;
      case 'government':
        return <GovernmentPage onNavigate={navigateTo} />;
      case 'industrial':
        return <IndustrialPage onNavigate={navigateTo} />;
      case 'commercial':
        return <CommercialPage onNavigate={navigateTo} />;
      case 'senior-care':
        return <SeniorCarePage onNavigate={navigateTo} />;
      case 'retail':
        return <RetailPage onNavigate={navigateTo} />;
      case 'cold-storage':
        return <ColdStoragePage onNavigate={navigateTo} />;
      
      // Locations Routing
      case 'locations':
        return <LocationsHub onNavigate={navigateTo} />;
      case 'pennsylvania':
        return <PennsylvaniaPage onNavigate={navigateTo} />;
      case 'new-jersey':
        return <NewJerseyPage onNavigate={navigateTo} />;
      case 'maryland':
        return <MarylandPage onNavigate={navigateTo} />;
      case 'delaware':
        return <DelawarePage onNavigate={navigateTo} />;
      case 'new-york':
        return <NewYorkPage onNavigate={navigateTo} />;
      case 'philadelphia':
        return <PhiladelphiaPage onNavigate={navigateTo} />;
      case 'baltimore':
        return <BaltimorePage onNavigate={navigateTo} />;
      case 'wilmington':
        return <WilmingtonPage onNavigate={navigateTo} />;
      case 'south-jersey':
        return <SouthJerseyPage onNavigate={navigateTo} />;
      case 'harrisburg-york':
        return <HarrisburgYorkPage onNavigate={navigateTo} />;
      
      // About Section Routing
      case 'about-hub':
        return <AboutLayout activePage={currentPage} onNavigate={navigateTo}><AboutHub onNavigate={navigateTo} /></AboutLayout>;
      case 'about-company':
        return <AboutLayout activePage={currentPage} onNavigate={navigateTo}><AboutCompany /></AboutLayout>;
      case 'about-method':
        return <AboutLayout activePage={currentPage} onNavigate={navigateTo}><AboutMethod /></AboutLayout>;
      case 'about-compliance':
        return <AboutLayout activePage={currentPage} onNavigate={navigateTo}><AboutCompliance /></AboutLayout>;
      case 'about-safety':
        return <AboutLayout activePage={currentPage} onNavigate={navigateTo}><AboutSafety /></AboutLayout>;
      case 'about-coverage':
        return <AboutLayout activePage={currentPage} onNavigate={navigateTo}><AboutCoverage /></AboutLayout>;
      case 'about-leadership':
        return <AboutLayout activePage={currentPage} onNavigate={navigateTo}><AboutLeadership /></AboutLayout>;
      case 'about-documentation':
        return <AboutLayout activePage={currentPage} onNavigate={navigateTo}><AboutDocumentation /></AboutLayout>;
      case 'careers':
        return <AboutLayout activePage={currentPage} onNavigate={navigateTo}><CareersPage /></AboutLayout>;
      
      default:
        return <Hero onNavigate={() => navigateTo('contact')} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F9F8] text-slate-800 antialiased">
      <Header onNavigate={navigateTo} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer onNavigate={navigateTo} />
      <ExitIntentModal open={exitModalOpen} onClose={handleCloseExitModal} />
    </div>
  );
};

export default App;