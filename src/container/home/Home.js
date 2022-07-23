import React from "react";
import { Home } from "../../components";
import { Button } from "../../components/buttons";
import { gql, useQuery } from "@apollo/client";
import { useStoreState, useStoreActions } from "easy-peasy";

import Editor from "../../components/editor/editor";

const SITE = gql`
  query {
    site(id: 9) {
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

export default function SectionHeaderContainer() {
  const { loading, error, data } = useQuery(SITE);

  const pages = useStoreState((state) => state.pages);

  const site = useStoreState((state) => state.site);

  const setSite = useStoreActions((actions) => actions.setSite);

  const setPages = useStoreActions((actions) => actions.setPages);

  const setHomePage = useStoreActions((actions) => actions.setHomePage);

  React.useLayoutEffect(() => {
    if (!loading) {
      console.log(
        data.site.data.attributes.template.data.attributes.pages,
        "pags ----"
      );

      setPages(data.site.data.attributes.template.data.attributes.pages);

      setSite(data.site.data.attributes);
    }
  }, [loading]);

  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;

  return (
    <Home>
      <Home.Box>
        <Home.Container>
          <Home.Content>
            <Home.Heading4>Hello Welcome</Home.Heading4>
            <Home.Heading2>
              <Editor
                value={pages.homePage.title1}
                onChange={(e) => {
                  setHomePage({
                    type: "title1",
                    value: e.target.value,
                  });
                }}
                site={site}
              >
                {pages.homePage.title1}
              </Editor>
            </Home.Heading2>
          </Home.Content>
        </Home.Container>
      </Home.Box>
      <Home.Box>
        <Home.Container>
          <Home.Content>
            <Home.Text>
              <Editor
                value={pages.homePage.title2}
                onChange={(e) => {
                  setHomePage({
                    type: "title2",
                    value: e.target.value,
                  });
                }}
                site={site}
              >
                {pages.homePage.title2}
              </Editor>
            </Home.Text>
            <Button>Explore more...</Button>
          </Home.Content>
        </Home.Container>
      </Home.Box>
      <Home.Box>
        <Home.Container>
          <Home.Content>
            <Home.Heading2>
              <Editor
                value={pages.homePage.title3}
                onChange={(e) => {
                  setHomePage({
                    type: "title3",
                    value: e.target.value,
                  });
                }}
                site={site}
              >
                {pages.homePage.title3}
              </Editor>
            </Home.Heading2>
            <Home.Links>
              <Home.Link>
                <Editor
                  value={pages.homePage.link1}
                  onChange={(e) => {
                    setHomePage({
                      type: "link1",
                      value: e.target.value,
                    });
                  }}
                  site={site}
                >
                  {pages.homePage.link1}
                </Editor>
              </Home.Link>
              <Home.Divider>|</Home.Divider>
              <Home.Link>
                {" "}
                <Editor
                  value={pages.homePage.link2}
                  onChange={(e) => {
                    setHomePage({
                      type: "link2",
                      value: e.target.value,
                    });
                  }}
                  site={site}
                >
                  {pages.homePage.link2}
                </Editor>
              </Home.Link>
            </Home.Links>
          </Home.Content>
        </Home.Container>
      </Home.Box>
      <Home.Box>
        <Home.Container>
          <Home.Content>
            <Home.Heading4>© 2020 ALL RIGHT RESEVED</Home.Heading4>
          </Home.Content>
        </Home.Container>
      </Home.Box>
    </Home>
  );
}
