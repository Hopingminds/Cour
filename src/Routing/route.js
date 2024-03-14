import Navbar from '../Components/Header'
import Herosection from '../Components/Herosection'
import Companies from '../Components/Companies'
import Courses_Home from '../Components/Courses_Home'
import DetailCourses from '../Components/DetailCourses'
import Home from '../Components/Home'



const Router = () => {
    return (
     
            <BrowserRouter >
                <Navbar/>

                <Routes>
                   <Route path='/' element={<Home/>}/>
                   <Route path='/a' element={<DetailCourses/>}/>
                </Routes>
            </BrowserRouter >
      
    )
}

export default Router
