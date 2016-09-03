var connection = require('../config/db').connection,
    constants = require('./constants');

//*********For View from index.jade***********//
exports.view = function(req, res) {
    res.render('index');
}

//************Search***************//
exports.list = function(req, res) {

    connection.query('SELECT * FROM battles', function(error, results, fields) {

        if (error) {
            console.log("-----------Error while search Query----------");
            var response = {
                "message": constants.responseMessages.ACTION_NOT_COMPLETED,
                "status": constants.responseFlags.ACTION_NOT_COMPLETED,
                "data": {
                    error
                }
            };
            res.json(response);
        } else if (results.length == 0) {
            console.log("-----------No data for search Query----------");
            var response = {
                "message": constants.responseMessages.DATA_NOT_EXISTS,
                "status": constants.responseFlags.DATA_NOT_EXISTS,
                "data": {
                    results
                }
            };
            res.json(response);
        } else {
            console.log("-----------Data exists for search Query----------");
            var response = {
                "message": constants.responseMessages.ACTION_COMPLETE,
                "status": constants.responseFlags.ACTION_COMPLETE,
                "data": {
                    results
                }
            };
            res.json(response);
        }
    });
}

//************COUNT****************//
exports.count = function(req, res) {
    connection.query('SELECT count(*) as count FROM battles', function(error, results, fields) {

        if (error) {
            console.log("-----------Error while search Query----------");
            var response = {
                "message": constants.responseMessages.ACTION_NOT_COMPLETED,
                "status": constants.responseFlags.ACTION_NOT_COMPLETED,
                "data": {
                    error
                }
            };
            res.json(response);
        } else if (results[0].count == 0) {
            console.log("-----------No data for search Query----------");
            var response = {
                "message": constants.responseMessages.DATA_NOT_EXISTS,
                "status": constants.responseFlags.DATA_NOT_EXISTS,
                "data": {
                    results
                }
            };
            res.json(response);
        } else {
            console.log("-----------Data exists for count Query----------");
            var response = {
                "message": constants.responseMessages.ACTION_COMPLETE,
                "status": constants.responseFlags.ACTION_COMPLETE,
                "data": {
                    results
                }
            };
            res.json(response);
        }
    });
}

//***************search name**************//

exports.searchname = function(req, res) {
    var name = req.body.sname;
    console.log(req.body);


    connection.query('SELECT * FROM battles WHERE name = ?', [name], function(error, results, fields) {

        if (error) {
            console.log("-----------Error in search Query----------");
            var response = {
                "message": constants.responseMessages.ACTION_NOT_COMPLETED,
                "status": constants.responseFlags.ACTION_NOT_COMPLETED,
                "data": {
                    error
                }
            };
            res.json(response);
        } else if (results.length == 0) {
            var response = {
                "message": constants.responseMessages.DATA_NOT_EXISTS,
                "status": constants.responseFlags.DATA_NOT_EXISTS,
                "data": {
                    results
                }
            };
            res.json(response);
        } else {
            var response = {
                "message": constants.responseMessages.ACTION_COMPLETE,
                "status": constants.responseFlags.ACTION_COMPLETE,
                "data": {
                    results
                }
            };
            res.json(response);
        }
    });
}

//***************search king**************//

exports.searchking = function(req, res) {
    var king = req.body.sking;
    console.log(req.body);

    connection.query('SELECT * FROM battles WHERE attacker_king = ? ', [king], function(error, results, fields) {

        if (error) {
            console.log("-----------Error in search Query----------");
            var response = {
                "message": constants.responseMessages.ACTION_NOT_COMPLETED,
                "status": constants.responseFlags.ACTION_NOT_COMPLETED,
                "data": {
                    error
                }
            };
            res.json(response);
        } else if (results.length == 0) {
            var response = {
                "message": constants.responseMessages.DATA_NOT_EXISTS,
                "status": constants.responseFlags.DATA_NOT_EXISTS,
                "data": {
                    results
                }
            };
            res.json(response);
        } else {
            var response = {
                "message": constants.responseMessages.ACTION_COMPLETE,
                "status": constants.responseFlags.ACTION_COMPLETE,
                "data": {
                    results
                }
            };
            res.json(response);
        }
    });
}

//***************search battle type**************//

exports.battletype = function(req, res) {
    var battletype = req.body.stype;
    console.log(req.body);

    connection.query('SELECT * FROM battles WHERE battle_type = ? ', [battletype], function(error, results, fields) {

        if (error) {
            console.log("-----------Error in search Query----------");
            var response = {
                "message": constants.responseMessages.ACTION_NOT_COMPLETED,
                "status": constants.responseFlags.ACTION_NOT_COMPLETED,
                "data": {
                    error
                }
            };
            res.json(response);
        } else if (results.length == 0) {
            var response = {
                "message": constants.responseMessages.DATA_NOT_EXISTS,
                "status": constants.responseFlags.DATA_NOT_EXISTS,
                "data": {
                    results
                }
            };
            res.json(response);
        } else {
            var response = {
                "message": constants.responseMessages.ACTION_COMPLETE,
                "status": constants.responseFlags.ACTION_COMPLETE,
                "data": {
                    results
                }
            };
            res.json(response);
        }
    });
}

