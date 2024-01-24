import { ArrowLeft, ArrowRight } from "phosphor-react-native";
import {
  ArrowContainer,
  ButtonContainer,
  ButtonText,
  Circle,
  CirclesContainer,
  Container,
  PaginationNumberContainer,
} from "./styles";
import { ViewProps } from "react-native";

interface PaginationProps extends ViewProps {
  activePage: number;
  totalPages: number;
}

export function Pagination({
  activePage,
  totalPages,
  ...props
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const renderArrow = (direction: "left" | "right") => {
    const isLeft = direction === "left";
    const isDisabled = isLeft ? activePage <= 1 : activePage === totalPages;

    return (
      <ButtonContainer isBlocked={isDisabled} disabled={isDisabled}>
        {isLeft ? (
          <ArrowLeft weight="bold" color="#fff" />
        ) : (
          <ArrowRight weight="bold" color="#fff" />
        )}
      </ButtonContainer>
    );
  };

  const renderPageButtons = () => {
    const pagesToShow = totalPages === 4 ? 4 : 3;
    return Array.from({ length: pagesToShow }, (_, i) => i + 1).map(
      (pageNumber) => renderPageButton(pageNumber)
    );
  };

  const renderPageButton = (pageNumber: number) => (
    <ButtonContainer
      key={pageNumber}
      isActive={pageNumber === activePage}
      disabled={pageNumber === activePage}
    >
      <ButtonText isActive={pageNumber === activePage}>{pageNumber}</ButtonText>
    </ButtonContainer>
  );

  return (
    <Container {...props}>
      <ArrowContainer>
        {renderArrow("left")}
        {renderArrow("right")}
      </ArrowContainer>
      <PaginationNumberContainer>
        {renderPageButtons()}
        {totalPages > 4 && (
          <>
            <CirclesContainer>
              <Circle />
              <Circle />
              <Circle />
            </CirclesContainer>
            {renderPageButton(totalPages)}
          </>
        )}
      </PaginationNumberContainer>
    </Container>
  );
}
