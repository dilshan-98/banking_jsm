import HeaderBox from "@/components/headerBox";
import TotalBalanceBox from "@/components/totalBalanceBox";

const Home = () => {
    const loggedIn = { firstName: "User" }
    return (
        <section>
            <div className="home">
                <div className="home-content">
                    <header className="home-header">
                        <HeaderBox
                            type="greeting"
                            title="Welcome"
                            user={loggedIn?.firstName || "Guest"}
                            subtext="Access and manage your account and transactions efficiently."
                        />
                        <TotalBalanceBox 
                            accounts={[]}
                            totalBanks={1}
                            totalCurrentBalance={1234.56}
                        />
                    </header>
                </div>
            </div>
        </section>
    )
}

export default Home;