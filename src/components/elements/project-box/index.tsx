import styled from "styled-components";
import { H3, H5 } from "components/ui";
import { ProjectType } from "types/projects";
import { Box } from "../box";

interface Props extends ProjectType {}

export const ProjectBox: React.FC<Props> = ({ name, description, id }) => {
  return (
    <Container>
      <Box>
        <H3>{name}</H3>
        {description && <Description>- {description}</Description>}
      </Box>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  width: 300px;
`;

const Description = styled(H5)`
  color: ${({ theme }) => theme.colors.quinaryDark};
`;
