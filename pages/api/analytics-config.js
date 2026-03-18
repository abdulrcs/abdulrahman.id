export default function handler(req, res) {
  res.status(200).json({
    trackingId: process.env.NEXT_PUBLIC_UA_CODE || '',
  })
}
