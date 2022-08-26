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
    const [Study_Time_button_selection, setStudy_Time_Button_Selection] = React.useState(null);
    const [Study_Sessions_button_selection, setStudy_Sessions_Button_Selection] = React.useState(null);
    const [Breaks_button_selection, setBreaks_Button_Selection] = React.useState(null);


    // Getting break data
    const data = JSON.parse(localStorage.getItem('users'));
    var one_day_ago = new Date();
    var breaks_in_past_day = 0;
    one_day_ago.setDate(one_day_ago.getDate() - 1);

    var one_week_ago = new Date();
    var breaks_in_past_week = 0;
    one_week_ago.setDate(one_week_ago.getDate() - 7);

    var one_month_ago = new Date();
    var breaks_in_past_month = 0;
    one_month_ago.setMonth(one_month_ago.getMonth() - 1);

    var one_year_ago = new Date();
    var breaks_in_past_year = 0;
    one_year_ago.setFullYear(one_year_ago.getFullYear() - 1);

    if (data != null) {
        for (var i = 0; i < data[0].breakStats.length; i++) { 
            var date = new Date(data[0].breakStats[i]);
            if (date >= one_day_ago) {
                breaks_in_past_day++;
            }
            if (date >= one_week_ago) {
                breaks_in_past_week++;
            }
            if (date >= one_month_ago) {
                breaks_in_past_month++;
            }
            if (date >= one_year_ago) {
                breaks_in_past_year++;
            }
        }
    
        // Getting total study time data
        // and number of study sessions data
        var study_time_in_past_day = 0;
        var study_time_in_past_week = 0;
        var study_time_in_past_month = 0;
        var study_time_in_past_year = 0;

        var study_sessions_in_past_day = 0;
        var study_sessions_in_past_week = 0;
        var study_sessions_in_past_month = 0;
        var study_sessions_in_past_year = 0;

        for (var i = 0; i < data[0].totalStats.length; i++) { 
            var date = new Date(data[0].totalStats[i].date);
            var time_studied = data[0].totalStats[i].timeStudied;

            if (date >= one_day_ago) {
                study_time_in_past_day += time_studied;
                study_sessions_in_past_day++;
            }
            if (date >= one_week_ago) {
                study_time_in_past_week += time_studied;
                study_sessions_in_past_week++;
            }
            if (date >= one_month_ago) {
                study_time_in_past_month += time_studied;
                study_sessions_in_past_month++;
            }
            if (date >= one_year_ago) {
                study_time_in_past_year += time_studied;
                study_sessions_in_past_year++;
            }
        }

        // Getting streak data
        var streak = 0;
        var current_day = new Date();
        current_day.setDate(current_day.getDate());
        current_day.setMonth(current_day.getMonth());
        current_day.setFullYear(current_day.getFullYear());

        while (1) {
            var studied_on_current_day = false;
            for (var i = 0; i < data[0].totalStats.length; i++) { 
                var date = new Date(data[0].totalStats[i].date);

                if (current_day.toDateString() === date.toDateString())  {
                    studied_on_current_day = true;
                }
            }
            if (studied_on_current_day == false) {
                break;
            }
            streak++;
            current_day.setDate(current_day.getDate() - 1);
        }
    }
    else {
        streak = 0;
        study_time_in_past_day = 0;
        study_time_in_past_week = 0;
        study_time_in_past_month = 0;
        study_time_in_past_year = 0;
        study_sessions_in_past_day = 0;
        study_sessions_in_past_week = 0;
        study_sessions_in_past_month = 0;
        study_sessions_in_past_year = 0;
    }

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
                               <FirstName colour={color} firstname='Sohum'/>
                               
                            </div>
                            <div class='form_element'>
                                <li> Last Name: </li>
                                <LastName colour={color} lastname='Shah'/>
                            </div>
                            <div class='form_element'>
                                <li> Username: </li>
                                <Username colour={color} username='username101' />

                            </div>
                            <div class='form_element'>
                                <li> Email address: </li>
                                <Email colour={color} email='email@address.com' />

                            </div>
                        </ul>
                    </form>
                </div>
                <div id='statistics'><h1>Personal Statistics</h1>
                    <ul id='statistics_list'>
                        <li>Total study time:</li>
                      
                            <div id='stat1'>
                                <Avg_Study_Periods type='study_time' colour={color} selection={Study_Time_button_selection} day_value = {study_time_in_past_day} week_value = {study_time_in_past_week} month_value = {study_time_in_past_month} year_value = {study_time_in_past_year}/>
                            </div>
                        
                        <HorizontalRadioButton ButtonSelection={data=>setStudy_Time_Button_Selection(data)}/>
                        <br />

                        <li>Number of study sessions completed:</li>
                            <div id='stat1'>
                                <Avg_Study_Periods type='study_sessions' colour={color} selection={Study_Sessions_button_selection} day_value = {study_sessions_in_past_day} week_value = {study_sessions_in_past_week} month_value = {study_sessions_in_past_month} year_value = {study_sessions_in_past_year}/>
                            </div>
                        <HorizontalRadioButton ButtonSelection={data=>setStudy_Sessions_Button_Selection(data)}/>
                        <br />

                        <li>Number of breaks:</li>
                        <div id='stat1'>
                                <Avg_Study_Periods type='breaks' colour={color} selection={Breaks_button_selection} day_value = {breaks_in_past_day} week_value = {breaks_in_past_week} month_value = {breaks_in_past_month} year_value = {breaks_in_past_year}/>
                            </div>
                        <HorizontalRadioButton ButtonSelection={data=>setBreaks_Button_Selection(data)}/>
                        <br />

                        <li>Streak:</li>
                        <div id='stat2'>
                            <Streak colour_test={color} streak={streak} />
                        </div>    
                    </ul>
                </div>
            </div>
            <div class='divider' />
            <div id='footer'>
                <div>
                    Colour: 
                    <input type="color" id="colour" name="colour" value={color} onChange={e => setColor(e.target.value)} />

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