import Image from "next/image";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import NavMenu from "@/components/NavMenu";
import SeasonCountdown from "@/components/SeasonCountdown";
import { getMatches, getPlayers, getStandings } from "@/lib/team-data";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#selectie", label: "Selectie" },
  { href: "#programma", label: "Programma" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#socials", label: "Socials" }
];

export default async function HomePage() {
  const [players, matches, standings] = await Promise.all([
    getPlayers(),
    getMatches(),
    getStandings()
  ]);

  const nextMatchISO = "2026-04-11T12:30:00+02:00";

  return (
    <main>
      <header id="home" className="hero">
        <Image
          src="/assets/images/sponsor.jpg"
          alt="FC Axel team"
          fill
          priority
          className="hero-bg"
          sizes="100vw"
        />
        <div className="hero-overlay" />
        <div className="top-nav-wrap">
          <NavMenu items={navItems} />
        </div>
        <div className="hero-content">
          <p className="eyebrow">Kampioenen 2024-2025</p>
          <h1>FC Axel JO19-1</h1>
          <p>Geen woorden, maar daden. Op en naast het veld.</p>
          <a href="#selectie" className="cta-primary">
            Bekijk Selectie
          </a>
        </div>
      </header>

      <section id="selectie" className="section panel">
        <div className="section-head">
          <h2 className="glow-text">Selectie</h2>
          <p>Volledige JO19-1 selectie met statistieken.</p>
        </div>
        <div className="player-grid">
          {players.map((player) => (
            <article key={player.number} className="player-card">
              <div className="player-image-wrap">
                <Image
                  src={player.image}
                  alt={player.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  style={{ objectPosition: player.imagePosition || "center" }}
                />
              </div>
              <div className="player-content">
                <h3>
                  #{player.number} {player.name}
                </h3>
                <p>{player.position}</p>
                <dl>
                  <div>
                    <dt>Goals</dt>
                    <dd>{player.goals}</dd>
                  </div>
                  <div>
                    <dt>Assists</dt>
                    <dd>{player.assists}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="programma" className="section schedule">
        <div className="section-head">
          <h2 className="glow-text">Programma & Stand</h2>
          <p>Overzicht van komende wedstrijden en de actuele ranglijst.</p>
        </div>

        <SeasonCountdown nextMatchISO={nextMatchISO} />

        <div className="tables-wrap">
          <article className="table-card">
            <h3>Programma</h3>
            <table>
              <thead>
                <tr>
                  <th>Datum</th>
                  <th>Wedstrijd</th>
                  <th>Tijd</th>
                </tr>
              </thead>
              <tbody>
                {matches.map((match) => (
                  <tr key={`${match.date}-${match.fixture}`}>
                    <td>{match.date}</td>
                    <td>{match.fixture}</td>
                    <td>{match.kickoff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>

          <article className="table-card">
            <h3>Stand</h3>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Team</th>
                  <th>GS</th>
                  <th>PNT</th>
                </tr>
              </thead>
              <tbody>
                {standings.map((team) => (
                  <tr key={team.rank} className={team.isHighlight ? "highlight" : ""}>
                    <td>{team.rank}</td>
                    <td>{team.team}</td>
                    <td>{team.played}</td>
                    <td>{team.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>
        </div>
      </section>

      <section id="sponsors" className="section sponsors">
        <div className="section-head">
          <h2 className="glow-text">Sponsors</h2>
          <p>Bedankt voor de steun aan het team.</p>
        </div>
        <div className="sponsor-grid">
          <a href="https://www.amstelhoekje.nl/" target="_blank" rel="noreferrer">
            <Image src="/assets/images/amstelhoekje.jpg" alt="Amstelhoekje" width={480} height={240} />
          </a>
          <a href="http://nl.jasperse-transport.nl/" target="_blank" rel="noreferrer">
            <Image src="/assets/images/jasperse.jpg" alt="Jasperse" width={480} height={240} />
          </a>
        </div>
      </section>

      <section id="socials" className="section socials">
        <div className="section-head">
          <h2 className="glow-text">Volg Ons</h2>
          <p>Bekijk de goals, highlights en theezakmomentjes.</p>
        </div>
        <div className="social-links">
          <a href="https://www.instagram.com/fcaxel_o19/" target="_blank" rel="noreferrer" className="social-instagram">
            <FaInstagram size={24} />
            <span>Instagram</span>
          </a>
          <a href="https://www.tiktok.com/@fc.axel.191" target="_blank" rel="noreferrer" className="social-tiktok">
            <FaTiktok size={24} />
            <span>TikTok</span>
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-top">
            <Image src="/assets/images/fcaxellogo.png" alt="FC Axel Logo" width={90} height={90} className="footer-logo-standalone" />
            <div className="footer-brand">
              <p>FC Axel JO19-1<br/><span>Het Gezelligste Zuipteam</span></p>
            </div>
          </div>
          <div className="footer-credits">
            <p>&copy; {new Date().getFullYear()} FC Axel JO19-1. Alle rechten voorbehouden.</p>
            <a href="https://www.instagram.com/mickploegaert/" target="_blank" rel="noreferrer" className="made-by">
              Website by <span>Mick Ploegaert</span>
              <FaInstagram size={18} className="footer-insta" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