//***************search location**************//

exports.location = function(req, res) {
    var location = req.body.slocation;
    console.log(req.body);

    connection.query('SELECT * FROM battles WHERE location = ? ', [location], function(error, results, fields) {

        if (error) {
            console.log("-----------Error in search Query----------");
            var response = {
                "message": constants.responseMessages.ACTION_NOT_COMPLETED,
                "status": constants.responseFlags.ACTION_NOT_COMPLETED,
                "data": {
                    error
                }
            };
            res.json(response);
        } else if (results.length == 0) {
            var response = {
                "message": constants.responseMessages.DATA_NOT_EXISTS,
                "status": constants.responseFlags.DATA_NOT_EXISTS,
                "data": {
                    results
                }
            };
            res.json(response);
        } else {
            var response = {
                "message": constants.responseMessages.ACTION_COMPLETE,
                "status": constants.responseFlags.ACTION_COMPLETE,
                "data": {
                    results
                }
            };
            res.json(response);
        }
    });
}

//***************search stats**************//

exports.stats = function(req, res) {

    var query1 = 'SELECT attacker_king, COUNT( attacker_king ) as count \
FROM  battles \
WHERE attacker_king IS NOT NULL \
GROUP BY attacker_king \
ORDER BY COUNT( attacker_king ) DESC';

    var query2 = 'SELECT defender_king, COUNT( defender_king ) as count \
FROM  battles \
WHERE defender_king IS NOT NULL \
GROUP BY defender_king \
ORDER BY COUNT( defender_king ) DESC';

    var query3 = 'SELECT region, COUNT( region ) as count \
FROM  battles \
WHERE region IS NOT NULL \
GROUP BY region \
ORDER BY COUNT( region ) DESC';

    var query4 = 'SELECT attacker_outcome, COUNT( attacker_outcome ) as wincount \
FROM battles \
WHERE attacker_outcome =  \'WIN\' \
GROUP BY attacker_outcome';

    var query5 = 'SELECT attacker_outcome, COUNT( attacker_outcome ) as losscount \
FROM battles \
WHERE attacker_outcome =  \'LOSS\' \
GROUP BY attacker_outcome';

    var query6 = 'SELECT battle_type \
FROM battles \
WHERE battle_type IS NOT NULL \
GROUP BY battle_type';

    var query7 = 'SELECT AVG( defender_size ) AS avg, MIN( defender_size ) AS min, MAX( defender_size ) AS max from battles';

    connection.query(query1, function(error, results1, fields) {
        connection.query(query2, function(error, results2, fields) {
            connection.query(query3, function(error, results3, fields) {
                connection.query(query4, function(error, results4, fields) {
                    connection.query(query5, function(error, results5, fields) {
                        connection.query(query6, function(error, results6, fields) {
                            connection.query(query7, function(error, results7, fields) {
                                if (error) {
                                    console.log("-----------Error in search Query----------");
                                    var response = {
                                        "message": constants.responseMessages.ACTION_NOT_COMPLETED,
                                        "status": constants.responseFlags.ACTION_NOT_COMPLETED,
                                        "data": {
                                            error
                                        }
                                    };
                                    res.json(response);
                                } else {
                                    var attacker_king = results1[0].attacker_king;
                                    var defender_king = results2[0].defender_king;
                                    var region = results3[0].region;
                                    var wincount = results4[0].wincount;
                                    var losscount = results5[0].losscount;
                                    var battlearray = [];
                                    results6.forEach(function(battle) {
                                        battlearray.push(battle.battle_type)
                                    });
                                    var avg = results7[0].avg;
                                    var min = results7[0].min;
                                    var max = results7[0].max;
                                    var response = {
                                        "message": constants.responseMessages.ACTION_COMPLETE,
                                        "status": constants.responseFlags.ACTION_COMPLETE,
                                        "data": {
                                            "most_active": {
                                                "attacker_king": attacker_king,
                                                "defender_king": defender_king,
                                                "region": region,
                                                "name": ""
                                            },
                                            "attacker_outcome": {
                                                "win": wincount,
                                                "loss": losscount
                                            },
                                            "battle_type": {
                                                battlearray
                                            },
                                            "defender_size": {
                                                "average": avg,
                                                "min": min,
                                                "max": max
                                            }

                                        }

                                    }
                                    res.json(response);
                                }
                            });
                        });
                    });
                });
            });
        });
    });
}