import * as React from "react";
import { Intros } from "../components";

function Intro1() {
  const url = "http://localhost:1337/api/projects/1";

  const [hobbiesData, setHobbiesData] = React.useState({});
  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setHobbiesData(data.data.attributes.HobbiesPage);
      });
  }, []);

  return (
    <Intros>
      <Intros.Box>
        <Intros.Container>
          <Intros.Content>
            <Intros.TextBox>
              <Intros.Text>🏀 hobbies and interests.</Intros.Text>
              <Intros.Heading2>{hobbiesData.intro}</Intros.Heading2>
            </Intros.TextBox>
          </Intros.Content>
        </Intros.Container>
      </Intros.Box>
    </Intros>
  );
}

function Intro3() {
  const url = "http://localhost:1337/api/projects/1";

  const [expertiseData, setExpertiseData] = React.useState({});

  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setExpertiseData(data.data.attributes.MyProjectsPage);
      });
  }, []);
  return (
    <Intros>
      <Intros.Box>
        <Intros.Container>
          <Intros.Content>
            <Intros.TextBox>
              <Intros.Text>👋 FROM SOUTH AFRICA</Intros.Text>
              <Intros.Heading2>{expertiseData.intro}</Intros.Heading2>
            </Intros.TextBox>
          </Intros.Content>
        </Intros.Container>
      </Intros.Box>
    </Intros>
  );
}

function Intro2() {
  const url = `http://localhost:1337/api/projects/1`;

  const [aboutData, setAboutPage] = React.useState({});

  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAboutPage(data.data.attributes.AboutPage);
      });
  }, []);
  return (
    <Intros>
      <Intros.Box>
        <Intros.Container>
          <Intros.Content>
            <Intros.TextBox>
              <Intros.Text>About Me </Intros.Text>
              <Intros.Heading2>{aboutData.intro}</Intros.Heading2>
            </Intros.TextBox>
          </Intros.Content>
        </Intros.Container>
      </Intros.Box>
    </Intros>
  );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { Intro1, Intro2, Intro3 };
