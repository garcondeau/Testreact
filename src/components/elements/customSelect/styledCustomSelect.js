import styled from "styled-components";
import Select from "react-select";

export const StyledSelect = styled(Select)`
  .custom-select {
    &__control {
      border-color: rgba(52, 91, 99, 0.5);
      box-shadow: none;

      &:hover {
        border-color: #345B63;
      }
    }

    &__option {
      &--is-focused {
        background-color: #D4ECDD;
      }

      &--is-selected {
        background-color: #345B63;
      }
    }
  }
`;