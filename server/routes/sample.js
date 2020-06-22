'use strict';

module.exports = {
    connection: function (req, res) {
        res.status(200).json({
            data: "data"
        });
    }
}