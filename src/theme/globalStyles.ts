
import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";


export const GlobalStyle = createGlobalStyle`

   html {
      box-sizing: border-box;
   }
   body {
         background-color: ${theme.colors.tertiary};
         font-family: ${theme.fonts.style};
         padding: ${theme.spaces.none};
         margin: ${theme.spaces.none};
   }
   *,
   ::after,
   ::before {
      box-sizing: inherit;
   }

   .icon_brand {
      font-size: ${theme.fonts.big};
      margin-right: ${theme.spaces.s15};
      color: ${theme.colors.title};
   }

   .icon_sweat {
      font-size: ${theme.fonts.extra};
   }

   .icon_error {
      font-size: ${theme.fonts.extraBig};
   }

   .icon_search {
      color: ${theme.colors.title};
      font-size: ${theme.fonts.small};
      position: absolute;
      top: ${theme.spaces.s10};
      right: 38%;
   }

   a{
      text-decoration: none;
      color: ${theme.colors.primary};
   }

   @media screen and (min-width: 768px) {
   
      .icon_brand {
         font-size: ${theme.fonts.extra};
      }

      .icon_search {
        font-size: ${theme.fonts.medium};
        top: ${theme.spaces.s15};
        right: 6%;
      }
   }
`;
