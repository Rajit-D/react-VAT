// import Blog from "./component/Blog/Blog";
import Plans from "./component/Plans/Plans";
// import Cards from "./component/Plans/Cards";

function App() {

  const plans = [
    {
      planType: 'Basic',
      details: ['1 Website', 
                '50 GB SSD Storage', 
                'Unmetered Bandwidth', 
                'Free SSL Certificate', 
                '1 Included Domain', 
                '1 Included Domain'],
      cssNo: 1,
      price: '$2.95/mo*',
      icon: 'fa-paper-plane'
    },
    {
      planType: 'Plus',
      details: ["Includes Basic Package Features",
        "Unlimited Websites",
        "Unlimited SSD Storage",
        "Unlimited Domains",
        "Unlimited Parked Domains",
        "Unlimited Sub Domains"],
        cssNo: 2,
        price: '$5.45/mo*',
        icon: 'fa-plane'
    },
    {
      planType: 'Pro',
      details: ["Includes Plus Plan Features",
      "High Performance",
      "2 Spam Experts",
      "Free SSL Certificate",
      "Domain Privacy",
      "Site Backup - CodeGuard Basic"],
      cssNo: 3,
      price: '$13.95/mo',
      icon: 'fa-rocket'
    }
  ]

  return (
    <>
      <div className="container">
        <div className="row">
          {
            plans.map((type) => {
              return (<Plans type={type.planType} details={type.details} cssNo={type.cssNo} price={type.price} icon={type.icon} />)
            })
          }
        </div>
      </div>
    </>
  );
}

export default App;
