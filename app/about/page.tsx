const Biography = () => (
  <section>
    <h2>Biography</h2>
    <p>
      I am the founder and CEO of a company called{" "}
      <a href="https://kscalelabs.com">K-Scale Labs</a>. We're building the
      infrastructure for making embodied intelligence useful, affordable and
      open.
    </p>
    <p>
      Previously, I have done AI engineering and research at Tesla, Meta, Google
      and Amazon.
    </p>
  </section>
);

const Productivity = () => (
  <section>
    <h2>Productivity</h2>
    <ul>
      <li>
        <a href="https://daylio.net/">Daylio</a> - My preferred journaling app
      </li>
      <li>
        <a href="https://tailscale.com/">Tailscale</a> - Easy WireGuard mesh
        network, lets you easily SSH into different computers from anywhere
      </li>
      <li>
        MacOS Ergonomics
        <ul>
          <li>
            <a href="https://mousefix.org/">Mac Mouse Fix</a> - Lets you use
            third-party mouse buttons to control stuff. FOSS, source code is on{" "}
            <a href="https://github.com/noah-nuebling/mac-mouse-fix">Github</a>
          </li>
          <li>
            <a href="https://rectangleapp.com/">Rectangle</a> - Lets you snap to
            parts of your screen. Also FOSS, source code is on{" "}
            <a href="https://github.com/rxhanson/Rectangle">Github</a> with a
            pro version for $10
          </li>
        </ul>
      </li>
      <li>
        <a href="https://github.com/codekansas/dotfiles">Dotfiles</a> -
        Repository for all of my dotfiles
      </li>
    </ul>
  </section>
);

const Learning = () => (
  <section>
    <h2>Learning ML / Self-Driving / Robotics</h2>
    <ul>
      <li>
        <a href="https://www.cs.toronto.edu/~hinton/coursera_lectures.html">
          Geoff Hinton Coursera Course (2012)
        </a>{" "}
        - Superior in explaining concepts behind neural networks
      </li>
      <li>
        <a href="https://www.coursera.org/specializations/self-driving-cars">
          Coursera Self-Driving Specialization
        </a>{" "}
        - Useful before working at Tesla
      </li>
      <li>
        <a href="https://eurekalabs.ai/">Eureka Labs</a> - Learn machine
        learning correctly
      </li>
    </ul>
  </section>
);

const Hobbies = () => (
  <section>
    <h2>Hobbies</h2>
    <ul>
      <li>
        <a href="https://www.goodreads.com/review/list/56667319-benjamin?shelf=favorites">
          Goodreads
        </a>{" "}
        - My favorite books
      </li>
      <li>
        <a href="https://lichess.org/@/bkbolte18">Lichess</a> - My lichess
        profile
      </li>
      <li>
        <a href="https://codeforces.com/profile/codekansas">Codeforces</a> - My
        Codeforces profile
      </li>
      <li>
        <a href="https://pcpartpicker.com/user/codekansas/">PCPartPicker</a> -
        My PCPartPicker profile
      </li>
    </ul>
  </section>
);

const Media = () => (
  <section>
    <h2>Media</h2>
    <ul>
      <li>
        <a href="https://www.youtube.com/playlist?list=PLGukhZ1bCGDiwUPP0ze59FOGjZr21Aicp">
          Cool Youtube Videos
        </a>{" "}
        - A YouTube playlist of random videos I thought were cool
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=jfKfPfyJRdk">
          Lofi Work Music
        </a>
      </li>
      <li>
        <a href="https://open.spotify.com/artist/7sKOw5KIGmCldJ8wkQhGQo?si=O0LluUKzSX6gmwzeZVQAzg">
          Other Lofi Work Music
        </a>
      </li>
    </ul>
  </section>
);

const Tools = () => (
  <section>
    <h2>Tools</h2>
    <ul>
      <li>
        3D Printer
        <ul>
          <li>
            Don't use Creality, even though it is cheap you will never get back
            the hours of your life wasted priming it before every print
          </li>
          <li>
            I've had good experiences with Prusa i3 (both RepRap and MK3S+),
            Octoprint is a must
          </li>
        </ul>
      </li>
      <li>
        Power tools
        <ul>
          <li>Mitre saw, drill, sawzall, and jigsaw are from Dewalt</li>
          <li>Drill press and bench grinder are from Wen</li>
        </ul>
      </li>
      <li>
        Keyboard: At one point I was trying to force myself to use an ergonomic
        keyboard, but after a few months of using it I had a suspicion that it
        wasn't making me type any faster and was actually making me have more
        errors. So now I mainly just use an Apple keyboard. I have some numbers
        about my typing speeds for some different keyboards near the bottom of
        this page.
      </li>
      <li>
        Editor: For scripting I use Vim. My Vim setup is in my dotfiles
        repository <a href="https://github.com/codekansas/dotfiles">here</a>.
        But for most projects I currently use VSCode.
      </li>
    </ul>
  </section>
);

