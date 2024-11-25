import Automaton from "app/components/automaton";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Hello.</h1>
      <div className="my-4">My name is Ben.</div>
      <div className="my-4">
        I'm an AI researcher and engineer. Like you, I am a piece of the
        universe observing itself.
      </div>
      <div className="my-4">
        I am tremendously grateful to be alive. I have loving parents who raised
        me with thought and care, and equipped me with the mental armor to do
        what is important in the face of difficulty. I have a beautiful,
        brilliant wife who epitomizes Plato's concept of the other half, and
        makes me whole in a way that is beyond words. I am surrounded by
        brilliant, fascinating people doing amazing work with the gifts they
        possess, and who root for my success instead of against it.
      </div>
      <div className="my-4">
        I view my purpose in this life as to leave my corner of the universe
        better than I found it for the people who come after me. Like most
        people, I am not perfect, and I often struggle, change my mind, and make
        mistakes, but I believe that I have something important to contribute to
        the world, and I have a high enough tolerance for discomfort to manifest
        it.
      </div>
      <div className="my-4">
        I like talking to interesting people. If you want to chat, you can find
        some time on my calendar{" "}
        <a
          href="https://calendly.com/kscale"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "underline" }}
        >
          here
        </a>
        , or send me an email{" "}
        <a href="mailto:ben@bolte.cc" style={{ textDecoration: "underline" }}>
          here
        </a>
        .
      </div>
      <div className="flex justify-center mt-8">
        <Automaton />
      </div>
    </section>
  );
}
