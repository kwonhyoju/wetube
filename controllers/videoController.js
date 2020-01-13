import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
    try {
        const videos = await Video.find({});
        // await는 성공여부와 상관없이 끝나기를 기다린다.
        res.render("home", { pageTitle: "home", videos });
    } catch (error) {
        // 그래서 이렇게 error catch 해줘야 한다.
        console.log("error:::::", error);
        res.render("home", { pageTitle: "home", videos: [] });
    }
};

export const search = (req, res) => {
    const {
        query: { terms: searchingBy }
    } = req;
    // const searchingBy = req.query.terms;이랑 위랑 같은 얘기

    res.render("search", { pageTitle: "search", searchingBy, videos });
};

export const getUpload = (req, res) =>
    res.render("upload", { pageTitle: "upload" });

export const postUpload = async (req, res) => {
    const {
        body: { title, description },
        file: { path }
    } = req;
    // console.log("body::::", body, "file::::", file);
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    });
    console.log(newVideo);

    res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async (req, res) => {
    // console.log(":::::::aaa:::::", req.params.id);
    const {
        params: { id }
    } = req;

    try {
        const video = await Video.findById(id);
        // model에서 mongoDB로 export한 Video에 id(비디오의 고유 id)를 찾는다는것
        // console.log(":::::modelVideo에저장한 영상의 고유 정보::::::", video);
        res.render("videoDetail", { pageTitle: "home", video });
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }
};

export const getEditVideo = async(req, res) =>{
    const {
        params:{id}
    }=req;
    try{
        const video=await Video.findById(id);
        res.render("editVideo",{pageTitle:`Edit ${video.title}`,video});
    }catch(error){
        res.redirect(routes.home);
    }
}

export const postEditVideo =async(req,res)=>{
    const {
        params:{id},
        body:{title,description}
    }=req;
    try{
        await Video.findOneAndUpdate({_id:id},{title,description});
        res.redirect(routes.videoDetail(id));
    }catch(error){
        res.render(routes.home);
    }
};
    

export const deleteVideo = (req, res) =>
    res.render("deleteVideo", { pageTitle: "deleteVideo" });
