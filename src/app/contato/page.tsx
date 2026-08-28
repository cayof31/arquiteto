export default function ContatoPage() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-serif">Contato</h2>
      <p className="mt-4 text-zinc-700 max-w-prose">Para consultas, envie um e-mail: contato@studiovertice.exemplo</p>

      <form className="mt-8 max-w-lg">
        <label className="block">
          <span className="text-sm">Nome</span>
          <input className="mt-1 block w-full border px-3 py-2" />
        </label>
        <label className="block mt-4">
          <span className="text-sm">Mensagem</span>
          <textarea className="mt-1 block w-full border px-3 py-2 h-40" />
        </label>
        <button type="submit" className="mt-4 px-6 py-3 bg-black text-white">Enviar</button>
      </form>
    </section>
  );
}
