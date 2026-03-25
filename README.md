# RepoLens

See the shape of code.

RepoLens transforms any GitHub repository into an interactive intelligence canvas. Paste a repository URL and explore architecture, dependency flow, contributor dynamics, and commit history in one place.

## Features

### Architecture Map

- Auto-generated Mermaid flowcharts that reveal module relationships
- AI-assisted diagram generation for richer and more context-aware structure mapping
- Layered grouping for routes, UI, core logic, config, tests, and docs
- Pan, zoom, drag, and export support

### File Topology Graph

- Cytoscape-powered interactive file tree visualization
- Extension-based node coloring with high contrast palette
- Click-to-preview source files with syntax highlighting
- Fast file search with live filtering

### Dependency Intelligence

- Dependency graph parsing for common manifest files
- Production and dev dependency edge distinction
- Left-to-right layout with clear hierarchy

### Commit and Branch Timeline

- Date-grouped commit timeline with avatars and metadata
- Commit search by message, author, or SHA
- Sorting controls and incremental loading for large histories
- Branch overview cards with quick scanning cues

### Sidebar Overview

- Repository health snapshot with stars, forks, contributors, and languages
- Language donut visualization
- Tech stack extraction
- Optional analytics integration for production usage

## Tech Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4 + shadcn/ui
- Framer Motion
- Cytoscape.js + cytoscape-fcose
- React Flow + Dagre
- Mermaid.js
- Recharts
- GitHub REST API

## Usage

1. Start the app locally.
2. Paste a GitHub repository URL (for example: https://github.com/facebook/react).
3. Explore tabs for architecture, file graph, branches, dependencies, and contributors.
4. Optionally add a GitHub PAT for private repos and higher rate limits.

## Development

```bash
npm install
npm run dev
```

Build validation:

```bash
npm run build
```

Linting:

```bash
npm run lint
```

## License

MIT
