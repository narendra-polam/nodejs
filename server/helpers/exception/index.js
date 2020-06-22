'use strict';
export default class Exception {

    static SERVER_ERROR_EXCEPTION = 'serverErrorException';
    static INVALID_INPUT_EXCEPTION = 'invalidInputException';
    static MODEL_NOT_FOUND_EXCEPTION = 'modelNotFoundException';
    static MEMSQL_EXCEPTION = 'MemSql Down';
    static FILE_SIZE_EXCEPTION = 'File Size Limit Exceeded';
    static CASSANDRA_ERROR = 'Cassandra Error';
    static INVALID_TOKEN_EXCEPTION = 'INVALID_TOKEN_EXCEPTION';

    static handleMessage(err) {
        switch (err.message) {

            case Exception.MODEL_NOT_FOUND_EXCEPTION:
                return {
                    status: 404,
                    type: this.MODEL_NOT_FOUND_EXCEPTION,
                    message: 'Entity not found',
                };

            case Exception.INVALID_INPUT_EXCEPTION:
                return {
                    status: 401,
                    type: this.INVALID_INPUT_EXCEPTION,
                    message: err.detailedMessage || 'No Valid Input',
                };

            case Exception.CASSANDRA_ERROR:
                return {
                    status: 401,
                    type: this.CASSANDRA_ERROR,
                    message: 'Cassandra Error',
                };

            case Exception.MEMSQL_EXCEPTION:
                return {
                    status: 401,
                    type: this.MEMSQL_EXCEPTION,
                    message: 'MemSql Down',
                };

            case Exception.FILE_SIZE_EXCEPTION:
                return {
                    status: 401,
                    type: this.FILE_SIZE_EXCEPTION,
                    message: 'File Size Limit Exceeded',
                };
            case Exception.INVALID_TOKEN_EXCEPTION:
                return {
                    status: 404,
                    type: Exception.INVALID_TOKEN_EXCEPTION,
                    message: 'Invalid token',
                };
            default:
                return {
                    status: 500,
                    type: Exception.SERVER_ERROR_EXCEPTION,
                    message: 'Internal Server Error',
                };
        }
    }

    static handleCode(err) {

        switch (err.code) {
            case '23503':
                return {
                    status: 400,
                    type: Exception.INVALID_INPUT,
                    message: err.detail || err.message,
                };

            case '23505':
                return {
                    status: 400,
                    type: Exception.INVALID_INPUT,
                    message: 'Email Already Exist',
                };

            case '1234':
                return {
                    status: 200,
                    type: Exception.INVALID_INPUT,
                    message: 'User ' + err.name + ' has already triggered a job at ' + err.timestamp +
                        ' Please wait for 5-10 mins ' +
                        'for the existing job to complete',
                };
            case '12345':
                return {
                    status: 400,
                    type: Exception.INVALID_INPUT,
                    message: 'Uploaded file Invalid',
                };
            case '3225':
                return {
                    status: 200,
                    type: Exception.INVALID_INPUT,
                    message: 'Dataload In Progress',
                };
        }
    }

    static failWith(req, res, err) {
        const result = Exception.handleCode(err) || Exception.handleMessage(err);
        const data = {
            error: {
                type: result.type,
                message: result.message
            }
        };
        return res
            .status(result.status)
            .json(data);

    }
}