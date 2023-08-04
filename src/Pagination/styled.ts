
import styled from "@emotion/styled";
import { pxToRem } from "@dgtx/utils";

export const StyledPagination = styled.div(() => {
  return {
    '.pagination': {
        position: "relative",
      '.page-item': {
        alignItems: "center",
        textAlign: "center",
        margin: pxToRem(3),
        width: pxToRem(32),
        height: pxToRem(32),
        backgroundColor: "#F0F2F5",
       '.page-link': {
          color: "black",
          borderRadius: pxToRem(4),
          border: `${pxToRem(1)} solid #D9D9D9`,
        },
      },
      '.page-item.active .page-link': {
        backgroundColor: "#1890FF",
        color: "white",
      },
    }
  }
})
