import React from 'react';
import * as S from './FaqItem.styles';
import vectorIcon from '../../../../assets/images/buy/vector_1.svg'; // Assuming vector_1.svg is the up/down arrow

interface FaqItemProps {
  question: string;
  answer?: string; // Optional: only one answer was provided in original
  initiallyOpen?: boolean;
}

export const FaqItem = ({ question, answer, initiallyOpen = false }: FaqItemProps): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(initiallyOpen);

  const toggleOpen = () => {
    if (answer) { // Only toggle if there's an answer to show
        setIsOpen(!isOpen);
    }
  };

  return (
    <S.ItemWrapper>
      <S.QuestionRow onClick={toggleOpen}>
        <S.QuestionText>{question}</S.QuestionText>
        {answer && <S.ToggleIcon alt={isOpen ? "Collapse" : "Expand"} src={vectorIcon} style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}/>}
      </S.QuestionRow>
      {answer && <S.AnswerText $isOpen={isOpen}>{answer}</S.AnswerText>}
    </S.ItemWrapper>
  );
};
export default React.memo(FaqItem);
