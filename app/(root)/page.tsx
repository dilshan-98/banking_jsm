import HeaderBox from "@/components/headerBox";

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
                    </header>
                </div>
            </div>
        </section>
    )
}

export default Home;