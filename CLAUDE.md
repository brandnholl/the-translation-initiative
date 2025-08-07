# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Sanity-based content management system for "The Translation Initiative" - a multilingual content platform supporting English and Indonesian languages. The project is structured as a single Sanity Studio workspace.

## Architecture

- **Sanity Studio**: Located in `/studio` directory, contains the CMS configuration and schema definitions
- **Content Schemas**: Two main content types defined in `studio/schemaTypes/`:
  - `author.ts`: Author profiles with multilingual contribution support
  - `post.ts`: Blog posts with rich content, cover images, and language-specific content
- **Configuration**: Main Sanity config in `studio/sanity.config.ts` (Project ID: 2oq3vpg6, Dataset: production)

## Development Commands

All commands should be run from the `/studio` directory:

```bash
# Development server
pnpm dev  # or npm run dev

# Production build
pnpm build  # or npm run build

# Start production server
pnpm start  # or npm run start

# Deploy to Sanity hosting
pnpm deploy  # or npm run deploy

# Deploy GraphQL API
pnpm deploy-graphql  # or npm run deploy-graphql
```

## Key Features

- **Multilingual Support**: Both authors and posts support English (`en`) and Indonesian (`id`) languages
- **Rich Content**: Posts support block content with embedded images and hotspot cropping
- **Author References**: Posts reference authors through Sanity's reference system
- **Image Management**: Cover photos and profile photos with hotspot support

## Code Style

- Uses Prettier with specific formatting (no semicolons, single quotes, 100 char width, no bracket spacing)
- TypeScript throughout with proper Sanity type definitions
- ESLint configured with `@sanity/eslint-config-studio`

## Schema Structure

Content models follow Sanity's `defineType` and `defineField` patterns:
- Authors have names, profile photos, and contribution languages
- Posts have cover photos, titles, descriptions, author references, language settings, and rich content arrays
- All image fields use hotspot cropping for responsive design