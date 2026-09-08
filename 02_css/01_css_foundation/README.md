# CSS Foundation & Flexbox Practice

This project is a hands-on practice page created to learn and revise fundamental CSS concepts and basic Flexbox layouts.

The goal is not to build a production-ready website, but to experiment with CSS properties and understand how they affect elements and layouts.

---

# Topics Covered

## 1. CSS Basics

- CSS selectors
- Colors
- Fonts
- Font sizing
- Font weight
- Line height
- CSS units
- Margin
- Padding
- Borders

---

## 2. CSS Selectors

Different types of selectors were practiced.

### Element Selector

Targets all elements of a particular type.

```css
h1 {
    color: blue;
}
```

### Class Selector

Targets elements with a particular class.

```css
.product-card {
    border: 2px solid black;
}
```

### ID Selector

Targets one element with a particular ID.

```css
#submitbtn {
    display: block;
}
```

### Descendant Selector

Targets elements inside another element.

```css
form label {
    /* styling */
}
```

### Attribute Selector

Targets elements based on their attributes.

```css
input[type="checkbox"] {
    /* styling */
}
```

### Adjacent Sibling Selector

Targets an element immediately following another element.

```css
input[type="checkbox"] + label {
    margin-left: 5px;
}
```

The + means the label immediately following the checkbox input is selected.

---

## 3.Colors

Different ways of defining colors were practiced, including:

Named colors
Hexadecimal colors
RGB colors
color
background-color

Example:

```css
header {
    background-color: darkblue;
    color: yellow;
}
```

## 4. Fonts and Text

Practiced:

font-family
font-size
font-weight
line-height
text-decoration

Example:

```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

ul,
ol {
    line-height: 2;
}
```

A fallback font family can be provided so the browser can use another available font if the preferred font is unavailable.


## 5. CSS Units

The following CSS units were practiced:

px
%
rem
em
vw
vh
### Basic mental model

| Unit | Meaning |
| :--- | :--- |
| **px** | Fixed CSS pixel value |
| **%** | Relative to a relevant parent/container |
| **rem** | Relative to the root (html) font size |
| **em** | Relative to the relevant font-size context |
| **vw** | Percentage of viewport width |
| **vh** | Percentage of viewport height |


## 6. Margin and Padding
### Margin

Margin creates space outside an element.

```css
section {
    margin: 10px;
}
```

### Padding

Padding creates space inside an element.

```css
.product-card {
    padding: 10px;
}
```

Four-value margin/padding order

When four values are provided:

```css
margin: top right bottom left;
```

Example:

```css
margin: 10px 20px 30px 40px;
```

means:

```css
        Top: 10px

Left: 40px      Right: 20px

       Bottom: 30px
```

## 7. CSS Box Model

The CSS box model consists of:

```
Content
   ↓
Padding
   ↓
Border
   ↓
Margin
```

By default, CSS uses:
```css
box-sizing: content-box;
```
With content-box, the declared width applies to the content area, while padding and border are added outside that width.

border-box includes padding and border within the declared width/height.

Example:

```c
#profile {
    box-sizing: border-box;
}
```

## 8. Borders

Borders were practiced using:

```css
border: 2px solid black;
```
Different border styles and widths were experimented with.

The table also uses borders:

```css
table th,
table td {
    border: 4px double red;
}
```

## 9. Tables

Table borders were practiced using:
```css
table {
    border-collapse: collapse;
}
```

border-collapse is a table-specific property and is applied to the table.

Example:
```css
table {
    margin: 30px;
    border-collapse: collapse;
}

table th,
table td {
    border: 4px double red;
}
```

## 10. Display Property

The following display values were practiced:

block
inline
inline-block
none

### Block

Takes its own line and normally stretches across the available width.

### Inline

Remains in the normal text flow and has limitations on width and height.

### Inline-block

Stays alongside other inline-level elements while still behaving more like a box.

Example:

```css
nav a {
    display: inline-block;
}
```

### None

Removes the element from the layout.

```css
display: none;
```

## 11. Positioning

The following positioning concepts were practiced:

static
relative
absolute
fixed
sticky

### Static

The normal/default positioning behavior.

### Relative

The element remains in the normal document flow but can be offset.

It can also provide a positioning reference for an absolutely positioned child.

### Absolute

The element is removed from normal document flow and positioned relative to its containing block.

### Fixed

The element is positioned relative to the viewport.

### Sticky

The element behaves normally until a specified threshold is reached and then sticks within its scrolling/containing context.

Example:

```css
header {
    position: sticky;
    top: 0;
}
```

## 12. Overflow

Overflow was practiced using:

visible
hidden
scroll
auto
overflow-x
overflow-y

Example:

```css
.overflow-box {
    width: 200px;
    height: 50px;

    overflow-x: auto;
    overflow-y: hidden;

    white-space: nowrap;
}
```

white-space: nowrap prevents the text from wrapping, making horizontal overflow possible when the content is wider than the container.

Important distinction
```css
overflow-x: auto;
```

does not automatically create a scrollbar.

A scrollbar appears when the content actually exceeds the available width.

## 13. Flexbox

Flexbox was introduced as the primary layout system for the practical layout exercises.

A Flexbox layout consists of:

```
Flex Container
       │
       ├── Main Axis
       │
       ├── Cross Axis
       │
       └── Flex Items

```
The parent becomes the flex container:

