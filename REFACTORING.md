# Code Refactoring Documentation

## Overview
This document describes the architectural improvements and refactoring performed on the Tumaini Jipya codebase to improve maintainability, reusability, and developer experience.

## Refactoring Goals
1. **Reduce Code Duplication** - Extract repeated patterns into reusable components
2. **Improve Maintainability** - Centralize constants and configuration
3. **Enhance Developer Experience** - Clear component structure and naming
4. **Simplify Future Updates** - Single source of truth for common data

---

## New Components Created

### 1. UI Components (`components/ui/`)

#### **PageHero.vue**
Reusable hero section component for all pages.

**Props:**
- `title` - Main page title
- `description` - Page description
- `badge` - Optional badge text
- `badgeIcon` - Optional badge icon component

**Slots:**
- `title` - Custom title content
- `description` - Custom description content

**Usage Example:**
```vue
<PageHero
  title="Mitgliedschaft bei Tumaini Jipya e.V."
  description="Unterstützen Sie unsere Mission"
  badge="Werden Sie Teil der Gemeinschaft"
/>
```

#### **DecorativeBackground.vue**
Reusable decorative background circles for gradient sections.

**Props:**
- `topRightSize` - Size class for top-right circle (default: 'w-72 h-72')
- `topRightPosition` - Position class (default: 'top-20 right-20')
- `topRightColor` - Color class (default: 'bg-white/5')
- `bottomLeftSize` - Size class for bottom-left circle (default: 'w-96 h-96')
- `bottomLeftPosition` - Position class (default: 'bottom-20 left-20')
- `bottomLeftColor` - Color class (default: 'bg-emerald-400/10')

**Usage:**
```vue
<DecorativeBackground />
```

#### **SectionHeader.vue**
Consistent section headers with optional badge and highlighted text.

**Props:**
- `title` - Section title
- `highlightedText` - Text to highlight in teal color
- `description` - Section description
- `badge` - Optional badge text
- `badgeIcon` - Optional badge icon

**Slots:**
- `title` - Custom title content
- `description` - Custom description content

**Usage Example:**
```vue
<SectionHeader
  title="Wo wir helfen"
  highlightedText="helfen"
  description="Unsere laufenden Projekte machen einen echten Unterschied"
  badge="Aktuelle Projekte"
/>
```

#### **FeatureCard.vue**
Reusable card component for features, mission areas, and services.

**Props:**
- `title` - Card title
- `description` - Card description
- `gradient` - Gradient class for icon background
- `iconPath` - SVG path data
- `borderColor` - Hover border color
- `linkText` - Link button text
- `linkColor` - Link button color
- `hasLink` - Show/hide link button

**Slots:**
- `icon` - Custom icon content
- `title` - Custom title content
- default - Custom description content

**Usage Example:**
```vue
<FeatureCard
  title="Humanitäre Hilfe"
  description="Bereitstellung von Nahrungsmitteln..."
  gradient="from-red-500 to-pink-600"
  :has-link="true"
  link-text="Mehr erfahren"
/>
```

#### **CTASection.vue**
Flexible call-to-action section component.

**Props:**
- `variant` - 'gradient' or 'white' (default: 'gradient')
- `title` - CTA title
- `description` - CTA description
- `showIcon` - Show/hide icon (default: true)
- `iconPath` - SVG path for icon
- `primaryButtonText` - Primary button text
- `primaryButtonLink` - Primary button link
- `secondaryButtonText` - Secondary button text
- `secondaryButtonLink` - Secondary button link
- `showTrustIndicators` - Show/hide trust indicators section

**Slots:**
- `icon` - Custom icon
- `title` - Custom title
- `description` - Custom description
- `actions` - Custom action buttons
- `trustIndicators` - Custom trust indicators

**Usage Example:**
```vue
<CTASection
  variant="gradient"
  :show-trust-indicators="true"
>
  <template #title>
    Join our <span class="text-emerald-300">Community</span>
  </template>
  <template #actions>
    <!-- Custom buttons -->
  </template>
</CTASection>
```

---

## Composables Created

### **useConstants.ts** (`composables/`)

Centralized configuration and constants for the entire application.

**Exports:**
- `NAVIGATION_LINKS` - Main navigation menu items
- `SOCIAL_LINKS` - Social media links
- `CONTACT_INFO` - Organization contact information
- `ORGANIZATION` - Organization details
- `MISSION_AREAS` - Mission area configuration

**Usage:**
```vue
<script setup>
const { NAVIGATION_LINKS, ORGANIZATION, CONTACT_INFO } = useConstants();
</script>

<template>
  <div>{{ ORGANIZATION.name }}</div>
  <a :href="`mailto:${CONTACT_INFO.email}`">Contact</a>
</template>
```

---

## Refactored Components

### **Header.vue**
**Changes:**
- Uses `useConstants()` for navigation links
- Removed hardcoded navigation array
- Cleaner component logic

