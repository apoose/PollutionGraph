
const awsLambdUrl = 'https://k4yjb0cyli.execute-api.ap-south-1.amazonaws.com/dev/'
const pollutiondata ='https://api.openaq.org/v1/measurements'
const cityData ='https://api.openaq.org/v1/cities'

export function getUserAuthentication(functionName, token) {
      //console.log(awsLambdUrl + '/eurokidsauthentication?functionName=' + functionName + '&token=' + token)
    return fetch(awsLambdUrl + '/eurokidsauthentication?functionName=' + functionName + '&token=' + token ) 
      .then((data) => data.json())
      .then((res) => res)
  }
  export function getlistingAuthentication(functionName,userRole,userId,max,offset,searchText,searchLocation) {
    //console.log(awsLambdUrl + '/eurokidsgetdetails?functionName=' + functionName + '&userRole=' + userRole + '&userId=' + userId + '&max=' + max + '&offset=' + offset + '&searchText=' + searchText + '&searchLocation=' + searchLocation)
  return fetch(awsLambdUrl + '/eurokidsgetdetails?functionName=' + functionName + '&userRole=' + userRole + '&userId=' + userId + '&max=' + max + '&offset=' + offset + '&searchText=' + searchText + '&searchLocation=' + searchLocation) 
    .then((data) => data.json())
    .then((res) => res)
}
export function getpollutiondata(city,date_from) {
  console.log(pollutiondata + '/?city=' + city+ '&date_from=' + date_from)
return fetch(pollutiondata + '/?city=' + city+ '&date_from=' + date_from) 
  .then((data) => data.json())
  .then((res) => res)
}
export function getCities() {
  return fetch(cityData) 
    .then((data) => data.json())
    .then((res) => res)
  }