import React from "react";
import { Home } from "../../components";
import { Button } from "../../components/buttons";
import { useStoreState, useStoreActions } from "easy-peasy";

import Editor from "../../components/editor/editor";

export default function SectionHeaderContainer() {
  const pages = useStoreState((state) => state.pages);

  const site = useStoreState((state) => state.site);

  const setHomePage = useStoreActions((actions) => actions.setHomePage);

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
