import MDXComponents from '@theme-original/MDXComponents';
import CodeBlocks from '@site/src/components/CodeBlocks/index';
import EmbeddedFigma from '@site/src/components/EmbeddedFigma/index';
import ResizerFeatures from '@site/src/components/ResizerFeatures';
import FoundationComponents from '@site/src/components/foundations';
import HeaderComponent from '@site/src/components/HeaderComponent/HeaderComponent';
import Tables from '@site/src/components/Tables/index';
import TypographySection from '@site/src/components/Typography';
// import ObjectStyle from '@site/src/components/ObjectStyles';
// import BorderTable from '@site/src/components/BorderTable';
import BorderTable from '@site/src/components/ObjectStyles/component/border';
import RoundingTable from '@site/src/components/ObjectStyles/component/rounding';
import BorderTableAll from '@site/src/components/BorderTableAll';
import { Elevations } from '@site/src/components/Elevations/Elevations';
import Utilities from '@site/src/components/ObjectStyles/component/utilities';

export default {
  ...MDXComponents,
  CodeBlocks,
  HeaderComponent,
  Tables,
  ResizerFeatures,
  EmbeddedFigma,
  ...FoundationComponents,
  TypographySection,
  // BorderTable,
  RoundingTable,
  BorderTableAll,
  Elevations,
  Utilities
};
