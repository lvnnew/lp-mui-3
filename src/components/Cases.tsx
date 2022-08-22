import React from "react";
import { Typography, Box, Button, Stack, } from "@mui/material";

const Cases = () => {
  return (
    <Box
      sx={{
        padding: "145px 0",
        borderRadius: { xs: "40px", md: "80px" },
        background: "#1d1814",
        color: "#fdfdfd",
        paddingTop: { xs: "80px", md: "73px" },
        paddingBottom: { xs: "73px", md: "73px" },
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: "375px", md: "1326px" },
          textAlign: { xs: "center", md: "left" },
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            maxWidth: "859px",
            textAlign: { xs: "center", md: "left" },
            fontWeight: "500",
            marginLeft: "0px",
            marginRight: "auto",
            fontSize: { xs: "40px", md: "72px" },
            lineHeight: { xs: "40px", md: "72px" },
            paddingTop: { xs: "0px", md: "72px" },
          }}
        >
          Управляйте бизнесом на основе цифр
        </Typography>
        <Typography
          sx={{
            visibility: { xs: "collapse", md: "visible" },
            maxWidth: "854px",
            marginTop: { xs: "-70px", md: "40px" },
            marginBottom: { xs: "-40px", md: "20px" },
            fontSize: "24px",
            lineHeight: "32px",
            textAlign: "left",
          }}
        >
          С финансовым директором понятно, за какие рычаги можно дернуть, чтобы
          чистая прибыль бизнеса росла.
        </Typography>
        <Stack
          direction="row"
          maxWidth="100%"
          justifyContent={{ xs: "center", md: "space-around" }}
          flexWrap="wrap"
          marginRight="10px"
          marginLeft="10px"
          paddingTop="20px"
        >
          <Button
            size="medium"
            variant="outlined"
            sx={{
              fontSize: "1.1rem",
              margin: "2.5px",
              color: "red",
              borderRadius: "50px",
              border: "1px solid red",
              textTransform: "none",
              display: "inline-block",
              padding: "8px 24px 10px",
              transition: "border-color .3s,color .3s",
              ":hover": {
                border: "1px solid red",
                color: "red",
              },
            }}
          >
            Все кейсы
          </Button>

          <Button
            size="medium"
            variant="outlined"
            sx={{
              fontSize: "1.1rem",
              margin: "2.5px",
              color: "white",
              borderRadius: "50px",
              border: "1px solid white",
              textTransform: "none",
              display: "inline-block",
              padding: "8px 24px 10px",
              transition: "border-color .3s,color .3s",
              ":hover": {
                border: "1px solid red",
                color: "red",
              },
            }}
          >
            Строительство
          </Button>

          <Button
            size="medium"
            variant="outlined"
            sx={{
              fontSize: "1.1rem",
              margin: "2.5px",
              color: "white",
              borderRadius: "50px",
              border: "1px solid white",
              textTransform: "none",
              display: "inline-block",
              padding: "8px 24px 10px",
              transition: "border-color .3s,color .3s",
              ":hover": {
                border: "1px solid gray",
                color: "gray",
              },
            }}
          >
            Производство
          </Button>
          <Button
            size="medium"
            variant="outlined"
            sx={{
              fontSize: "1.1rem",
              margin: "2.5px",
              color: "white",
              borderRadius: "50px",
              border: "1px solid white",
              textTransform: "none",
              display: "inline-block",
              padding: "8px 24px 10px",
              transition: "border-color .3s,color .3s",
              ":hover": {
                border: "1px solid #00cf9d",
                color: "#00cf9d",
              },
            }}
          >
            Медицина
          </Button>
          <Button
            size="medium"
            variant="outlined"
            sx={{
              fontSize: "1.1rem",
              margin: "2.5px",
              color: "white",
              borderRadius: "50px",
              border: "1px solid white",
              textTransform: "none",
              display: "inline-block",
              padding: "8px 24px 10px",
              transition: "border-color .3s,color .3s",
              ":hover": {
                border: "1px solid #005fcf",
                color: "#005fcf",
              },
            }}
          >
            IT
          </Button>
          <Button
            size="medium"
            variant="outlined"
            sx={{
              fontSize: "1.1rem",
              margin: "2.5px",
              color: "white",
              borderRadius: "50px",
              border: "1px solid white",
              textTransform: "none",
              display: "inline-block",
              padding: "8px 24px 10px",
              transition: "border-color .3s,color .3s",
              ":hover": {
                border: "1px solid #ffd600",
                color: "#ffd600",
              },
            }}
          >
            Торговля
          </Button>
          <Button
            size="medium"
            variant="outlined"
            sx={{
              fontSize: "1.1rem",
              margin: "2.5px",
              color: "white",
              borderRadius: "50px",
              border: "1px solid white",
              textTransform: "none",
              display: "inline-block",
              padding: "8px 24px 10px",
              transition: "border-color .3s,color .3s",
              ":hover": {
                border: "1px solid red",
                color: "red",
              },
            }}
          >
            Перевозки
          </Button>
          <Button
            size="medium"
            variant="outlined"
            sx={{
              fontSize: "1.1rem",
              margin: "2.5px",
              color: "white",
              borderRadius: "50px",
              border: "1px solid white",
              textTransform: "none",
              display: "inline-block",
              padding: "8px 24px 10px",
              transition: "border-color .3s,color .3s",
              ":hover": {
                border: "1px solid #00cf9d",
                color: "#00cf9d",
              },
            }}
          >
            Услуги
          </Button>
          <Button
            size="medium"
            variant="outlined"
            sx={{
              fontSize: "1.1rem",
              margin: "2.5px",
              color: "white",
              borderRadius: "50px",
              border: "1px solid white",
              textTransform: "none",
              display: "inline-block",
              padding: "8px 24px 10px",
              transition: "border-color .3s,color .3s",
              ":hover": {
                border: "1px solid #005fcf",
                color: "#005fcf",
              },
            }}
          >
            Общепит
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Cases;
