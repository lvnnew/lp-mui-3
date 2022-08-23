import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

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
            paddingTop: { xs: "0px", md: "212px" },
            paddingBottom: { xs: "0px", md: "110px" },
          }}
        >
          <Box
            sx={{
              display: { xs: "none", md: "inherit" },
              width: "100%",
              height: "auto",
              maxWidth: "1500px",
              position: "relative",
            }}
          >
            <img
              style={{
                width: "100%",
              }}
              src="https://noboring-finance.ru/wp-content/themes/noboring-finance/assets/img/map.png"
              data-src="https://noboring-finance.ru/wp-content/themes/noboring-finance/assets/img/map.png"
              alt=""
            />
          </Box>
          <Box
            sx={{
              display: { xs: "inherit", md: "none" },
              width: "90%",
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
                display: { xs: "block", md: "none" },
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
          </Box>
        </Box>
        <Box
          sx={{
            paddingTop: "110px",
            paddingBottom: "300px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              position: "relative",
              flexWrap: "wrap",
            }}
          >
            <Box>
              <Typography
                variant="h2"
                sx={{
                  maxWidth: "468px",
                  fontWeight: 500,
                  fontSize: { xs: "36px", md: "72px" },
                  lineHeight: { xs: "40px", md: "76px" },
                  textAlign: { xs: "center", md: "inherit" },
                }}
              >
                Что <span>входит</span>
                <Box
                  sx={{
                    display: { xs: "none", md: "inherit" },
                    position: "absolute",
                    left: "110px",
                    top: "75px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="302"
                    height="69"
                    viewBox="0 0 302 69"
                    fill="none"
                  >
                    <path
                      d="M1 46.9225C39.3254 56.7384 74.8495 62.7291 131.592 65.503C153.087 66.5538 174.608 64.6976 196.021 62.5434C232.27 58.8966 260.169 58.4899 282.156 44.3177C364.146 -8.53063 62.3979 -4.49702 27.3392 11.9101C0.032768 24.6893 1.3439 58.9073 118.914 66.6791C236.484 74.4509 322.543 46.3102 296.245 24.5493C275.206 7.14065 145.117 5.68204 78.4865 11.9101"
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
                    left: "145px",
                    top: "-12px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="157px"
                    height="69px"
                    viewBox="0 0 302 69"
                    fill="none"
                  >
                    <path
                      d="M1 46.9225C39.3254 56.7384 74.8495 62.7291 131.592 65.503C153.087 66.5538 174.608 64.6976 196.021 62.5434C232.27 58.8966 260.169 58.4899 282.156 44.3177C364.146 -8.53063 62.3979 -4.49702 27.3392 11.9101C0.032768 24.6893 1.3439 58.9073 118.914 66.6791C236.484 74.4509 322.543 46.3102 296.245 24.5493C275.206 7.14065 145.117 5.68204 78.4865 11.9101"
                      stroke="#FC3838"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </Box>
                <br /> в аутсорсинг
              </Typography>
              <Box
                sx={{
                  marginTop: { xs: "24px", md: "48px" },
                  marginBottom: { xs: "24px", md: "0px" },
                  width: { xs: "100%", md: "503px" },
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: { xs: "center", md: "initial" },
                }}
              >
                <Button
                  sx={{
                    marginBottom: { xs: "7px", md: "12px" },
                    marginRight: { xs: "7px", md: "12px" },
                    borderColor: "#e92a2a",
                    color: "#e92a2a",
                    textTransform: "none",
                    display: "inline-block",
                    padding: { xs: "8px 15px", md: "8px 24px" },
                    border: "1px solid #e92a2a",
                    fontSize: { xs: ".7rem", md: "1.1rem" },
                    fontWeight: "400",
                    borderRadius: "31px",
                    transition: "border-color .3s,color .3s",
                    ":hover": {
                      color: "#e92a2a",
                      border: "1px solid #e92a2a",
                    },
                  }}
                >
                  01 Финансовый директор
                </Button>
                <Button
                  sx={{
                    marginBottom: { xs: "7px", md: "12px" },
                    marginRight: { xs: "7px", md: "12px" },
                    borderColor: "#1d1814",
                    color: "#1d1814",
                    textTransform: "none",
                    display: "inline-block",
                    padding: { xs: "8px 15px", md: "8px 24px" },
                    border: "1px solid #1d1814",
                    fontSize: { xs: ".7rem", md: "1.1rem" },
                    fontWeight: "400",
                    borderRadius: "31px",
                    transition: "border-color .3s,color .3s",
                    ":hover": {
                      color: "#e92a2a",
                      border: "1px solid #e92a2a",
                    },
                  }}
                >
                  02 Онлайн-школа
                </Button>
                <Button
                  sx={{
                    marginBottom: { xs: "7px", md: "12px" },
                    marginRight: { xs: "7px", md: "12px" },
                    borderColor: "#1d1814",
                    color: "#1d1814",
                    textTransform: "none",
                    display: "inline-block",
                    padding: { xs: "8px 15px", md: "8px 24px" },
                    border: "1px solid #1d1814",
                    fontSize: { xs: ".7rem", md: "1.1rem" },
                    fontWeight: "400",
                    borderRadius: "31px",
                    transition: "border-color .3s,color .3s",
                    ":hover": {
                      color: "#e92a2a",
                      border: "1px solid #e92a2a",
                    },
                  }}
                >
                  03 База знаний
                </Button>
                <Button
                  sx={{
                    marginBottom: { xs: "7px", md: "12px" },
                    marginRight: { xs: "7px", md: "12px" },
                    borderColor: "#1d1814",
                    color: "#1d1814",
                    textTransform: "none",
                    display: "inline-block",
                    padding: { xs: "8px 15px", md: "8px 24px" },
                    border: "1px solid #1d1814",
                    fontSize: { xs: ".7rem", md: "1.1rem" },
                    fontWeight: "400",
                    borderRadius: "31px",
                    transition: "border-color .3s,color .3s",
                    ":hover": {
                      color: "#e92a2a",
                      border: "1px solid #e92a2a",
                    },
                  }}
                >
                  04 Отдел качества
                </Button>
                <Button
                  sx={{
                    marginBottom: { xs: "7px", md: "12px" },
                    marginRight: { xs: "7px", md: "12px" },
                    borderColor: "#1d1814",
                    color: "#1d1814",
                    textTransform: "none",
                    display: "inline-block",
                    padding: { xs: "8px 15px", md: "8px 24px" },
                    border: "1px solid #1d1814",
                    fontSize: { xs: ".7rem", md: "1.1rem" },
                    fontWeight: "400",
                    borderRadius: "31px",
                    transition: "border-color .3s,color .3s",
                    ":hover": {
                      color: "#e92a2a",
                      border: "1px solid #e92a2a",
                    },
                  }}
                >
                  05 Мероприятия
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                maxWidth: "660px",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
            >
              <img
                style={{
                  borderRadius: "30px",
                  width: "100%",
                }}
                src="https://noboring-finance.ru/wp-content/uploads/2022/06/findir2-2.png"
                data-src="https://noboring-finance.ru/wp-content/uploads/2022/06/findir2-2.png"
                alt=""
              />
              <Box
                sx={{
                  position: "relative",
                  zIndex: "2",
                  marginTop: "-50px",
                  maxWidth: "612px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  padding: "24px 32px",
                  background: "#fdfdfd",
                  border: "1px solid #ededed",
                  boxSizing: "border-box",
                  boxShadow:
                    "0px 6.71216px 24.1638px -7.38338px rgb(0 0 0 / 5%)",
                  borderRadius: "20px",
                }}
              >
                <Box>
                  <Typography sx={{ fontWeight: "500", fontSize: "20px" }}>
                    01
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: "24px",
                      lineHeight: "32px",
                      color: "#1d1814",
                    }}
                  >
                    Финансовый директор
                  </Typography>
                  <Box>
                    <svg
                      style={{
                        display: "block",
                        width: "40px",
                        height: "27px",
                        position: "absolute",
                        left: "21px",
                        top: "25px",
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="27"
                      viewBox="0 0 40 27"
                      fill="none"
                    >
                      <path
                        d="M0.708568 23.5088C8.70703 26.5088 16.0314 27.3182 25 23.9848C32.793 21.0883 33.717 22.8803 36.5 16.002C43.6711 -1.72201 15.7116 5.002 8.88252 10.2865C3.72678 14.2762 0.883213 26.1146 18.2541 24.8984C40.3929 23.3484 41.6788 11.1305 37.4132 5.0135C32.6017 -1.88635 6.2639 -1.49029 0.707455 14.0096"
                        stroke="#FC3838"
                        stroke-linecap="round"
                      />
                    </svg>
                  </Box>
                </Box>
                <Box>
                  Возьмет ответственность за финансовый учет
                  и&nbsp;планирование. Организует сбор цифр, проанализирует
                  показатели, предложит пути развития бизнеса
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Finance;
