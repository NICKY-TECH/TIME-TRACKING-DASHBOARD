import "../styles/destination.css";
import { avatar} from "../../index";
import Cards from './../components/Card';

function Dashboard() {
  return (
    <main>
      <aside>
        <section>
          <div className="avatar">
            <img src={avatar} alt="user-profile-image" className="" />
          </div>
          <div className="sub-text">
            <p className="first-card-text">Report for</p>
            <h1 className="second-card-text">
              Jeremy
              <br /> Robson
            </h1>
          </div>
        </section>
        <ul className="link">
          <li>
            <a href="">Daily</a>
          </li>
          <li>
            <a href="">Weekly</a>
          </li>
          <li>
            <a>Monthly</a>
          </li>
        </ul>
      </aside>
      <article>
        <div className="top-section">
        <Cards/>
        <Cards/>
        <Cards/>
        </div>
        <div className="bottom-section">
      <Cards/>
      <Cards/>
      <Cards/>
        </div>
      </article>
    </main>
  );
}

export default Dashboard;
