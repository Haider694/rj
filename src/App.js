import "./App.css";
import { Box, Stack } from "@mui/system";
import Menu from "./screen/Menu";

function App() {
  return (
    <div className="App">
      <Box sx={{ width: "auto", height: "910px" }} bgcolor="#eeeeee">
        <Stack sx={{ height: "910px", width: "auto"  ,overflow:"scroll"}}>
          <Menu />
        </Stack>
      </Box>
    </div>
  );
}

export default App;
