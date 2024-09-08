'use server';

const ACCEPTED_FILE_TYPES = ['image/jpeg'];

export default async function uploadFile(prevState: any, formData: FormData) {
  const file = formData.get('file');
  if (file instanceof File) {
    if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
      return { errMsg: 'Please choose a valid photo format' };
    } else {
      let response = await fetch('http://localhost:8080/upload', {
        method: 'POST',
        body: formData,
      });
      console.log(response);
      if (response.ok) {
        let json = await response.json();
        console.log(json);
      }
    }
  }
}
