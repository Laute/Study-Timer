import React from 'react';
import Header from "./Header/Header"
import './ProfilePage.css';
import pfp from './Header/profile.svg'
import ToggleButton from './ToggleButton'
import HorizontalRadioButton  from './HorizontalRadioButton';


function ProfilePage() {
    // const [userDetails, setUserDetails] = useState({});
    // {
    //  token: str,
    //  first_name: str,
    //  streak: int
    //
    //
    //
    // }

    return (
        <div className='profile'>
            <div><Header /></div>
            <div id='search_user'>
                <h1> Search User: </h1>
                <form>
                    <input type="text" name="user_search" />
                </form>
            </div>
            <div class='divider' />
            <div id='profile_and_statistics'>
                <div id='profile_section'><h1 id='profile_section_heading'>Profile</h1>
                    <div> <img id="pfp" src={pfp} /> </div>
                    <form>
                        <ul id='profile_section_list'>
                            <div class='form_element'>
                                <li> First Name: </li>
                            
                               {/* <input type="text" name="first_name" /> */}
                               <text> Sohum </text>
                            </div>
                            <div class='form_element'>
                                <li> Last Name: </li>
                                {/* <input type="text" name="last_name" /> */}
                                <text> Shah </text>
                            </div>
                            <div class='form_element'>
                                <li> Username: </li>
                                {/* <input type="text" name="username" /> */}
                                <text> username101 </text>
                            </div>
                            <div class='form_element'>
                                <li> Email address: </li>
                                {/* <input type="text" name="email_address" /> */}
                                <text> email@address.com </text>
                            </div>
                        </ul>
                    </form>
                </div>
                <div id='statistics'><h1>Personal Statistics</h1>
                    <ul id='statistics_list'>
                        <li>Average number of study periods completed per day:</li>
                        <h2 id='stat1'>23</h2>
                        <HorizontalRadioButton />
                        <br />
                        <li>Total number of study periods completed:</li>
                        <h2 id='stat1'>95</h2>
                        <HorizontalRadioButton />
                        
                        <br />
                        <li>Streak:</li>
                        <h2 id='stat2'>11 days</h2>
                        


                    </ul>
                </div>
            </div>
            <div class='divider' />
            <div id='footer'>
                <div>
                    Colour: 
                    <input type="color" id="colour" name="colour" />

                </div>
                <div id='public'> 
                    Public: 
                    <div id='button'>
                        <ToggleButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;