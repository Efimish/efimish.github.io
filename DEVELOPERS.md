# Developer's Guide

## Tools

- `bun`
- `typst`

## Full update

```bash
bun upgrade
rm bun.lock
bun update
```

## Generate a set of favicons from one file

```bash
bun unused/favicon.ts
```

## Compile Typst resumes into PDF

```bash
typst compile --font-path src/assets/fonts src/assets/resume/resume.typ public/resume.pdf

typst compile --font-path src/assets/fonts src/assets/resume/резюме.typ public/резюме.pdf
```

## Create QR codes

```bash
bunx qrcode -q 1 -s 1 -o qr.png "https://efimish.github.io"
bunx qrcode -q 1 -s 1 -o qr.svg "https://efimish.github.io"
```

## Test website using Unlighthouse

```bash
bunx unlighthouse --site "https://efimish.github.io"
```

## Check licenses of node_modules

```bash
bunx license-checker --summary
```