const Quotes = () => (
  <section>
    <h2>Quotes</h2>

    <h3>On Endurance and Willpower</h3>
    <blockquote>
      <p>
        But who can say what's best? That's why you need to grab whatever chance
        you have of happiness where you find it, and not worry about other
        people too much. My experience tells me that we get no more than two or
        three such chances in a life time, and if we let them go, we regret it
        for the rest of our lives.
      </p>
      <footer>Haruki Murakami, Norwegian Wood</footer>
    </blockquote>
    <blockquote>
      <p>Training is nothing, will is everything - the will to act.</p>
      <footer>Batman Begins</footer>
    </blockquote>
    <blockquote>
      <p>
        Consider it pure joy, my brothers and sisters, whenever you face trials
        of many kinds, because you know that the testing of your faith produces
        perseverance. Let perseverance finish its work so that you may be mature
        and complete, not lacking anything.
      </p>
      <footer>James 1:2-4</footer>
    </blockquote>
    <blockquote>
      <p>
        I must not fear. Fear is the mind-killer. Fear is the little-death that
        brings total obliteration. I will face my fear. I will permit it to pass
        over me and through me. And when it has gone past I will turn the inner
        eye to see its path. Where the fear has gone there will be nothing. Only
        I will remain.
      </p>
      <footer>Frank Herbert, Dune</footer>
    </blockquote>
    <blockquote>
      <p>
        And, when you want something, all the universe conspires in helping you
        to achieve it.
      </p>
      <footer>Paulo Coelho, The Alchemist</footer>
    </blockquote>

    <h3>On Life and Death</h3>
    <blockquote>
      <p>
        I work all day, and get half-drunk at night.
        <br />
        Waking at four to soundless dark, I stare.
        <br />
        In time the curtain-edges will grow light.
        <br />
        Till then I see what’s really always there:
        <br />
        Unresting death, a whole day nearer now,
        <br />
        Making all thought impossible but how
        <br />
        And where and when I shall myself die.
        <br />
        Arid interrogation: yet the dread
        <br />
        Of dying, and being dead,
        <br />
        Flashes afresh to hold and horrify.
      </p>
      <footer>
        Philip Larkin,{" "}
        <a href="https://www.poetryfoundation.org/poems/48422/aubade-56d229a6e2f07">
          Aubade
        </a>
      </footer>
    </blockquote>
    <blockquote>
      <p>
        In battle, in forest, at the precipice in the mountains, On the dark
        great sea, in the midst of javelins and arrows, In sleep, in confusion,
        in the depths of shame, The good deeds a man has done before defend him.
      </p>
      <footer>J. Robert Oppenheimer</footer>
    </blockquote>
    <blockquote>
      <p>
        For what is a man profited, if he shall gain the whole world, and lose
        his own soul?
      </p>
      <footer>Matthew 16:26</footer>
    </blockquote>

    <h3>On Loneliness and Choices</h3>
    <blockquote>
      <p>
        Why do people have to be this lonely? What's the point of it all?
        Millions of people in this world, all of them yearning, looking to
        others to satisfy them, yet isolating themselves. Why? Was the earth put
        here just to nourish human loneliness?
      </p>
      <footer>Haruki Murakami, Sputnik Sweetheart</footer>
    </blockquote>
    <blockquote>
      <p>
        I saw my life branching out before me like the green fig tree in the
        story. From the tip of every branch, like a fat purple fig, a wonderful
        future beckoned and winked. One fig was a husband and a happy home and
        children, and another fig was a famous poet and another fig was a
        brilliant professor, and another fig was Ee Gee, the amazing editor, and
        another fig was Europe and Africa and South America, and another fig was
        Constantin and Socrates and Attila and a pack of other lovers with queer
        names and offbeat professions, and another fig was an Olympic lady crew
        champion, and beyond and above these figs were many more figs I couldn't
        quite make out. I saw myself sitting in the crotch of this fig tree,
        starving to death, just because I couldn't make up my mind which of the
        figs I would choose. I wanted each and every one of them, but choosing
        one meant losing all the rest, and, as I sat there, unable to decide,
        the figs began to wrinkle and go black, and, one by one, they plopped to
        the ground at my feet.
      </p>
      <footer>Sylvia Plath, The Bell Jar</footer>
    </blockquote>

    <h3>On Engineering and Responsibility</h3>
    <blockquote>
      <p>
        The great liability of the engineer compared to men of other professions
        is that his works are out in the open where all can see them. His acts,
        step by step, are in hard substance. He cannot bury his mistakes in the
        grave like the doctors. He cannot argue them into thin air or blame the
        judge like the lawyers. He cannot, like the politicians, screen his
        shortcomings by blaming his opponents and hope the people will forget.
        The engineer simple cannot deny he did it. If his works do not work, he
        is damned.
      </p>
      <footer>Herbert Hoover</footer>
    </blockquote>
    <blockquote>
      <p>
        Americans love to fight. All <i>real</i> Americans love the sting and
        clash of battle. When you were kids, you all admired the champion marble
        shooter, the fastest runner, the big-league ball players and the
        toughest boxers. Americans love a winner and will not tolerate a loser.
        Americans play to win all the time.
      </p>
      <footer>George S. Patton</footer>
    </blockquote>
    <blockquote>
      <p>
        The reason the American army does so well in wartime, is that war is
        chaos, and the American army practices chaos on a daily basis.
      </p>
      <footer>A German General</footer>
    </blockquote>
    <blockquote>
      <p>
        If we don't know what we are doing, the enemy certainly can't anticipate
        our future actions!
      </p>
      <footer>U.S. Army Logistics Operations and Readiness Division</footer>
    </blockquote>
  </section>
);

export default function AboutPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">About</h1>
      <article className="prose">
        <Biography />
        <Productivity />
        <Learning />
        <Hobbies />
        <Media />
        <Tools />
        <Quotes />
      </article>
    </section>
  );
}
