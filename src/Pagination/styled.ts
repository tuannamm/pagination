import styled from "@emotion/styled";
import { pxToRem } from "@dgtx/utils";

import { StyleProps } from "./model";

export const StyledPagination = styled.div(({ setting }: StyleProps) => {

  const {itemWidth, itemHeight, fontSize} = setting;

  return {
      height: pxToRem(itemHeight),
      display: "flex",
      gap: pxToRem(8),
    '.pagination': {
        position: "relative",
        display: "flex",
        gap: pxToRem(8),
      '.page-item': {
        textAlign: "center",
        backgroundColor: `grey`,
       '.page-link': {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "black",
          borderRadius: pxToRem(4),
          alignContent: "center",
          width: pxToRem(itemWidth),
          height: pxToRem(itemHeight),
          border: `${pxToRem(1)} solid grey`,
          padding: `${pxToRem(4)} ${pxToRem(7)}`,
          fontSize: pxToRem(fontSize)
        },
      },
      '.page-item.active .page-link': {
        backgroundColor: `grey`,
        color: "white",
      },
    }
  }
})
