import axios from './axios'

export default function QRsender(aadhar, hospitalid, email) {
  const qrData = '' + aadhar + '-' + hospitalid
  const qrApi = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrData}`
  const qrhtml = `<a href="${qrApi}" download><img src="${qrApi}" alt=""/></a>`
  const subject = 'Your slot has been booked'
  const body = {
    from: 'kushalkhare.official@gmail.com',
    to: email,
    qrHtml: qrhtml,
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
