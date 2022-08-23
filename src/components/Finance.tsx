import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

const Finance = () => {
  return (
    <Box>
      <Box
        sx={{
          maxWidth: { xs: "375px", md: "1326px" },
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            minHeight: "400px",
            paddingRight: "15px",
            paddingLeft: "15px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Grid
            container
            spacing={2}
            columns={16}
            sx={{
              padding: { xs: "104px 0", md: "210px 0" },
              paddingBottom: { xs: "100px", md: "230px" },
            }}
          >
            <Grid
              item
              xs={16}
              md={8}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  maxWidth: { xs: "456px", md: "526px" },
                  textAlign: { xs: "center", md: "inherit" },
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 500,
                    fontSize: { xs: "36px", md: "72px" },
                    lineHeight: { xs: "50px", md: "76px" },
                  }}
                >
                  Прозрачная
                  <Box
                    sx={{
                      display: { xs: "none", md: "inherit" },
                      position: "absolute",
                      left: "-40px",
                      top: "-3px",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="492"
                      height="106"
                      viewBox="0 0 492 106"
                      fill="none"
                    >
                      <path
                        d="M1 71.8513C68.42 88.17 130.53 97.6364 236.391 101.425C256.732 102.152 277.103 100.591 297.323 98.2568C367.41 90.1669 419.768 92.3402 460 67.8324C593.852 -13.7043 101.235 -7.48104 43.9999 17.8326C-0.579048 37.5489 1.56143 90.3419 193.5 102.333C385.439 114.323 525.934 70.9065 483 37.3329C448.653 10.4741 236.277 8.22365 127.5 17.8326"
                        stroke="#FC3838"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </Box>
                  <Box
                    sx={{
                      display: { xs: "inherit", md: "none" },
                      position: "absolute",
                      left: "-15px",
                      top: "-26px",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80%"
                      height="104px"
                      viewBox="0 0 492 106"
                      fill="none"
                    >
                      <path
                        d="M1 71.8513C68.42 88.17 130.53 97.6364 236.391 101.425C256.732 102.152 277.103 100.591 297.323 98.2568C367.41 90.1669 419.768 92.3402 460 67.8324C593.852 -13.7043 101.235 -7.48104 43.9999 17.8326C-0.579048 37.5489 1.56143 90.3419 193.5 102.333C385.439 114.323 525.934 70.9065 483 37.3329C448.653 10.4741 236.277 8.22365 127.5 17.8326"
                        stroke="#FC3838"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </Box>
                  <Box
                    sx={{
                      display: { xs: "none", md: "inherit" },
                      position: "absolute",
                      left: "-40px",
                      top: "-3px",
                      maxWidth: { xs: "23px)" },
                      maxHeight: { xs: "54px" },
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="492"
                      height="106"
                      viewBox="0 0 492 106"
                      fill="none"
                    >
                      <path
                        d="M1 71.8513C68.42 88.17 130.53 97.6364 236.391 101.425C256.732 102.152 277.103 100.591 297.323 98.2568C367.41 90.1669 419.768 92.3402 460 67.8324C593.852 -13.7043 101.235 -7.48104 43.9999 17.8326C-0.579048 37.5489 1.56143 90.3419 193.5 102.333C385.439 114.323 525.934 70.9065 483 37.3329C448.653 10.4741 236.277 8.22365 127.5 17.8326"
                        stroke="#FC3838"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </Box>
                  <br /> система финучета
                </Typography>
                <Typography
                  sx={{
                    marginTop: { xs: "10px", md: "32px" },
                    marginBottom: { xs: "17px", md: "0px" },
                    fontSize: { xs: "16px", md: "24px" },
                    lineHeight: { xs: "22px", md: "32px" },
                  }}
                >
                  Отчеты, дашборды и графики помогут принимать прибыльные
                  решения. Вместо цифр вы будете видеть деньги
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={16}
              md={2}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", md: "inherit" },
              }}
            >
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    width: { xs: "320px", md: "660px" },
                    height: { xs: "339px", md: "700px" },
                  }}
                >
                  <img
                    loading="lazy"
                    src="https://noboring-finance.ru/wp-content/themes/noboring-finance/assets/img/fin.png"
                    srcSet="https://noboring-finance.ru/wp-content/themes/noboring-finance/assets/img/fin@2x.png"
                    alt=""
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            marginTop: { xs: "104px", md: "0px" },
            marginBottom: { xs: "104px", md: "0px" },
            background: "#e92a2a",
            borderRadius: "56px",
            padding: { xs: "93px 24px 48px", md: "119px 83px 119px 60px" },
            color: "#fdfdfd",
            position: "relative",
            marginRight: "15px",
            marginLeft: "15px",
          }}
        >
          <Box>
            <Typography
              sx={{
                maxWidth: { xs: "348px", md: "672px" },
                fontWeight: 500,
                fontSize: { xs: "36px", md: "72px" },
                lineHeight: { xs: "40px", md: "76px" },
                textAlign: { xs: "center", md: "inherit" },
              }}
            >
              Онлайн-экскурсия по аутсорсингу финансов{" "}
              <Button
                disabled
                sx={{
                  display: { xs: "none", md: "initial" },
                }}
              >
                <img
                  src="https://noboring-finance.ru/wp-content/themes/noboring-finance/assets/img/ex-label.svg"
                  data-src="https://noboring-finance.ru/wp-content/themes/noboring-finance/assets/img/ex-label.svg"
                  alt=""
                />
              </Button>
            </Typography>
            <Typography
              sx={{
                textAlign: { xs: "center", md: "inherit" },
                marginTop: { xs: "22px", md: "48px" },
                marginBottom: { xs: "31px", md: "40px" },
                maxWidth: { xs: "316px", md: "449px" },
                fontSize: { xs: "16px", md: "24px" },
                lineHeight: { xs: "22px", md: "32px" },
              }}
            >
              Чем финдиректор поможет конкретно вашей компании, в каком формате
              происходит работа, сколько это стоит.
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: { xs: "46px", md: "0px" },
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Button
                sx={{
                  textAlign: "center",
                  width: "300px",
                  border: "none",
                  background: "#fdfdfd",
                  borderRadius: "60px",
                  color: "#e92a2a",
                  padding: "18px 40px",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "24px",
                  height: "60px",
                  cursor: "pointer",
                  textTransform: "none",
                  transition: "background .3s,border-color .3s,color .3s",
                  ":hover": {
                    border: "none",
                    background: "#fdfdfd",
                    borderRadius: "60px",
                    color: "#cc1010",
                  },
                }}
              >
                Записаться
              </Button>
              <Typography
                sx={{
                  marginLeft: { xs: "0px", md: "23px" },
                  maxWidth: { xs: "179px", md: "198px" },
                  fontSize: "14px",
                  lineHeight: "16px",
                  textAlign: { xs: "center", md: "inherit" },
                  marginTop: { xs: "10px", md: "0px" },
                }}
              >
                Только для компаний с выручкой от 1 млн рублей
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "inherit", md: "none" },
              position: "absolute",
              top: "-103px",
              right: "auto",
              left: "calc(50% - 90px)",
            }}
          >
            <img
              style={{
                width: "174px",
              }}
              src="https://noboring-finance.ru/wp-content/themes/noboring-finance/assets/img/ex-banner.png?ver=25"
              alt=""
            />
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "inherit" },
              position: "absolute",
              right: "83px",
              top: "65px",
            }}
          >
            <img
              style={{
                width: "490px",
              }}
              src="https://noboring-finance.ru/wp-content/themes/noboring-finance/assets/img/ex-banner.png?ver=25"
              alt=""
            />
          </Box>
          <Box
            sx={{
              display: { xs: "inherit", md: "none" },
              position: "absolute",
              top: "-103px",
              right: "auto",
              left: "calc(50% - 90px)",
            }}
          >
            <img
              style={{
                width: "174px",
              }}
              src="https://noboring-finance.ru/wp-content/themes/noboring-finance/assets/img/ex-banner.png?ver=25"
              alt=""
            />
          </Box>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            paddingTop: {xs:'10px',md:"212px"},
            paddingBottom: "110px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Container
            sx={{
              width: "100%",
              height: "auto",
              maxWidth: "1500px",
              position: "relative",
            }}
          >
            <img
              src="https://noboring-finance.ru/wp-content/themes/noboring-finance/assets/img/map.png"
              data-src="https://noboring-finance.ru/wp-content/themes/noboring-finance/assets/img/map.png"
              alt=""
            />
            <Box
              sx={{
                display: { xs: "block important", md: "none" },
                width: "188px",
                position: "absolute",
                top: "450px",
              }}
            >
              <img
                style={{
                  width: "100%",
                }}
                loading="lazy"
                src="https://noboring-finance.ru/wp-content/themes/noboring-finance/assets/img/map-text.png"
                data-src="https://noboring-finance.ru/wp-content/themes/noboring-finance/assets/img/map-text.png"
                alt=""
              />
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Finance;
