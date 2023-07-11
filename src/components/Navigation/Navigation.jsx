
import styles from './Navigation.module.css'
const Navigation = () => {
  console.log(styles); 
  return (
    <nav className={`${styles.navigation} container`}>
        <div className="logo">
            <img src="/images/logo.png " alt="rts code" style={{width:'70px',hieght:'50px'}}/>
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navigation;