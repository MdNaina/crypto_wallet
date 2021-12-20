import { Route, Routes } from 'react-router-dom';


const Dashboard = ({setExpand}) => {
    return(
        <div className='flex p-3 text-3xl'>
            <button className='hidden focus:outline-none md:block' onClick={() => setExpand(true)}>{require(`../../assets/icons/Dashboard.jsx`).default()}</button>
            <span>Dashboard</span>
        </div>
    )
}

const Portfolio = () => {
    return(
        <div className='flex-1 p-3 text-3xl'>
          Portfolio
        </div>
    )
}

const Wallet = () => {
    return(
        <div className='flex-1 p-3 text-3xl'>
          Wallet
        </div>
    )
}

const History = () => {
    return(
        <div className='flex-1 p-3 text-3xl'>
          History
        </div>
    )
}

const Home = () => {
    return(
        <h1>Home</h1>
    )
}

const Content = ({ setExpand }) => {
    return(
        <div className='flex-1 h-screen scroll:opacity-0 overflow-y-auto'>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard setExpand={setExpand} />} />
            <Route path="/portfolio" element={<Portfolio setExpand={setExpand} />} />
            <Route path="/wallet" element={<Wallet setExpand={setExpand} />} />
            <Route path="/history" element={<History />} />
        </Routes>
        </div>
    )
}

export default Content;