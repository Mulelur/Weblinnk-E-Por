import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Button, ClearButton } from "../../components/buttons";
import { Expertise } from "../../components";
import TimeIcon from "../../components/svg/Time";
import Intros from "../Intros";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function ExpertiseDialog() {
  const dialogs = useStoreState((state) => state.dialogs);

  const setDialog = useStoreActions((actions) => actions.setDialog);

  const handleClose = (id) => {
    setDialog({ id, open: false });
  };

  const getOpen = () => {
    return dialogs.find((item) => item.name === "Expertise").open;
  };
  const qs = require("qs");
  const query = qs.stringify(
    {
      populate: ["ManagementMatrix"],
    },
    {
      encodeValuesOnly: true,
    }
  );

  const url = `http://localhost:1337/api/projects/1?${query}`;

  const [expertiseData, setExpertiseData] = React.useState({});
  const [mediaData, setMediaData] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setExpertiseData(data.data.attributes.MyProjectsPage);
        setMediaData(data.data.attributes.ManagementMatrix.data.attributes);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Dialog
        fullScreen
        open={getOpen()}
        onClose={() => handleClose(2)}
        TransitionComponent={Transition}
      >
        {!loading ? (
          <>
            <ClearButton onClick={() => handleClose(2)}>
              <CloseIcon fontSize="large" />
            </ClearButton>
            <Expertise>
              <Intros.Intro3 />
              <Expertise.Box>
                <Expertise.ContainerFluid>
                  <Expertise.MasonryGrid>
                    {expertiseData.projects.map((item, index) => {
                      return (
                        <>
                          <Expertise.Col key={index}>
                            <Expertise.ScreenBox>
                              <Expertise.Link href={item.link}>
                                <Expertise.Img
                                  alt="img"
                                  src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                                />
                              </Expertise.Link>
                              <Expertise.TextBox>
                                <Expertise.TextBoxText>
                                  {item.module}
                                </Expertise.TextBoxText>
                                <Expertise.TextBoxTitle>
                                  {item.title}
                                </Expertise.TextBoxTitle>
                              </Expertise.TextBox>
                            </Expertise.ScreenBox>
                          </Expertise.Col>
                        </>
                      );
                    })}
                  </Expertise.MasonryGrid>
                </Expertise.ContainerFluid>
              </Expertise.Box>
              {/* <Expertise.Floating /> */}
              <Expertise.Floating2 />
              <Expertise.Box>
                <Expertise.Container>
                  <Expertise.Content>
                    <Expertise.Heading2>
                      High school subjects and Varsity modules
                    </Expertise.Heading2>
                    <Expertise.Subjects>
                      <Expertise.Group>
                        <Expertise.Title>High School Subjects</Expertise.Title>
                        <Expertise.List>
                          {expertiseData.highSchoolSubjects.map((item) => {
                            return (
                              <Expertise.ListItem>{item}</Expertise.ListItem>
                            );
                          })}
                        </Expertise.List>
                      </Expertise.Group>
                      <Expertise.Group>
                        <Expertise.Title>Modules</Expertise.Title>
                        <Expertise.List>
                          {expertiseData.modules.map((item) => {
                            return (
                              <Expertise.ListItem>{item}</Expertise.ListItem>
                            );
                          })}
                        </Expertise.List>
                      </Expertise.Group>
                    </Expertise.Subjects>
                  </Expertise.Content>
                </Expertise.Container>
              </Expertise.Box>
              <Expertise.Box>
                <Expertise.Container>
                  <Expertise.Content>
                    <Expertise.Heading2>Management Matrix</Expertise.Heading2>
                    <Expertise.MM>
                      <TimeIcon />
                    </Expertise.MM>
                    <Expertise.MM>
                      {/* <SmTime /> */}
                      {`http://localhost:1337${mediaData.url}`}
                    </Expertise.MM>
                  </Expertise.Content>
                </Expertise.Container>
              </Expertise.Box>
              <Expertise.Box>
                <Expertise.Content>
                  <Expertise.Column>
                    <Expertise.Project>
                      <Expertise.ProjectDot />
                      <Expertise.ProjectTitle>
                        AVAILABLE FOR FREELANCE PROJECTS
                      </Expertise.ProjectTitle>
                    </Expertise.Project>
                    <Expertise.Heading2>
                      Do you have illustration project? Let's talk.
                    </Expertise.Heading2>
                    <Expertise.ButtonContainer>
                      <Button>Let's Talk Now</Button>
                    </Expertise.ButtonContainer>
                  </Expertise.Column>
                </Expertise.Content>
              </Expertise.Box>
            </Expertise>
          </>
        ) : (
          "loading"
        )}
      </Dialog>
    </div>
  );
}
