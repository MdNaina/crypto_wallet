import { Link } from 'react-router-dom'

const Sidebar = ({ expand, setExpand }) => {
    const Logo = () => {
        return <span className="text-8xl text-green-600 mx-auto px-auto py-4 mt-4"></span>
    }
    const Menus = () => {
        return (
            <div className="flex flex-col text-2xl text-emerald-100">
                <Menu name="Dashboard" />
                <Menu name="Portfolio" />
                <Menu name="Wallet" />
                <Menu name="History" />
            </div>
        )
    }
    const Menu = ({ name }) => {
        return(
            <Link to={name.toLowerCase()} onClick={() =>setExpand(false)}>
                <div className='flex items-center p-1.5 my-1 hover:bg-green-300 rounded text-xl text-green-100'>
                    {require(`../../assets/icons/${name}.jsx`).default()}
                    <span className=''>{name}</span>
                </div>
            </Link>
        )
    }
    
    return(
        <div className={`sidebar md:sidebar-mobile ${expand ? '' : 'md:-translate-x-full'}`}>
            <Logo />
            <Menus expand />
        </div>
    )
}








export default Sidebar;