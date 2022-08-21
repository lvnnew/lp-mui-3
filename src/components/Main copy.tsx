import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Main = (props: any) => {
  return (
    <>
      <Box>
        <Box
          sx={{
            maxWidth: "1326px",
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "24px 15px",
            }}
          >
            <img
              width="167px"
              height="55px"
              src="https://noboring-finance.ru/wp-content/themes/noboring-finance/assets/img/logo.svg"
              data-src="https://noboring-finance.ru/wp-content/themes/noboring-finance/assets/img/logo.svg"
              alt=""
            ></img>
            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "flex" },
                listStyle: "none",
              }}
            >
              <li>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "#1d1814",
                    transition: "color .4s",
                    fontWeight: 500,
                    marginRight: "24px",
                  }}
                >
                  Кейсы
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "#1d1814",
                    transition: "color .4s",
                    fontWeight: 500,
                    marginRight: "24px",
                  }}
                >
                  Газета НФ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "#1d1814",
                    transition: "color .4s",
                    fontWeight: 500,
                  }}
                >
                  Отзывы
                </a>
              </li>
            </Box>
            <Box display={{ xs: "none", sm: "none", md: "flex" }}>
              <a
                href="tel:89000000000"
                style={{
                  textDecoration: "none",
                  color: "#1d1814",
                  transition: "color .4s",
                  fontWeight: 500,
                  marginRight: "24px",
                }}
              >
                8 000 000-00-00
              </a>
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  color: "#e92a2a",
                  transition: "color .4s",
                  fontWeight: 500,
                }}
              >
                Консультация
              </a>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ paddingBottom: "204px" }}>
        <Box
          sx={{
            maxWidth: "1326px",
            marginLeft: "auto",
            marginRight: "auto",
            paddingRight: "15px",
            paddingLeft: "15pxm",
          }}
        >
          <Grid container spacing={1}>
          <Container
              sx={{
                zIndex: -1,
                marginTop: { xs: "10px", sm: "10px", md: "0px" },
                position: "relative",
                width: "auto",
                height: "100%",
                display: "block",
                marginLeft: { xs: "auto", sm: "auto", md: "50%" },
              }}
            >
              <picture>
                <img
                  width="100%"
                  height="auto"
                  src="https://noboring-finance.ru/wp-content/themes/noboring-finance/assets/img/noboring-finance.webp"
                  alt=""
                  style={{
                    position: "relative",
                    height: "100%",
                    maxWidth: "100%",
                    right: "auto",
                    left: "auto",
                    display: "block",
                  }}
                />
              </picture>
            </Container>
            <Grid>
              <Typography
                variant="h1"
                sx={{
                  maxWidth: { sm: "100%", md: "616px", lg: "893px" },
                  fontWeight: 500,
                  fontSize: { xs: "48px", sm: "48px", md: "90px", lg: "133px" },
                  color: "#1d1814",
                  textAlign: { xs: "center", sm: "center", md: "inherit" },
                  marginTop: { xs: "30px" },
                  marginRight: "auto",
                  marginLeft: "auto",
                }}
              >
                Финдиректор
                <br /> на аутсорсе
              </Typography>
            </Grid>
            
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Main;
