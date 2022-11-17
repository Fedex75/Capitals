import './home.css'

export default function Home({theme, setTheme}){
    return (
        <div className='home'>
            <div className='home__title'>Template</div>
            <button className='home__theme-switch' onClick={() => {setTheme(t => t === 'light' ? 'dark' : 'light')}}>
                {theme === 'dark' ? 'Light theme' : 'Dark theme'}
            </button>
        </div>
    )
}