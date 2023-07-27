import styled from "@emotion/styled";
import { pxToRem } from "@dgtx/utils";

export const StyledPagination = styled.div(() => {
  return {
    '.pagination': {
        marginLeft: pxToRem(1100),
      '.page-item': {
        textAlign: "center",
        margin: pxToRem(3),  
       '.page-link': {
          color: "black",
          borderRadius: pxToRem(4),
          border: `${pxToRem(1)} solid #d9d9d9`,
          textAlign: "center"
        },
      },
      '.page-item.active .page-link': {
        color: "white",
      },
    }
  }
})
