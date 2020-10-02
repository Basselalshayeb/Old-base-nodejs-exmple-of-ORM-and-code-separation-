
module.exports = function (app, User, Folder, File ,fs ,formidable) {
   
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
            res.send({ status: 'success' });
        })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving tutorials."
                });
            });
    })

    /**
     * @param file
     * @return results and save to database the path
     */
    app.post('/File', (req, res) => {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var oldpath = files.filetoupload.path;
            var newpath = require("path").join(".", "\\storage\\") + files.filetoupload.name;
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            });
        });

    });
}