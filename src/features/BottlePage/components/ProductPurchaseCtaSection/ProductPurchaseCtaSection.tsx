import React from 'react';
import * as S from './ProductPurchaseCtaSection.styles';
import { ProductFeatureDisplay } from './ProductFeatureDisplay';
const bottleSec8Gold = 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/bottle/bottle-sec8-gold.avif';
const bottleSec8Grey = 'https://lumivitae-project.s3.eu-central-1.amazonaws.com/public/shop/images/bottle/bottle-sec8-grey.avif';
import { useNavigate } from 'react-router-dom';

export const ProductPurchaseCtaSection = () => {
   const nvigate=useNavigate()
  return (
    <S.SectionContainer data-aos="fade-up">
      <S.SectionContent>
        <S.HeaderContainer>
          <S.Title>Redefine your well being</S.Title>
          <S.HeaderText>
            <span className="bold">Order a bottle today</span>
            {' or join the revolution and '}
            <span className="underline">become a brand partner</span>.
          </S.HeaderText>
        </S.HeaderContainer>

        <S.ProductDisplayRow>
          <S.ProductColumn data-aos="fade-right" data-aos-delay="100">
            <S.BottleImage src={bottleSec8Grey} alt="Graphite Sand Bottle" />
            <S.BottleName>Graphite Sand</S.BottleName>
            <S.BottlePrice>LumiVitæ Bottle €498.00</S.BottlePrice>
            <S.BuyButton onClick={() => {         nvigate('/products-bottle/1')
}}>Buy Bottle</S.BuyButton>
            <S.SeparatorLine />
            <ProductFeatureDisplay />
          </S.ProductColumn>

          <S.ProductColumn data-aos="fade-left" data-aos-delay="200">
            <S.BottleImage src={bottleSec8Gold} alt="Desert Gold Bottle" />
            <S.BottleName>Desert Gold</S.BottleName>
            <S.BottlePrice>LumiVitæ Bottle €498.00</S.BottlePrice>
            <S.BuyButton onClick={() => {         nvigate('/products-bottle/1')
}}>Buy Bottle</S.BuyButton>
            <S.SeparatorLine />
            <ProductFeatureDisplay />
          </S.ProductColumn>
        </S.ProductDisplayRow>

      </S.SectionContent>
    </S.SectionContainer>
  );
};
