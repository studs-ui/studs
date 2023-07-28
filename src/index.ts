// Import Styles
import "./styles/index";
// Import Components
import { StudsSplideCarousel } from "./components/demos/splide-carousel";
import { StudsButton } from "./components/display/button";
import { StudsButtonGroup } from "./components/display/buttonGroup";
import { StudsCarousel } from "./components/display/carousel";
import { StudsChip } from "./components/display/chip";
import { StudsGrid } from "./components/display/grid";
import { StudsIcon } from "./components/display/icon";
import { StudsTable } from "./components/display/table";
import { StudsDropdown } from "./components/inputs/dropdown";
import { StudsModal } from "./components/overlays/modal";
import { StudsPopover } from "./components/overlays/popover";
import { StudsCard } from "./components/display/card";
import { StudsTooltip } from "./components/overlays/tooltip";
import { StudsToast } from "./components/overlays/toast";
import { StudsToaster } from "./components/overlays/toaster";

// Export Components
export {
  StudsSplideCarousel,
  StudsButton,
  StudsButtonGroup,
  StudsCarousel,
  StudsChip,
  StudsGrid,
  StudsIcon,
  StudsTable,
  StudsDropdown,
  StudsModal,
  StudsPopover,
  StudsCard,
  StudsTooltip,
  StudsToast,
  StudsToaster,
  // Export Functions
};

declare global {
  interface HTMLElementTagNameMap {
    "studs-button": StudsButton;
    "studs-dropdown": StudsDropdown;
    "studs-chip": StudsChip;
    "studs-icon": StudsIcon;
    "studs-button-group": StudsButtonGroup;
    "studs-carousel": StudsCarousel;
    "studs-splide-carousel": StudsSplideCarousel;
    "studs-table": StudsTable;
    "studs-grid": StudsGrid;
    "studs-modal": StudsModal;
    "studs-popover": StudsPopover;
    "studs-card": StudsCard;
    "studs-tooltip": StudsTooltip;
    "studs-toast": StudsToast;
    "studs-toaster": StudsToaster;
  }
}
