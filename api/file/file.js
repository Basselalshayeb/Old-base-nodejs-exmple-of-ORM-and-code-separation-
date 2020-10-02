
module.exports = function (app, User, Folder, File) {
    /**
     * @param user_id
     * @param page
     * @returns Folders
     */
    app.delete('/File', (req, res) => {
        let fileId = req.query.fileId;

        File.destroy({
            where: {
                id: fileId
            }
        }).then(data => {
            res.send({status: 'success'});
        })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving tutorials."
                });
            });
    })

}