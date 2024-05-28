import { extendTheme } from "@chakra-ui/react";
import { colors } from "./constants";

const theme = extendTheme({
  //   initialColorMode: "dark",
  //   useSystemColorMode: false,

  components: {
    Text: {
      baseStyle: {
        color: colors.white,
      },
    },
  },
});

export default theme;
