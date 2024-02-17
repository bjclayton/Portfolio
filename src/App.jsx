import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
