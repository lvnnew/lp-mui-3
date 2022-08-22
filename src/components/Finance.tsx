import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const Finance = () => {
  return (
    <Box>
      <Box
        sx={{
          maxWidth: "1326px",
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
      </Box>
    </Box>
  );
};

export default Finance;
