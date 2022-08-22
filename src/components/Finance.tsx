import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

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
                  <span>Прозрачная</span>
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
              <img
                style={{
                  display: "none",
                }}
                src="https://noboring-finance.ru/wp-content/themes/noboring-finance/assets/img/ex-label.svg"
                data-src="https://noboring-finance.ru/wp-content/themes/noboring-finance/assets/img/ex-label.svg"
                alt=""
              ></img>
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
          <img
            style={{
              position: "absolute",
              top: "-103px",
              width: "174px",
              right: "auto",
              left: "calc(50% - 90px)",
            }}
            src="https://noboring-finance.ru/wp-content/themes/noboring-finance/assets/img/ex-banner.png?ver=25"
            alt=""
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Finance;
