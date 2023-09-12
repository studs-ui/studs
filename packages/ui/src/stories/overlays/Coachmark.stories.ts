import type { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { CoachMarkProps, StudsCoachMark } from '../../components/overlays/coachmark';
import { position } from '../../utils/_argTypes';
import { map } from 'lit/directives/map.js';
import { styleMap } from 'lit/directives/style-map.js';

const meta = {
    title: 'Studs/Overlays/Coachmark',
    tags: ['autodocs'],
    render: (args) => html`
    <studs-button>Coachmark
        <studs-coachmark position=${ifDefined(args.position)} initial-open>
            ${args.children}
        </studs-coachmark>
    </studs-button>`,
    argTypes: {
        ...position,
    },
} satisfies Meta<CoachMarkProps>;

export default meta;

type Story = StoryObj<CoachMarkProps>;

export const Default: Story = {
    args: {
        position: 'bottom',
        children: html`
        <div slot="title">This is a coachmark</div>
        <studs-image src="https://ssttoolbox.widen.net/content/cusbzivu9t/jpeg/C_SCLC_InstPho_RI_Inst_StairCassetteLedgerConnector-exploded_C0.jpg?crop=true&keep=c&q=60&w=900&h=675" slot="media"></studs-image>
        <main>Coachmark content and insturctions</main>
        <studs-button button-type="secondary" size="small" slot="footer">Back</studs-button>
        <studs-button button-type="primary" size="small" slot="footer">Next</studs-button>`,
    },
};

export const Series: Story = {
    render: () => {
        const items = ["one", "two", "three", "four", "five", "six"];
        document.addEventListener("DOMContentLoaded", () => {
            const coachmark = document.querySelector(`#coachmark-${items[0]}`);
            if(coachmark){
                (coachmark as StudsCoachMark)?.show();
            }
        })
        function goBack(e:MouseEvent, index: number) {
            const item = items[index - 1];
            const current = (e.target as unknown as HTMLElement).parentElement as StudsCoachMark
            current.hide();
            const coachmark = document.querySelector(`#coachmark-${item}`);
            if(coachmark) (coachmark as StudsCoachMark)?.show();
        }
        function goForward(e: MouseEvent, index: number) {
            const item = items[index + 1];
            const current = (e.target as unknown as HTMLElement).parentElement as StudsCoachMark
            current.hide();
            const coachmark = document.querySelector(`#coachmark-${item}`);
            if(coachmark) (coachmark as StudsCoachMark)?.show();
        }
        return html`<div style=${styleMap({
            display: "flex",
            gap: "3rem"
        })}>
        ${items.map((item, idx) => html`
            <studs-button id=${item}>Coachmark ${item}</studs-button>
            <studs-coachmark position="bottom" query=${`#${item}`} id=${`coachmark-${item}`}>
                <div slot="title">Coachmark ${item}</div>
                <studs-image src="https://ssttoolbox.widen.net/content/cusbzivu9t/jpeg/C_SCLC_InstPho_RI_Inst_StairCassetteLedgerConnector-exploded_C0.jpg?crop=true&keep=c&q=60&w=900&h=675" slot="media"></studs-image>
                <main>Coachmark content and insturctions</main>
                ${idx !== 0 ? html`<studs-button @click=${(e: MouseEvent) => goBack(e, idx)} button-type="secondary" size="small" slot="footer">Back</studs-button>` : nothing}
                <studs-button @click=${(e: MouseEvent) => goForward(e, idx)} button-type="primary" size="small" slot="footer">${idx === items.length - 1 ? "Finish" : "Next"}</studs-button>
            </studs-coachmark>
        `)}</div>`;
    }
}