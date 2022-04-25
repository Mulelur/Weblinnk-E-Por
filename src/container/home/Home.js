import React from "react";
import { Home } from "../../components";
import { Button } from "../../components/buttons";

const host = "http://localhost:1337";

export default function SectionHeaderContainer() {
  const qs = require("qs");
  const query = qs.stringify(
    {
      populate: ["Profile1"],
    },
    {
      encodeValuesOnly: true,
    }
  );

  const url = `http://localhost:1337/api/projects/1?${query}`;

  const [homeData, setHomeData] = React.useState({});

  const [mediaData, setMediaData] = React.useState({});

  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setHomeData(data.data.attributes.HomePage);
        setMediaData(data.data.attributes.Profile1.data.attributes);
        console.log(data.data.attributes);
      });
  }, []);

  return (
    <Home>
      <Home.Box>
        <Home.Container>
          <Home.Content>
            <Home.ImageMain>
              <Home.Image
                src={`http://localhost:1337${mediaData.url}`}
                alt={mediaData.name}
              />
            </Home.ImageMain>
            <Home.Heading4>Hello Welcome</Home.Heading4>
            <Home.Heading2>{homeData.intro}</Home.Heading2>
          </Home.Content>
        </Home.Container>
      </Home.Box>
      <Home.Box>
        <Home.Container>
          <Home.Content>
            <Home.Text>{homeData.quote}</Home.Text>
            <Button>Explore more...</Button>
          </Home.Content>
        </Home.Container>
      </Home.Box>
      <Home.Box>
        <Home.Container>
          <Home.Content>
            <Home.Heading2>{homeData.text}</Home.Heading2>
            <Home.Links>
              <Home.Link>CONTACT@FOLIO.DESIGN</Home.Link>
              <Home.Divider>|</Home.Divider>
              <Home.Link>LINKEDIN.COM/FOLIO</Home.Link>
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
