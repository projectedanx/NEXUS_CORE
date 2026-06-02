# Lessons Learned & Context Memory

## Repository Infrastructure Hygiene
- Dependency versions should be pinned appropriately.
- Build tools must be correctly categorized as `devDependencies` in `package.json`.
- The root directory should be kept clear of unimported scripts.

## Standard Execution Scripts
- Build: `npm run build`
- Lint: `npm run lint`
- Testing: No test script available.

## Core Technologies
- React application built with TypeScript and Vite.
- Styling powered by Tailwind CSS.
- Package manager: npm.

## Documentation Standards
- Comprehensive JSDoc/TSDoc docstrings are required for all public functions, methods, and classes.
- Explanations must include purpose, parameters, and return values.

## Pattern Implementation & Integrations
- DRP-LEXICON-992 cognitive bytecode patterns have been introduced, specifically focusing on isomorphic bridging.
- The Lexicon establishes cross-domain conceptual mappings that can be applied algorithmically.

## Agentic Emergence Strategy: Stigmergic Trace Monitor
- Implemented `StigmergicMonitor` to observe the boundary constraints and virtual pheromones, mapping human ontological grounding to AI topological execution (PAT-008).
- AI agentic inversion is managed actively by UI abstractions (Epistemic Escrow visualizers) rather than just passive code constraints.


## Code Documentation and Hygiene
- **Strict Dependency Pinning**: Removing carets and tildes from package versions prevents unexpected drift in development and production environments.
- **Enforced Docstrings**: Enforcing a rule that every public function, component, and class must have a JSDoc/TSDoc string ensures onboarding remains trivial, even as domain logic (like Stigmergic Monitors and Isomorphic Bridges) becomes highly complex.
- **Purity of Root**: Maintaining a clean root directory free of unimported scripts prevents cognitive load for new developers entering the repository.

## 0xCARTO Analysis Integration
- Evaluated repository using the Mycelial Ingestion Protocol.
- Ensured README reflects structural constraints and architectural intent mapped against the codebase.
- No undocumented dependencies or environment variables detected, validating strict repository hygiene constraints.
