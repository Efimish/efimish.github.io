---
title: Markdown and its standards
description: Markdown language, CommonMark, GFM, and extensions
created: 2025-06-28
updated: 2026-03-05
tags:
  - review
---

[Markdown](https://daringfireball.net/projects/markdown/)
is a plain text format for writing structured documents.
The design goal of Markdown is readability — the source
text should remain easy to read even without rendering.

Markdown is widely used for:

- Blogging
- README files
- Documentation
- Messaging platforms
- Static site generators

I personally use Markdown to write [[Welcome to my blog|this blog]]
and take notes in [[Obsidian]].

## History and Standards

Markdown was created in 2004 by John Gruber in collaboration with Aaron Swartz.
The original implementation did not have a strict specification,
which led to inconsistencies between platforms.

Over time, formal standards appeared:

1. CommonMark

CommonMark is a formal specification that defines how Markdown should behave.
It standardizes the core syntax and resolves ambiguities of the original implementation.

2. GitHub Flavored Markdown (GFM)

GFM is based on CommonMark and adds extra features such as:

- Task lists
- Tables
- Strikethrough
- Autolinks

3. Other Extensions

Some tools extend Markdown further.
For example, Obsidian supports wiki links:

```md
[[Note name]]
```

Wiki links originate from wiki systems and are **not part of CommonMark or GFM**.
They are tool-specific extensions.

## CommonMark Features

---

### Headings

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

```md
# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6
```

---

### Paragraphs

Paragraphs are separated
by a blank line.

Second paragraph.

```md
Paragraphs are separated
by a blank line.

Second paragraph.
```

---

### Text formatting

_italic_, **bold**, `inline code`.

```md
_italic_, **bold**, `inline code`.
```

---

### Lists

Unordered list:

- Item
- Item
  - Subitem
- Item

Ordered list:

1. Item
2. Item
   1. Subitem
3. Item

```md
Unordered list:

- Item
- Item
  - Subitem
- Item

Ordered list:

1. Item
2. Item
   1. Subitem
3. Item
```

---

### Line dividers

---

```md
---
```

---

### Code blocks

```js
// code block
console.log("Hello, world!");
```

````md
```js
// code block
console.log("Hello, world!");
```
````

---

### Blockquotes

> Quote
>
> > Nested quote

```md
> Quote
>
> > Nested quote
```

---

### Links and Images

[My website](https://efimish.dev)

![My website favicon](https://efimish.dev/favicon-192.png)

```md
[My website](https://efimish.dev)

![My website favicon](https://efimish.dev/favicon-192.png)
```

---

## GFM Extensions

---

### Strikethrough

~~strikethrough~~

```md
~~strikethrough~~
```

---

### Task lists

- [x] Task 1
- [ ] Task 2
  - [x] Subtask 1
  - [ ] Subtask 2
- [x] Task 4

```md
- [x] Task 1
- [ ] Task 2
  - [x] Subtask 1
  - [ ] Subtask 2
- [x] Task 4
```

---

### Tables

Table:

| First Header | Second Header |
| ------------ | ------------- |
| Content Cell | Content Cell  |
| Content Cell | Content Cell  |

Table with aligned columns:

| Left Aligned | Center Aligned | Right Aligned |
| :----------- | :------------: | ------------: |
| 2025-06-01   |      some      |         $4.99 |
| 2025-06-02   |     wordy      |           $99 |
| 2025-06-03   |      text      |          $799 |

```md
Table:

| First Header | Second Header |
| ------------ | ------------- |
| Content Cell | Content Cell  |
| Content Cell | Content Cell  |

Table with aligned columns:

| Left Aligned | Center Aligned | Right Aligned |
| :----------- | :------------: | ------------: |
| 2025-06-01   |      some      |         $4.99 |
| 2025-06-02   |     wordy      |           $99 |
| 2025-06-03   |      text      |          $799 |
```

---

### Footnotes

First footnote[^1].
Second footnote[^2].
Named footnote[^named].

[^1]: This is the first footnote.

[^2]: This is the second footnote.

[^named]: This is the named footnote.

```md
First footnote[^1].
Second footnote[^2].
Named footnote[^named].

[^1]: This is the first footnote.

[^2]: This is the second footnote.

[^named]: This is the named footnote.
```

---

## Obsidian / Wiki-style Extensions

---

### Wiki Links and Embeds

[[Markdown]]

[[#Wiki Links and Embeds]]

![[favicon-192.png]]

```md
[[Markdown]]

[[#Wiki Links and Embeds]]

![[favicon-192.png]]
```
