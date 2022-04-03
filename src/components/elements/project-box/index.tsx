import styled from "styled-components";
import { H3, H5 } from "components/ui";
import { ProjectType } from "types/projects";
import { Box } from "../box";
import Link from "next/link";
import { routes } from "modules/routes";

interface Props extends ProjectType {}

export const ProjectBox: React.FC<Props> = ({ name, description, id }) => {
  return (
    <Container>
      <Link href={`${routes.project}/${id}`}>
        <a>
          <Box>
            <H3>{name}</H3>
            {description && <Description>- {description}</Description>}
          </Box>
        </a>
      </Link>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
`;

const Description = styled(H5)`
  color: ${({ theme }) => theme.colors.quinaryDark};
`;
