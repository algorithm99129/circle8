import { Icon } from "./Icon";
import { QrPattern } from "./QrPattern";

function Phone({ children }: { children: React.ReactNode }) {
  return (
    <div className="phone">
      <div className="screen">{children}</div>
    </div>
  );
}

function TabBar() {
  return (
    <div className="tabbar"><b>Home</b><span>Deals</span><span>Circle</span><span>Directory</span></div>
  );
}

export function Week() {
  return (
    <section id="week">
      <div className="section-head" data-reveal>
        <div className="eyebrow">A week with Circle8</div>
        <h2>Example: Bella&apos;s Bakery and FitZone Gym, 300 m apart.</h2>
        <p>Three screens, one week. The first and last are the owner&apos;s phone. The middle one is a customer&apos;s.</p>
      </div>

      <div className="week">
        {/* Monday: the owner's proposal */}
        <div className="day" data-reveal>
          <div className="label">Monday · owner</div>
          <Phone>
            <div className="status"><span>9:41</span><span>●●●</span></div>
            <div className="kicker">This week&apos;s match</div>
            <div className="card">
              <div className="pair">
                <div className="avatar"><Icon name="bakery" /></div>
                <div className="link" />
                <div className="avatar"><Icon name="gym" /></div>
              </div>
              <div className="title">FitZone Gym · 300 m</div>
              <div>
                FitZone members get a <b>free coffee</b> at Bella&apos;s.<br />
                Bella&apos;s customers get a <b>free week</b> at FitZone.
              </div>
              <div className="sbtn pulse">Accept</div>
              <div className="sbtn ghost">Change offer</div>
              <div className="tiny">Both must accept by Tuesday 12:00</div>
            </div>
            <TabBar />
          </Phone>
          <p className="caption">The app proposes the deal. Both owners tap <b>Accept</b>. Nothing to negotiate, nothing to design.</p>
        </div>

        {/* Tuesday to Sunday: the card at the till, then the customer's claim card */}
        <div className="day" data-reveal style={{ "--d": "120ms" } as React.CSSProperties}>
          <div className="label">Tuesday to Sunday · customer</div>
          <div className="till">
            <div className="counter-card" aria-label="The counter card that sits at the till">
              <div className="cc-text">
                <b>Thank you.</b> Pick a gift from a neighbour.
                <span>This week: a free week at FitZone Gym</span>
              </div>
              <QrPattern className="cc-qr" />
            </div>
            <div className="till-caption">This card sits at Bella&apos;s till. The customer scans it…</div>
            <div className="scan-arrow" aria-hidden="true">↓</div>
          </div>
          <Phone>
            <div className="status"><span>12:07</span><span>●●●</span></div>
            <div className="kicker">A gift from Bella&apos;s Bakery</div>
            <div className="ticket">
              <div className="title">One free week at FitZone Gym</div>
              <div className="qrwrap"><QrPattern className="qr" /></div>
              <div className="code">BX4K-7Q2</div>
              <div className="tiny">Show this at the desk · valid until 16 Oct</div>
            </div>
            <div className="card">
              <div className="rows">
                <div className="row"><span>FitZone Gym</span><span>12 Oak Street</span></div>
                <div className="row"><span>Open today</span><span>6:00–22:00</span></div>
              </div>
              <div className="sbtn ghost">Open in Maps</div>
            </div>
          </Phone>
          <p className="caption">…gets a code by text message, and shows it at FitZone within 30 days. Customers need no app and no account.</p>
        </div>

        {/* Friday: the owner's number */}
        <div className="day" data-reveal style={{ "--d": "240ms" } as React.CSSProperties}>
          <div className="label">Friday · owner</div>
          <Phone>
            <div className="status"><span>17:00</span><span>●●●</span></div>
            <div className="kicker">This week</div>
            <div className="big" data-count="9">9</div>
            <div>new customers from partners</div>
            <div className="rows">
              <div className="row"><span>FitZone Gym</span><b data-count="6">6</b></div>
              <div className="row"><span>Zen Yoga</span><b data-count="3">3</b></div>
            </div>
            <div className="balance"><span>You sent 11</span><span>2 ahead</span></div>
            <div className="card">
              <div className="kicker">From your host</div>
              <div>Your Tuesday offer converts twice as well as Saturday&apos;s. Keep it on Tuesdays.</div>
            </div>
            <div className="sbtn ghost">Share result</div>
            <TabBar />
          </Phone>
          <p className="caption">Every code is counted. Bella received 9 and sent 11, so she&apos;s 2 ahead: she pays nothing, and the extra 2 earn her credit.</p>
        </div>
      </div>

      <div className="gifts-band" data-reveal>
        <Icon name="gift" className="gift-bounce" />
        <p>
          <b>Gifts, not discounts.</b> You give something that costs you little (a coffee, an empty class spot, a quiet Tuesday
          chair) and receive customers who already trust your neighbour. Nobody cuts their prices.
        </p>
      </div>
    </section>
  );
}
