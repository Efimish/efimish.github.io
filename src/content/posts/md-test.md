---
title: Markdown test
date: 1337-01-01
tags:
  - test
  - markdown
---

# Header 1

## Header 2

### Header 3

#### Header 4

##### Header 5

###### Header 6

Paragraph

**Bold**

*Italics*

~~Strikethrough~~

> Quote
>> Inner quote

`Inline code`

```js
// code
console.log('Hello, world!');
```

Line Divider:

---

[Link to markdown logo](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg)

![Markdown logo](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg)

```md
# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

Paragraph

**Bold**

*Italics*

~~Strikethrough~~

> Quote
>> Inner quote

`Inline code`

'''js
// code
console.log('Hello, world!');
'''

Line Divider:

---

[Link to markdown logo](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg)

![Markdown logo](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg)
```

## Tables

This is a table in Markdown.

| First Header | Second Header |
| ------------ | ------------- |
| Content Cell | Content Cell  |
| Content Cell | Content Cell  |

Which looks like this in Markdown language:

```md
First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell
```

**Note:** You don't need to add that many dashes in your divider. --- is enough to tell Markdown to format this as a table. It's for human readability that extra dashes are added, but know that they're optional.

You can align cell contents with syntax...

| Left Aligned  | Center Aligned  | Right Aligned |
|:------------- |:---------------:| -------------:|
| col 3 is      | some wordy text |         $1600 |
| col 2 is      | centered        |           $12 |
| zebra stripes | are neat        |            $1 |

...like this:

```md
| Left Aligned  | Center Aligned  | Right Aligned |
|:------------- |:---------------:| -------------:|
| col 3 is      | some wordy text |         $1600 |
| col 2 is      | centered        |           $12 |
| zebra stripes | are neat        |            $1 |
```

## Lists

There are three types of list you can format in Markdown: unordered lists, ordered lists, and task lists.

### Unordered Lists

Here's an unordered list:

- Item
- Item
  - Subitem
- Item

Which looks identical to its plaintext form:

```md
- Item
- Item 
  - Subitem
- Item
```

### Ordered Lists

Here's an ordered list:

1. Item
2. Item
3. Item
    1. Subitem
4. Item

Which looks exactly the same as plaintext:

```md
1. Item
2. Item
3. Item
    1. Subitem
4. Item
```

### Task Lists

You can create open/closed lists like this:

- [x] Task 1
- [ ] Task 2
  - [ ] Subtask

Code Snippet:

```md
- [x] Task 1
- [ ] Task 2
  - [ ] Subtask 
```

## Sub/Superscript

To do some basic subscripts or superscripts, just insert the number, word, letter in between ```<sub> </sub>``` or ```<sup> </sup>``` to enable this formatting in Markdown.

### Subscript

<sub>subscript</sub> content example.
H<sub>2</sub>O

Code Snippet:

```html
Subscript
<sub>subscript</sub> content example.
H<sub>2</sub>O
```

### Superscript

<sup>superscript</sup> content example.
x<sup>2</sup>

Code Snippet:

```html
Superscript
<sup>superscript</sup> content example.
x<sup>2</sup>
```

## Footnotes

Here's a simple footnote, [^1] and here's the second one.[^2]

[^1]: This is the first footnote.

[^2]: And here's the second footnote. You're not limited to numbers for your footnotes. You can also use words as long as it follows the ^ notation properly.

```md
Here's a simple footnote, [^1] and here's the second one.[^2]

[^1]: This is the first footnote.

[^2]: And here's the second footnote. You're not limited to numbers for your footnotes. You can also use words as long as it follows the ^ notation properly.

```
