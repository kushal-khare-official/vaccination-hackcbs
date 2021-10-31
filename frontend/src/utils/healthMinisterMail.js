import axios from './axios'

export default function HealthMinisterMail(type, manufObject) {
  const hmhtml = `<p> A ${type} named ${manufObject.name} having license Number ${manufObject.license} has filled the form. Please check the details.
    The details of manufacture is <br> Email: ${manufObject.email}<br> </p>`
  const subject = 'A manufacturer to be approved'
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
