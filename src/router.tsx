import { BrowserRouter, Route, Routes } from "react-router-dom"
import * as pages from './pages'
import { MainLoader } from "./component/shared"
import { RefreshToken, ToastArea } from "@component/master"
import { Header, Navigate } from "./component/shared"
import { ProtectedRouteAuth, ProtectedRouteSession } from "./pages/protected-route"


export const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <ToastArea />
            <Navigate />
            <RefreshToken />

            <Routes>

                <Route element={
                    <ProtectedRouteSession>
                        <ProtectedRouteAuth >

                            <MainLoader />
                            <pages.Session />
                        </ProtectedRouteAuth>
                    </ProtectedRouteSession>
                } path="/session/:id/:name" />

                <Route element={<pages.Auth />} path="/auth" />
                <Route element={<pages.CreatePost />} path="/create-post" />
                <Route element={<pages.ResetPassword />} path="/reset-password" />
                <Route element={<pages.EditProfile />} path="/edit-profile" />
                <Route element={<pages.Subscribers />} path="/subscribers" />

                <Route element={<pages.Profile />} path="/profile/:id/:name" />
                <Route element={<pages.ChangePassword />} path="/change-password" />
                <Route element={<pages.Main />} path="/" />
                <Route element={<pages.Community />} path="/community" />
                <Route element={<pages.Faq />} path="/faq" />
                <Route element={<pages.CommunityRules />} path="/community-rules" />

                <Route element={<pages.Forum />} path="/forum" />
                <Route element={<pages.Department />} path="/department/:name" />

                <Route element={<pages.Post />} path="/post/:department/:id/:name" />
                <Route element={<pages.PreviewPost />} path="/preview/:content" />

                <Route element={<pages.P404 />} path="*" />
            </Routes>
        </BrowserRouter>
    )
}