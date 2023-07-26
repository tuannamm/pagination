import styled from "@emotion/styled";
import { pxToRem } from "@dgtx/utils";

export const StyledPagination = styled.div(() => {
  return {
    '.pagination': {
        width: pxToRem(600),
        marginLeft: pxToRem(1100),
      '.page-item': {
        textAlign: "center",
        margin: pxToRem(3),    
       '.page-link': {
          color: "black",
          borderRadius: pxToRem(4),
        },
      },
      '.page-item.active .page-link': {
        color: "white",
      },
    }
  }
})
