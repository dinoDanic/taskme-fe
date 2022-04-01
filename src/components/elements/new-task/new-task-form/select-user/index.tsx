import { UserAvatar } from "components/elements/user-avatar";
import { Label } from "components/ui";
import { AnimatePresence, motion } from "framer-motion";
import { User } from "generated/graphql";
import React, {
  Dispatch,
  InputHTMLAttributes,
  SelectHTMLAttributes,
  SetStateAction,
  useState,
} from "react";
import styled from "styled-components";
import { selectAni } from "styles/animations";
import { defaultInputStyle } from "styles/input";
import { defaulAnimationProps } from "types";

interface Props {
  label?: string;
  list: User[];
  setSelectedUser: Dispatch<SetStateAction<User | null>>;
  selectedUser: User | null;
}

export const SelectUser: React.FC<Props> = ({
  label,
  list,
  setSelectedUser,
  selectedUser,
}) => {
  const [isPopup, setIsPopup] = useState(false);

  const handleUserSelect = (user: User) => {
    setSelectedUser(user);
    setIsPopup(false);
  };

  const UsersMap = list.map((u) => (
    <UserContainer key={u.id} onClick={() => handleUserSelect(u)}>
      <UserAvatar name={u.name} email={u.email} id={u.id} />
    </UserContainer>
  ));

  return (
    <>
      {label && <Label>{label}</Label>}
      <Container>
        <Selected onClick={() => setIsPopup(true)}>
          {!selectedUser ? "Select user" : selectedUser.name}
        </Selected>
        <AnimatePresence>
          {isPopup && (
            <>
              <Layer onClick={() => setIsPopup(false)} />
              <Popup variants={selectAni} {...defaulAnimationProps}>
                {UsersMap}
              </Popup>
            </>
          )}
        </AnimatePresence>
      </Container>
    </>
  );
};

const SelectStyled = styled.div``;

const Selected = styled.div``;

const UserContainer = styled.div``;

const Popup = styled(motion.div)`
  border: 1px solid ${({ theme }) => theme.colors.quinary};
  top: 45px;
  position: absolute;
  width: 100%;
  left: 0;
`;

const Container = styled.div`
  ${defaultInputStyle}
  background-color: white;
  margin-bottom: ${({ theme }) => theme.sizes.margin.md};
  border: 1px solid ${({ theme }) => theme.colors.quinary};
  position: relative;
  cursor: pointer;
`;

const InputStyle = styled.input`
  ${defaultInputStyle}
`;

const Layer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
