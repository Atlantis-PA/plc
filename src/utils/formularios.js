// Envía un formulario a Netlify Forms. El formulario debe existir oculto en index.html.
export async function enviarFormulario(nombre, campos) {
  const body = new URLSearchParams({ 'form-name': nombre, ...campos });
  const res = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });
  if (!res.ok) throw new Error(`Formulario ${nombre}: ${res.status}`);
}
