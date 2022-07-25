import * as React from "react";
import styled from "styled-components";
import CreateIcon from "@mui/icons-material/Create";
import Backdrop from "@mui/material/Backdrop";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  p: 4,
  zIndex: "5",
};

type Props = {
  children: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  site: {
    siteName: string;
    siteUrl: string;
    category: string;
    status: string;
    previewUrl: string;
  };
};

export default function Editor({ children, onChange, value, site }: Props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClose();
    }
  };

  return (
    <>
      {site.status === "draft" ? (
        <Container>
          <P>{children}</P>
          <IconWrapper onClick={handleOpen}>
            <Fab color="secondary" aria-label="edit">
              <EditIcon />
            </Fab>
          </IconWrapper>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <Content>
                  <Typography
                    sx={{
                      paddingBottom: "0.5rem",
                    }}
                    id="transition-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    {value}
                  </Typography>
                  <Typography
                    id="transition-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    <TextField
                      sx={{
                        width: "100%",
                      }}
                      onKeyDown={handleKeyPress}
                      multiline
                      maxRows={12}
                      id="outlined-basic"
                      label="Edit text"
                      variant="outlined"
                      onChange={onChange}
                    />
                    {/* <Button onClick={onClick} variant="contained">
                  Save
                </Button> */}
                  </Typography>
                </Content>
              </Box>
            </Fade>
          </Modal>
        </Container>
      ) : (
        <P>{children}</P>
      )}
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.2rem 1.5rem;
  border-radius: 0.45rem;
  transition: border 0.4s ease-in-out;

  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  // opacity: 0;

  &:hover {
    // border: 1px solid #ccc;
    cursor: pointer;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1),
      0px 1px 2px 0px rgba(0, 0, 0, 0.06);
  }
`;

const IconWrapper = styled.div`
  min-width: 56px;
  min-height: 56px;
  margin-left: 8px;
  border-radius: 50%;
  background-color: #545050;

  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;

  ${Container}:hover & {
    opacity: 1;
  }
`;

const P = styled.p`
  margin: 0;
  padding: 0;
`;

const Content = styled.div`
  // display: flex;
  width: 460;
`;
