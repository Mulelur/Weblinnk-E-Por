import { gql } from "@apollo/client";

const SITE = gql`
  query ($id: ID!) {
    site(id: $id) {
      data {
        attributes {
          status
          siteUrl
          siteName
          previewUrl
          category
          template {
            data {
              attributes {
                pages {
                  homePage {
                    title1
                    title2
                    title3
                    link1
                    link2
                  }
                  aboutPage {
                    title1
                    title2
                    text1
                  }
                  contactPage {
                    title1
                    title2
                    text1
                    email
                    phone
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default SITE;
