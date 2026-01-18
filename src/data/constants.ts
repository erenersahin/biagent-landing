import { IconParallel, IconGitBranch, IconEye, IconSliders, IconRefresh, IconLink } from '../components/icons'

// Use case options for the waitlist form
export const USE_CASES = [
  { id: 'bug-fixes', label: 'Bug fixes' },
  { id: 'feature-dev', label: 'Feature development' },
  { id: 'code-reviews', label: 'Code reviews' },
  { id: 'testing', label: 'Testing & QA' },
  { id: 'documentation', label: 'Documentation' },
  { id: 'refactoring', label: 'Refactoring' },
]

// Pipeline steps for the visual with reasoning examples
export const PIPELINE_STEPS = [
  {
    num: 1,
    name: 'Context',
    desc: 'Gathers ticket & codebase context',
    reasoning: [
      'Loading ticket PROJ-123 from JIRA...',
      'Parsing ticket description and acceptance criteria',
      'Scanning codebase for related files...',
      'Found 12 files matching auth/* pattern',
    ]
  },
  {
    num: 2,
    name: 'Risk',
    desc: 'Analyzes risks & dependencies',
    reasoning: [
      'Analyzing dependencies in package.json...',
      'Checking for breaking changes in auth module',
      'Found potential risk: OAuth token expiry handling',
      'Flagging 2 edge cases for review',
    ]
  },
  {
    num: 3,
    name: 'Plan',
    desc: 'Creates implementation plan',
    reasoning: [
      'Creating implementation plan...',
      'Step 1: Add TokenRefreshService class',
      'Step 2: Update AuthProvider with refresh logic',
      'Step 3: Add error handling for expired tokens',
    ]
  },
  {
    num: 4,
    name: 'Code',
    desc: 'Implements changes',
    reasoning: [
      'Analyzing ticket PROJ-123...',
      'Found 3 related files in src/auth/',
      'Implementing OAuth2 refresh token logic',
      'Writing TokenRefreshService.ts...',
    ]
  },
  {
    num: 5,
    name: 'Test',
    desc: 'Writes & runs tests',
    reasoning: [
      'Generating test cases for TokenRefreshService...',
      'Writing unit tests: 8 test cases',
      'Running pytest in isolated worktree...',
      'All tests passing ✓',
    ]
  },
  {
    num: 6,
    name: 'Docs',
    desc: 'Updates documentation',
    reasoning: [
      'Scanning for documentation files...',
      'Updating API.md with new endpoints',
      'Adding JSDoc comments to public methods',
      'Generating changelog entry...',
    ]
  },
  {
    num: 7,
    name: 'PR',
    desc: 'Creates pull request',
    reasoning: [
      'Preparing pull request...',
      'Generating PR title and description',
      'Adding test results to PR body',
      'Creating PR: feat(auth): add token refresh',
    ]
  },
  {
    num: 8,
    name: 'Review',
    desc: 'Responds to feedback',
    reasoning: [
      'Monitoring PR #142 for reviews...',
      'New comment from @reviewer on line 45',
      'Analyzing feedback: "add error boundary"',
      'Implementing suggested changes...',
    ]
  },
]

// Features list with SVG icon components
export const FEATURES = [
  {
    Icon: IconParallel,
    title: 'Parallel Execution',
    description: 'Work on multiple tickets simultaneously. Each pipeline runs independently with isolated git worktrees, so there are no conflicts.',
  },
  {
    Icon: IconGitBranch,
    title: 'Git Worktree Isolation',
    description: 'Each ticket gets its own sandboxed branch. Code changes never interfere with your main work. Merge only when ready.',
  },
  {
    Icon: IconEye,
    title: 'Transparent Reasoning',
    description: 'See exactly what the AI is thinking. Every decision is logged in real-time token streaming. No black boxes.',
  },
  {
    Icon: IconSliders,
    title: 'Supervised Autonomy',
    description: 'Agents work independently but you\'re always in control. Pause, provide feedback, or restart any step at any time.',
  },
  {
    Icon: IconRefresh,
    title: 'Session Persistence',
    description: 'Close your browser, come back tomorrow. Your pipelines resume exactly where they left off. Never lose progress.',
  },
  {
    Icon: IconLink,
    title: 'Seamless Integration',
    description: 'Connect your issue tracker and GitHub. Auto-sync tickets, create PRs, respond to reviews. Fits your workflow.',
  },
]

// FAQ items
export const FAQ_ITEMS = [
  {
    question: 'When will I get access?',
    answer: 'We\'re rolling out invites starting February 2026. Join the waitlist to get early access and founder pricing.',
  },
  {
    question: 'Is it free during beta?',
    answer: 'Yes, the beta is free. You\'ll only pay for the AI API costs (Anthropic Claude). We\'ll have pricing plans after launch.',
  },
  {
    question: 'Does it work with my codebase?',
    answer: 'BiAgent works with any codebase that uses git. It supports multiple languages and frameworks. The AI adapts to your project structure.',
  },
  {
    question: 'Is my code safe?',
    answer: 'Your code stays local. BiAgent runs on your machine. Only ticket context and code snippets are sent to the AI for processing.',
  },
  {
    question: 'What if the AI makes mistakes?',
    answer: 'All changes are sandboxed in isolated branches. You review everything before merging. You can restart any step with feedback.',
  },
]
