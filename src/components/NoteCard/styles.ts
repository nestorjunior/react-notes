import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGray};
  border-radius: 10px;
  padding: 22px;
  cursor: pointer;
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 24px;
`;

export const TagsContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const TagItem = styled.span<{ color?: string }>`
  background-color: ${({ color, theme }) => color || theme.colors.orange};
  color: ${({ theme }) => theme.colors.background};
  font-size: 12px;
  font-weight: 500;
  padding: 5px 14px;
  border-radius: 5px;
`;
