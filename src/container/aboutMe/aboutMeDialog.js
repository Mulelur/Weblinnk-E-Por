import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { AboutMe } from "../../components";
import { ClearButton } from "../../components/buttons";
import Intros from "../Intros";
import FooterContainer from "../footer";
import { ButtonLink } from "../../components/buttons/styles/button";
import Editor from "../../components/editor/editor";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

export default function AboutMeDialog() {
  const dialogs = useStoreState((state) => state.dialogs);

  const setDialog = useStoreActions((actions) => actions.setDialog);

  const site = useStoreState((state) => state.site);

  const pages = useStoreState((state) => state.pages);

  const setAboutPage = useStoreActions((actions) => actions.setAboutPage);

  const handleClose = (id) => {
    setDialog({ id, open: false });
  };

  const getOpen = () => {
    return dialogs.find((item) => item.name === "About Me").open;
  };

  // All about Me 😎 🇿🇦

  return (
    <div>
      <Dialog
        fullScreen
        open={getOpen()}
        onClose={() => handleClose(1)}
        TransitionComponent={Transition}
      >
        <>
          <ClearButton onClick={() => handleClose(1)}>
            <CloseIcon fontSize="large" />
          </ClearButton>
          <Intros.Intro2>
            <Editor
              value={pages.aboutPage.title1}
              onChange={(e) => {
                setAboutPage({
                  type: "title1",
                  value: e.target.value,
                });
              }}
              site={site}
            >
              {pages.aboutPage.title1}
            </Editor>
          </Intros.Intro2>
          <AboutMe>
            <AboutMe.Box>
              <AboutMe.Container>
                <AboutMe.Content>
                  <AboutMe.TextArea>
                    <AboutMe.Heading2>
                      <Editor
                        value={pages.aboutPage.title2}
                        onChange={(e) => {
                          setAboutPage({
                            type: "title2",
                            value: e.target.value,
                          });
                        }}
                        site={site}
                      >
                        {pages.aboutPage.title2}
                      </Editor>
                    </AboutMe.Heading2>
                    <AboutMe.Text>
                      <Editor
                        value={pages.aboutPage.text1}
                        onChange={(e) => {
                          setAboutPage({
                            type: "text1",
                            value: e.target.value,
                          });
                        }}
                        site={site}
                      >
                        {pages.aboutPage.text1}
                      </Editor>
                    </AboutMe.Text>
                    <AboutMe.Heading2></AboutMe.Heading2>
                  </AboutMe.TextArea>
                </AboutMe.Content>
              </AboutMe.Container>
            </AboutMe.Box>
            <AboutMe.Box>
              <AboutMe.Container>
                <AboutMe.TextCenter>
                  <AboutMe.TextCenter>
                    <AboutMe.Heading1>Ready to talk?</AboutMe.Heading1>
                  </AboutMe.TextCenter>
                  <AboutMe.TextCenter>
                    <ButtonLink>Let's Talk Now</ButtonLink>
                  </AboutMe.TextCenter>
                </AboutMe.TextCenter>
              </AboutMe.Container>
            </AboutMe.Box>
          </AboutMe>
          <FooterContainer color="rgb(22, 28, 45)" />
        </>
      </Dialog>
    </div>
  );
}
