import nc from 'next-connect'
import ua from 'universal-analytics'
import { session } from 'next-session'

const pageView = nc()
  .use(session())
  .get((req, res) => {
    var visitor = ua(process.env.UA_CODE, req.session.id, {
      strictCidFormat: false,
    })
    const page = req.query.page == 'home' ? '' : req.query.page
    visitor.pageview(`/${page}`).send()
    res.send(200)
  })

export default pageView
