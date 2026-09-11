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

## 25. CSS Grid

CSS Grid is a two-dimensional layout system.

Unlike Flexbox, which primarily deals with one dimension at a time, Grid can control both rows and columns.

```text
Rows
 +
Columns
 =
Two-dimensional layout
```

A Grid container is created using:

```css
.container {
    display: grid;
}
```

The direct children of the container become Grid items.

---

## 26. `grid-template-columns`

Defines the columns of the Grid.

Example:

```css
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}
```

This creates three equal columns:

```text
┌──────────┬──────────┬──────────┐
│ Column 1 │ Column 2 │ Column 3 │
└──────────┴──────────┴──────────┘
```

---

## 27. The `fr` Unit

`fr` means a fraction of the available Grid space.

Example:

```css
grid-template-columns: 1fr 1fr 1fr;
```

The available space is divided into three equal parts.

```text
1fr + 1fr + 1fr
       ↓
  3 equal parts
```

Different proportions can also be used:

```css
grid-template-columns: 2fr 1fr 1fr;
```

The total is:

```text
2 + 1 + 1 = 4fr
```

Therefore:

- First column gets 2 parts
- Second column gets 1 part
- Third column gets 1 part

Example:

```text
┌────────────────┬────────┬────────┐
│                │        │        │
│      2fr       │  1fr   │  1fr   │
│                │        │        │
└────────────────┴────────┴────────┘
```

---

## 28. `grid-template-rows`

Defines the rows of the Grid.

Example:

```css
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 100px 200px;
}
```

This creates:

```text
┌──────────┬──────────┬──────────┐
│          │          │          │
│  Row 1   │  Row 1   │  Row 1   │  100px
│          │          │          │
├──────────┼──────────┼──────────┤
│          │          │          │
│          │          │          │
│  Row 2   │  Row 2   │  Row 2   │  200px
│          │          │          │
└──────────┴──────────┴──────────┘
```

Rows can also use `fr`:

```css
grid-template-rows: 1fr 2fr;
```

When the Grid container has a defined height, the available height can be divided according to the fraction values.

---

## 29. `gap`

Creates space between Grid rows and columns.

Example:

```css
.grid-container {
    display: grid;
    gap: 20px;
}
```

This creates equal spacing between both rows and columns.

Row and column gaps can also be controlled separately:

```css
row-gap: 30px;
column-gap: 10px;
```

Or using the shorthand:

```css
gap: 30px 10px;
```

The order is:

```text
gap: row-gap column-gap;
```

So:

```css
gap: 30px 10px;
```

means:

- 30px between rows
- 10px between columns

---

## 30. Grid Lines

Grid uses numbered lines to define the boundaries of columns and rows.

For three columns:

```text
Grid lines:

    1          2          3          4
    │          │          │          │
    ├──────────┼──────────┼──────────┤
    │ Column 1 │ Column 2 │ Column 3 │
    └──────────┴──────────┴──────────┘
```

The columns are the spaces between the lines.

This becomes important when positioning individual Grid items.

---

## 31. `grid-column`

`grid-column` controls where an individual Grid item starts and ends across columns.

Example:

```css
.dashboard-main {
    grid-column: 1 / 4;
}
```

This means:

> Start at Grid line 1 and end at Grid line 4.

Therefore, the item spans all three columns.

A useful alternative is:

```css
.dashboard-main {
    grid-column: 1 / -1;
}
```

`-1` represents the last Grid line.

This is useful when the number of columns may change.

---

## 32. `repeat()`

The `repeat()` function provides a shorter way to define repeated Grid tracks.

Instead of:

```css
grid-template-columns: 1fr 1fr 1fr;
```

we can write:

```css
grid-template-columns: repeat(3, 1fr);
```

Both produce three equal columns.

```text
1fr 1fr 1fr

      ↓

repeat(3, 1fr)
```

---

## 33. Dashboard Layout

A small dashboard was created to combine the Grid concepts.

The target layout was:

```text
┌────────────┬────────────┬────────────┐
│  Card 1    │  Card 2    │  Card 3    │
├────────────┴────────────┴────────────┤
│                                      │
│             Main Section             │
│                                      │
└──────────────────────────────────────┘
```

The basic structure uses:

```css
.dashboard {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
}
```

The Main Section spans all columns:

```css
.dashboard-main {
    grid-column: 1 / -1;
}
```

---

## 34. Responsive Grid

Grid can be combined with media queries to change the layout based on available screen width.

Example:

```css
.dashboard {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

@media (max-width: 768px) {
    .dashboard {
        grid-template-columns: 1fr;
    }
}
```

On a wider screen:

```text
┌────────┬────────┬────────┐
│ Card 1 │ Card 2 │ Card 3 │
└────────┴────────┴────────┘
```

On a smaller screen:

```text
┌──────────────┐
│    Card 1    │
├──────────────┤
│    Card 2    │
├──────────────┤
│    Card 3    │
└──────────────┘
```

The HTML does not need to change.

The Grid structure changes according to the viewport width.

---

## 35. Grid vs Flexbox

Both are layout systems, but they are useful for different situations.

## Flexbox

Primarily one-dimensional:

```text
Row
──────────────────────→

OR

Column
│
│
↓
```

Useful for:

- Navigation bars
- Aligning items
- Card rows
- Sidebar + content
- Component-level layouts

## Grid

Two-dimensional:

```text
Columns →
┌──────┬──────┬──────┐
│      │      │      │
├──────┼──────┼──────┤
│      │      │      │
└──────┴──────┴──────┘
        ↓
       Rows
```

Useful for:

- Dashboards
- Page layouts
- Card grids
- Complex row/column structures

---

The CSS is intentionally written as a learning playground rather than optimized production CSS.