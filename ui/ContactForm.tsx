'use client';

export default function ContactForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form
      className="grid grid-cols-1 gap-6 text-sm sm:gap-10 lg:grid-cols-2"
      onSubmit={(event) => handleSubmit(event)}
    >
      <div>
        <label htmlFor="name" className="hidden">
          NAME*
        </label>

        <input
          type="text"
          placeholder="NAME*"
          id="name"
          autoComplete="on"
          className="w-full border-b border-white bg-transparent py-4 text-white placeholder-white outline-none focus:border-b-2"
        />
      </div>

      <div>
        <label htmlFor="email" className="hidden">
          EMAIL*
        </label>
        <input
          type="email"
          id="email"
          autoComplete="on"
          placeholder="EMAIL*"
          className="w-full border-b border-white bg-transparent py-4 text-white placeholder-white outline-none focus:border-b-2"
        />
      </div>

      <div className="lg:col-span-2">
        <label htmlFor="budget" className="hidden">
          ESTIMATED BUDGET
        </label>
        <input
          type="text"
          id="budget"
          autoComplete="on"
          placeholder="ESTIMATED BUDGET"
          className="w-full border-b border-white bg-transparent py-4 text-white placeholder-white outline-none focus:border-b-2"
        />
      </div>

      <div>
        <label htmlFor="message" className="hidden">
          MESSAGE*
        </label>
        <textarea
          rows={4}
          id="message"
          autoComplete="off"
          placeholder="MESSAGE*"
          className="w-full border-b border-white bg-transparent py-4 text-white placeholder-white outline-none focus:border-b-2"
        ></textarea>
      </div>

      <div className="flex items-end">
        <button className="leading-2 rounded-xl bg-white px-12 py-[0.6rem] text-sm uppercase text-black transition-opacity hover:opacity-75">
          Wyślij
        </button>
      </div>
    </form>
  );
}
