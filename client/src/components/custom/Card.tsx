import type { ComponentStyleConfig } from "@chakra-ui/theme";
import { extendTheme } from "@chakra-ui/react";

const Card = {
  // The styles all Cards have in common
  baseStyle: {
    display: "flex",
    flexDirection: "column",
    background: "white",
    alignItems: "center",
    gap: 6,
  },
  // Two variants: rounded and smooth
  variants: {
    rounded: {
      padding: 8,
      borderRadius: "xl",
      boxShadow: "xl",
    },
    smooth: {
      padding: 6,
      borderRadius: "base",
      boxShadow: "md",
    },
  },
  // The default variant value
  defaultProps: {
    variant: "smooth",
  },
};

const theme = extendTheme({
  components: {
    Card,
  },
});
