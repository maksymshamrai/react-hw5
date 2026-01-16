import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-top: 10px;
`;

const Badge = styled.span`
  padding: 4px 8px;
  border-radius: 10px;
  font-size: 10px;
  background-color: ${({ active }) => (active ? "#ff6b6b" : "#f0f0f0")};
`;

function Difficulty({ level }) {
  return (
    <Wrapper>
      <Badge active={level === 0}>Easy</Badge>
      <Badge active={level === 1}>Medium</Badge>
      <Badge active={level === 3}>Hard</Badge>
    </Wrapper>
  );
}

export default Difficulty;
