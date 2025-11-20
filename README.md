# Flipside AI Workflow Launcher Template

> **⚠️ This is a TEMPLATE** - All content marked with `TODO:` comments, placeholder text (like `YOUR_BRAND_NAME`), and gray placeholder colors need to be replaced with your actual brand content before use.

A Next.js template for creating branded workflow launcher interfaces that integrate with Flipside Crypto's AI-powered analysis workflows. This template provides a complete starting point that you customize by replacing placeholder content with your brand assets, colors, workflows, and configuration.

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ (check with `node --version`)
- **pnpm** (required - this project uses pnpm)

#### Installing pnpm

If you don't have pnpm installed:

```bash
# Using npm
npm install -g pnpm

# Using Homebrew (macOS)
brew install pnpm

# Using standalone script
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

Verify installation: `pnpm --version`

### Installation

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Run development server:**
   ```bash
   pnpm dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

You'll see placeholder content (gray colors, "YOUR_BRAND_NAME" text, example workflows) - this is expected! Follow the customization guide below to replace everything.

### Build for Production

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

## 📋 Template Customization Checklist

Before deploying, you must replace the following placeholder elements:

- [ ] **Brand Name**: Replace `YOUR_BRAND_NAME` in 3 locations
- [ ] **Brand Logo**: Replace `/placeholder-logo.png` with your logo
- [ ] **Brand Colors**: Replace gray placeholders (`#6B7280`, `#4B5563`) with your brand colors
- [ ] **Workflows**: Replace example workflows with your actual workflows
- [ ] **Chain Lists**: Update `evmChains` and `chainTokenPairs` arrays
- [ ] **Slack Channel**: Update `#flipside-YOUR_BRAND_SLUG` with your channel
- [ ] **Metadata**: Update page title and description
- [ ] **Navigation Links**: Update external links if needed

**Quick Find**: Search for `TODO:` comments throughout the codebase to locate all customization points.

## 🎨 Customization Guide

### 1. Brand Name & Text Content

#### File: `app/layout.tsx`

**Lines 7-9**: Update metadata with your brand name:

```typescript
export const metadata: Metadata = {
  // TODO: Replace "YOUR_BRAND_NAME" with your actual brand name
  title: "YOUR_BRAND_NAME | AI-Powered Modules",
  description: "Custom built AI-powered modules for intelligent analysis and insights on YOUR_BRAND_NAME.",
  // ...
}
```

**What to replace:**
- `YOUR_BRAND_NAME` → Your actual brand name (appears in browser tab title)
- Update description text to match your brand messaging

#### File: `components/navbar.tsx`

**Line 22**: Update alt text for your brand logo:

```typescript
alt="YOUR_BRAND_NAME (Placeholder Logo)"
```

**What to replace:**
- `YOUR_BRAND_NAME` → Your actual brand name
- Remove `(Placeholder Logo)` text once you've added your real logo

#### File: `components/agent-launcher.tsx`

**Line 170**: Update main heading:

```typescript
<h1>Example Workflows for YOUR_BRAND_NAME</h1>
```

**Line 297**: Update Slack channel reference:

```typescript
<span>#flipside-YOUR_BRAND_SLUG</span>
```

**What to replace:**
- `YOUR_BRAND_NAME` → Your actual brand name
- `YOUR_BRAND_SLUG` → Your brand's Slack channel slug (e.g., `linea`, `ethereum`, `arbitrum`)

### 2. Brand Logo & Images

#### Logo Files Location

**Your brand logo should be placed at:** `/public/placeholder-logo.png`

