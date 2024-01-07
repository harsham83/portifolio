import '../home/index.css'

/*
const openGoogleForm = () => {
    // Replace 'YOUR_GOOGLE_FORM_URL' with the actual URL of your Google Form
    const googleFormUrl =
      'https://docs.google.com/forms/d/e/1FAIpQLSe471OtiTwC9j4CurI1luSzCr2bBQMmnfwJ2A_PqjLdvoJ7yQ/viewform?embedded=true';
  
    // Open the Google Form in a new tab/window
    window.open(googleFormUrl, '_blank');
  };
*/
const NavBar =()=>(
    <div className='navBarContainer'>
        <div>
            <h1 className='nameNavBar'>Macharla Harsha</h1>
        </div>
        <div className='navRight'>
            <p>Home</p>
            <p>About</p>
            <p>Projects</p>
            <a className="resumeNavBar"
            target='_blank' rel="noreferrer"
            href='https://drive.google.com/file/d/1jIUR8JihsboP_SwFdrnZ6EvoQcxCros1/view?usp=drive_link' download>Resume</a>
            <a type="button" target='_blank' rel="noreferrer" className='hireME'
            href='https://docs.google.com/forms/d/e/1FAIpQLSe471OtiTwC9j4CurI1luSzCr2bBQMmnfwJ2A_PqjLdvoJ7yQ/viewform?usp=sf_link'>Hire Me</a>
            {/* <button type='button' onClick={openGoogleForm}>Hire Me</button> */}
        </div>
    </div>
)



export default NavBar