import React from 'react';
import * as S from './PageHeaderSection.styles';

interface PageHeaderSectionProps {
  title: string;
}

export const PageHeaderSection = ({ title }: PageHeaderSectionProps): JSX.Element => {
  return <S.HeaderText>{title}</S.HeaderText>;
};

export default React.memo(PageHeaderSection);
