// Import Styles
import './styles/index';
// Import Components
import { StudsButton } from './components/display/button';
import { StudsButtonGroup } from './components/display/buttonGroup';
import { StudsCarousel } from './components/display/carousel';
import { StudsChip } from './components/display/chip';
import { StudsGrid } from './components/display/grid';
import { StudsIcon } from './components/display/icon';
import { StudsTable } from './components/display/table';
import { StudsDropdown } from './components/inputs/dropdown';
import { StudsModal } from './components/overlays/modal';
import { StudsPopover } from './components/overlays/popover';
import { StudsCard } from './components/display/card';
import { StudsTooltip } from './components/overlays/tooltip';
import { StudsToast } from './components/overlays/toast';
import { StudsToaster } from './components/overlays/toaster';
import { StudsStepper } from './components/display/stepper';
import { StudsSwitch } from './components/inputs/switch';
import { StudsSlider } from './components/inputs/slider';
import { StudsAccordian } from './components/display/accordian';
import { StudsAccordianItem } from './components/display/accordian-item';
import { StudsInput } from './components/inputs/input';
import { StudsForm } from './components/inputs/form';
import { StudsRadio } from './components/inputs/radio';
import { StudsRadioGroup } from './components/inputs/radio-group';
import { StudsCheckbox } from './components/inputs/checkbox';
import { StudsHeader } from './components/navigation/studs-header';
import { StudsResizer } from './components/display/resizer';
import { StudsResizerPane } from './components/display/resizer-pane';
import { StudsFooter } from './components/navigation/studs-footer';
import { StudsTextarea } from './components/inputs/textarea';

// Export Components
export {
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
  StudsStepper,
  StudsSwitch,
  StudsSlider,
  StudsAccordian,
  StudsAccordianItem,
  StudsInput,
  StudsForm,
  StudsRadio,
  StudsRadioGroup,
  StudsCheckbox,
  StudsHeader,
  StudsResizer,
  StudsResizerPane,
  StudsFooter,
  StudsTextarea,
};

declare global {
  interface HTMLElementTagNameMap {
    'studs-button': StudsButton;
    'studs-dropdown': StudsDropdown;
    'studs-chip': StudsChip;
    'studs-icon': StudsIcon;
    'studs-button-group': StudsButtonGroup;
    'studs-carousel': StudsCarousel;
    'studs-table': StudsTable;
    'studs-grid': StudsGrid;
    'studs-modal': StudsModal;
    'studs-popover': StudsPopover;
    'studs-card': StudsCard;
    'studs-tooltip': StudsTooltip;
    'studs-toast': StudsToast;
    'studs-toaster': StudsToaster;
    'studs-stepper': StudsStepper;
    'studs-switch': StudsSwitch;
    'studs-accordian': StudsAccordian;
    'studs-accordian-item': StudsAccordianItem;
    'studs-slider': StudsSlider;
    'studs-input': StudsInput;
    'studs-form': StudsForm;
    'studs-radio': StudsRadio;
    'studs-radio-group': StudsRadioGroup;
    'studs-checkbox': StudsCheckbox;
    'studs-header': StudsHeader;
    'studs-resizer': StudsResizer;
    'studs-resizer-pane': StudsResizerPane;
    'studs-footer': StudsFooter;
    'studs-textarea': StudsTextarea;
  }
}

// Export Functions
export {createSuccessToast, createErrorToast, createWarningToast, createStandardToast} from './functions/toaster';