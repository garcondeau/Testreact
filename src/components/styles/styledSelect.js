import styled from 'styled-components';

export const StyledSelect = styled.div`
  ${({width}) => width && `max-width: ${width}px`};
  ${({mb }) => mb && `margin-bottom: ${mb}px`};
  cursor: pointer;
  .custom-select, .custom-multiselect {
    z-index: 1;
    width: 100%;
    border: 1px solid transparent;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 1px 8px rgba(41, 73, 101, 0.2);
    overflow: hidden;
    .option-select-item_with-img {
      [class^='icon-'], [class*='icon-'] {
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

  .custom-multiselect {
    .rc-select-selection-item {
      margin: 5px;
      padding: 5px;
      display: inline-flex;
      background-color: #c8b19b;
      border: none;
      border-radius: 5px;
      color: #fff;
      &:hover {
        background-color: #a99581;
      }
      .rc-select-selection-item-content {
        width: 100%;
      }
    }
    .option-select-item {
      width: 100%;
    }
  }

  .custom-select {
    .option-select-item {
      width: calc(100% - 50px);
      color: #294965;
      display: flex;
      align-items: center;
      text-transform: inherit;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  .rc-select-arrow {
    height: 100%;
    z-index: -1;
    .rc-select-arrow-icon {
      border: none;
      position: relative;
      top: 25px;
      left: -20px;
      margin: 0;
      &:before {
        content: '\\e904';
        height: 16px;
        width: 16px;
        font-size: 22px;
        font-family: 'default-icon', serif;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .rc-select-selection-item-remove-icon {
    margin-left: 5px;
    color: #fff;
    opacity: 0.85;
    &:hover {
      opacity: 1;
    }
  }
  .rc-select-selection-search {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    .rc-select-selection-search-input {
      width: 100%;
      height: 100%;
      padding: 0 10px;
      background-color: transparent;
      border: none;
    }
  }
  .rc-select-open .rc-select-arrow .rc-select-arrow-icon:before {
    content: '\\e907';
  }
`;

export const StyledSelectLabel = styled.label`
  padding-bottom: 8px;
  color: #656565;
  font-size: 18px;
  text-align: left;
  line-height: 25px;
`;