**Current placeholder:** The template uses `/public/placeholder-logo.png` (a generic placeholder image with reduced opacity to indicate it's temporary).

#### Steps to Replace Logo

1. **Add your logo file:**
   - Place your brand logo in `/public/` directory
   - Recommended formats: PNG (with transparency) or SVG
   - Recommended size: ~200px width (height will scale proportionally)

2. **Update the image path in `components/navbar.tsx` (Line 21):**
   ```typescript
   <Image
     src="/placeholder-logo.png"  // Change to your logo filename
     alt="YOUR_BRAND_NAME"
     width={100}
     height={28}
     className="h-7 w-auto opacity-60"  // Remove opacity-60 once using real logo
   />
   ```

3. **Update the path:**
   - Change `src="/placeholder-logo.png"` to `src="/your-logo.png"` (or whatever you named your file)
   - Remove `opacity-60` class once you're using your real logo

#### Other Images

- **Flipside logo** (`/images/image.png`): Update if Flipside branding changes or if you need a different partner logo
- **Favicon** (`/public/icon-*.png`): Replace with your brand favicon if desired

### 3. Brand Colors

The template uses **gray placeholder colors** (`#6B7280`, `#4B5563`, `#9CA3AF`) to make it obvious what needs replacement. Replace these with your brand's actual colors.

#### File: `app/globals.css`

**Lines 14-16**: Update CSS color variables:

```css
:root {
  /* TODO: Replace these placeholder gray colors with your brand's primary colors */
  --brand-primary: #6B7280;      /* Replace with your primary brand color */
  --brand-light: #9CA3AF;         /* Replace with lighter shade of primary */
  --brand-bright: #4B5563;        /* Replace with darker/bright accent color */
}
```

**Lines 73-75**: Update corresponding theme color variables:

```css
--color-brand-primary: var(--brand-primary);
--color-brand-light: var(--brand-light);
--color-brand-bright: var(--brand-bright);
```

**Lines 148-163**: Update glow effects and icon background gradients:

```css
/* TODO: Update these with your brand colors */
.glow-cyan { /* Update class name and colors */ }
.icon-bg-light-cyan { /* Update gradient colors */ }
.icon-bg-cyan { /* Update gradient colors */ }
```

#### Files Using Brand Colors

Search for these placeholder grays and replace with your brand colors:

- **`components/navbar.tsx`**:
  - Line 62: Button background `bg-[#6B7280]` → `bg-[#YOUR_COLOR]`
  - Line 62: Button hover `hover:bg-[#4B5563]` → `hover:bg-[#YOUR_HOVER_COLOR]`
  - Line 105: Mobile button colors (same replacements)

- **`components/agent-launcher.tsx`**:
  - Lines 15, 29, 42: Workflow icon colors `text-[#6B7280]` → `text-[#YOUR_COLOR]`
  - Lines 16, 30, 43: Workflow icon backgrounds `bg-[#6B7280]/10` → `bg-[#YOUR_COLOR]/10`
  - Lines 227, 249, 271: Dropdown hover colors `hover:bg-[#6B7280]/10` → `hover:bg-[#YOUR_COLOR]/10`
  - Line 288: Button background `bg-[#6B7280]` → `bg-[#YOUR_COLOR]`
  - Line 288: Button hover `hover:bg-[#4B5563]` → `hover:bg-[#YOUR_HOVER_COLOR]`

**Tip**: Use your IDE's "Find and Replace" feature to replace all instances of `#6B7280` and `#4B5563` with your brand colors.

### 4. Workflows Configuration

Workflows are the core feature of this template. Each workflow card launches a Flipside AI analysis when clicked.

#### File: `components/agent-launcher.tsx`

**Location**: Lines 6-49 (the `workflows` array)

#### Workflow Object Structure

Each workflow is an object with these properties:

```typescript
{
  title: string,              // Display name (shown on card)
  description: string,         // What the workflow does
  icon: LucideIcon,           // Icon component from lucide-react
  iconColor: string,          // Tailwind text color class
  iconBg: string,             // Tailwind background color class
  input: string,              // What input is required (display text)
  output: string,             // What output is produced (display text)
  prompt?: string,            // Workflow prompt (if using prompt-based)
  link?: string,              // Direct workflow URL (if using link-based)
  // One of these flags must be true:
  requiresChainComparison?: boolean,    // User selects 2 chains
  requiresChainSelection?: boolean,     // User selects 1 chain
  requiresChainTokenSelection?: boolean // User selects chain/token pair
}
```

#### Workflow URL Construction

The template constructs Flipside AI Chat URLs in two ways:

**Method 1: Using `prompt` property** (prompt-based workflows)

```typescript
{
  prompt: "use planning agent to run workflow WORKFLOW_ID",
  requiresChainSelection: true
}
```

**URL Construction Logic:**
1. Base URL: `https://flipsidecrypto.com/chat?m=`
2. Encode the prompt: `encodeURIComponent(workflow.prompt)`
3. If `requiresChainSelection`: Append `%20for%20${encodeURIComponent(selectedChain)}`
4. If `requiresChainComparison`: Replace `{chain1}` and `{chain2}` placeholders in prompt
5. Final URL: `https://flipsidecrypto.com/chat?m=ENCODED_PROMPT%20for%20CHAIN_NAME`

**Example:**
```typescript
{
  prompt: "use planning agent to run workflow abc123",
  requiresChainSelection: true
}
// User selects "ethereum"
// Result: https://flipsidecrypto.com/chat?m=use%20planning%20agent%20to%20run%20workflow%20abc123%20for%20ethereum
```

**Method 2: Using `link` property** (direct workflow links)

```typescript
{
  link: "http://flipsidecrypto.com/chat?m=run%20%5B%40Workflow%20Name%5D%28workflow:WORKFLOW_ID%29",
  requiresChainSelection: true
}
```

**URL Construction Logic:**
1. Use `workflow.link` directly
2. If `requiresChainSelection`: Append `%20for%20${encodeURIComponent(selectedChain)}`
3. Final URL: `WORKFLOW_LINK%20for%20CHAIN_NAME`

**Example:**
```typescript
{
  link: "http://flipsidecrypto.com/chat?m=run%20%5B%40Analysis%5D%28workflow:xyz789%29",
  requiresChainSelection: true
}
// User selects "arbitrum"
// Result: http://flipsidecrypto.com/chat?m=run%20%5B%40Analysis%5D%28workflow:xyz789%29%20for%20arbitrum
```

#### Workflow Types

**1. Chain Comparison Workflows** (`requiresChainComparison: true`)

User selects two chains sequentially. The prompt should include `{chain1}` and `{chain2}` placeholders.

```typescript
{
  title: "Compare Two Chains",
  prompt: "compare {chain1} with {chain2}",
  requiresChainComparison: true
}
```

**2. Single Chain Selection** (`requiresChainSelection: true`)

User selects one chain from dropdown. Chain name is appended to URL.

```typescript
{
  title: "Analyze Chain",
  prompt: "analyze chain",
  requiresChainSelection: true
}
// URL becomes: .../chat?m=analyze%20chain%20for%20ethereum
```

**3. Chain/Token Pair Selection** (`requiresChainTokenSelection: true`)

User selects a chain/token pair (e.g., "Ethereum / ETH"). Pair ID is appended to URL.

```typescript
{
  title: "Token Analysis",
  prompt: "analyze token",
  requiresChainTokenSelection: true
}
// URL becomes: .../chat?m=analyze%20token%20for%20ethereum/ETH
```

**4. No Selection Required**

Workflow launches immediately without user input.

```typescript
{
  title: "General Analysis",
  prompt: "run general analysis",
  // No requires* flags
}
```

#### Adding Your Workflows

1. **Remove example workflows** (lines 9-49) - they're marked with `[EXAMPLE]` prefix
2. **Add your workflow objects** to the `workflows` array:

```typescript
const workflows = [
  {
    title: "Your Workflow Name",
    description: "What this workflow analyzes and produces",
    icon: YourIcon, // Import from 'lucide-react'
    iconColor: "text-[#YOUR_BRAND_COLOR]",
    iconBg: "bg-[#YOUR_BRAND_COLOR]/10",
    input: "What the user needs to provide",
    output: "What they'll get back",
    prompt: "your workflow prompt or workflow ID",
    requiresChainSelection: true, // Choose appropriate flag
  },
  // Add more workflows...
]
```

3. **Import icons** at the top of the file:
```typescript
import { YourIcon, AnotherIcon } from 'lucide-react'
```

#### Available Icons

Browse [Lucide Icons](https://lucide.dev/icons/) and import what you need:
```typescript
import { 
  GitCompare, Trophy, Shield, 
  BarChart, TrendingUp, Users,
  // ... any icon from lucide-react
} from 'lucide-react'
```

### 5. Chain & Token Lists

#### File: `components/agent-launcher.tsx`

**Lines 51-59**: `evmChains` array

Update with chains your workflows support:

```typescript
const evmChains = [
  { id: "chain_id", name: "Display Name" },
  { id: "ethereum", name: "Ethereum" },
  { id: "arbitrum", name: "Arbitrum" },
  // Add/remove chains as needed
]
```

**Important**: The `id` value is what gets appended to workflow URLs. Make sure it matches what Flipside AI expects.

**Lines 61-73**: `chainTokenPairs` array

Update with chain/token combinations:

```typescript
const chainTokenPairs = [
  { id: "chain_id/token_symbol", name: "Chain Name / TOKEN" },
  { id: "ethereum/ETH", name: "Ethereum / ETH" },
  { id: "arbitrum/ETH", name: "Arbitrum / ETH" },
  // Add/remove pairs as needed
]
```

**Important**: The `id` format `chain_id/token_symbol` is appended to workflow URLs. Ensure format matches Flipside AI expectations.

### 6. Navigation Links

#### File: `components/navbar.tsx`

**Lines 31-53**: Update external links as needed:

- **Snowflake Marketplace** (line 31): Update if your Snowflake listing URL changes
- **Documentation** (line 39): Update to your docs URL
- **MCP Keys** (line 47): Update if MCP settings URL changes
- **Flipside AI Chat** (line 61, 107): Update if chat URL changes

### 7. Metadata & SEO

#### File: `app/layout.tsx`

Update page metadata for SEO:

```typescript
export const metadata: Metadata = {
  title: "Your Brand | AI-Powered Modules",
  description: "Your brand-specific description for search engines and social sharing",
  generator: "v0.app", // Update if needed
}
```

## 🎨 Project Structure

```
├── app/
│   ├── layout.tsx         # Root layout - UPDATE: metadata, title
│   ├── page.tsx           # Main page (no changes needed)
│   └── globals.css        # Global styles - UPDATE: brand colors
├── components/
│   ├── agent-launcher.tsx # Main component - UPDATE: workflows, chains, brand name
│   ├── navbar.tsx          # Navigation - UPDATE: logo path, brand name, links
│   └── ui/                # shadcn/ui components (no changes needed)
├── lib/
│   └── utils.ts           # Utility functions (no changes needed)
├── public/
│   ├── placeholder-logo.png  # REPLACE: Add your brand logo here
│   └── images/            # Image assets
└── package.json           # Dependencies (no changes needed)
```

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **React:** 19.2.0
- **TypeScript:** 5+
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Icons:** Lucide React

## 📝 Important Notes

- **This is a template** - Search for `TODO:` comments throughout the codebase to find all customization points
- **Placeholder colors** (`#6B7280`, `#4B5563`) are intentionally gray to make replacement obvious
- **Placeholder text** (`YOUR_BRAND_NAME`) is visible in the UI - replace before deployment
- **Example workflows** are marked with `[EXAMPLE]` prefix - remove and replace with your workflows
- **Workflow URLs** open Flipside AI Chat in new tabs - ensure workflow IDs/prompts are valid
- **Chain lists** are examples - update to match your supported chains

## 🔧 Development Commands

```bash
# Development server with hot reload
pnpm dev

# Build for production
pnpm build

# Run production build locally
pnpm start

# Lint code
pnpm lint
```

## 📦 Package Manager

This project uses **pnpm** exclusively (see `pnpm-lock.yaml`). Please use pnpm for all package management operations to ensure consistent dependency resolution.

## 🚀 Deployment Checklist

Before deploying, ensure you've:

- [ ] Replaced all `YOUR_BRAND_NAME` instances
- [ ] Added your brand logo and updated image path
- [ ] Replaced all gray placeholder colors with brand colors
- [ ] Removed `[EXAMPLE]` workflows and added your workflows
- [ ] Updated chain lists to match your supported chains
- [ ] Updated Slack channel reference
- [ ] Updated metadata (title, description)
- [ ] Tested all workflow URLs work correctly
- [ ] Verified logo displays correctly
- [ ] Checked all colors match brand guidelines

## 💡 Tips

- **Use Find & Replace**: Search for `#6B7280` and `#4B5563` to quickly replace all color instances
- **Search for TODOs**: Use your IDE's search to find all `TODO:` comments
- **Test Workflows**: Click through each workflow to ensure URLs construct correctly
- **Check Mobile**: Test the responsive design on mobile devices
- **Validate URLs**: Ensure workflow URLs work in Flipside AI Chat before deploying
