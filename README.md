# Studs LIT Usage

Simpson Strong-tie Studs Library Usage

## Install STUDS

For Web based tools, html, angular, svelte, etc.
`npm install @studs/ui`

For React
`npm install @studs/react`

For Vue
`npm install @studs/vue`

## Usage

Check our site for directions on usage of each component

**Example usage**
`<studs-button buttontype="primary">Button Text</studs-button>`

# Studs LIT Development

Simpon Strong Tie Studs Libary

## Install Requirements
1. If you don't already have PNPM installed, install it via npm `npm i pnpm -g`
2. Install turbo globally `npm i turbo -g` or `pnpm i turbo -g`
   1. If you get an error that pnpm isn't setup yet, run `pnpm setup` and follow the instructions
## Setup

Run `pnpm` to install contents

### Run dev (Presentation Layer, Styles and Components)

Run `pnpm dev`

## Assets

Put all publicly accesable assets within the correct workspaces's `public` folder. eg. `packages/ui/public`
Now you can reference them from root `./image.jpg`

## Components

STUDS Components are single-filed within `/packages/ui/src/components`

#### Component Template Structure

```
import { createComponent } from "@lit-labs/react";
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

interface StudsComponentProps {
    type: type;
    type?: type;
}

@customElement("studs-component")
export class StudsComponent extends LitElement {

    render() {
        // Element goes here within the HTML tag
        return html`<div>EXAMPLE</div>`
    }

}
```

#### Define Properties

Properties are reactive _attributes_ that can be updated from the component level.

```
@property() name: StudsComponentProps["type"] = "defaultValue"
@property() name?: StudsComponentProps["type"];
```

#### Define States

States are properties that are internal to the component and not able to be accessed outside of the component.
Adding an underscore ensures better readability of what is a state or property.

```
@state() private _name: string = false
@state() private _name?: string;
```

See [Reactive Properties](https://lit.dev/docs/components/properties/) for more.

#### Access Properties/State

Call the property using `this.property`.

```
${this.icon}
```

#### Using Interpolation

Everything outside of an html``block can be used normally, ei.`this.icon`; If you are using dynamic content within an html block you must _escape_ it using interpolation.

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
        [this.property]: this.property
    }
    return html`<div class="${classMap(classes)}">Example</div>`
    or 
    return html`<div class=${classMap({
        class: true
    })}></div>`
}
```

### Generating a React Component

Lit has a native function to generate React Components from `@lit-labs/react` called `createComponent`

- Open `packages/react/index.ts`
- Import your component, eg. `StudsChip`
- Append the new element to the list of elements

```
const StudsChipComponent = createComponent({
  tagName: "studs-chip",
  elementClass: StudsChip,
  <!-- Ensure you add React -->
  react: React,
  <!-- Add Events that the React component needs to provide functionality for  -->
  events: {
    onclick: "click",
    onactivate: "activate",
    customevent: "customevent"
  },
})
```

### Adding Component to the List of Global Components

- Open `src/index.ts`
- Import & Export your component

```
import {StudsChip} from ".."

export {StudsChip}
```

- Inside `declare global` add your component to the list of components

```
"studs-carousel": StudsCarousel;
```

### Adding NPM Packages to apps/packages
`pnpm add <package> --filter <package-name>`

Example
`pnpm add @11ty/eleventy --save-dev --filter @studs/docs`