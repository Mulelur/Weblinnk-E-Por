import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { AboutMe } from "../../components";
import { Button, ClearButton } from "../../components/buttons";
import Intros from "../Intros";
import FooterContainer from "../footer";
import { ButtonLink } from "../../components/buttons/styles/button";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

export default function AboutMeDialog() {
  const dialogs = useStoreState((state) => state.dialogs);

  const setDialog = useStoreActions((actions) => actions.setDialog);

  const handleClose = (id) => {
    setDialog({ id, open: false });
  };

  const getOpen = () => {
    return dialogs.find((item) => item.name === "About Me").open;
  };

  const qs = require("qs");
  const query = qs.stringify(
    {
      populate: ["Profile2"],
    },
    {
      encodeValuesOnly: true,
    }
  );

  const url = `http://localhost:1337/api/projects/1?${query}`;

  const [aboutData, setAboutPage] = React.useState({});

  const [mediaData, setMediaData] = React.useState({});

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAboutPage(data.data.attributes.AboutPage);
        setMediaData(data.data.attributes.Profile2.data.attributes);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Dialog
        fullScreen
        open={getOpen()}
        onClose={() => handleClose(1)}
        TransitionComponent={Transition}
      >
        {!loading ? (
          <>
            <ClearButton onClick={() => handleClose(1)}>
              <CloseIcon fontSize="large" />
            </ClearButton>
            <Intros.Intro2 />
            <AboutMe>
              <AboutMe.Box>
                <AboutMe.Container>
                  <AboutMe.Content>
                    <AboutMe.Column>
                      <div>
                        <AboutMe.Image
                          src={`http://localhost:1337${mediaData.url}`}
                        />
                      </div>
                    </AboutMe.Column>
                    <AboutMe.Column>
                      <AboutMe.TextArea>
                        <AboutMe.Heading2>{aboutData.names}</AboutMe.Heading2>
                        <AboutMe.Text>{aboutData.summary}</AboutMe.Text>
                        <AboutMe.Heading2>Learning styles</AboutMe.Heading2>
                        <AboutMe.List>
                          {aboutData.LearningStyles.map((item, index) => {
                            return (
                              <>
                                <AboutMe.ListItem>
                                  <AboutMe.ListTitle>
                                    {item.title}
                                  </AboutMe.ListTitle>
                                  <AboutMe.ListText>
                                    {item.desc}
                                  </AboutMe.ListText>
                                </AboutMe.ListItem>
                              </>
                            );
                          })}
                        </AboutMe.List>
                        <AboutMe.Buttons>
                          {aboutData.links.map((item, idx) => {
                            return (
                              <>
                                <Button key={idx} href={item.url}>
                                  {item.title}
                                </Button>
                              </>
                            );
                          })}
                        </AboutMe.Buttons>
                      </AboutMe.TextArea>
                    </AboutMe.Column>
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
            <FooterContainer color="rgb(22, 28, 45)" />{" "}
          </>
        ) : (
          <div>Loading...</div>
        )}
      </Dialog>
    </div>
  );
}
