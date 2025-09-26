# Dark Mode Implementation Plan

## Issues Identified
- ThemeContext.tsx has export mismatch (named vs default)
- tailwind.config.js missing darkMode: 'class'
- Components use hardcoded dark styles instead of Tailwind dark: classes
- ThemeProvider wrapper conflicts with layout body classes

## Tasks
- [x] Fix ThemeContext.tsx export/import issue
- [x] Update tailwind.config.js to enable dark mode
- [x] Clean up ThemeContext.tsx (remove commented code)
- [x] Update layout.tsx to properly integrate ThemeProvider
- [ ] Update Header.tsx to use dark: classes
- [ ] Update HeroBig.tsx and other components to use dark: classes
- [ ] Update page.tsx sections to use theme-aware classes
- [ ] Test dark/light mode toggle functionality
- [ ] Ensure no flash of incorrect theme on load
