import React from 'react';
import Header from "./Header/Header"
import './ProfilePage.css';
import pfp from './Header/profile.svg'
import ToggleButton from './ToggleButton'
import HorizontalRadioButton  from './HorizontalRadioButton';
import ColourPick from './colourPick'
import Streak from './Streak'
import FirstName from './FirstName'
import LastName from './LastName'
import Username from './Username'
import Email from './Email'
import Avg_Study_Periods from './Study_Periods'

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

    const [color, setColor] = React.useState(null);
    const [avg_button_selection, setAvg_Button_Selection] = React.useState(null);
    const [total_button_selection, setTotal_Button_Selection] = React.useState(null);

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
                               {/* <text> Sohum </text> */}
                               <FirstName colour={color} firstname='Sohum'/>
                               
                            </div>
                            <div class='form_element'>
                                <li> Last Name: </li>
                                {/* <input type="text" name="last_name" /> */}
                                {/* <text> Shah </text> */}
                                <LastName colour={color} lastname='Shah'/>
                            </div>
                            <div class='form_element'>
                                <li> Username: </li>
                                {/* <input type="text" name="username" /> */}
                                {/* <text> username101 </text> */}
                                <Username colour={color} username='username101' />

                            </div>
                            <div class='form_element'>
                                <li> Email address: </li>
                                {/* <input type="text" name="email_address" /> */}
                                {/* <text> email@address.com </text> */}
                                <Email colour={color} email='email@address.com' />

                            </div>
                        </ul>
                    </form>
                </div>
                <div id='statistics'><h1>Personal Statistics</h1>
                    <ul id='statistics_list'>
                        <li>Average number of study periods completed per day:</li>
                      
                            {/* <h2 id='stat1'>23</h2> */}
                            <div id='stat1'>
                                <Avg_Study_Periods colour={color} selection={avg_button_selection} day_value = '14' week_value = '23' month_value = '34' year_value = '48'/>
                            </div>
                        
                        <HorizontalRadioButton ButtonSelection={data=>setAvg_Button_Selection(data)}/>
                        <br />
                        <li>Total number of study periods completed:</li>
                        {/* <h2 id='stat1'>95</h2> */}
                        <div id='stat1'>
                                <Avg_Study_Periods colour={color} selection={total_button_selection} day_value = '13' week_value = '22' month_value = '33' year_value = '47'/>
                            </div>
                        <HorizontalRadioButton ButtonSelection={data=>setTotal_Button_Selection(data)}/>
                        
                        <br />
                        <li>Streak:</li>
                        {/* <h2 id='stat2'>11 days</h2>
                        <h2 id='stat2' style={{ color: {color} }}>11 days</h2> 
                                      ^^^^ doesnt work : (               */}
                        <div id='stat2'>
                            <Streak colour_test={color} streak={'11'} />
                        </div>    
                        
                    </ul>
                </div>
            </div>
            <div class='divider' />
            <div id='footer'>
                <div>
                    Colour: 
                    {/* <ColourPick/> */}
                    <input type="color" id="colour" name="colour" value={color} onChange={e => setColor(e.target.value)} />
                    {/* <input type="color" id="colour" name="colour" /> */}

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