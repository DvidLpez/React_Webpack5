
import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";


export const GlobalStyle = createGlobalStyle`

   html {
      box-sizing: border-box;
   }
   body {
         background-color: ${theme.colors.bgBody};
         font-family: ${theme.fonts.style.primary};
         padding: ${theme.spaces.none};
         margin: ${theme.spaces.none};
   }
   *,
   ::after,
   ::before {
      box-sizing: inherit;
   }

   .icon_brand {
      font-size: ${theme.fonts.size.big};
      margin-right: ${theme.spaces.s15};
      color: ${theme.colors.white};
   }

   .icon_sweat {
      font-size: ${theme.fonts.size.extra};
   }

   .icon_error {
      font-size: ${theme.fonts.size.extraBig};
   }

   .icon_search {
      color: ${theme.colors.white};
      font-size: ${theme.fonts.size.small};
      position: absolute;
      top: ${theme.spaces.s10};
      right: 38%;
   }

   a{
      text-decoration: none;
      color: ${theme.colors.link};
   }

   @media screen and (min-width: 768px) {
   
      .icon_brand {
         font-size: ${theme.fonts.size.extra};
      }

      .icon_search {
        font-size: ${theme.fonts.size.medium};
        top: ${theme.spaces.s15};
        right: 6%;
      }
   }
`;
