module.exports.events = function(req, res, next) {
  console.log(req.params.charityId)
  knex.raw(
    `
    SELECT
      ee.name,
      ee.start_date_hr,
      ee.end_date_hr,
      ee.teer_points,
      rr.comment
    FROM events AS ee
      INNER JOIN users AS uu ON uu.id = ee.host_user_id
      INNER JOIN charities AS cc ON cc.id = uu.charity_id
      INNER JOIN reviews AS rr ON rr.event_id = ee.id
    WHERE cc.id = ${req.params.charityId}
    ORDER BY ee.end_date_hr DESC
    `
  )
  .then(response => {
    response.rows[0].comment = [response.rows[0].comment]
    console.log(response.rows)
    for ( var i = 1; i < response.rows.length; i++ ) {
      response.rows[0].comment.push(response.rows[i].comment)
    }
    // response.rows.forEach(function(review) {
    //   if ( response.rows.comment !== review.comment) {
    //     response.rows.comment.push(review.comment)
    //   }
    // })
    res.status(200).send(response.rows[0]);
  })
  .error(function(error) {
    res.status(500).send(error);
  })
  .catch(function(error) {
    res.status(404).send(error);
  });
};
