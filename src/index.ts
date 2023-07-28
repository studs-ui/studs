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

// Export Components
export { StudsSplideCarousel } from "./components/demos/splide-carousel";
export { StudsButton } from "./components/display/button";
export { StudsButtonGroup } from "./components/display/buttonGroup";
export { StudsCarousel } from "./components/display/carousel";
export { StudsChip } from "./components/display/chip";
export { StudsGrid } from "./components/display/grid";
export { StudsIcon } from "./components/display/icon";
export { StudsTable } from "./components/display/table";
export { StudsDropdown } from "./components/inputs/dropdown";
export { StudsModal } from "./components/overlays/modal";
export { StudsPopover } from "./components/overlays/popover";
export { StudsCard } from "./components/display/card";
export { StudsTooltip } from "./components/overlays/tooltip";
export { StudsToast } from "./components/overlays/toast";

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
  }
}
