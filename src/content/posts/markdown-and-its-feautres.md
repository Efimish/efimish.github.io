---
title: Markdown and its features
description: About Markdown language and its capabilities
date: 2025-06-28
tags:
  - review
---

[Markdown](https://en.wikipedia.org/wiki/Markdown) is a markup language.
It is used for creating formatted text.
Its key feature is you only need a plain-text editor to write it.
This is because Markdown remains readable without any rendering.
Markdown is widely used for blogging, messaging, online forums, and readme files.
I personally use Markdown to write [this blog](/posts/welcome-to-my-blog)
and take notes with [Obsidian](/posts/how-to-start-with-obsidian).

Below I will show all the features of Markdown.

---

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

Paragraphs are separated by a blank line.

Text attributes: _italic_, **bold**, `monospace`, ~~strikethrough~~.

> Quote
>> Inner quote

```js
// code block
console.log('Hello, world!');
```

Line Divider:

---

[Link to my website](https://efimish.github.io)

![Crescent moon with a star](https://efimish.github.io/favicon-192.png)

## Lists

There are three types of list you can format in Markdown: \
unordered lists, ordered lists, and task lists.

Here's an unordered list:

- Item
- Item
  - Subitem
- Item

Here's an ordered list:

1. Item
2. Item
    1. Subitem
3. Item

Here's a task list:

- [x] Task 1
- [ ] Task 2
  - [ ] Subtask 1
- [x] Task 4

## Tables

This is a table in Markdown.

| First Header | Second Header |
| ------------ | ------------- |
| Content Cell | Content Cell  |
| Content Cell | Content Cell  |

You can align cell contents

| Left Aligned | Center Aligned | Right Aligned |
|:------------ |:--------------:| -------------:|
| 2025-06-01   |      some      |         $4.99 |
| 2025-06-02   |     wordy      |           $99 |
| 2025-06-03   |      text      |          $799 |

## Footnotes

Here's a simple footnote[^1], and here's the second one[^2].

[^1]: This is the first footnote.

[^2]: And this is the second footnote.

## Source code

Here you can see what this document will look like without rendering.

`````markdown
# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

Paragraphs are separated by a blank line.

Text attributes: _italic_, **bold**, `monospace`, ~~strikethrough~~.

> Quote
>> Inner quote

```js
// code block
console.log('Hello, world!');
```

Line Divider:

---

[Link to my website](https://efimish.github.io)

![Crescent moon with a star](https://efimish.github.io/favicon-192.png)

## Lists

There are three types of list you can format in Markdown: \
unordered lists, ordered lists, and task lists.

Here's an unordered list:

- Item
- Item
  - Subitem
- Item

Here's an ordered list:

1. Item
2. Item
    1. Subitem
3. Item

Here's a task list:

- [x] Task 1
- [ ] Task 2
  - [ ] Subtask 1
- [x] Task 4

## Tables

This is a table in Markdown.

| First Header | Second Header |
| ------------ | ------------- |
| Content Cell | Content Cell  |
| Content Cell | Content Cell  |

You can align cell contents

| Left Aligned | Center Aligned | Right Aligned |
|:------------ |:--------------:| -------------:|
| 2025-06-01   |      some      |         $4.99 |
| 2025-06-02   |     wordy      |           $99 |
| 2025-06-03   |      text      |          $799 |

## Footnotes

Here's a simple footnote[^1], and here's the second one[^2].

[^1]: This is the first footnote.

[^2]: And this is the second footnote.
`````
