'use strict';

export default class SampleController {

    static connection(req, res) {
        res.status(200).json({
            data: "data"
        });
    }

}