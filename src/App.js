import React, {useEffect} from 'react'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import CustomerPage from "./pages/CustomerPage.jsx";
import WorkerPage from "./pages/WorkerPage";
import BusinessPage from "./pages/BusinessPage";
import {useDispatch} from "react-redux";
import {userActions} from "./store/reducer/userSlice";
import Faq from "./pages/Faq";
import DownloadPage from "./pages/WorkerDownload";
import BusinessFranchise from "./pages/BusinessFranchise";

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userActions.changeToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'))
    })

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/customer" element={<CustomerPage />} />
                <Route path="/customer/faq" element={<Faq page="customer" />} />
                <Route path="/worker/faq" element={<Faq page="worker" />} />
                <Route path="/business/faq" element={<Faq page="business" />} />
                <Route path="/business/franchise" element={<BusinessFranchise />} />
                <Route path="/worker" element={<WorkerPage />} />
                <Route path="/worker/download" element={<DownloadPage />} />
                <Route path="/business" element={<BusinessPage />} />
                <Route path="*" element={<p>перейдите по пути /customer</p>} />
            </Routes>
        </BrowserRouter>
  )
}

export default App
