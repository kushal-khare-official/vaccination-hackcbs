import axios from './axios'

export default function ApprovalMail(type, manufObject) {
  const manfhtml = `<p> Congratulation you have been approved.Please encode your vaccine acoording to this code</p>`
  const otherhtml = `<p> Congrulation you have been approved <p>`
  const subject = 'Approval'
  const healthMinisterEmail = 'kushalkhare.unofficial@gmail.com'
  const body = {
    from: healthMinisterEmail,
    to: manufObject.email,
    qrHtml: type === 'Manufacturer' ? manfhtml : otherhtml,
    qrSub: subject,
  }
  axios
    .post('/mail', body)
    .then(async (response) => {
      console.log('Mail is sent')
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
}
