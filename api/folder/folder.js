
module.exports = function (app, User, Folder, File) {
    /**
     * @param user_id
     * @param page
     * @returns Folders
     */
    app.get('/Folder', (req, res) => {
        // get the offset and limit is const
        let userId = req.query.user_id;
        let limit = 5;
        let offset = req.query.page * 5;

        Folder.findAll({
            offset
            , limit
            , include: [
                File
                , {
                    model: User
                    , attributes: ['id']
                    , where: {
                        id: userId
                    }
                }]
        }).then(data => {
            res.send({ status: 'success', body: data });
        })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving tutorials."
                });
            });
    })

    app.delete('/Folder', (req, res) => {
        let folderId = req.query.folderId;

        Folder.findByPk(folderId).then(folder => {

            File.count({
                where: {
                    folderId
                }
            }).then(count => {
                console.log(count);
                // check files count
                if(count ===0){
                    // delete
                    Folder.destroy({
                        where: {
                            id: folderId
                        }
                    }).then(data => {
                        res.send({ status: 'success'});
                    })
                }else{
                    res.send({status: 'failed', body: 'folder is not empty'});
                }
                /* */
            });

        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });


    });
}