import ua from 'universal-analytics'
import { withSession } from 'next-session'

function test(req, res) {
  var visitor = ua(process.env.UA_CODE, req.session.id, {
    strictCidFormat: false,
  })
  visitor.event('click', req.query.event).send()
  res.send(200)
}

export default withSession(test)
