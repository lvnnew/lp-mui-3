import { Box } from "@mui/system";
import Cases from "./components/Cases";
import Finance from "./components/Finance";
import Header from "./components/Main";

function App() {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Header />
      <Cases />
      <Finance />
    </Box>
  );
}

export default App;
