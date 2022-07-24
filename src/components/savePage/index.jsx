import * as React from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { useStoreState } from "easy-peasy";
import { gql, useMutation } from "@apollo/client";

const UPDATE_PAGE = gql`
  mutation ($data: TemplateInput!) {
    updateTemplate(id: 1, data: $data) {
      data {
        id
      }
    }
  }
`;

export default function SavePage() {
  const pages = useStoreState((state) => state.pages);

  const [updatePage, { loading, error }] = useMutation(UPDATE_PAGE);

  if (loading) return <>'Submitting...'</>;

  if (error) return <>`Submission error! ${error.message}`</>;

  const updatePageHandler = () => {
    updatePage({
      variables: {
        data: {
          pages: {
            homePage: {
              title1: pages.homePage.title1,
              title2: pages.homePage.title2,
              title3: pages.homePage.title3,
              title4: pages.homePage.title3,
              link1: pages.homePage.link1,
              link2: pages.homePage.link2,
            },
            aboutPage: {
              title1: pages.aboutPage.title1,
              title2: pages.aboutPage.title2,
              text1: pages.aboutPage.text1,
            },
            contactPage: {
              title1: pages.contactPage.title1,
              title2: pages.contactPage.title2,
              text1: pages.contactPage.text1,
              email: pages.contactPage.email,
              phone: pages.contactPage.phone,
            },
          },
        },
      },
    });
  };

  const handleOnClick = () => {
    console.log(pages, "My pages");

    updatePageHandler();
  };
  return (
    <Container>
      <Button size="large" onClick={handleOnClick} variant="contained">
        Save changes
      </Button>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;

  z-index: 1301;
`;
