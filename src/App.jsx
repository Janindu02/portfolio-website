import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { CeylonmineProject } from "./pages/CeylonmineProject";
import { LearningPlatformProject } from "./pages/LearningPlatformProject";
import { PlaneSeatProject } from "./pages/PlaneSeatProject";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/project/ceylonmine" element={<CeylonmineProject />} />
          <Route path="/project/learning-platform" element={<LearningPlatformProject />} />
          <Route path="/project/plane-seat" element={<PlaneSeatProject />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
