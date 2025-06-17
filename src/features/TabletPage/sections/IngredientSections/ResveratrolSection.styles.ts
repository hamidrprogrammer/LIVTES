import styled from 'styled-components'; 
import { media } from '../../../../core/theme/theme';


export const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  height: 800px;
  background-color: #101417;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${media.tablet} {
    height: auto;
    min-height: 700px;
    padding: 80px 20px;
    justify-content: center;
    flex-direction: column;
  }

  /* موبایل */
  @media (max-width: 768px) {
    height: auto;              /* ارتفاع اتوماتیک برای انعطاف */
    min-height: 500px;         /* ارتفاع حداقلی معقول‌تر */
    padding: 50px 15px;        /* پدینگ کمتر برای بهتر شدن فضا */
    text-align: center;        /* متن وسط چین */
    justify-content: center;   /* جاستایفای وسط در فلکس */
    flex-direction: column;    /* جهت عمودی برای موبایل */
    align-items: center;       /* آیتم‌ها وسط چین */
  }
`;

export const TextContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 520px;
  padding-right: clamp(30px, 10vw, 148px);
  color: ${({ theme }) => theme.colors.white};
  text-align: left;

  ${media.tablet} {
    max-width: 600px;
    padding-right: 0;
    text-align: center;
  }

  /* موبایل */
  @media (max-width: 768px) {
    max-width: 100%;        /* پهنای کامل */
    padding-right: 0;       /* حذف پدینگ راست */
    padding-left: 15px;     /* کمی پدینگ چپ */
    text-align: center;     /* متن وسط چین */
  }
`;

export const IngredientTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
  font-size: ${({ theme }) => theme.typography.h3Size};
  line-height: 120%;
  margin-bottom: 15px;

  ${media.tablet} {
    font-size: 28px;
  }
  @media (max-width: 768px) {
    font-size: 24px;        /* فونت مناسب موبایل */
    margin-bottom: 12px;    /* کمی فاصله کمتر */
  }
`;

export const Subtitle = styled.h4`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-size: 20px;
  line-height: 120%;
  margin-bottom: 20px;
  max-width: 492px;

  ${media.tablet} {
    font-size: 18px;
    max-width: 100%;
  }
  @media (max-width: 768px) {
    font-size: 16px;        /* فونت کوچک‌تر موبایل */
    max-width: 100%;        /* پهنای کامل */
    margin-bottom: 16px;    /* فاصله مناسب */
  }
`;

export const Description = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
  font-size: 20px;
  line-height: 120%;
  margin-bottom: 20px;
  max-width: 487px;

  ${media.tablet} {
    max-width: 100%;
  }
  @media (max-width: 768px) {
    font-size: 18px;        /* فونت متعادل */
    max-width: 100%;        /* پهنای کامل */
    margin-bottom: 18px;    /* فاصله مناسب */
    padding-left: 15px;     /* پدینگ چپ */
    padding-right: 15px;    /* پدینگ راست */
    box-sizing: border-box; /* جلوگیری از کشیدگی */
  }
`;

export const BackgroundImageContainer = styled.div`
  position: absolute;
  top: -116px;
  left: 100px;
  width: 568px;
  height: 847px;
  z-index: 1;

  img {
    width: 568px;
    height: 847px;
  }

  ${media.tablet} {
    position: relative;
    width: 80%;
    max-width: 400px;
    height: auto;
    left: auto;
    top: auto;
    margin: 0 auto 30px auto;
  }

  /* موبایل */
  @media (max-width: 768px) {
    position: relative;     /* از ابسولوت به ریلتیو */
    width: 90%;             /* پهنای 90 درصد */
    max-width: 300px;       /* محدودیت ماکزیمم */
    height: auto;           /* ارتفاع اتوماتیک */
    margin: 0 auto 30px;    /* مرکز و فاصله پایین */
    top: auto;
    left: auto;

    img {
      width: 100%;          /* تصویر کامل پهنا */
      height: auto;         /* ارتفاع اتوماتیک */
      object-fit: contain;  /* حفظ تناسب تصویر */
      transform: none;      /* حذف ترنسفورم */
      display: block;       /* حذف فضای زیر تصویر */
      margin: 0 auto;       /* مرکز کردن */
    }
  }
`;
