# Campaign Creation Interface

A Next.js app for creating marketing campaigns with a step-by-step wizard.

## Setup

```bash
npm install
npm run dev
```

Go to [http://localhost:3000/campaign](http://localhost:3000/campaign) to see it in action.

## AI Tools Used

### Main Prompt
"I need to convert the Figma designs to Next.js components in the front-next.js project. As you can see environment is already configured. Analyze the figma images, make the left sidebar as in the image, the routing. If you select one of the first two options in image 1.0 and the click next, you go to 2.0 But if the third option is selected, it goes to 1.1 and the if next is clicked there it goes to 2.0. Also take in mind the progress bar at the left of the card, and try to use same colors."

### Other Key Prompts
1. **"Fix text darkness in several components and add the missing steps in the flow: 3.1 → 4.0 → 4.1 → 4.2"** - This got me to implement the full email flow with proper text contrast.

2. **"Make it so that in page 2.0 when you click Click to upload it goes to this page 2.2, so in page 2.0 next button is disabled, and then with 2.2 it is enabled and continues the normal flow."** - This created the file upload step with proper button states.

## Design Decisions

I went with a component-based approach where each step is its own React component. The main `page.tsx` handles all the routing logic, and `CampaignWizardLayout` wraps everything with the sidebar and progress bar.

For the visual design, I used custom CSS gradients for the card borders and built a vertical progress bar with connecting lines. Everything uses Tailwind for consistent spacing.

The UX focuses on clear disabled states, loading animations, and intuitive navigation between steps.

## What I'd Improve

**Performance**: Code splitting and memoization would help with larger apps.

**UX**: Real form validation, auto-save, and better mobile support.

**Features**: Draft saving, campaign templates, and real file uploads instead of mock ones.

**Code**: More tests, better TypeScript types, and a proper design system for reusable components.

**Technical**: Redux for state management, real API calls, and proper error handling.

Overall, it's a solid foundation that could be expanded into a full-featured campaign management tool.