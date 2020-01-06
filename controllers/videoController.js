import routes from "../routes";
import Video from "../models/Video";

export const home = async(req, res) => {
    try{
        const videos = await Video.find({});
        // await는 성공여부와 상관없이 끝나기를 기다린다.
        res.render("home", { pageTitle: "home", videos });
    } catch(error){
        // 그래서 이렇게 error catch 해줘야 한다.
        console.log("error:::::",error);
        res.render("home", { pageTitle: "home", videos:[]});
    }
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
