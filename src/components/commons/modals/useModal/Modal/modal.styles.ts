import { CloseOutlined, CloseSquareOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 9999;
`;

export const Button = styled.button`
  width: 145px;
  height: 46px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;

  &.Cancel {
    border: 1px solid rgba(0, 0, 0, 0.23);
    background-color: white;
    :hover {
      background: #f2f2f2;
    }
  }

  &.Edit {
    background: #fef9f3;
    border: 1px solid rgba(242, 131, 22, 0.5);
    :hover {
      border: 2px solid rgba(242, 131, 22, 0.5);
    }
  }
`;
