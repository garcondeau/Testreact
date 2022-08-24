import { createGlobalStyle } from "styled-components";

const mainFont = "Montserrat, sans-serif";
const mainFontSize = "14px";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    color: #656565;
    font-family: ${mainFont};
    font-size: ${mainFontSize};
    letter-spacing: 0.2px;
    line-height: 22px;
    background-color: #f9f8f6;
    //background: linear-gradient(135deg, #efe6dd 0%, #fdfdfc 28%, #f9f8f6 69%, #f9f8f6 100%);
  }

  h1, h2, h3, h4, h5, h6, p, span, select, input {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  input::-webkit-search-decoration,
  input::-webkit-search-cancel-button,
  input::-webkit-search-results-button,
  input::-webkit-search-results-decoration {
    display: none;
  }

  input {
    border: 1px solid rgba(0, 0, 0, 0.5);
  }

  button {
    padding: 0;
    font: inherit;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover, a:focus, a:active {
    text-decoration: none;
  }

  .default-link {
    color: #c8b19b;

    &:hover {
      text-decoration: underline;
    }
  }

  //Progressbar custom style
  #nprogress .bar {
    height: 5px;
    background: #c8b19b;
    z-index: 1999;
  }

  #nprogress .peg {
    box-shadow: 0 0 10px #c8b19b, 0 0 5px #c8b19b;
  }

  #nprogress .spinner-icon {
    display: none;
    border-top-color: #c8b19b;
    border-left-color: #c8b19b;
  }

  //AntDesign dialog window
  .default-modal {
    margin-top: 130px;
    .rc-dialog-close {
      outline: none;
    }

    .rc-dialog-header, .rc-dialog-content {
      min-width: 300px;
      background-color: #fff;
    }

    .rc-dialog-header {
      color: #656565;
    }

    &__body-footer {
      padding-top: 15px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(75px, max-content));
      grid-gap: 15px;
      justify-content: end;
    }
  }

  .default-modal_h-center {
    display: flex;
    align-items: center;
  }

  .default-modal_w-center {
    .default-modal__content {
      margin: 0 auto;
      word-break: break-all;
    }

    .modal-control {
      display: flex;
      grid-gap: 10px;
    }
  }

  //AntDesign notifications
  .rc-notification {
    padding: 0;
    transform: translateX(-50%);
    z-index: 1055;
    @media screen and (max-width: 576px) {
      width: 100%;
      padding: 0 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: inherit;
      left: 0 !important;
    }

    .rc-notification-notice-close {
      color: black;
      opacity: .5;

      &:hover {
        opacity: 1;
      }
    }

    .rc-notification-notice {
      margin: 0;
      padding: 5px 20px 0 0;
      background-color: transparent;
      border-radius: 0;
      box-shadow: none;
    }

    .message-with-icon {
      min-height: 50px;
      padding: 15px 15px 15px 55px;
      color: #202020;
      display: inline-flex;
      border-radius: 5px;
      position: relative;

      &:before {
        width: 25px;
        height: 25px;
        font-size: 22px;
        font-family: 'default-icon', serif;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        position: absolute;
        top: 14px;
        left: 15px;
      }
    }

    .message-with-icon.success {
      background-color: #e3f7e4;

      &:before {
        content: '\\e911';
        color: #4fba6e;
      }
    }

    .message-with-icon.error {
      background-color: #FFECEE;

      &:before {
        content: '\\e918';
        color: #FE6A74;
      }
    }

    .message-with-icon.info {
      background-color: #e6f7ff;

      &:before {
        content: '\\e924';
        color: #3286d9;
      }
    }

    .message-with-icon.warning {
      background-color: #fdf3c9;

      &:before {
        content: '\\e91e';
        color: #efc100;
      }
    }
  }

  //AntDesign custom tabs
  .rc-tabs-dropdown {
    color: #c8b19b;
    background-color: rgba(160, 150, 130, 0.15);
    border: 1px solid #c8b19b;
  }

  .default-tabs {
    border: none;
    grid-gap: 20px;

    .rc-tabs-nav-more {
      display: none;
    }

    .rc-tabs-nav-list {
      .rc-tabs-tab {
        font-size: 14px;

        &:hover {
          opacity: 1;
        }

        .rc-tabs-tab-btn {
          outline: none;
        }
      }

      .rc-tabs-tab-active {
        opacity: 1;
      }

      .rc-tabs-ink-bar {
        background: #c8b19b;
      }

      @media screen and (max-width: 576px) {
        display: grid;
        grid-template-rows: auto;
        .rc-tabs-tab {
          margin: 0;
          padding: 5px 15px;
        }

        .rc-tabs-ink-bar {
          display: none;
        }

        .rc-tabs-tab-active {
          color: #c8b19b;
          font-weight: 700;
          background-color: rgba(160, 150, 130, 0.15);
          border: 1px solid #c8b19b;
          border-radius: 5px;
        }
      }
    }

    .rc-tabs-content-holder {
      .rc-tabs-tabpane {
        outline: none;
      }
    }

    @media screen and (max-width: 992px) {
      grid-template-columns: 100%;
      grid-template-rows: repeat(2, auto);
    }
  }

  .default-tabs-left {
    display: grid;
    grid-template-columns: 256px auto;

    .rc-tabs-tab {
      margin: 0;
      padding: 5px 15px;
    }

    .rc-tabs-ink-bar {
      display: none;
    }

    .rc-tabs-tab-active {
      color: #c8b19b;
      font-weight: 700;
      background-color: rgba(160, 150, 130, 0.15);
      border: 1px solid #c8b19b;
      border-radius: 5px;
    }

    @media screen and (max-width: 992px) {
      grid-template-columns: 100%;
      grid-template-rows: auto;
    }
  }

  .default-tabs-top {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 55px auto;
    overflow: inherit;

    .rc-tabs-nav-list {
      width: 100%;
      border-bottom: 1px solid #E5E5E5;
    }

    .rc-tabs-tab {
      margin-right: 20px;
      padding: 15px 0;
      background: transparent;
      opacity: 0.4;

      &:last-child {
        margin: 0;
      }
    }

    .rc-tabs-tab-active {
      color: #c8b19b;
    }

    .rc-tabs-nav-more {
      min-width: 25px;
    }

    @media screen and (max-width: 576px) {
      grid-template-columns: 100%;
      grid-template-rows: minmax(40px, auto) auto;
    }
  }

  //AntDesign custom submenu 
  .card-submenu {
    background-color: #595959;
    border-color: #595959;
    box-shadow: none;

    .rc-dropdown-menu-item {
      padding: 0;

      a, button {
        width: 100%;
        padding: 7px 10px;
        color: #fff;
        font-weight: 700;
        display: inline-grid;
        grid-template-columns: 14px max-content;
        grid-gap: 10px;
        text-align: left;
        border: none;
        outline: none;

        span {
          font-size: 14px;
          opacity: 0.5;
        }
      }

      &:hover {
        background-color: rgba(0, 0, 0, 0.8);
      }
    }

    .rc-dropdown-menu-item-selected {
      background-color: transparent;

      &:after {
        display: none;
      }
    }
  }

  .dropdown-wrapper {
    width: 100px;
    border-radius: 5px;
    background: #FFFFFF;
    border: 1px solid #e9e9e9;
    box-shadow: 0 1px 8px rgb(0 0 0 / 20%);

    ul {
      li {
        padding: 10px;

        &:first-child {
          border-radius: 5px 5px 0 0;
        }

        &:last-child {
          border-radius: 0 0 5px 5px;
        }

        &:hover {
          background: #f9f9f9
        }
      }
    }
  }

  .rc-dropdown-menu > .rc-dropdown-menu-item:hover,
  .rc-dropdown-menu > .rc-dropdown-menu-item-active,
  .rc-dropdown-menu > .rc-dropdown-menu-item-selected {
    background-color: #595959 !important;

    &:hover {
      background-color: black !important;
    }
  }

  .rc-dropdown {
    z-index: 1050;
  }

  //AntDesign select
  .rc-select-item-empty {
    padding: 16px 22px;
  }

  .rc-select-selector {
    min-height: 50px;

    .rc-select-selection-overflow {
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      &-item {
        display: inline-flex;
      }
    }

    span.rc-select-selection-item, span.rc-select-selection-placeholder {
      padding: 10px 22px;
      display: flex;
    }
  }

  .rc-select-dropdown {
    border: 1px solid #E5E5E5;
    box-shadow: 0 1px 8px rgb(0 0 0 / 20%);
    z-index: 1051;

    .rc-select-item-option {
      padding: 10px 22px;
      background: #F3F3F3;
      cursor: pointer;

      &:hover {
        color: #fff;
        background: #c8b19b;
      }

      .option-select-item {
        display: flex;
        align-items: center;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;

        span {
          padding-right: 20px;
          font-size: 22px;
        }

        img {
          height: 22px;
          width: 22px;
          margin-right: 20px;
          object-fit: contain;
          object-position: center;
        }
      }
    }

    .rc-select-item-option-selected {
      color: #fff;
      background: #444;

      .rc-select-item-option-state {
        display: none;
      }

    }
  }

  //AntDesign custom checkbox
  .default-checkbox {
    input {
      width: 17px;
      height: 17px;

      &:focus {
        box-shadow: none;
        outline: none;
      }
    }

    .rc-checkbox-inner {
      width: 17px;
      height: 17px;
      border-color: transparent;
      background-color: #fff;
      box-shadow: 0 1px 8px rgb(0 0 0 / 30%);

      &:after {
        border: none
      }
    }
  }

  .rc-checkbox-checked {
    .rc-checkbox-inner {
      background-color: #c8b19b;

      &:after {
        border: 2px solid #fff;
        border-top: 0;
        border-left: 0;
      }
    }
  }

  //AntDesign custom pagination 
  .default-pagination {
    padding: 30px 0;
    display: flex;
    justify-content: center;

    .rc-pagination-item, .rc-pagination-item-link {
      color: #c8b19b;
      background-color: transparent;
      border: 1px solid #c8b19b;
      border-radius: 5px;
      outline: none;

      a {
        color: #c8b19b;
      }

      &:hover {
        color: #c8b19b;
        border: 1px solid #c8b19b;
        background-color: rgba(160, 150, 130, 0.15);

        a {
          color: #c8b19b;
        }
      }
    }

    .rc-pagination-item-active {
      color: #fff;
      background: #c8b19b;
      border: 1px solid #c8b19b;
      border-radius: 5px;

      a {
        color: #fff;
      }

      &:hover a {
        color: #fff;
      }
    }
  }
`;