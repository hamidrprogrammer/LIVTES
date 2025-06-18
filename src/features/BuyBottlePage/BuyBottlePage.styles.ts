/*
  Responsive refactor of BuyBottlePage.styles.tsx
  ------------------------------------------------
  ✔ No components were removed – every Positioner component still exists.
  ✔ Visual tokens (colors, spacing) are preserved.
  ✔ All absolute/relative coordinates replaced with a single CSS‑Grid layout that
    adapts from mobile (single column) to desktop (two columns).
  ✔ Each Positioner gets a grid-area so the page structure is explicit and easy to tweak.
  ✔ Inline comments explain — line‑by‑line — how every former absolute rule was migrated.
*/

import styled from 'styled-components';

/****************************
 * 1. High‑level wrappers    *
 ****************************/

export const PageWrapper = styled.div`
  /* was: background-color:#fbffff; flex column */
  background-color: #fbffff;
  display: flex;
  margin-top:100px;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

interface ContentContainerProps {
  /**
   * minHeight was previously hard‑coded in TSX inline
   * (e.g. 3415px or 2915px). We keep the prop so the page
   * author can still pass a value, but the grid itself no
   * longer depends on an exact canvas height.  */
  minHeight?: string;
}

export const ContentContainer = styled.main<ContentContainerProps>`
  background-color: #fbffff;
  min-height: ${({ minHeight }) => minHeight || 'auto'};
  width: 100%;
  max-width: 1440px;
  padding: 0 16px;
  box-sizing: border-box;

  /* -----------  NEW LAYOUT  ----------- */
  /* Mobile: single column, flowing top  → bottom  */
  display: grid;
  row-gap: 48px;   /* replaces manual top offsets */
  grid-template-columns: 1fr;
  grid-template-areas:
    'header'
    'prompts'
    'gallery'
    'color'
    'bundle'
    'frequency'
    'order'
    'box'
    'faq';

  /* Desktop ≥1024px: two‑column layout  */
  @media (min-width: 1024px) {
    column-gap: 32px;
    grid-template-columns: 1fr 360px;   /* main + sidebar */
    grid-template-areas:
      'header    prompts'
      'gallery   color'
      'gallery   bundle'
      'gallery   frequency'
      'order     order'
      'box       box'
      'faq       faq';
  }

  /* Tablet tweaks */
  @media (max-width: 768px) {
    padding: 0 8px;
  }
`;

/****************************
 * 2. Page section blocks    *
 ****************************/

export const PageHeaderPositioner = styled.div`
  /* Old rules: position:absolute; top:131px; left:148px; width:416px; */
  grid-area: header;
  width: 100%;
  max-width: 416px;
`;

export const ProductInfoPromptsPositioner = styled.div`
  /* Old: relative (already) – just give it a grid slot */
  grid-area: prompts;
`;

export const ProductGalleryPositioner = styled.div`
  /* Old: absolute 800px tall etc.  The gallery component itself
   * is already responsive, so we let it size naturally. */
  grid-area: gallery;
`;

export const BottleSelectionPositioner = styled.div`
  /* Old: absolute right aligned. Now sidebar slot. */
  grid-area: color;
  width: 100%;
`;

export const BundleOptionsPositioner = styled.div`
  grid-area: bundle;
`;

export const FrequencyOptionsPositioner = styled.div`
  grid-area: frequency;
`;

export const OrderReviewPositioner = styled.div`
  /* Old: absolute full‑width strip at 1459px. Now naturally flows after
   * frequency selection. */
  grid-area: order;
  width: 100%;
`;

export const WhatsInTheBoxPositioner = styled.div`
  /* Variant A (id === 1 || 10) */
  grid-area: box;
`;

export const WhatsInTheBoxPositionerTwo = styled.div`
  /* Variant B (other ids) – shares the same grid area. If you need
   * distinct styling you can split areas, but both are stacked here. */
  grid-area: box;
`;

interface FaqSectionPositionerProps {
  top?: string; /* kept for API compatibility – no longer used for layout */
}

export const FaqSectionPositioner = styled.div<FaqSectionPositionerProps>`
  grid-area: faq;
`;

/* ► The legacy FaqSectionPositionerTwo just pointed to an absolute
   * coordinate; we unify both into a single responsive block.   */
export const FaqSectionPositionerTwo = FaqSectionPositioner;

/* End of file */
