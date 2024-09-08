'use client';
import uploadFile from '@/lib/uploadFile';
import { useFormStatus, useFormState } from 'react-dom';
import Image from 'next/image';


const initialState = {
  errMsg: '',
};

export default function UploadFile() {
  const [state, formAction] = useFormState(uploadFile, initialState);
  const { pending } = useFormStatus();
  return (
    <main className={''}>
      <form method="POST" action={formAction}>
        <div>
          <label htmlFor="file">Choose file to upload</label>
          <input
            type="file"
            id="file"
            name="file"
            accept="image/*"
            onChange={() => {
              console.log('change');
            }}
          />
        </div>
        <div>
          <button disabled={pending}><Image alt='Choose photo' src='/plus-solid.svg' width={20} height={20} priority/></button>
          <p aria-live="polite">{state?.errMsg}</p>
        </div>
      </form>
    </main>
  );
}
