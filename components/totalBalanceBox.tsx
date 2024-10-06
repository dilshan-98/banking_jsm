// import { formatAmount } from "@/lib/utils";
import AnimatedCounter from "./AnimatedCounter";

const TotalBalanceBox = ({ accounts = [], totalBanks, totalCurrentBalance }: TotlaBalanceBoxProps)=> {
    return (
        <section className="total-balance">
          <div className="total-balance-chart">
            {/* Doughnut chart */}
          </div>
    
          <div className="flex flex-col gap-6">
            <h2 className="header-2">
              Bank Accounts: {totalBanks}
            </h2>
            <div className="flex flex-col gap-2">
              <p className="total-balance-label">
                Total Current Balance
              </p>
    
              <div className="total-balance-amount flex-center gap-2">
                {/* {formatAmount(totalCurrentBalance)} //don't need this since we have the "AnimatedCounter" component */}
                {/* <CountUp end={amount} />  //we can't directly use this here since this is not a client component. So, we need to either convert this server component ("TotalBalanceBox") to a client component or have a separate client conponent("AnimatedCounter")*/}
                <AnimatedCounter 
                  amount={totalCurrentBalance}
                />
              </div>
            </div>
          </div>
        </section>
      )
}

export default TotalBalanceBox;