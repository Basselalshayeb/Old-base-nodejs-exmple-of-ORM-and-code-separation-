module.exports = function (app, Folder) {
    /**
     * @param user_id
     * @param page
     * @returns Folders
     */
    app.get('/Folder/Default', (req, res) => {
        // get the offset and limit is const
        let user_id = req.query.user_id;
        let limit = 5;
        let offset = req.query.page * 5;
        Folder.findAll({ offset, limit }).then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving tutorials."
            });
          });
    })
}