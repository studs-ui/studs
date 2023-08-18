# Studs LIT
Simpon Strong Tie Studs Libary using Google's LIT

## Setup
Run `yarn` to install contents

### Vite
Run `yarn dev`

### Storybook
Run `yarn storybook`

## Assets
Put all publicly accesable assets with `public`
Now you can reference them from root `./image.jpg`

## Components
STUDS Components are single-filed with `/src/studs`

#### Component Template Structure
```
import { createComponent } from "@lit-labs/react";
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import React from "react";

@customElement("studs-chip")
export class StudsChip extends LitElement {

    render() {
        // Element goes here within the HTML tag
        return html`<div>EXAMPLE</div>`
    }

}
```

#### Define Properties
Properties are reactive *attributes* that can be updated from the component level. 
```
@property() name: string = "defaultValue"
```

#### Define States
States are properties that are internal to the component and not able to be accessed outside of the component.
Adding an underscore ensures better readability of what is a state or property.
```
@state() private _name: string = false
```

See [Reactive Properties](https://lit.dev/docs/components/properties/) for more.

#### Access Properties/State
In order to access a state or property simply append a `this` to the beginning.
```
${this.icon}
```
#### Using Interpolation
Everything outside of an html`` block can be used normally, ei. `this.icon`; If you are using dynamic content within an html block you must *escape* it using interpolation.
```
html`<div>${this.children}</div>`

or

render() {
    const children = this.children;
    return html`<div>${children}</div>`
}
```
#### Effectively using Class
Lit exposes a decorator called `classMap` which allows for easy boolean based implemtation.
Now we can define classes as an object and then use classMap to add it to our elements
```
render() {
    const classes = {
        base: true,
        <!-- Returns class if true -->
        [`-${this.size}`]: this.size,
        <!-- Returns property class if true -->
        [this.class]: this.class
    }
    return html`<div class="${classMap(classes)}">Example</div>`
}
```

### Generating a React Component
Lit has a native function to generate React Components from `@lit-labs/react` called `createComponent`

- Open `src/react.ts`
- Import your component, ei. `StudsChip`
- Append the new element to the list of elements

```
const ReactButton = createComponent({
  tagName: "example-button",
  elementClass: ExampleButton,
  <!-- Ensure you add React -->
  react: React,
  <!-- Add Events that the React component needs to provide functionality for  -->
  events: {
    onclick: "click",
    onactivate: "activate",
  },
})
```

### Adding Component to the List of Global Components
- Open `src/index.ts`
- Import & Export your component

```
import {StudsChip} from ".."

export {StudsChip} from "..
```

- Inside `declare global` add your component to the list of components

```
"studs-carousel": StudsCarousel;
```