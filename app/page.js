// app/page.jsx
export default function Home() {
  async function handleFormAction(formData) {
    'use server';
    const name = formData.get('name');
  }
  return (
    <form action={handleFormAction}>
      <input type="text" name="name" />
      <button type="submit">Submit!</button>
    </form>
  )
}
