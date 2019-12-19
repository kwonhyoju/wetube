export const home = (req, res) => res.render("home", { pageTitle: "home" });

export const search = (req, res) => {
    const {
        query: { terms: searchingBy }
    } = req;
    // const searchingBy = req.query.terms;

    res.render("search", { pageTitle: "search", searchingBy });
};

export const upload = (req, res) =>
    res.render("upload", { pageTitle: "upload" });

export const videoDetail = (req, res) =>
    res.render("videoDetail", { pageTitle: "home" });

export const editVideo = (req, res) =>
    res.render("editVideo", { pageTitle: "editvideo" });

export const deleteVideo = (req, res) =>
    res.render("deleteVideo", { pageTitle: "deleteVideo" });
