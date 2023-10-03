import { Meta } from "@storybook/web-components";
import { html } from "lit";
import { StudsMenu } from "../../components/display/menu";
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

const meta = {
    title: 'Studs/Display/Menu',
    tags: ['autodocs'],
    // @ts-ignore
    render: (args) => html`<studs-menu>${unsafeHTML(args.children)}</studs-menu>`,
    } satisfies Meta<StudsMenu>;

export default meta;

export const Default = {
    args: {
        children: `<button slot="trigger">Menu</button>
            <a href="#">Long Item 1</a>
            <a href="#">Item 2</a>
            <hr />
            <a href="#">Item 3</a>`
        
    }
}