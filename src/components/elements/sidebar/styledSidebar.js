import styled from "styled-components";

export const StyledSidebarWrapper = styled.div`
  #sidebar {
    width: 320px;
    position: absolute;
    right: 0;
    top: 65px;
    display: flex;
    flex-direction: row-reverse;

    .pro-sidebar {
      width: 100%;
      height: calc(100vh - 65px);
      min-width: 100%;

      &.collapsed {
        width: 0;
        min-width: 0;
      }

      &-inner {
        background-color: #345B63;
      }

      &-layout {
        overflow-y: hidden;
      }

      .pro-menu {
        a {
          display: flex;
          flex-direction: row-reverse;

          &:before {
            display: none;
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    #sidebar {
      width: 75%;
      top: 60px;

      .pro-sidebar {
        height: calc(100vh - 60px);
      }
    }
  }
`;

export const StyledSidebarItem = styled.div`
  padding: 0 15px;
  cursor: pointer;

  .sidebar-link {
    font-size: 18px;
    display: flex;
    grid-gap: 10px;

    &__icon {
      color: #D4ECDD;
      width: 18px;
      height: 18px;
      font-size: 18px;
      text-align: center;
    }

    &__title {
      color: #D4ECDD;
    }

    &:hover {
      transition: all .3s ease;

      .sidebar-link__title {
        color: #112031;
      }

      .sidebar-link__icon {
        opacity: 1;
      }
    }

    &_current {
      background: #D4ECDD;
      border-radius: 5px;

      .sidebar-link__icon {
        color: #112031;
      }

      .sidebar-link__title {
        color: #112031;
      }
    }
  }
`;

export const StyledSidebarLink = styled.div`
  width: 100%;
  padding: 10px 12px;
  display: flex;
  align-items: center;
  border: none;
  outline: none;
`;