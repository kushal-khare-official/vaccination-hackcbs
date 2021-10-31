import axios from './axios'

export default function AntiFraudMail(hospitalName) {
  const hmhtml = `<p> A fraud is being conducted at a Hospital named ${hospitalName}. Please have a look and take necessary actions </p>`
  const subject = `${hospitalName} is doing fraud`
  const healthMinisterEmail = 'kushalkhare.unofficial@gmail.com'
  const websiteOwnerEmail = 'kushalkhare.official@gmail.com'
  const body = {
    from: websiteOwnerEmail,
    to: healthMinisterEmail,
    qrHtml: hmhtml,
    qrSub: subject,
  }
  axios
    .post('/mail', body)
    .then((response) => {
      console.log('Mail is sent')
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
}
