import { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { TableProps } from "../components/display/table";

const meta = {
  title: "Studs/Display/Table",
  tags: ["autodocs"],
} satisfies Meta<TableProps>;

export default meta;

export const Default: StoryObj<TableProps> = {
  render: () => html`
    <studs-table>
        <table>
        <caption>Table</caption>
        <colgroup span="2" data-style="{'backgroundColor': 'red'}">
        <col span="2" data-style="{'backgroundColor': 'red'}"></col>
        <col data-style="{'backgroundColor': 'yellow'}"></col>
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
            <td>2</td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
        </tr>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
        </tr>
        </tfoot>
</table>
  </studs-table>
    `,
};
