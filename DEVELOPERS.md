# Developer's Guide

## Tools

- `bun`
- `librsvg`
- `typst`

## Full update

```bash
bun upgrade
rm bun.lock
bun update
```

## Convert favicon.svg to other formats

```bash
# Browser favicon: 32px, no margin, no background
rsvg-convert favicon.svg -w 32 -h 32 -o favicon.ico

# Apple touch icon: 180px canvas, 15% margin, white background
rsvg-convert favicon.svg --page-width 180 --page-height 180 --left 27 --top 27 -w 126 -h 126 -b white -o apple-touch-icon.png

# Android icon: 192px canvas, 20% margin, white background
rsvg-convert favicon.svg --page-width 192 --page-height 192 --left 38 --top 38 -w 116 -h 116 -b white -o favicon-192.png

# Open Graph (link previews): 512px canvas, 20% margin, white background
rsvg-convert favicon.svg --page-width 512 --page-height 512 --left 102 --top 102 -w 308 -h 308 -b white -o favicon-512.png
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
