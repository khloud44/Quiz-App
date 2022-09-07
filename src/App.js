import { Box, Container, Typography } from "@material-ui/core";
import { Route, Routes } from "react-router-dom";
import { FinalScore } from "./Pages/FinalScore";
import { Questions } from "./Pages/Questions";
import { Setting } from "./Pages/Setting";

function App() {
  return (
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Typography variant="h2" fontWeight="bold">Quiz App</Typography>
          <Routes>
            <Route path="/" element={<Setting/>}/>
            <Route path="/questions" element={<Questions/>}/>
            <Route path="/score" element={<FinalScore/>}/>
          </Routes>
        </Box>
      </Container>
  );
}

export default App;
