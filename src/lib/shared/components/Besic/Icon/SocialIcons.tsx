// src/components/Icon/SocialIcons.tsx
import { pxToRem } from '@/core/theme/theme';
import React from 'react';
import styled from 'styled-components';

const SocialIconLink = styled.a`
  display: inline-block;
  margin: 0 ${pxToRem(8)}; // فاصله بین آیکون‌ها
  font-size: ${pxToRem(28)}; // اندازه نمونه برای آیکون‌های متنی
  color: ${({ theme }) => theme.colors.textLight}; // رنگ آیکون‌ها در فوتر سفید بود
  transition: transform 0.2s ease, opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
    transform: scale(1.1);
  }
`;

// کامپوننت‌های نمونه برای هر آیکون. در پروژه واقعی از SVG استفاده کنید.
export const FacebookIcon: React.FC<{ href: string }> = ({ href }) => <SocialIconLink href={href} aria-label="Facebook" target="_blank" rel="noopener noreferrer">FB</SocialIconLink>;
export const TiktokIcon: React.FC<{ href: string }> = ({ href }) => <SocialIconLink href={href} aria-label="TikTok" target="_blank" rel="noopener noreferrer">TK</SocialIconLink>;
export const InstagramIcon: React.FC<{ href: string }> = ({ href }) => <SocialIconLink href={href} aria-label="Instagram" target="_blank" rel="noopener noreferrer">IG</SocialIconLink>;
export const YoutubeIcon: React.FC<{ href: string }> = ({ href }) => <SocialIconLink href={href} aria-label="YouTube" target="_blank" rel="noopener noreferrer">YT</SocialIconLink>;

// کامپوننت کلی برای نمایش همه آیکون‌های اجتماعی
const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface SocialMediaLinks {
  facebook: string;
  tiktok: string;
  instagram: string;
  youtube: string;
}

export const SocialMedia: React.FC<{ links: SocialMediaLinks }> = ({ links }) => (
  <SocialIconsContainer>
    <FacebookIcon href={links.facebook} />
    <TiktokIcon href={links.tiktok} />
    <InstagramIcon href={links.instagram} />
    <YoutubeIcon href={links.youtube} />
  </SocialIconsContainer>
);