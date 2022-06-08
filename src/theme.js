import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
} from "@chakra-ui/react";

export const CustomTheme = extendTheme(
  {
    colors: {
      brand: {
        50: "#8fa1ef",
        100: "#637be9",
        200: "#3655e3",
        300: "#1c3cc9",
        400: "#162f9c",
        500: "#091443",
        600: "#0E0173",
      },
      grey: {
        100: "#f2f2f2",
        200: "#d9d9d9",
      },
    },
    fonts: {
      body: `Work Sans , ${base.fonts?.body}`,
    },
    components: {
      Input: {
        variants: {
          outline: {
            field: {
              borderColor: "brand.100",
              _hover: {
                borderColor: "brand.200",
              },
              _focus: {
                borderColor: "brand.300",
              },
            },
          },
        },
      },
      Button: {
        variants: {
          brand: {
            backgroundColor: "brand.400",
            color: "#fff",
            _hover: {
              backgroundColor: "brand.300",
            },
            _active: {
              backgroundColor: "brand.200",
            },
          },
        },
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: "brand",
    components: ["Checkbox"],
  })
);
