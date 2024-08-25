export default async function uploadFile(formData: FormData) {
    'use server'
    console.log(formData);
    let response = await fetch('http://localhost:8080/upload', {
        method: 'POST',
        body: formData
      });
      console.log(response);
    if(response.ok){
        let json = await response.json();
        console.log(json);
    }
}