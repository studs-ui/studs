import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { CoachMarkProps } from '../../components/overlays/coachmark';
import { position } from '../../utils/_argTypes';

const meta = {
    title: 'Studs/Overlays/Coachmark',
    tags: ['autodocs'],
    render: (args) => html`
    <studs-button>Coachmark
        <studs-coach-mark position=${ifDefined(args.position)}>
            ${args.children}
        </studs-coach-mark>
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
        <main>Coachmark Content</main>
        <studs-button button-type="secondary" size="small" slot="footer">Back</studs-button>
        <studs-button button-type="primary" size="small" slot="footer">Next</studs-button>`,
    },
};