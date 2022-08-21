import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Main = () => {
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
                <Button
                  variant="text"
                  href="#"
                  style={{
                    textTransform: "none",
                    fontSize: "1.1rem",
                    color: "#1d1814",
                    transition: "color .4s",
                    fontWeight: 500,
                    marginRight: "24px",
                  }}
                >
                  Кейсы
                </Button>
              </li>
              <li>
                <Button
                  variant="text"
                  href="#"
                  style={{
                    textTransform: "none",
                    fontSize: "1.1rem",
                    color: "#1d1814",
                    transition: "color .4s",
                    fontWeight: 500,
                    marginRight: "24px",
                  }}
                >
                  Газета НФ
                </Button>
              </li>
              <li>
                <Button
                  variant="text"
                  href="#"
                  style={{
                    textTransform: "none",
                    fontSize: "1.1rem",
                    color: "#1d1814",
                    transition: "color .4s",
                    fontWeight: 500,
                  }}
                >
                  Отзывы
                </Button>
              </li>
            </Box>
            <Box display={{ xs: "none", sm: "none", md: "flex" }}>
              <Button
                variant="text"
                href="tel:89000000000"
                style={{
                  textTransform: "none",
                  fontSize: "1.1rem",
                  color: "#1d1814",
                  transition: "color .4s",
                  fontWeight: 500,
                  marginRight: "24px",
                }}
              >
                8 000 000-00-00
              </Button>
              <Button
                variant="text"
                href="#"
                style={{
                  textTransform: "none",
                  fontSize: "1.1rem",
                  color: "#e92a2a",
                  transition: "color .4s",
                  fontWeight: 500,
                }}
              >
                Консультация
              </Button>
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
          <Grid direction="row" alignItems="center" columns={16}>
            <Grid
              xs={16}
              md={8}
              sx={{
                zIndex: -1,
                marginTop: { xs: "10px", sm: "10px", md: "0px" },
                marginLeft: { xs: "auto", sm: "auto", md: "50%" },
              }}
            >
              <picture>
                <img
                  src="https://noboring-finance.ru/wp-content/themes/noboring-finance/assets/img/noboring-finance.webp"
                  alt=""
                  style={{
                    maxWidth: "100%",
                  }}
                />
              </picture>
            </Grid>
            <Grid item xs={16} md={10}>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: "48px", sm: "48px", md: "90px", lg: "133px" },
                  color: "#1d1814",

                  textAlign: { xs: "center", sm: "center", md: "inherit" },
                  marginTop: { xs: "30px", sm: "30px", md: "-630px" },
                  lineHeight: { xs: "", sm: "", md: "120px" },
                }}
              >
                Финдиректор
                <br /> на аутсорсе
              </Typography>
              <Box
                sx={{
                  marginTop: { xs: "20px", md: "50px" },
                  display: "flex",
                  flexWrap: "wrap",
                  maxWidth: "603px",
                  justifyContent: { xs: "center", md: "space-between" },
                }}
              >
                <Box
                  sx={{
                    maxWidth: "273px",
                    flex: "0 0 273px",
                    marginBottom: { xs: "10px", md: "37px" },
                  }}
                >
                  <Box
                    sx={{
                      fontSize: "18px",
                      lineHeight: "24px",
                      color: "rgba(29,24,20,.5)",
                      marginBottom: "12px",
                      position: "relative",
                      webkitTextFillColor: "transparent",
                      webkitTextStroke: "1px",
                    }}
                  >
                    01
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="46"
                      height="26"
                      viewBox="0 0 46 26"
                      fill="none"
                      style={{
                        position: "absolute",
                        left: "-12px",
                      }}
                    >
                      <path
                        d="M0.628197 17.9696C7.12891 24.4697 6.80239 24.999 21.6312 25.4693C32.8713 25.8257 38.3642 21.6156 42.7693 15.6448C54.1205 0.259182 15.2892 0.228593 8.13077 4.46978C4.21003 6.79272 -1.49695 20.33 15.6312 23.4693C37.4605 27.4701 41.7426 15.9551 39.1312 8.96991C36.1855 1.09073 -4.36933 -3.07715 2.63077 7.92249"
                        stroke="#FC3838"
                        stroke-linecap="round"
                      />
                    </svg>
                  </Box>
                  <Box>
                    Влияем на рост прибыли
                    <br /> и снижение неэффективных расходов
                  </Box>
                </Box>
                <Box
                  sx={{
                    maxWidth: "273px",
                    flex: "0 0 273px",
                    marginBottom: { xs: "10px", md: "37px" },
                  }}
                >
                  <Box
                    sx={{
                      fontSize: "18px",
                      lineHeight: "24px",
                      color: "rgba(29,24,20,.5)",
                      marginBottom: "12px",
                      position: "relative",
                      webkitTextFillColor: "transparent",
                      webkitTextStroke: "1px",
                    }}
                  >
                    02
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="46"
                      height="26"
                      viewBox="0 0 46 26"
                      fill="none"
                      style={{
                        position: "absolute",
                        left: "-12px",
                      }}
                    >
                      <path
                        d="M0.628197 17.9696C7.12891 24.4697 6.80239 24.999 21.6312 25.4693C32.8713 25.8257 38.3642 21.6156 42.7693 15.6448C54.1205 0.259182 15.2892 0.228593 8.13077 4.46978C4.21003 6.79272 -1.49695 20.33 15.6312 23.4693C37.4605 27.4701 41.7426 15.9551 39.1312 8.96991C36.1855 1.09073 -4.36933 -3.07715 2.63077 7.92249"
                        stroke="#FC3838"
                        stroke-linecap="round"
                      />
                    </svg>
                  </Box>
                  <Box>
                    Организуем прозрачную систему контроля финансовых
                    показателей
                  </Box>
                </Box>
                <Box
                  sx={{
                    maxWidth: "273px",
                    flex: "0 0 273px",
                    marginBottom: "37px",
                  }}
                >
                  <Box
                    sx={{
                      fontSize: "18px",
                      lineHeight: "24px",
                      color: "rgba(29,24,20,.5)",
                      marginBottom: "12px",
                      position: "relative",
                      webkitTextFillColor: "transparent",
                      webkitTextStroke: "1px",
                    }}
                  >
                    03
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="46"
                      height="26"
                      viewBox="0 0 46 26"
                      fill="none"
                      style={{
                        position: "absolute",
                        left: "-12px",
                      }}
                    >
                      <path
                        d="M0.628197 17.9696C7.12891 24.4697 6.80239 24.999 21.6312 25.4693C32.8713 25.8257 38.3642 21.6156 42.7693 15.6448C54.1205 0.259182 15.2892 0.228593 8.13077 4.46978C4.21003 6.79272 -1.49695 20.33 15.6312 23.4693C37.4605 27.4701 41.7426 15.9551 39.1312 8.96991C36.1855 1.09073 -4.36933 -3.07715 2.63077 7.92249"
                        stroke="#FC3838"
                        stroke-linecap="round"
                      />
                    </svg>
                  </Box>
                  <Box>
                    Предоставим в команду профессионального финдиректора
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Button
                    href="#"
                    sx={{
                      textAlign: "center",
                      width: "240px",
                      background: "#e92a2a",
                      borderRadius: "60px",
                      color: "#fdfdfd",
                      padding: "18px 40px",
                      fontWeight: 500,
                      fontSize: "18px",
                      lineHeight: "24px",
                      textTransform: "inherit",
                      height: "60px",
                      cursor: "pointer",
                      transition: "background .3s,border-color .3s,color .3s",
                      ":hover": {
                        background: "#cc1010",
                      },
                    }}
                  >
                    Начать работу
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Main;
