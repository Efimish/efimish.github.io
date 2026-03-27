# Contributing & Maintenance Guide

This is a personal website repository.
While the source is public, I do not generally expect
pull requests for content, structure, or design decisions.
Issues and technical suggestions are still welcome.

## Commit Convention

This repository uses
[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary).

### Rules

- Prefer one logical change per commit
- Use **lowercase**
- Use the **imperative mood**
- Keep the description **short and specific**
- Do not end the message with a period

### Examples

```yaml
feat: rename posts section to notes
fix: update broken links
content: add new blog post about Astro
style: adjust typography scale
refactor: extract social links component
chore: update dependencies
ci: fix GitHub Pages deployment
docs: update contributing guide
```

## Tooling

- [bun](https://bun.com/docs/installation)
- [typst](https://typst.app/open-source/#download)

## Common tasks

### Full dependency update

```bash
bun upgrade
rm bun.lock
bun update
```

### Generate favicons

```bash
bun unused/favicon.ts
```

### Compile resumes

```bash
typst compile --font-path src/assets/fonts src/assets/resume/resume.typ public/resume.pdf

typst compile --font-path src/assets/fonts src/assets/resume/резюме.typ public/резюме.pdf
```

### Create QR codes

```bash
bunx qrcode -q 1 -s 1 -o qr.png "https://efimish.github.io"
bunx qrcode -q 1 -s 1 -o qr.svg "https://efimish.github.io"
```

### Test website using Unlighthouse

```bash
bunx unlighthouse --site "https://efimish.github.io"
```

### Check licenses of node_modules

```bash
bunx license-checker --summary
```

### Convert image to lossless WebP

```bash
bunx sharp-cli -i image.png -f webp --lossless -o .
```

### Sync content with Obsidian

> [!CAUTION]
> To prevent content loss, first commit both here and in Obsidian.

This assumes the Obsidian vault is located at `~/notes`.

```bash
# Diff
find . ~/notes -name ".DS_Store" -type f -print -delete
diff -q src/content/posts ~/notes/Posts

# Copy from here to Obsidian
rsync -rtvhP --delete src/content/posts/ ~/notes/Posts/

# Copy from Obsidian to here
rsync -rtvhP --delete ~/notes/Posts/ src/content/posts/
```