**Before:**
```javascript
const navLinks = [
  { label: 'Home', href: '/' },
  // ... more links
];
```

**After:**
```javascript
const { NAVIGATION_LINKS, ORGANIZATION } = useConstants();
```

### **Footer.vue**
**Changes:**
- Uses `useConstants()` for all data
- Contact information now from constants
- Organization details from constants
- Loop-based rendering for links

**Benefits:**
- Single source of truth for contact info
- Easier to update organization details
- Consistent data across components

### **CalltoAction.vue**
**Changes:**
- Now uses `<CTASection>` component
- Cleaner template with slots
- Better separation of concerns

**Before:** ~70 lines of template code
**After:** ~56 lines using component composition

---

## Architecture Benefits

### 1. **DRY (Don't Repeat Yourself)**
- Hero sections no longer duplicated across pages
- Decorative backgrounds reused
- CTA sections use same component

### 2. **Single Source of Truth**
- Contact information in one place
- Navigation links centralized
- Organization details consistent

### 3. **Easier Maintenance**
- Update contact email in one file
- Change navigation in one place
- Modify colors/gradients centrally

### 4. **Better Developer Experience**
- Clear component structure
- Self-documenting code
- Easy to understand purpose of each file

### 5. **Scalability**
- Easy to add new pages with PageHero
- Simple to create new feature cards
- Straightforward to add CTA sections

---

## Migration Guide

### Converting a Page to Use New Components

**Before:**
```vue
<template>
  <section class="relative bg-gradient-to-br from-teal-700...">
    <!-- 50+ lines of hero code -->
  </section>
</template>
```

**After:**
```vue
<template>
  <PageHero
    title="Page Title"
    description="Page description"
    badge="Badge Text"
  />
</template>
```

### Adding a New Feature Section

```vue
<template>
  <div class="grid grid-cols-3 gap-8">
    <FeatureCard
      v-for="feature in features"
      :key="feature.id"
      :title="feature.title"
      :description="feature.description"
      :gradient="feature.gradient"
      :has-link="true"
    />
  </div>
</template>

<script setup>
const features = [
  {
    id: 1,
    title: 'Feature 1',
    description: 'Description...',
    gradient: 'from-blue-500 to-indigo-600'
  }
];
</script>
```

---

## File Structure

```
components/
├── global/              # Global layout components
│   ├── Header.vue       # ✅ Refactored to use constants
│   ├── Footer.vue       # ✅ Refactored to use constants
│   └── hero.vue         # Original homepage hero
├── ui/                  # ✅ NEW: Reusable UI components
│   ├── PageHero.vue     # ✅ NEW: Page hero sections
│   ├── DecorativeBackground.vue  # ✅ NEW: Decorative elements
│   ├── SectionHeader.vue         # ✅ NEW: Section headers
│   ├── FeatureCard.vue           # ✅ NEW: Feature cards
│   ├── CTASection.vue            # ✅ NEW: CTA sections
│   └── Custom-Button.vue         # Existing button component
├── mission.vue          # Mission section component
└── CalltoAction.vue     # ✅ Refactored to use CTASection

composables/
└── useConstants.ts      # ✅ NEW: Centralized constants

pages/                   # Page components (to be refactored)
```

---

## Next Steps for Complete Refactoring

### High Priority
1. **Refactor `mission.vue`** to use `FeatureCard` and constants
2. **Refactor page files** to use `PageHero`:
   - `pages/donate.vue`
   - `pages/team.vue`
   - `pages/membership.vue`
   - `pages/contact.vue`
   - `pages/impressium.vue`

### Medium Priority
3. **Create `ProjectCard` component** for projects page
4. **Create `TeamMemberCard` component** for team page
5. **Extract contact form** into separate component

### Future Enhancements
6. **Add TypeScript** for better type safety
7. **Add component tests** for reusable components
8. **Create Storybook** for component documentation

---

## Best Practices

### When Creating New Components:
1. ✅ Use meaningful, descriptive names
2. ✅ Accept props for customization
3. ✅ Provide slots for flexibility
4. ✅ Document props and usage
5. ✅ Keep components focused and single-purpose

### When Using Constants:
1. ✅ Always use `useConstants()` for shared data
2. ✅ Don't hardcode contact info, navigation, etc.
3. ✅ Update constants file when data changes

### When Refactoring:
1. ✅ Test after each change
2. ✅ Keep Git commits small and focused
3. ✅ Document breaking changes
4. ✅ Update this documentation

---

## Performance Considerations

- Components are auto-imported by Nuxt (no manual imports needed)
- Slots provide flexibility without overhead
- Constants are computed once and reused
- HMR (Hot Module Replacement) works seamlessly

---

## Questions or Issues?

Refer to:
- `CLAUDE.md` - General codebase documentation
- Component source code - Inline comments and prop definitions
- Nuxt 3 documentation - https://nuxt.com/docs
