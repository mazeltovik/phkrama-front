import uploadFile from '@/lib/uploadFile';
export default function UploadFile() {
  // const buyProductWithId = buyProduct.bind(null)
  return (
    <main className={''}>
      <form method="POST" action={uploadFile}>
        <div>
          <label htmlFor="file">Choose file to upload</label>
          <input type="file" id="file" name="file" accept="image/*" />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </main>
  );
}
