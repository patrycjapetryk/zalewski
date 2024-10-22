'use client';

export default function ContactForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form
      className="flex flex-col gap-6 text-sm sm:gap-8"
      onSubmit={(event) => handleSubmit(event)}
    >
      <div className="md:max-w-[60%]">
        <label htmlFor="name" className="hidden">
          IMIĘ*
        </label>

        <input
          type="text"
          placeholder="IMIĘ*"
          id="name"
          autoComplete="on"
          className="w-full rounded-2xl border-0 bg-white px-4 py-3 text-black placeholder-black outline-none"
        />
      </div>

      <div className="md:max-w-[60%]">
        <label htmlFor="email" className="hidden">
          EMAIL*
        </label>
        <input
          type="email"
          id="email"
          autoComplete="on"
          placeholder="EMAIL*"
          className="w-full rounded-2xl border-0 bg-white px-4 py-3 text-black placeholder-black outline-none"
        />
      </div>

      <div>
        <label htmlFor="message" className="hidden">
          WIADOMOŚĆ*
        </label>
        <textarea
          rows={5}
          id="message"
          autoComplete="off"
          placeholder="WIADOMOŚĆ*"
          className="w-full rounded-2xl border-0 bg-white px-4 py-3 text-black placeholder-black outline-none"
        ></textarea>
      </div>

      <div className="flex w-full justify-end">
        <button className="leading-2 rounded-xl bg-white px-12 py-[0.6rem] text-sm uppercase text-black transition-opacity hover:opacity-75 lg:px-16 lg:py-[0.7rem]">
          Wyślij
        </button>
      </div>
    </form>
  );
}
