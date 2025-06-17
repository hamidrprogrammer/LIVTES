// BuyBottlePage/components/OrderReview/OrderReview.styles.ts
import styled from 'styled-components';
import checkoutShopImage from '../../../../assets/images/buy/checkout_shop_1.png';
import lineImage from '../../../../assets/images/buy/line_1.svg';

export const SectionWrapper = styled.section`
  background-color: #eaf9f9;
  /* Removed fixed height and width. Width is now 100% of the grid area. */
  width: 100%;
  position: relative;
  padding: 32px 16px; /* Responsive padding */
  box-sizing: border-box;

  display: grid;
  grid-template-columns: 1fr; /* Single column layout for mobile */
  grid-template-areas:
    "title"
    "details"
    "actions"
    "image";
  gap: 32px;
  align-items: center;

  /* Two-dimensional layout for tablets and desktops */
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "title   details"
      "image   details"
      "image   actions";
    padding: 48px;
    column-gap: 48px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 322px 322px; /* Title/Image | Details | Actions */
    grid-template-areas:
      "title   details actions"
      "image   details actions";
    gap: 24px;
    padding: 60px 80px;
  }
`;

const ContentBlock = styled.div`
  /* Helper component to avoid repetition */
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const OrderTitle = styled(ContentBlock)`
  grid-area: title;
  color: var(--x-07-2c-3d);
  font-size: clamp(2.5rem, 5vw, 3.125rem); /* Responsive font size */
  font-weight: 300;
  line-height: 1.2;
  /* Removed absolute positioning and fixed width */
`;

export const DetailsContainer = styled(ContentBlock)`
  grid-area: details;
  gap: 12px; /* Space between detail items */
`;

export const ActionsContainer = styled(ContentBlock)`
  grid-area: actions;
  gap: 16px; /* Space between buttons */
  justify-content: center;
`;

export const AddToBagButton = styled.button`
  background-color: #60c9da;
  color: #ffffff;
  /* Common button styles */
  border-radius: 100px;
  padding: 12px 20px;
  width: 100%;
  max-width: 322px; /* Max width from original design */
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;
  align-self: center; /* Center within the actions container */
  /* Removed absolute positioning */
`;

export const CheckoutNowButton = styled(AddToBagButton)`
  background-color: #072c3d;
`;

export const ImageSection = styled.div`
  grid-area: image;
  position: relative;
  width: 100%;
  max-width: 453px; /* Max width from original design */
  margin: 0 auto; /* Center image block */
  aspect-ratio: 453 / 288; /* Maintain aspect ratio */
`;

export const CheckoutShopImage = styled.img.attrs({ src: checkoutShopImage })`
  height: 100%;
  width: 100%;
  object-fit: contain;
  /* Removed absolute positioning */
`;

export const ImageShadow = styled.div`
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgb(0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  opacity: 0.3;
  position: absolute;
  bottom: 0; /* Position shadow at the bottom of the image container */
  left: 0;
  right: 0;
  height: 30px;
  width: 100%;
`;


const OrderDetailText = styled.div`
  color: var(--x-07-2c-3d);
  letter-spacing: 0;
  /* Removed absolute positioning and fixed width */
`;

export const ItemName = styled(OrderDetailText)`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const ItemQuantity = styled(OrderDetailText)`
  font-size: 18px;
  font-weight: 400;
  line-height: 21.6px;
`;

export const ItemPrice = styled(OrderDetailText)`
  font-size: 18px;
  font-weight: 400;
  line-height: 21.6px;
`;

export const SeparatorLine = styled.img.attrs({src: lineImage})`
  height: 1px;
  object-fit: cover;
  width: 100%; /* Full width of the details container */
  margin: 16px 0; /* Add vertical spacing */
  /* Removed absolute positioning */
`;

export const TabletName = styled(ItemName)``;
export const TabletPrice = styled(ItemPrice)``;
export const TabletPackInfo = styled(ItemQuantity)``;
export const PurchaseTypeInfo = styled(ItemQuantity)``;