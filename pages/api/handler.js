import { withSession } from 'next-session'

function handler(req, res) {
  if (req.session.views < 16 || !req.session.views) {
    req.session.views = req.session.views ? req.session.views + 1 : 1
    res.send(
      `In this session, you have visited this website ${req.session.views} time(s).`,
    )
  } else {
    res.send('Maximum is 16.')
  }
}
export default withSession(handler)
