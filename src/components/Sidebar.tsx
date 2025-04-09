import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Plus, Power } from "lucide-react";

type SidebarProps = {
  userName?: string;
  userAvatar?: string;
};

const SidebarContainer = styled.aside`
  background-color: ${({ theme }) => theme.colors.gray};
  width: 256px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
`;

const ProfileContainer = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Avatar = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

const ProfileInfo = styled.div`
  overflow: hidden;
`;

const WelcomeText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.lightGray};
`;

const UserName = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.orange};
  font-size: 24px;
  font-weight: 700;
  padding: 24px;
`;

const Nav = styled.nav`
  flex: 1;
  padding: 0 24px;
  margin-top: 24px;
`;

const NavList = styled.ul`
  list-style: none;
`;

const NavItem = styled.li`
  margin-bottom: 16px;
`;

const NavLink = styled(Link)<{ $active?: boolean }>`
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

const ActionContainer = styled.div`
  padding: 24px;
  margin-top: auto;
`;

const CreateNoteButton = styled(Link)`
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

const LogoutButton = styled(Link)`
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

const Sidebar = ({ userName, userAvatar }: SidebarProps) => {
  const location = useLocation();
  
  const menuItems = [
    { name: "Todos", path: "/dashboard" },
    { name: "Frontend", path: "/dashboard?filter=frontend" },
    { name: "Node", path: "/dashboard?filter=node" },
    { name: "React", path: "/dashboard?filter=react" },
  ];

  return (
    <SidebarContainer>
      {userName && userAvatar ? (
        <ProfileContainer>
          <Avatar src={userAvatar} alt={userName} />
          <ProfileInfo>
            <WelcomeText>Bem-vindo,</WelcomeText>
            <UserName>{userName}</UserName>
          </ProfileInfo>
        </ProfileContainer>
      ) : (
        <Logo>Rocketnotes</Logo>
      )}
      
      <Nav>
        <NavList>
          {menuItems.map((item) => (
            <NavItem key={item.name}>
              <NavLink
                to={item.path}
                $active={location.pathname + location.search === item.path}
              >
                {item.name}
              </NavLink>
            </NavItem>
          ))}
        </NavList>
      </Nav>
      
      <ActionContainer>
        <CreateNoteButton to="/create-note">
          <Plus size={16} />
          Criar nota
        </CreateNoteButton>
        
        <LogoutButton to="/">
          <Power size={20} />
          <span>Sair</span>
        </LogoutButton>
      </ActionContainer>
    </SidebarContainer>
  );
};

export default Sidebar;