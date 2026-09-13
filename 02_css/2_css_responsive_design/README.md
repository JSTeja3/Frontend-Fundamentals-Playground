# Responsive Design Fundamentals

This section focuses on making web pages adapt to different screen sizes such as desktop, tablet, and mobile.

The goal is to understand how layouts respond to available space rather than creating a separate design for every screen size.

---

## Topics Covered

- Media Queries
- Relative Units
- `max-width`
- Flexible Layouts
- Responsive Images
- Responsive Navigation
- Combining CSS Grid with Responsive Design

---

## 1. Media Queries

Media queries allow CSS rules to be applied only when certain conditions are met.

### Example

```css
.responsive-test {
    padding: 20px;
    background-color: lightblue;
}

@media (max-width: 768px) {
    .responsive-test {
        background-color: lightcoral;
    }
}
```

The mobile styles are applied when the viewport width is `768px` or smaller.

### Important

- `max-width` → applies styles at the specified width and below
- `min-width` → applies styles at the specified width and above

The breakpoint value is a design choice. `768px` does not automatically mean "tablet."

---

## 2. Relative Units

Different CSS units can make layouts more flexible.

### Common Units

| Unit | Relative To |
|---|---|
| `px` | Fixed pixel size |
| `%` | Relevant containing element |
| `rem` | Root element font size |
| `em` | Relevant font-size context |
| `vw` | Viewport width |
| `vh` | Viewport height |

### Example

```css
.responsive-box {
    width: 80%;
    height: 50vh;
    font-size: 2rem;
    border: 2px solid black;
}
```

Relative units are useful when creating layouts that should adapt to different screen sizes.

---

## 3. Text Overflow and Ellipsis

Long text can be hidden and replaced with `...` when it does not fit.

### Single Line

```css
.text {
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
```

### Important Properties

- `white-space: nowrap` prevents the text from wrapping
- `overflow: hidden` hides content outside the element
- `text-overflow: ellipsis` displays `...`

---

## 4. `max-width`

`max-width` prevents an element from becoming too wide.

### Example

```css
.content-box {
    width: 80%;
    max-width: 600px;
    margin: 20px auto;
    border: 2px solid black;
    padding: 20px;
}
```

Here:

- `width: 80%` allows the element to scale with its container
- `max-width: 600px` prevents it from becoming wider than `600px`
- `margin: auto` centers the block

### Common Pattern

```css
.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}
```

This is a common approach for keeping content readable on large screens while still using available space on smaller screens.

---

## 5. Flexible Layouts

A fixed-width layout can cause problems when the screen becomes smaller.

### Fixed Layout

```css
.flex-layout {
    display: flex;
    gap: 20px;
    width: 900px;
}

.flex-item {
    width: 280px;
}
```

The layout has fixed dimensions and may not adapt well to smaller screens.

### Flexible Layout

```css
.flex-layout {
    display: flex;
    gap: 20px;
    width: 90%;
}

.flex-item {
    flex: 1;
}
```

The items can now share the available space.

### Flexible + Wrapping

```css
.flex-layout {
    display: flex;
    gap: 20px;
    width: 90%;
    flex-wrap: wrap;
}

.flex-item {
    flex: 1 1 200px;
}
```

`flex: 1 1 200px` means:

- `1` → `flex-grow`
- `1` → `flex-shrink`
- `200px` → `flex-basis`

This allows the items to grow, shrink, and wrap when necessary.

---

## 6. Responsive Images

Images with fixed widths can overflow their containers.

### Fixed Image

```css
.image-container {
    width: 80%;
}

.image-container img {
    width: 800px;
}
```

A fixed-width image may become wider than its container.

### Responsive Image

```css
.image-container img {
    width: 100%;
}
```

A common general rule is:

```css
img {
    max-width: 100%;
    height: auto;
}
```

### Meaning

- `max-width: 100%` prevents the image from becoming wider than its container
- `height: auto` maintains the image's aspect ratio

---

## 7. Responsive Navigation

A navigation bar can change from horizontal to vertical on smaller screens.

### Desktop

```css
.main-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
```

### Mobile

```css
@media (max-width: 768px) {
    .main-nav {
        flex-direction: column;
        height: auto;
        gap: 10px;
    }
}
```

On desktop:

```text
Home | Profile | Products | Registration | Contact
```

On mobile:

```text
Home
Profile
Products
Registration
Contact
```

`height: auto` is useful when overriding a fixed desktop height. If no fixed height was previously specified, `height: auto` is generally the default and may not visibly change anything.

This is a responsive navigation layout, not a full hamburger menu. A hamburger menu with show/hide behavior will require JavaScript and will be practiced later.

---

## 8. Responsive Dashboard

The final exercise combined CSS Grid with responsive design.

### Desktop

```text
┌────────────────────────────────────┐
│ Card 1 │ Card 2 │ Card 3           │
├────────────────────────────────────┤
│                                    │
│          Main Section              │
│                                    │
└────────────────────────────────────┘
```

### Mobile

```text
┌──────────────────┐
│     Card 1       │
├──────────────────┤
│     Card 2       │
├──────────────────┤
│     Card 3       │
├──────────────────┤
│                  │
│   Main Section   │
│                  │
└──────────────────┘
```

### Example

```css
.dashboard {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 150px 250px;
    gap: 20px;
    border: 2px solid black;
}

.dashboard-card {
    border: 2px solid black;
}

.dashboard-main {
    grid-column: 1 / -1;
    border: 2px solid black;
}

@media (max-width: 768px) {
    .dashboard {
        grid-template-columns: 1fr;
        grid-template-rows: 150px 150px 150px 250px;
    }
}
```

### Key Concept

The desktop dashboard uses three columns:

```css
grid-template-columns: repeat(3, 1fr);
```

On smaller screens, it changes to one column:

```css
grid-template-columns: 1fr;
```

The layout therefore changes from:

```text
Card 1 | Card 2 | Card 3
Main Section
```

to:

```text
Card 1
Card 2
Card 3
Main Section
```

---

## Key Takeaways

### Responsive Design

Responsive design means allowing a layout to adapt to the available screen size.

### Media Queries

```css
@media (max-width: 768px) {
    /* mobile styles */
}
```

Use media queries when the layout needs to change at a particular breakpoint.

### Flexible Sizing

Prefer flexible sizing where appropriate:

```css
width: 90%;
max-width: 1200px;
```

instead of relying entirely on fixed widths.

### Flexible Flexbox

```css
flex: 1 1 200px;
```

allows flex items to grow, shrink, and wrap.

### Responsive Images

```css
img {
    max-width: 100%;
    height: auto;
}
```

prevents images from overflowing their containers.

### Grid + Media Queries

CSS Grid can change the number of columns at different screen sizes.

---

## Practice Structure

```text
05-responsive-design/
└── 01-responsive-design-foundation/
    ├── index.html
    ├── style.css
    └── README.md
```

---

## Goal of This Phase

The goal was not visual perfection.

The goal was to understand:

**Desktop → available space changes → layout adapts → mobile**

This phase builds on the CSS fundamentals, Flexbox, and Grid concepts practiced earlier and prepares for JavaScript-based interaction in the next phase.