import { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { TableProps } from '../../components/display/table';
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { ifDefined } from "lit/directives/if-defined.js";

const meta = {
  title: "Studs/Display/Table",
  tags: ["autodocs"],
  render: (args) => html`
    <studs-table 
    ?fixed-header=${args.fixedHeader} 
    fixed-offset=${ifDefined(args.fixedOffset)}
    size=${ifDefined(args.size)}
    ?sortable=${args.sortable}
    ?filterable=${args.filterable}
    ?disabled=${args.disabled}
    ?searchable=${args.searchable}
    >
    ${unsafeHTML(args.children)}</studs-table>
  `,
  argTypes: {
    fixedHeader: {
        name: 'fixed-header',
        type: { name: 'boolean', required: false },
        description: 'Fixes the header of the table to the top of the table.',
        defaultValue: false,
        table: {
            type: { summary: 'boolean' },
            defaultValue: { summary: false },
        },
        control: {
            type: 'boolean',
        },
    },
    fixedOffset: {
        name: 'fixed-offset',
        type: { name: 'string', required: false },
        description: 'The offset of the fixed header.',
        defaultValue: '0px',
        table: {
            type: { summary: 'string' },
            defaultValue: { summary: '0px' },
        },
        control: {
            type: 'text',
        },
    },
    size: {
        name: 'size',
        type: { name: 'string', required: false },
        description: 'The size of the table.',
        defaultValue: 'medium',
        table: {
            type: { summary: 'string' },
            defaultValue: { summary: 'medium' },
        },
        control: {
            type: 'select',
        },
        options: ['small', 'medium', 'large'],
    },
    sortable: {
        name: 'sortable',
        type: { name: 'boolean', required: false },
        description: 'Makes the table sortable.',
        defaultValue: false,
        table: {
            type: { summary: 'boolean' },
            defaultValue: { summary: false },
        },
        control: {
            type: 'boolean',
        },
    },
    filterable: {
        name: 'filterable',
        type: { name: 'boolean', required: false },
        description: 'Makes the table filterable.',
        defaultValue: false,
        table: {
            type: { summary: 'boolean' },
            defaultValue: { summary: false },
        },
        control: {
            type: 'boolean',
        },
    },
    disabled: {
        name: 'disabled',
        type: { name: 'boolean', required: false },
        description: 'Disables the table.',
        defaultValue: false,
        table: {
            type: { summary: 'boolean' },
            defaultValue: { summary: false },
        },
        control: {
            type: 'boolean',
        },
    },
    searchable: {
        name: 'searchable',
        type: { name: 'boolean', required: false },
        description: 'Makes the table searchable.',
        defaultValue: false,
        table: {
            type: { summary: 'boolean' },
            defaultValue: { summary: false },
        },
        control: {
            type: 'boolean',
        },
    },
    children: {
        name: 'children',
        type: { name: 'string', required: false },
        description: 'The table content.',
        defaultValue: '',
        table: {
            type: { summary: 'string' },
            defaultValue: { summary: '' },
        },
        control: {
            type: 'text',
        },
    }
  }
} satisfies Meta<TableProps>;

export default meta;

export const Default: StoryObj<TableProps> = {
  args: {
    fixedHeader: false,
    fixedOffset: '0px',
    size: 'medium',
    sortable: false,
    filterable: false,
    disabled: false,
    searchable: false,
    children: `
    <table>
        <caption>Table</caption>
        <colgroup span="2" >
        <col span="2"></col>
        <col></col>
        </colgroup>
        <thead>
        <tr>
            <th>first column</th>
            <th>second column</th>
            <th>third column</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>1</td>
                        <td>
            <studs-chip deletable>Chip</studs-chip>
            <studs-chip deletable>Chip</studs-chip>
            </td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
                        <td>
            <studs-chip deletable>Chip</studs-chip>
            <studs-chip deletable>Chip</studs-chip>
            </td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
                        <td>
            <studs-chip deletable>Chip</studs-chip>
            <studs-chip deletable>Chip</studs-chip>
            </td>
            <td>3</td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
            <td>1</td>
                        <td>
            <studs-chip deletable>Chip</studs-chip>
            <studs-chip deletable>Chip</studs-chip>
            </td>
            <td>3</td>
        </tr>
        </tfoot>
    </table>
    `}
};

export const FixedHeader: StoryObj<TableProps> = {
    args: {
        fixedHeader: true,
        fixedOffset: '0px',
        children: `
        <table>
        <caption>Table</caption>
        <colgroup span="2">
        <col width="300"></col>
        <col></col>
        <col></col>
        </colgroup>
        <thead>
        <tr>
            <th>first column</th>
            <th>second column</th>
            <th>third column
            <studs-tooltip><studs-icon icon="info"></studs-icon> A Column Header</studs-tooltip>
            </th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>1</td>
            <td>
            <studs-chip deletable>Chip</studs-chip>
            <studs-chip deletable>Chip</studs-chip>
            </td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
                        <td>
            <studs-chip deletable>Chip</studs-chip>
            <studs-chip deletable>Chip</studs-chip>
            </td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
                        <td>
            <studs-chip deletable>Chip</studs-chip>
            <studs-chip deletable>Chip</studs-chip>
            </td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
                        <td>
            <studs-chip deletable>Chip</studs-chip>
            <studs-chip deletable>Chip</studs-chip>
            </td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
                        <td>
            <studs-chip deletable>Chip</studs-chip>
            <studs-chip deletable>Chip</studs-chip>
            </td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
                        <td>
            <studs-chip deletable>Chip</studs-chip>
            <studs-chip deletable>Chip</studs-chip>
            </td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
                        <td>
            <studs-chip deletable>Chip</studs-chip>
            <studs-chip deletable>Chip</studs-chip>
            </td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
                        <td>
            <studs-chip deletable>Chip</studs-chip>
            <studs-chip deletable>Chip</studs-chip>
            </td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
                        <td>
            <studs-chip deletable>Chip</studs-chip>
            <studs-chip deletable>Chip</studs-chip>
            </td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
                        <td>
            <studs-chip deletable>Chip</studs-chip>
            <studs-chip deletable>Chip</studs-chip>
            </td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
                        <td>
            <studs-chip deletable>Chip</studs-chip>
            <studs-chip deletable>Chip</studs-chip>
            </td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
                        <td>
            <studs-chip deletable>Chip</studs-chip>
            <studs-chip deletable>Chip</studs-chip>
            </td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
                        <td>
            <studs-chip deletable>Chip</studs-chip>
            <studs-chip deletable>Chip</studs-chip>
            </td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
                        <td>
            <studs-chip deletable>Chip</studs-chip>
            <studs-chip deletable>Chip</studs-chip>
            </td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
                        <td>
            <studs-chip deletable>Chip</studs-chip>
            <studs-chip deletable>Chip</studs-chip>
            </td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
                        <td>
            <studs-chip deletable>Chip</studs-chip>
            <studs-chip deletable>Chip</studs-chip>
            </td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
                        <td>
            <studs-chip deletable>Chip</studs-chip>
            <studs-chip deletable>Chip</studs-chip>
            </td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
                        <td>
            <studs-chip deletable>Chip</studs-chip>
            <studs-chip deletable>Chip</studs-chip>
            </td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
                        <td>
            <studs-chip deletable>Chip</studs-chip>
            <studs-chip deletable>Chip</studs-chip>
            </td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
                        <td>
            <studs-chip deletable>Chip</studs-chip>
            <studs-chip deletable>Chip</studs-chip>
            </td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
                        <td>
            <studs-chip deletable>Chip</studs-chip>
            <studs-chip deletable>Chip</studs-chip>
            </td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
                        <td>
            <studs-chip deletable>Chip</studs-chip>
            <studs-chip deletable>Chip</studs-chip>
            </td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
                        <td>
            <studs-chip deletable>Chip</studs-chip>
            <studs-chip deletable>Chip</studs-chip>
            </td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
                        <td>
            <studs-chip deletable>Chip</studs-chip>
            <studs-chip deletable>Chip</studs-chip>
            </td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
                        <td>
            <studs-chip deletable>Chip</studs-chip>
            <studs-chip deletable>Chip</studs-chip>
            </td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
                        <td>
            <studs-chip deletable>Chip</studs-chip>
            <studs-chip deletable>Chip</studs-chip>
            </td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
                        <td>
            <studs-chip deletable>Chip</studs-chip>
            <studs-chip deletable>Chip</studs-chip>
            </td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
                        <td>
            <studs-chip deletable>Chip</studs-chip>
            <studs-chip deletable>Chip</studs-chip>
            </td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
                        <td>
            <studs-chip deletable>Chip</studs-chip>
            <studs-chip deletable>Chip</studs-chip>
            </td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
                        <td>
            <studs-chip deletable>Chip</studs-chip>
            <studs-chip deletable>Chip</studs-chip>
            </td>
            <td>3</td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
            <td>1</td>
                        <td>
            <studs-chip deletable>Chip</studs-chip>
            <studs-chip deletable>Chip</studs-chip>
            </td>
            <td>3</td>
        </tr>
        </tfoot>
    </table>
    `}
}
