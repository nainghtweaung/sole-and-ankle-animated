import React from "react";
import styled from "styled-components/macro";

import {QUERIES, WEIGHTS} from "../../constants";
import Logo from "../Logo";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">
            <NavLinkVisible>Sale</NavLinkVisible>
            <NavLinkHidden>Sale</NavLinkHidden>
          </NavLink>
          <NavLink href="/new">
            <NavLinkVisible>New&nbsp;Releases</NavLinkVisible>
            <NavLinkHidden>New&nbsp;Releases</NavLinkHidden>
          </NavLink>
          <NavLink href="/men">
            <NavLinkVisible>Men</NavLinkVisible>
            <NavLinkHidden>Men</NavLinkHidden>
          </NavLink>
          <NavLink href="/women">
            <NavLinkVisible>Women</NavLinkVisible>
            <NavLinkHidden>Women</NavLinkHidden>
          </NavLink>
          <NavLink href="/kids">
            <NavLinkVisible>Kids</NavLinkVisible>
            <NavLinkHidden>Kids</NavLinkHidden>
          </NavLink>
          <NavLink href="/collections">
            <NavLinkVisible>Collections</NavLinkVisible>
            <NavLinkHidden>Collections</NavLinkHidden>
          </NavLink>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  position: relative;
  overflow: hidden;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const NavLinkVisible = styled.span`
  display: inline-block;
  transform: translateY(0%);
  transition: transform 500ms;

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    ${NavLink}:hover & {
      transform: translateY(-100%);
      transition: transform 250ms;
    }
  }
`;

const NavLinkHidden = styled.span`
  font-weight: ${WEIGHTS.bold};
  top: 0;
  left: 0;
  position: absolute;
  transform: translateY(100%);
  transition: transform 500ms;

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    ${NavLink}:hover & {
      transform: translateY(0%);
      transition: transform 250ms;
    }
  }
`;

export default Header;
