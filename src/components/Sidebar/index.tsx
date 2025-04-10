import { useLocation } from "react-router-dom";
import { Plus, Power } from "lucide-react";
import {SidebarContainer, ProfileContainer, Avatar, ProfileInfo, WelcomeText, UserName, Logo, Nav, NavList, NavItem, NavLink, ActionContainer, CreateNoteButton, LogoutButton} from './styles'

type SidebarProps = {
  userName?: string;
  userAvatar?: string;
};

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