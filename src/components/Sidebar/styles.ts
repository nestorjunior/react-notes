import { Link } from "react-router-dom";
import styled from "styled-components";

export const SidebarContainer = styled.aside`
  background-color: ${({ theme }) => theme.colors.gray};
  width: 256px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
`;

export const ProfileContainer = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Avatar = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ProfileInfo = styled.div`
  overflow: hidden;
`;

export const WelcomeText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.lightGray};
`;

export const UserName = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.orange};
  font-size: 24px;
  font-weight: 700;
  padding: 24px;
`;

export const Nav = styled.nav`
  flex: 1;
  padding: 0 24px;
  margin-top: 24px;
`;

export const NavList = styled.ul`
  list-style: none;
`;

export const NavItem = styled.li`
  margin-bottom: 16px;
`;

export const NavLink = styled(Link)<{ $active?: boolean }>`
  display: block;
  padding: 8px 12px;
  border-radius: 8px;
  color: ${props => props.$active ? props.theme.colors.white : props.theme.colors.lightGray};
  background-color: ${props => props.$active ? props.theme.colors.lightGray : 'transparent'};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const ActionContainer = styled.div`
  padding: 24px;
  margin-top: auto;
`;

export const CreateNoteButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.background};
  font-weight: 700;
  padding: 12px 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  text-decoration: none;
`;

export const LogoutButton = styled(Link)`
  margin-top: 24px;
  color: ${({ theme }) => theme.colors.lightGray};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;
