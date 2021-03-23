
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

   a{
      text-decoration: none;
      color: ${theme.colors.primary};
   }

   hr{
      border: none;
      border-bottom: solid 1px ${theme.colors.secondary};
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

   @media screen and (min-width: 768px) {
   
      .icon_brand {
         font-size: ${theme.fonts.extra};
      }
      
   }
`;
