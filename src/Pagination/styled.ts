import styled from "@emotion/styled";
import { pxToRem } from "@dgtx/utils";
import { StyleProps } from "./model";

export const StyledPagination = styled.div(({ setting }: StyleProps) => {

  const {itemWidth, itemHeight, fontSize} = setting;

  return {
    '.pagination': {
        position: "relative",
        display: "flex",
        gap: pxToRem(8),
      '.page-item': {
        textAlign: "center",
        backgroundColor: "#FFF",
       '.page-link': {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "black",
          borderRadius: pxToRem(4),
          alignContent: "center",
          width: pxToRem(itemWidth),
          height: pxToRem(itemHeight),
          border: `${pxToRem(1)} solid #D9D9D9`,
          padding: `${pxToRem(4)} ${pxToRem(7)}`,
          fontSize: pxToRem(fontSize)
        },
      },
      '.page-item.active .page-link': {
        backgroundColor: "#1890FF",
        color: "white",
      },
    }
  }
})
