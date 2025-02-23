import { Container, ContentTitle, Wrap } from "./content.style";
import { ContentProps } from "./content.types";
import { MainContent } from "./MainContent";
import { Title } from "@Components/Title/Title";

export const Content = ({
  backgroundImage,
  backgroundColor,
  children,
  contentDirection = "column",
  subtitle,
  title,
}: ContentProps) => (
  <Wrap backgroundColor={backgroundColor} backgroundImage={backgroundImage}>
    <Container>
      <MainContent contentDirection={contentDirection}>
        {(title || subtitle) && (
          <ContentTitle>
            {subtitle && (
              <Title
                type="subtitle"
                textAlign={subtitle.textAlign}
                variant="h4"
                color={subtitle.color}
              >
                {subtitle.text}
              </Title>
            )}
            {title && (
              <Title type="title2" textAlign={title.textAlign} variant="h3">
                {title.text}
              </Title>
            )}
          </ContentTitle>
        )}
        {children}
      </MainContent>
    </Container>
  </Wrap>
);
