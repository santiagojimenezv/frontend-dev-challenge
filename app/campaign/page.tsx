'use client';

import { useState } from 'react';
import CampaignWizardLayout from '../components/CampaignWizardLayout';
import CampaignTypeSelection from '../components/CampaignTypeSelection';
import OtherCampaignType from '../components/OtherCampaignType';
import CampaignInformation from '../components/CampaignInformation';
import ExistingProducts from '../components/ExistingProducts';
import LoadingPage from '../components/LoadingPage';
import ReviewCampaignInformation from '../components/ReviewCampaignInformation';
import Integrations from '../components/Integrations';
import EmailSetup from '../components/EmailSetup';
import EmailReview from '../components/EmailReview';
import EmailLoading from '../components/EmailLoading';
import EmailFinal from '../components/EmailFinal';

type Step = 'type-selection' | 'other-goal' | 'information' | 'existing-products' | 'loading' | 'review' | 'integrations' | 'email-setup' | 'email-review' | 'email-loading' | 'email-final';

export default function CampaignPage() {
  const [currentStep, setCurrentStep] = useState<Step>('type-selection');
  const [selectedType, setSelectedType] = useState<string>('');
  const [campaignGoal, setCampaignGoal] = useState<string>('');

  const getStepNumber = (step: Step): number => {
    switch (step) {
      case 'type-selection':
        return 1;
      case 'other-goal':
        return 1;
      case 'information':
        return 2;
      case 'existing-products':
        return 2;
      case 'loading':
        return 2;
      case 'review':
        return 2;
      case 'integrations':
        return 3;
      case 'email-setup':
        return 4;
      case 'email-review':
        return 4;
      case 'email-loading':
        return 4;
      case 'email-final':
        return 4;
      default:
        return 1;
    }
  };

  const getTotalSteps = (): number => {
    return 4; // All flows now have 4 steps: 1 -> 2 -> 3 -> 4
  };

  const handleTypeSelection = (type: string) => {
    setSelectedType(type);
    if (type === 'other') {
      setCurrentStep('other-goal');
    } else {
      setCurrentStep('information');
    }
  };

  const handleOtherGoalNext = (goal: string) => {
    setCampaignGoal(goal);
    setCurrentStep('information');
  };

  const handleBack = () => {
    switch (currentStep) {
      case 'other-goal':
        setCurrentStep('type-selection');
        break;
      case 'information':
        if (selectedType === 'other') {
          setCurrentStep('other-goal');
        } else {
          setCurrentStep('type-selection');
        }
        break;
      case 'existing-products':
        setCurrentStep('information');
        break;
      case 'loading':
        setCurrentStep('existing-products');
        break;
      case 'review':
        setCurrentStep('information');
        break;
      case 'integrations':
        setCurrentStep('review');
        break;
      case 'email-setup':
        setCurrentStep('integrations');
        break;
      case 'email-review':
        setCurrentStep('email-setup');
        break;
      case 'email-loading':
        setCurrentStep('email-review');
        break;
      case 'email-final':
        setCurrentStep('email-loading');
        break;
    }
  };

  const handleNext = () => {
    switch (currentStep) {
      case 'information':
        setCurrentStep('loading');
        break;
      case 'existing-products':
        setCurrentStep('loading');
        break;
      case 'review':
        setCurrentStep('integrations');
        break;
      case 'integrations':
        setCurrentStep('email-setup');
        break;
      case 'email-setup':
        setCurrentStep('email-review');
        break;
      case 'email-review':
        setCurrentStep('email-loading');
        break;
      case 'email-loading':
        setCurrentStep('email-final');
        break;
      case 'email-final':
        // Handle final step - could redirect or show success
        console.log('Campaign creation completed!');
        break;
    }
  };

  const handleExistingProducts = () => {
    setCurrentStep('existing-products');
  };

  const handleNewProduct = () => {
    setCurrentStep('information');
  };

  const handleLoadingComplete = () => {
    setCurrentStep('review');
  };

  const handleEmailLoadingComplete = () => {
    setCurrentStep('email-final');
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'type-selection':
        return <CampaignTypeSelection onNext={handleTypeSelection} />;
      case 'other-goal':
        return (
          <OtherCampaignType
            onNext={handleOtherGoalNext}
            onBack={() => setCurrentStep('type-selection')}
          />
        );
      case 'information':
        return (
          <CampaignInformation
            onNext={handleNext}
            onBack={handleBack}
            onExistingProducts={handleExistingProducts}
            onNewProduct={handleNewProduct}
          />
        );
      case 'existing-products':
        return (
          <ExistingProducts
            onNext={handleNext}
            onBack={handleBack}
            onNewProduct={handleNewProduct}
          />
        );
      case 'loading':
        return (
          <LoadingPage
            onComplete={handleLoadingComplete}
          />
        );
      case 'review':
        return (
          <ReviewCampaignInformation
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 'integrations':
        return (
          <Integrations
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 'email-setup':
        return (
          <EmailSetup
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 'email-review':
        return (
          <EmailReview
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 'email-loading':
        return (
          <EmailLoading
            onComplete={handleEmailLoadingComplete}
          />
        );
      case 'email-final':
        return (
          <EmailFinal
            onBack={handleBack}
          />
        );
      default:
        return <CampaignTypeSelection onNext={handleTypeSelection} />;
    }
  };

  return (
    <CampaignWizardLayout currentStep={getStepNumber(currentStep)} totalSteps={getTotalSteps()}>
      {renderCurrentStep()}
    </CampaignWizardLayout>
  );
}
