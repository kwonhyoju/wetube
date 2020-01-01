import { videos } from "../db";
import routes from "../routes";
export const home = (req, res) => {
    res.render("home", { pageTitle: "home", videos });
};

export const search = (req, res) => {
    const {
        query: { terms: searchingBy }
    } = req;
    // const searchingBy = req.query.terms;이랑 위랑 같은 얘기

    res.render("search", { pageTitle: "search", searchingBy ,videos});
};

export const getUpload = (req, res) =>
    res.render("upload", { pageTitle: "upload" });

export const postUpload = (req,res) =>{
    const{
        body:{file,title,description}
    }=req;
    res.redirect(routes.videoDetail(456789));
};


export const videoDetail = (req, res) =>
    res.render("videoDetail", { pageTitle: "home" });

export const editVideo = (req, res) =>
    res.render("editVideo", { pageTitle: "editvideo" });

export const deleteVideo = (req, res) =>
    res.render("deleteVideo", { pageTitle: "deleteVideo" });
