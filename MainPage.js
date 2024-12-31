





import ActivityChart from "./ActivityChart";
import Header from "./Header";
import ProgressChart from "./ProgressChart";
import Sidebar from "./Sidebar";
import StatsGrid from "./StatsGrid";
import UserProfile from "./UserProfile";
import Gym1 from "../Assets/Gym1.webp";
import Gym2 from "../Assets/Gym2.webp";
import salad from "../Assets/Salad.webp";
import blueberry from "../Assets/blueberry.webp";
import './MainPage.css';


const MainPage = () => {
  return (
    <div className="main-container">
      <div className="main-content">
        <div className="sidebar-container">
          <Sidebar />
        </div>

        <div className="main-section">
          <Header />
          <div className="stats-grid-container">
            <StatsGrid />
          </div>
          <div className="charts-container">
            <div className="chart-box">
              <ActivityChart />
            </div>
            <div className="chart-box">
              <ProgressChart />
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '10px',
            }}
          >
            {[Gym1, Gym2].map((img, idx) => (
              <div
                key={idx}
                style={{
                  width: '350px',
                  height: '300px',
                  minWidth: '200px',
                  padding: '15px',
                  borderRadius: '10px',
                  backgroundColor: '#fff',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
              >

                <div style={{ maxWidth: "20rem", marginLeft: "auto", marginRight: "auto", borderRadius: "0.75rem", overflow: "hidden" }}>
                  <div>
                    <img
                      style={{ width: '100%', height: '8rem', objectFit: 'cover', }}
                      src={img}
                      alt="Profile background"
                    />
                  </div>
                  <div style={{ padding: '1rem' }}>
                    <h3 style={{ fontWeight: '600', fontSize: '1.125rem' }}>Cameron Williamson</h3>
                    <p style={{ color: '#6b7280',textAlign:'left' }}>Fitness Specialist</p>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', marginRight: '1rem' }}>
                        <span style={{ color: '#f59e0b', fontSize: '1.25rem' }}>🏅</span>
                        <span style={{ marginLeft: '0.5rem', fontSize: '1.125rem', fontWeight: '600' }}>25</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ color: '#f59e0b', fontSize: '1.25rem' }}>⭐</span>
                        <span style={{ marginLeft: '0.5rem', fontSize: '1.125rem', fontWeight: '600' }}>104</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            ))}
            <div>
              <div
                style={{

                  minWidth: '200px',
                  height: '300px',
                  padding: '15px',
                  borderRadius: '10px',
                  backgroundColor: '#fff',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
              >

                <div className="food-card">
                  <div className="food-card-header">
                    <span className="meal-title">Breakfast</span>
                    <span className="meal-time">10:00 am</span>
                  </div>
                  <div className="food-card-content">
                    {[salad, blueberry].map((foodImg, idx) => (
                      <div key={idx} className="food-item">
                        <img className="food-image" src={foodImg} alt="Food item" />
                        <div className="food-details">
                          <h3 className="food-name">Avocado salad</h3>
                          <div className="food-nutrients">
                            <span className="nutrient">• 8% carbs</span>
                            <span className="nutrient">• 16% protein</span>
                            <span className="nutrient">• 6% Fat</span>
                          </div>
                          <div className="nutrient-bars">
                            <div className="carbs-bar"></div>
                            <div className="protein-bar"></div>
                            <div className="fat-bar"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="user-profile-container">
          <UserProfile />
        </div>
      </div>
    </div >
  );
};

export default MainPage;