```css
.container {
    display: flex;
}
```

Its direct children become flex items.

## 14. Main Axis and Cross Axis

This is the most important Flexbox concept.

With:
```css
flex-direction: row;
```
the axes are:
```
Main Axis
────────────────────────→

Cross Axis
│
│
↓
```

With:
```css
flex-direction: column;
```
they switch:
```css
Cross Axis ←──────────→

Main Axis
│
│
↓
```
Therefore, don't memorize:

justify-content = horizontal
align-items = vertical

Instead remember:

justify-content works on the main axis.

align-items works on the cross axis.

## 15. flex-direction

Controls the direction of the main axis.
```css
flex-direction: row;
```
Items are arranged horizontally.
```css
flex-direction: column;
```
Items are arranged vertically.

## 16. justify-content

Controls how flex items are distributed along the main axis.

Values practiced:

```css
justify-content: flex-start;
justify-content: flex-end;
justify-content: center;
justify-content: space-between;
justify-content: space-around;
justify-content: space-evenly;
```
Example
```css
nav {
    display: flex;
    justify-content: center;
}
```

Important:

justify-content only has a visible effect when there is available space along the main axis to distribute.

## 17. align-items

Controls alignment along the cross axis.

Values practiced:

```css
align-items: flex-start;
align-items: center;
align-items: flex-end;
```
Example:
```css
nav {
    display: flex;
    align-items: center;
}
```

When flex-direction is row, this commonly produces vertical alignment.

## 18. gap

Creates space between flex items.
```css
nav {
    display: flex;
    gap: 20px;
}
```

Instead of adding margins to every child, gap can provide consistent spacing between flex items.

## 19. flex-wrap

Controls whether flex items are allowed to move onto additional lines.

Default:
```css
flex-wrap: nowrap;
```
Items attempt to remain on one line.

With:
```css
flex-wrap: wrap;
```
items can move to another row when there isn't enough space.

Example:
```css
.product-container {
    display: flex;
    gap: 50px;
    flex-wrap: wrap;
}
```

This was used to create a card layout that can wrap as the available width changes.

## 20. flex-basis

Defines the initial size of a flex item along the main axis.

Example:
```css
.product-card {
    flex-basis: 200px;
}
```
When the direction is:
```css
flex-direction: row;
```
the basis relates to the horizontal dimension.

When the direction is:
```css
flex-direction: column;
```
the basis relates to the vertical dimension.

Mental model
```
flex-basis
    ↓
Starting size
    ↓
Flexbox checks available space
    ↓
┌───────────────┴───────────────┐
↓                               ↓
Extra space                  Not enough space
↓                               ↓
flex-grow                    flex-shrink
```
## 21. flex-grow

Controls how a flex item can take up extra available space.

Example:
```css
.product-card {
    flex-grow: 1;
}
```

If multiple items have different grow values, the available extra space is distributed according to their grow values.

Example:
```css
.card-one {
    flex-grow: 2;
}

.card-two {
    flex-grow: 1;
}
```

The extra space is distributed approximately in a 2 : 1 ratio.

Mental model
```
Extra space available?
        ↓
      YES
        ↓
   flex-grow
        ↓
Take a share of extra space
```

## 22. flex-shrink

Controls how a flex item can give up space when there isn't enough room.

Example:
```css
.product-card {
    flex-shrink: 1;
}
```

If the flex items cannot fit within the available space, Flexbox can reduce their size.
```
Available space is too small
            ↓
       flex-shrink
            ↓
   Items can become smaller
```
Setting:
```css
flex-shrink: 0;
```

prevents the item from shrinking.

## 23. Flexbox Shorthand

The three properties:

```css
flex-grow
flex-shrink
flex-basis
```
can be combined using:
```css
flex: 1;
```
A common use is:
```css
.main-content {
    flex-grow: 1;
}
```

which allows the main content to take the remaining space in a layout.

## 24. Practical Flexbox Layouts

The following layouts were practiced.

### Horizontal Navbar
```css
nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
```
This creates a horizontally arranged navigation area with centered items and spacing.

### Card Row
```css
.product-container {
    display: flex;
    gap: 50px;
    flex-wrap: wrap;
}

.product-card {
    flex-basis: 200px;
    flex-grow: 1;
}
```
This creates a flexible row of cards that can wrap onto additional rows.

### Centered Content
```css
.center-container {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

This centers content horizontally and vertically when the default flex-direction: row is used.

### Sidebar + Main Content
```css
.app-layout {
    display: flex;
    min-height: 300px;
}

.sidebar {
    flex-basis: 150px;
}

.main-content {
    flex-grow: 1;
}
```

Conceptually:
```
┌──────────────┬───────────────────────────┐
│              │                           │
│   Sidebar    │       Main Content        │
│              │                           │
└──────────────┴───────────────────────────┘
```
The sidebar has a starting basis while the main content grows to consume the remaining space.

### 25. Current Practice Page

The page currently combines CSS fundamentals and Flexbox experiments into one practice/revision page.

It includes examples involving:

- Sticky header
- Flexbox navigation
- Product cards
- Centered content
- Sidebar + main content
- Forms
- Tables
- Overflow
- Typography
- Spacing
- Borders
- Selectors

The CSS is intentionally written as a learning playground rather than optimized production CSS.