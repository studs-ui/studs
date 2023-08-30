import { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { ModalProps } from '../../components/overlays/modal';

const meta = {
  title: "Studs/Overlays/Modal",
  tags: ["autodocs"],
  render: (args) => html`<studs-modal
    ?open=${args.open}
    ?closeOnOverlayClick=${args.closeOnOverlayClick}
  >
    ${args.children}
  </studs-modal>`,
} satisfies Meta<ModalProps>;

export default meta;
type Story = StoryObj<ModalProps>;

export const Default: Story = {
  args: {
    open: false,
    closeOnOverlayClick: true,
    children: html`
      <studs-button slot="toggle">Open</studs-button>
      <h2 slot="header" class="modal -title" id="modal-1-title">Micromodal</h2>
      <p>
        Try hitting the <code>tab</code> key and notice how the focus stays
        within the modal itself.
      </p>
      <div slot="footer">
        <studs-button size="small" button-type="primary">Action</studs-button>
        <studs-button
          size="small"
          button-type="secondary"
          data-micromodal-close=""
          aria-label="Close this dialog window"
        >
          Close
        </studs-button>
      </div>
    `,
  },
};
